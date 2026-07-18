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
import { createSignal, For, onCleanup, onMount, Show } from "solid-js";

const whatsappUrl = "https://wa.me/573173005146";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Inmuebles", href: "#inmuebles" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const accessCards = [
  {
    title: "Portal Propietarios",
    description: "Gestiona tus inmuebles, pagos recibidos y estados de cuenta en un solo lugar.",
    action: "Ingresar",
    icon: "house",
  },
  {
    title: "Paga tu canon",
    description: "Realiza tu pago mensual de forma rápida, segura y trazable.",
    action: "Pagar canon",
    icon: "card",
  },
  {
    title: "Portal Arrendatarios",
    description: "Consulta contratos, pagos realizados y solicitudes de mantenimiento.",
    action: "Ingresar",
    icon: "key",
  },
  {
    title: "Ver inmuebles",
    description: "Explora nuestras propiedades disponibles para arriendo y venta en Bogotá.",
    action: "Explorar",
    icon: "building",
  },
] as const;

const benefits = [
  {
    value: "20+",
    title: "Años de experiencia",
    description: "Acompañando familias y empresas en Bogotá.",
  },
  {
    value: "100%",
    title: "Gestión transparente",
    description: "Reportes mensuales claros y trazables.",
  },
  {
    value: "1:1",
    title: "Atención personalizada",
    description: "Un asesor dedicado para cada cliente.",
  },
] as const;

type IconName = (typeof accessCards)[number]["icon"];

function AccessIcon(props: { name: IconName }) {
  if (props.name === "house") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 14 16 5l11 9" />
        <path d="M7 13v13h18V13" />
        <path d="M13 26v-7h6v7" />
      </svg>
    );
  }

  if (props.name === "card") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="8" width="24" height="16" rx="2" />
        <path d="M4 13h24M9 19h4" />
      </svg>
    );
  }

  if (props.name === "key") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="11" cy="16" r="5" />
        <path d="M16 16h11m-5 0v4m5-4v3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="1" />
      <path d="M11 9h2m-2 5h2m-2 5h2m6-10h2m-2 5h2m-2 5h2M14 28v-4h4v4" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.5-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.2.3-.1.5.1.2.6 1 1.4 1.7 1 .9 1.8 1.2 2 1.3.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.4 0 .2 0 .8-.2 1.5Z" />
    </svg>
  );
}

function Header() {
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
          <i class="size-1 rounded-full bg-mm-gold" aria-hidden="true" />
          <span>Lun-Vie 8:00-18:00 · Sáb 9:00-13:00</span>
        </div>
        <address class="hidden items-center gap-[1.2rem] not-italic lg:flex [&_a]:no-underline [&_a:hover]:text-white [&_a:hover]:underline-offset-4">
          <a href="tel:+573173005145">+57 317 300 5145</a>
          <i class="size-1 rounded-full bg-mm-gold" aria-hidden="true" />
          <a href="tel:+573173005146">+57 317 300 5146</a>
          <i class="size-1 rounded-full bg-mm-gold" aria-hidden="true" />
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
                <DrawerLabel class="text-[1.0625rem] font-bold">Navegación</DrawerLabel>
                <DrawerClose
                  class="inline-flex size-9 items-center justify-center rounded-lg border-0 bg-mm-navy text-xl text-white"
                  aria-label="Cerrar menú de navegación"
                >
                  <span aria-hidden="true">×</span>
                </DrawerClose>
              </div>
              <DrawerDescription class="sr-only">
                Enlaces de navegación y datos de contacto de Organización Inmobiliaria M&M.
              </DrawerDescription>
              <div class="flex min-h-0 flex-1 flex-col overflow-y-auto">
                <nav class="flex flex-col gap-3 px-5.5 py-5.5" aria-label="Navegación móvil">
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
                <address class="flex flex-col gap-2.5 bg-mm-navy p-5.5 text-[0.8125rem] not-italic text-white/90 [&_a]:no-underline">
                  <span>Bogotá, Colombia</span>
                  <a href="tel:+573173005146">+57 317 300 5146</a>
                  <a href="mailto:info@inmobiliariamym.com">info@inmobiliariamym.com</a>
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

function Hero() {
  return (
    <section
      id="inicio"
      class="relative flex flex-col items-center bg-[radial-gradient(#1e3a5f_1px,transparent_1px)_0_0/2rem_2rem,linear-gradient(180deg,#eef4fb_0%,#fbfaf7_100%)] text-center before:pointer-events-none before:absolute before:inset-0 before:bg-mm-sky-soft before:opacity-94 before:content-['']"
      aria-labelledby="home-title"
    >
      <div class="relative flex w-full max-w-236 flex-col items-center px-5.5 py-[1.75rem_2rem] md:px-8 md:py-[2.5rem_3rem] lg:px-6 lg:py-[clamp(3.75rem,8vw,5.5rem)]">
        <div class="flex flex-col items-center gap-4 md:gap-5 lg:gap-7">
          <p class="inline-flex items-center gap-2 rounded-full border border-mm-line bg-white px-3 py-1.5 text-[0.625rem] font-bold tracking-[0.01em] text-mm-navy-ink md:gap-2.5 md:px-3.5 md:py-1.75 md:text-[0.6875rem] md:tracking-[0.04em] lg:px-4 lg:py-2 lg:text-xs">
            <span
              class="size-1.25 rounded-full bg-mm-green shadow-[0_0_0_3px_rgb(63_184_113/18%)] md:size-1.5 md:shadow-[0_0_0_4px_rgb(63_184_113/18%)]"
              aria-hidden="true"
            />
            Estamos en línea por WhatsApp · Respuesta en minutos
          </p>
          <div class="flex flex-col items-center gap-4">
            <h1
              id="home-title"
              class="max-w-216 text-2xl leading-[1.1] font-bold tracking-tight text-mm-navy-ink md:text-[2.5rem] md:leading-[1.05] md:tracking-[-0.03em] lg:text-[clamp(2.5rem,6vw,3.75rem)] lg:tracking-[-0.045em]"
            >
              Estamos renovando nuestra{" "}
              <span class="block font-mm-serif text-mm-navy italic font-normal tracking-[-0.035em]">
                experiencia digital
              </span>
            </h1>
            <p class="max-w-130 text-[0.8125rem] leading-normal text-mm-muted md:text-[0.9375rem] md:leading-[1.55] lg:max-w-152 lg:text-lg">
              Mientras finalizamos la actualización, accede a nuestros portales y servicios.
              Llevamos más de 20 años acompañando a Bogotá.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-stretch justify-center gap-3 pt-5 md:flex-row md:flex-wrap md:items-center md:pt-6 lg:pt-9">
          <a
            class="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113/45%)] hover:bg-[#278e53] md:w-auto [&>svg]:size-5 [&>svg]:fill-current"
            href={whatsappUrl}
          >
            <WhatsAppIcon />
            Contáctanos por WhatsApp
          </a>
          <Button
            variant="outline"
            class="hidden w-full md:inline-flex md:w-auto"
            type="button"
            disabled
          >
            Ver inmuebles{" "}
            <span class="whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">
              Próximamente
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section
      id="inmuebles"
      class="flex flex-col items-center gap-3 bg-mm-bone px-4.5 pt-6 pb-6 md:gap-7 md:px-8 md:pt-12 md:pb-8 lg:gap-12 lg:px-[clamp(1.5rem,4.4vw,3.5rem)] lg:pt-[clamp(4rem,8vw,5.5rem)] lg:pb-16"
      aria-labelledby="access-title"
    >
      <div class="flex w-full max-w-180 flex-col items-center gap-1.5 text-center md:gap-2.5 lg:gap-3">
        <p class="text-[0.625rem] font-extrabold tracking-[0.24em] text-mm-navy uppercase md:text-[0.6875rem] lg:text-xs">
          Accesos directos
        </p>
        <h2
          id="access-title"
          class="font-mm-serif text-xl leading-[1.15] font-normal tracking-[-0.02em] text-mm-navy-ink md:text-[1.75rem] md:leading-[1.1] md:tracking-tight lg:text-[clamp(2rem,4vw,2.5rem)] lg:tracking-[-0.03em]"
        >
          Cuatro caminos hacia{" "}
          <strong class="font-mm-serif font-normal text-mm-navy italic lg:font-bold lg:not-italic">
            tu gestión
          </strong>
        </h2>
      </div>
      <div
        id="servicios"
        class="grid w-full max-w-270 grid-cols-1 gap-3 scroll-mt-6 md:grid-cols-2 md:gap-3.5 lg:gap-5"
      >
        <For each={accessCards}>
          {(card) => (
            <article class="relative flex min-h-0 flex-col rounded-[0.875rem] border border-mm-line bg-white p-4.5 transition-[border-color,box-shadow,transform] duration-180 ease-out hover:-translate-y-1 hover:border-[rgb(30_58_95/30%)] hover:shadow-[0_1.25rem_2.25rem_-1.75rem_rgb(20_48_79/50%)] md:gap-3 md:p-5.5 lg:min-h-74 lg:rounded-[1.25rem] lg:p-8">
              <div class="flex flex-1 flex-col">
                <div class="flex items-center gap-3 pr-12 md:gap-3.5 lg:gap-4.5">
                  <span class="inline-flex size-10 shrink-0 items-center justify-center rounded-[0.625rem] bg-mm-sky text-mm-navy md:size-12 md:rounded-xl lg:size-16 lg:rounded-2xl [&>svg]:fill-none [&>svg]:stroke-current [&>svg]:stroke-[1.8] [&>svg]:[stroke-linecap:round] [&>svg]:[stroke-linejoin:round] md:[&>svg]:size-5.5 lg:[&>svg]:size-auto">
                    <AccessIcon name={card.icon} />
                  </span>
                  <h3 class="text-sm leading-[1.2] font-bold tracking-tight text-mm-navy-ink md:text-base lg:text-[1.375rem]">
                    {card.title}
                  </h3>
                </div>
                <p class="pt-2.5 text-xs leading-normal text-mm-muted md:pt-0 md:text-[0.8125rem] md:leading-[1.55] lg:pt-4.5 lg:text-[0.9375rem]">
                  {card.description}
                </p>
              </div>
              <Button
                variant="navy"
                class="mt-3 self-start px-3.5 py-2.5 text-xs md:mt-0 lg:mt-3 lg:px-5.5 lg:py-3 lg:text-sm"
                type="button"
                disabled
              >
                {card.action}{" "}
                <span class="whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">
                  Próximamente
                </span>
              </Button>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section
      class="grid grid-cols-1 bg-mm-navy-ink px-5.5 py-5 text-white md:grid-cols-3 md:px-8 md:py-6 lg:px-[clamp(1.5rem,4.4vw,3.5rem)] lg:py-10"
      aria-labelledby="benefits-title"
    >
      <h2 id="benefits-title" class="sr-only">
        Nuestro compromiso
      </h2>
      <For each={benefits}>
        {(benefit) => (
          <div class="flex items-center gap-3 px-0 py-0 not-last:pb-3.5 md:px-4.5 md:py-2 md:not-last:border-r md:not-last:border-b-0 md:not-last:pb-2 lg:gap-4 lg:px-[clamp(1.25rem,3vw,2rem)] lg:py-5">
            <span class="min-w-12 font-mm-serif text-2xl leading-none font-bold tracking-tighter text-mm-gold md:min-w-0 md:text-[1.75rem] lg:text-[clamp(2rem,3.5vw,2.5rem)]">
              {benefit.value}
            </span>
            <p class="flex flex-col gap-0.5 text-[0.6875rem] leading-[1.35] text-white/85 md:text-[0.6875rem] lg:text-sm lg:leading-[1.4]">
              <strong class="text-xs text-white md:text-xs lg:text-[0.9375rem]">
                {benefit.title}
              </strong>
              <span>{benefit.description}</span>
            </p>
          </div>
        )}
      </For>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contacto"
      class="bg-mm-navy px-5.5 pt-6 pb-6 text-center text-white md:px-8 md:pt-8 md:pb-5 md:text-left lg:px-[clamp(1.5rem,4.4vw,3.5rem)] lg:pt-[clamp(3rem,6vw,4rem)] lg:pb-8"
      aria-labelledby="footer-title"
    >
      <h2 id="footer-title" class="sr-only">
        Información de contacto de Inmobiliaria M&M
      </h2>
      <div class="grid grid-cols-1 gap-0 pb-0 md:grid-cols-[1.4fr_repeat(2,1fr)] md:gap-6 md:border-b md:border-white/15 md:pb-5 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-[clamp(2rem,5vw,3rem)] lg:pb-10">
        <div class="flex flex-col items-center gap-3 md:items-start md:gap-3 lg:gap-5">
          <div class="w-30 lg:w-auto lg:max-w-68 lg:rounded-[0.875rem] lg:bg-mm-bone lg:px-5 lg:py-4">
            <BrandLogo class="block h-15 w-full object-contain brightness-0 invert lg:h-auto lg:brightness-100 lg:invert-0" />
          </div>
          <p class="max-w-[18rem] font-mm-serif text-base leading-normal text-white/85 italic">
            Patrimonio que perdura, confianza que permanece.
          </p>
          <nav class="flex gap-2.5 md:hidden" aria-label="Canales de contacto">
            <Button variant="social" type="button" aria-label="Facebook, próximamente" disabled>
              f
            </Button>
            <Button variant="social" type="button" aria-label="Instagram, próximamente" disabled>
              ◎
            </Button>
            <a
              class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 no-underline hover:bg-white/20 [&>svg]:fill-current"
              href={whatsappUrl}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <Button variant="social" type="button" aria-label="Telegram, próximamente" disabled>
              ↗
            </Button>
          </nav>
        </div>
        <div class="hidden flex-col gap-5 md:flex">
          <h3 class="text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Contacto</h3>
          <address class="flex flex-col gap-3 text-sm not-italic text-white/85 [&_a]:no-underline [&_a:hover]:underline-offset-4">
            <span>Bogotá, Colombia</span>
            <a href="tel:+573173005145">+57 317 300 5145</a>
            <a href="tel:+573173005146">+57 317 300 5146</a>
            <a href="mailto:info@inmobiliariamm.com">info@inmobiliariamm.com</a>
          </address>
        </div>
        <nav
          class="hidden flex-col gap-3 text-sm text-white/85 md:flex [&_a]:no-underline [&_a:hover]:underline-offset-4"
          aria-label="Servicios"
        >
          <h3 class="pb-2 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Servicios</h3>
          <a href="#contacto">Arriendo</a>
          <a href="#contacto">Venta</a>
          <a href="#contacto">Administración</a>
          <span class="text-white/60">
            Pagar canon{" "}
            <span class="text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span>
          </span>
        </nav>
        <nav
          class="hidden flex-col gap-3 text-sm text-white/85 lg:flex [&_a]:no-underline [&_a:hover]:underline-offset-4"
          aria-label="Compañía"
        >
          <h3 class="pb-2 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Compañía</h3>
          <a href="#contacto">Nosotros</a>
          <span class="text-white/60">
            Inmuebles <span class="text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span>
          </span>
          <a href="#contacto">Contacto</a>
          <a href="#contacto">Aviso legal</a>
        </nav>
      </div>
      <div class="hidden items-start justify-between gap-4 pt-6 text-xs text-white/60 md:flex md:flex-row md:items-center">
        <small>© 2026 Organización Inmobiliaria M&M LTDA. Todos los derechos reservados.</small>
        <nav class="flex gap-2.5" aria-label="Canales de contacto">
          <Button variant="social" type="button" aria-label="Facebook, próximamente" disabled>
            f
          </Button>
          <Button variant="social" type="button" aria-label="Instagram, próximamente" disabled>
            ◎
          </Button>
          <a
            class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 no-underline hover:bg-white/20 [&>svg]:fill-current"
            href={whatsappUrl}
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <Button variant="social" type="button" aria-label="Telegram, próximamente" disabled>
            ↗
          </Button>
          <span class="self-center whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">
            Próximamente
          </span>
        </nav>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div class="overflow-clip bg-mm-bone text-mm-ink font-features-['ss01','cv11'] [&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-mm-gold [&_button:focus-visible]:outline-offset-4">
      <a
        class="fixed left-4 -top-20 z-50 bg-white px-4 py-3 font-bold text-mm-navy-ink transition-[top] duration-160 ease-out"
        href="#contenido-principal"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="contenido-principal" tabindex="-1">
        <Hero />
        <AccessSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
