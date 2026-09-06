import {
  createEffect,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerLabel,
  DrawerTrigger,
} from "@/components/drawer";
import { LogoMyM } from "@/components/icons/logo-mym";

import { ContactChannels } from "./contact-channels";
import {
  ariaLabels,
  contact,
  navigation,
  whatsappUrl,
  whatsappUrlFor,
} from "./data";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { WhatsAppCta } from "./whatsapp-chooser";

const DRAWER_CTA_CLASS =
  "inline-flex items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-xs hover:bg-[#278e53] [&>svg]:size-5 [&>svg]:fill-current";

const NAVY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-full bg-mm-navy px-4.5 py-2.5 text-xs font-bold text-white no-underline hover:bg-mm-navy-ink lg:px-[1.35rem] lg:py-3 lg:text-[0.8125rem]";

/**
 * Drawer WhatsApp CTA. With a single channel it links straight to
 * WhatsApp; with several it toggles an inline chooser listing every
 * channel from `contact.whatsapps`. Must render inside `DrawerContent`
 * so it can read the drawer context and reset on close.
 */
function WhatsAppDrawerCta(props: { class?: string }) {
  const drawer = Drawer.useContext();
  const [isChooserOpen, setIsChooserOpen] = createSignal(false);

  // Reset the chooser whenever the drawer fully closes.
  createEffect(() => {
    if (drawer.openPercentage() === 0) setIsChooserOpen(false);
  });

  return (
    <div class="flex flex-col">
      <button
        type="button"
        class={`${props.class} cursor-pointer`}
        aria-haspopup="dialog"
        aria-expanded={isChooserOpen()}
        onClick={() => setIsChooserOpen(!isChooserOpen())}
      >
        <WhatsAppIcon />
        Contáctanos por WhatsApp
      </button>
      <Show when={isChooserOpen()}>
        {/* Non-modal dialog: implicit `dialog` role; `static` + `m-0` reset
            the UA absolute-positioning styles so it flows in the drawer. */}
        <dialog
          open
          aria-label="Elige un canal de WhatsApp"
          class="static m-0 mt-3 w-auto overflow-hidden rounded-xl border border-mm-line bg-white p-0"
        >
          <p class="border-b border-mm-line px-4 py-2.5 text-[0.6875rem] font-extrabold tracking-[0.12em] text-mm-muted uppercase">
            Escríbenos por
          </p>
          <For each={contact.whatsapps}>
            {(whatsapp) => (
              <DrawerClose
                as="a"
                href={whatsappUrlFor(whatsapp.number)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={whatsapp.label}
                class="flex items-center gap-3 px-4 py-3 text-[0.8125rem] font-bold text-mm-navy-ink no-underline hover:bg-mm-sky-soft [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:fill-mm-green"
              >
                <WhatsAppIcon />
                {whatsapp.label}
              </DrawerClose>
            )}
          </For>
        </dialog>
      </Show>
    </div>
  );
}

export function Header() {
  const [isMobileViewport, setIsMobileViewport] = createSignal(false);

  onMount(() => {
    const mediaQuery = window.matchMedia("(width < 48rem)");
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    onCleanup(() => mediaQuery.removeEventListener("change", updateViewport));
  });

  return (
    <header class="sticky top-0 z-30">
      <div class="relative z-30 flex items-center justify-between bg-mm-bone/80 px-4.5 py-3.5 shadow-[0_1px_0.75rem_rgb(20_48_79/10%)] backdrop-blur-sm md:px-8 md:py-4 lg:min-h-25 lg:px-[clamp(1.5rem,4.4vw,3.5rem)]">
        <a
          class="block h-15 w-30 leading-none lg:h-auto lg:w-43"
          href="#inicio"
          aria-label={ariaLabels.brandLink}
        >
          <LogoMyM
            class="block h-full w-full object-contain lg:h-auto"
            aria-hidden="true"
          />
        </a>
        <nav
          class="hidden items-center gap-6 md:flex lg:gap-[clamp(1.15rem,2.8vw,2.25rem)]"
          aria-label={ariaLabels.mainNav}
        >
          <For each={navigation}>
            {(item) => (
              <a
                class="text-[0.8125rem] font-bold no-underline hover:text-mm-navy lg:text-sm"
                href={item.href}
              >
                {item.label}
              </a>
            )}
          </For>
          <WhatsAppCta
            class={NAVY_CTA_CLASS}
            popupClass="absolute inset-auto top-full right-0 m-0 mt-3 w-60 origin-top-right"
          >
            Contáctanos
          </WhatsAppCta>
        </nav>
        <Show when={isMobileViewport()}>
          <Drawer side="right">
            <DrawerTrigger
              class="inline-flex size-9 items-center justify-center rounded-lg border-0 bg-mm-navy text-base text-white md:hidden"
              aria-label={ariaLabels.openMenu}
            >
              <span class="sr-only">{ariaLabels.openMenu}</span>
              <span aria-hidden="true">☰</span>
            </DrawerTrigger>
            <DrawerContent class="bg-mm-bone text-mm-ink">
              <div class="flex items-center justify-between border-b border-mm-line px-5.5 pb-3">
                <DrawerLabel class="text-[1.0625rem] font-bold">
                  {ariaLabels.drawerTitle}
                </DrawerLabel>
                <DrawerClose
                  class="inline-flex size-9 items-center justify-center rounded-lg border-0 bg-mm-navy text-xl text-white"
                  aria-label={ariaLabels.closeMenu}
                >
                  <span aria-hidden="true">×</span>
                </DrawerClose>
              </div>
              <DrawerDescription class="sr-only">
                {ariaLabels.drawerDescription}
              </DrawerDescription>
              <div class="flex min-h-0 flex-1 flex-col overflow-y-auto">
                <nav
                  class="flex flex-col gap-3 px-5.5 py-5.5"
                  aria-label={ariaLabels.mobileNav}
                >
                  <div class="flex flex-col">
                    <For each={navigation}>
                      {(item) => (
                        <DrawerClose
                          as="a"
                          href={item.href}
                          class="border-b border-mm-line py-3.5 text-[1.0625rem] font-bold no-underline"
                        >
                          {item.label}
                        </DrawerClose>
                      )}
                    </For>
                  </div>
                  <Show
                    when={contact.whatsapps.length > 1}
                    fallback={
                      <DrawerClose
                        as="a"
                        href={whatsappUrl}
                        class={DRAWER_CTA_CLASS}
                      >
                        <WhatsAppIcon />
                        Contáctanos por WhatsApp
                      </DrawerClose>
                    }
                  >
                    <WhatsAppDrawerCta class={DRAWER_CTA_CLASS} />
                  </Show>
                </nav>
                <address class="flex flex-col gap-2.5 bg-mm-navy p-5.5 text-[0.8125rem] text-white/90 not-italic [&_a]:no-underline">
                  <span>{contact.city}</span>
                  <For each={contact.phones}>
                    {(phone) => (
                      <a href={`tel:${phone.value}`}>{phone.display}</a>
                    )}
                  </For>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  <ContactChannels class="flex gap-2 border-t border-white/15 pt-3" />
                </address>
              </div>
            </DrawerContent>
          </Drawer>
        </Show>
      </div>
    </header>
  );
}
