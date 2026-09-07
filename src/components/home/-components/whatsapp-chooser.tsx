/* oxlint-disable react/immutability -- Solid component: the plain lets below
   hold non-reactive UI state (focus restore, exit-fallback timeout id)
   mutated inside event handlers; this rule targets React and does not apply. */
import { Link } from "@tanstack/solid-router";
import {
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
  type JSX,
} from "solid-js";

import { contact, whatsappUrlFor } from "./data";
import { WhatsAppIcon } from "./icons/whatsapp-icon";

/** Large green WhatsApp CTA style shared by the header drawer footer and
    the page footer. */
export const WHATSAPP_CTA_BLOCK_CLASS =
  "inline-flex items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-xs hover:bg-[#278e53] transition-[background-color,scale] duration-160 ease-out active:scale-97 [&>svg]:size-5 [&>svg]:fill-current";

interface WhatsAppChooserDialogProps {
  /** Called with the dialog element on mount so the parent can manage
      focus and outside-click closing. */
  onPanelMount?: (panel: HTMLDialogElement) => void;
  /** Positioning + width classes for the dialog (e.g. anchored above or
      below the trigger). Base styles are intentionally position-free. */
  class?: string;
  /** Called after a channel link is clicked (e.g. to close the chooser). */
  onNavigate?: () => void;
  /** When true, plays the exit animation instead of the entrance. */
  closing?: boolean;
  /** Called when the exit animation finishes (only fires while closing). */
  onExitAnimationEnd?: () => void;
}

/**
 * Non-modal chooser dialog listing every WhatsApp channel from
 * `contact.whatsapps` as wa.me links.
 */
export function WhatsAppChooserDialog(props: WhatsAppChooserDialogProps) {
  return (
    <dialog
      ref={(el) => props.onPanelMount?.(el)}
      open
      aria-label="Elige un canal de WhatsApp"
      onAnimationEnd={() => {
        if (props.closing) props.onExitAnimationEnd?.();
      }}
      class={`${props.closing ? "animate-popup-out" : "animate-popup-in"} overflow-hidden rounded-xl border border-mm-line bg-white p-0 shadow-[0_1.25rem_2.5rem_-1rem_rgb(20_48_79/35%)] motion-reduce:animate-none ${props.class ?? ""}`}
    >
      <p class="border-b border-mm-line px-4 py-2.5 text-[0.6875rem] font-extrabold tracking-[0.12em] text-mm-muted uppercase">
        Escríbenos por
      </p>
      <For each={contact.whatsapps}>
        {(whatsapp) => (
          <Link
            class="flex items-center gap-3 px-4 py-3 text-[0.8125rem] font-bold text-mm-navy-ink no-underline transition-[background-color] duration-160 ease-out hover:bg-mm-sky-soft [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:fill-mm-green"
            to={whatsappUrlFor(whatsapp.number)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={whatsapp.label}
            onClick={() => props.onNavigate?.()}
          >
            <WhatsAppIcon />
            {whatsapp.label}
          </Link>
        )}
      </For>
    </dialog>
  );
}

interface WhatsAppCtaProps {
  /** Classes for the single-number link and the chooser trigger button. */
  class?: string;
  /** Trigger/link content (icon, label, etc.). */
  children: JSX.Element;
  /** Accessible name for the single-number link when it has no visible text. */
  linkAriaLabel?: string;
  /** Accessible name for the chooser trigger button when it has no visible text. */
  triggerAriaLabel?: string;
  /** Positioning + width classes for the chooser popup. */
  popupClass?: string;
  /** Notified whenever the chooser toggles (true on open, false on close). */
  onOpenChange?: (open: boolean) => void;
}

/**
 * WhatsApp CTA that adapts to the number of channels: with a single
 * entry in `contact.whatsapps` it renders a direct wa.me link; with
 * several it renders a trigger that toggles the chooser popup. Outside
 * click, Escape (restoring focus to the trigger) and channel selection
 * all close the popup.
 */
export function WhatsAppCta(props: WhatsAppCtaProps) {
  const [isOpen, setIsOpen] = createSignal(false);
  const [isClosing, setIsClosing] = createSignal(false);
  const [trigger, setTrigger] = createSignal<HTMLButtonElement>();
  const [panel, setPanel] = createSignal<HTMLDialogElement>();
  let restoreFocusOnExit = false;
  let exitFallbackId: number | undefined;

  const finishClose = () => {
    window.clearTimeout(exitFallbackId);
    exitFallbackId = undefined;
    setIsClosing(false);
    setIsOpen(false);
    props.onOpenChange?.(false);
    if (restoreFocusOnExit) trigger()?.focus();
    restoreFocusOnExit = false;
  };

  const close = (options?: { restoreFocus?: boolean }) => {
    if (!isOpen() || isClosing()) return;
    restoreFocusOnExit = options?.restoreFocus ?? false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // motion-reduce:animate-none means no animationend — close directly.
      finishClose();
      return;
    }
    setIsClosing(true);
    // Safety net: if `animationend` never fires (e.g. the tab is hidden),
    // close anyway just after the 150ms animation window.
    exitFallbackId = window.setTimeout(finishClose, 250);
  };

  const open = () => {
    window.clearTimeout(exitFallbackId);
    exitFallbackId = undefined;
    restoreFocusOnExit = false;
    setIsClosing(false);
    setIsOpen(true);
    props.onOpenChange?.(true);
    // Wait for the panel to mount, then move focus to its first link.
    queueMicrotask(() => panel()?.querySelector("a")?.focus());
  };

  onMount(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!isOpen()) return;
      const target = event.target as Node;
      if (!trigger()?.contains(target) && !panel()?.contains(target)) {
        close();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close({ restoreFocus: true });
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    onCleanup(() => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    });
  });

  return (
    <Show
      when={contact.whatsapps.length > 1}
      fallback={
        <Link
          class={props.class}
          to={whatsappUrlFor(contact.whatsapps[0].number)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={props.linkAriaLabel}
        >
          {props.children}
        </Link>
      }
    >
      <div class="relative">
        <Show when={isOpen()}>
          <WhatsAppChooserDialog
            onPanelMount={setPanel}
            class={props.popupClass}
            onNavigate={() => close()}
            closing={isClosing()}
            onExitAnimationEnd={finishClose}
          />
        </Show>
        <button
          ref={setTrigger}
          type="button"
          class={`${props.class} cursor-pointer`}
          aria-label={props.triggerAriaLabel}
          aria-haspopup="dialog"
          aria-expanded={isOpen() && !isClosing()}
          onClick={() => (isOpen() ? close() : open())}
        >
          {props.children}
        </button>
      </div>
    </Show>
  );
}
