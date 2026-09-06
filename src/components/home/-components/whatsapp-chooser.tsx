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

interface WhatsAppChooserDialogProps {
  /** Called with the dialog element on mount so the parent can manage
      focus and outside-click closing. */
  onPanelMount?: (panel: HTMLDialogElement) => void;
  /** Positioning + width classes for the dialog (e.g. anchored above or
      below the trigger). Base styles are intentionally position-free. */
  class?: string;
  /** Called after a channel link is clicked (e.g. to close the chooser). */
  onNavigate?: () => void;
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
      class={`overflow-hidden rounded-xl border border-mm-line bg-white p-0 shadow-[0_1.25rem_2.5rem_-1rem_rgb(20_48_79/35%)] ${props.class ?? ""}`}
    >
      <p class="border-b border-mm-line px-4 py-2.5 text-[0.6875rem] font-extrabold tracking-[0.12em] text-mm-muted uppercase">
        Escríbenos por
      </p>
      <For each={contact.whatsapps}>
        {(whatsapp) => (
          <Link
            class="flex items-center gap-3 px-4 py-3 text-[0.8125rem] font-bold text-mm-navy-ink no-underline hover:bg-mm-sky-soft [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:fill-mm-green"
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
  const [trigger, setTrigger] = createSignal<HTMLButtonElement>();
  const [panel, setPanel] = createSignal<HTMLDialogElement>();

  const close = (options?: { restoreFocus?: boolean }) => {
    setIsOpen(false);
    if (options?.restoreFocus) trigger()?.focus();
  };

  const open = () => {
    setIsOpen(true);
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
          />
        </Show>
        <button
          ref={setTrigger}
          type="button"
          class={`${props.class} cursor-pointer`}
          aria-label={props.triggerAriaLabel}
          aria-haspopup="dialog"
          aria-expanded={isOpen()}
          onClick={() => (isOpen() ? close() : open())}
        >
          {props.children}
        </button>
      </div>
    </Show>
  );
}
