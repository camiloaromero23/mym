import { createSignal, For, onCleanup, onMount, Show } from "solid-js";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerLabel,
  DrawerTrigger,
} from "@/components/drawer";

import { navigation, whatsappUrl } from "./data";
import { WhatsAppIcon } from "./icons/whatsapp-icon";

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
    <header class="relative z-30">
      <div class="hidden items-center justify-center bg-mm-navy-ink px-[clamp(1.5rem,4.4vw,3.5rem)] py-2 text-[0.6875rem] tracking-[0.04em] text-white/90 lg:flex lg:justify-between lg:py-[0.65rem] lg:text-xs">
        <div class="items-center justify-center gap-[1.2rem] [&>i]:hidden lg:[&>i]:block lg:[&>span:last-child]:inline">
          <span>Bogotá, Colombia</span>
          <i
            class="size-1 rounded-full bg-mm-gold"
            aria-hidden="true"
          />
          <span>Lun-Vie 8:00-18:00 · Sáb 9:00-13:00</span>
        </div>
        <address class="hidden items-center gap-[1.2rem] not-italic lg:flex [&_a]:no-underline [&_a:hover]:text-white [&_a:hover]:underline-offset-4">
          <a href="tel:+573173005145">+57 317 300 5145</a>
          <i
            class="size-1 rounded-full bg-mm-gold"
            aria-hidden="true"
          />
          <a href="tel:+573173005146">+57 317 300 5146</a>
          <i
            class="size-1 rounded-full bg-mm-gold"
            aria-hidden="true"
          />
          <a href="mailto:info@inmobiliariamm.com">info@inmobiliariamm.com</a>
        </address>
      </div>

      <div class="relative z-30 flex items-center justify-between border-b border-mm-line bg-mm-bone px-4.5 py-3.5 md:px-8 md:py-4 lg:min-h-25 lg:px-[clamp(1.5rem,4.4vw,3.5rem)]">
        <a
          class="block h-15 w-30 leading-none lg:h-auto lg:w-43"
          href="#inicio"
          aria-label="Inicio, Organización Inmobiliaria M&M LTDA"
        >
          <BrandLogo class="block h-full w-full object-contain lg:h-auto" />
        </a>
        <nav
          class="hidden items-center gap-6 md:flex lg:gap-[clamp(1.15rem,2.8vw,2.25rem)]"
          aria-label="Navegación principal"
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
          <a
            class="rounded-full bg-mm-navy px-4.5 py-2.5 text-xs font-bold text-white no-underline hover:bg-mm-navy-ink lg:px-[1.35rem] lg:py-3 lg:text-[0.8125rem]"
            href={whatsappUrl}
          >
            Contáctanos
          </a>
        </nav>
        <Show when={isMobileViewport()}>
          <Drawer side="right">
            <DrawerTrigger
              class="inline-flex size-9 items-center justify-center rounded-lg border-0 bg-mm-navy text-base text-white md:hidden"
              aria-label="Abrir menú de navegación"
            >
              <span class="sr-only">Abrir menú de navegación</span>
              <span aria-hidden="true">☰</span>
            </DrawerTrigger>
            <DrawerContent class="bg-mm-bone text-mm-ink">
              <div class="flex items-center justify-between border-b border-mm-line px-5.5 pb-3">
                <DrawerLabel class="text-[1.0625rem] font-bold">
                  Navegación
                </DrawerLabel>
                <DrawerClose
                  class="inline-flex size-9 items-center justify-center rounded-lg border-0 bg-mm-navy text-xl text-white"
                  aria-label="Cerrar menú de navegación"
                >
                  <span aria-hidden="true">×</span>
                </DrawerClose>
              </div>
              <DrawerDescription class="sr-only">
                Enlaces de navegación y datos de contacto de Organización
                Inmobiliaria M&M.
              </DrawerDescription>
              <div class="flex min-h-0 flex-1 flex-col overflow-y-auto">
                <nav
                  class="flex flex-col gap-3 px-5.5 py-5.5"
                  aria-label="Navegación móvil"
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
                  <DrawerClose
                    as="a"
                    href={whatsappUrl}
                    class="inline-flex items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113/45%)] hover:bg-[#278e53] [&>svg]:size-5 [&>svg]:fill-current"
                  >
                    <WhatsAppIcon />
                    Contáctanos por WhatsApp
                  </DrawerClose>
                </nav>
                <address class="flex flex-col gap-2.5 bg-mm-navy p-5.5 text-[0.8125rem] text-white/90 not-italic [&_a]:no-underline">
                  <span>Bogotá, Colombia</span>
                  <a href="tel:+573173005146">+57 317 300 5146</a>
                  <a href="mailto:info@inmobiliariamym.com">
                    info@inmobiliariamym.com
                  </a>
                  <nav
                    class="flex gap-2 border-t border-white/15 pt-3"
                    aria-label="Canales de contacto"
                  >
                    <Button
                      variant="social"
                      type="button"
                      aria-label="Facebook, próximamente"
                      disabled
                    >
                      f
                    </Button>
                    <Button
                      variant="social"
                      type="button"
                      aria-label="Instagram, próximamente"
                      disabled
                    >
                      ◎
                    </Button>
                    <a
                      class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 no-underline hover:bg-white/20 [&>svg]:fill-current"
                      href={whatsappUrl}
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon />
                    </a>
                    <Button
                      variant="social"
                      type="button"
                      aria-label="Telegram, próximamente"
                      disabled
                    >
                      ↗
                    </Button>
                  </nav>
                </address>
              </div>
            </DrawerContent>
          </Drawer>
        </Show>
      </div>
    </header>
  );
}
