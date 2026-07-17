import { Popover } from "@/components/popover";
import { BrandLogo } from "@/components/brand-logo";
import { For, createSignal } from "solid-js";

const whatsappUrl = "https://wa.me/573173005146";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Inmuebles", href: "#inmuebles" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const accessCards = [
  {
    number: "01",
    title: "Portal Propietarios",
    description:
      "Gestiona tus inmuebles, pagos recibidos y estados de cuenta en un solo lugar.",
    action: "Ingresar",
    icon: "house",
  },
  {
    number: "02",
    title: "Paga tu canon",
    description: "Realiza tu pago mensual de forma rápida, segura y trazable.",
    action: "Pagar canon",
    icon: "card",
  },
  {
    number: "03",
    title: "Portal Arrendatarios",
    description:
      "Consulta contratos, pagos realizados y solicitudes de mantenimiento.",
    action: "Ingresar",
    icon: "key",
  },
  {
    number: "04",
    title: "Ver inmuebles",
    description:
      "Explora nuestras propiedades disponibles para arriendo y venta en Bogotá.",
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
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  let navigationBar: HTMLDivElement | undefined;

  return (
    <header class="relative z-30">
      <div class="flex items-center justify-between bg-mm-navy-ink px-[clamp(1.5rem,4.4vw,3.5rem)] py-[0.65rem] text-xs tracking-[0.04em] text-white/90 max-[960px]:justify-center max-[720px]:py-2 max-[720px]:text-[0.6875rem]">
        <div class="flex items-center gap-[1.2rem] max-[720px]:justify-center max-[720px]:[&>i]:hidden max-[720px]:[&>span:last-child]:hidden">
          <span>Bogotá, Colombia</span>
          <i class="size-1 rounded-full bg-mm-gold" aria-hidden="true" />
          <span>Lun-Vie 8:00-18:00 · Sáb 9:00-13:00</span>
        </div>
        <address class="flex items-center gap-[1.2rem] not-italic max-[960px]:hidden [&_a]:no-underline [&_a:hover]:text-white [&_a:hover]:underline [&_a:hover]:underline-offset-4">
          <a href="tel:+573173005145">+57 317 300 5145</a>
          <i class="size-1 rounded-full bg-mm-gold" aria-hidden="true" />
          <a href="tel:+573173005146">+57 317 300 5146</a>
          <i class="size-1 rounded-full bg-mm-gold" aria-hidden="true" />
          <a href="mailto:info@inmobiliariamm.com">info@inmobiliariamm.com</a>
        </address>
      </div>

      <Popover.Root onOpenChange={(open) => setIsMenuOpen(open)}>
        <div ref={navigationBar} class="relative z-30 flex min-h-[6.25rem] items-center justify-between border-b border-mm-line bg-mm-bone px-[clamp(1.5rem,4.4vw,3.5rem)] py-4 max-[720px]:min-h-[5.25rem] max-[720px]:py-3">
          <a class="block basis-[10.75rem] leading-none max-[720px]:basis-[8.5rem]" href="#inicio" aria-label="Inicio, Organización Inmobiliaria M&M LTDA">
            <BrandLogo class="block h-auto max-w-full" />
          </a>
          <nav class="flex items-center gap-[clamp(1.15rem,2.8vw,2.25rem)] max-[720px]:hidden" aria-label="Navegación principal">
            <For each={navigation}>{(item) => <a class="text-sm font-bold no-underline hover:text-mm-navy" href={item.href}>{item.label}</a>}</For>
            <a class="rounded-full bg-mm-navy px-[1.35rem] py-3 text-[0.8125rem] font-bold text-white no-underline hover:bg-mm-navy-ink" href={whatsappUrl}>
              Contáctanos
            </a>
          </nav>
          <Popover.Trigger
            class="hidden size-10 items-center justify-center rounded-lg border-0 bg-mm-navy text-xl text-white max-[720px]:inline-flex"
            aria-label={isMenuOpen() ? "Cerrar menú" : "Abrir menú"}
          >
            <span class="sr-only">{isMenuOpen() ? "Cerrar menú" : "Abrir menú"}</span>
            <span aria-hidden="true">{isMenuOpen() ? "×" : "☰"}</span>
          </Popover.Trigger>
        </div>
        <Popover.Portal>
          <Popover.Positioner anchor={() => navigationBar ?? null} positionMethod="fixed" side="bottom" align="start" class="z-20 w-screen max-[720px]:block min-[721px]:hidden">
            <Popover.Popup id="mobile-navigation" class="border-b border-mm-line bg-mm-bone p-6 text-mm-ink shadow-[0_1rem_1.5rem_-1.5rem_rgb(15_26_42_/_60%)] transition-[opacity,transform] duration-150 ease-out data-[starting-style]:translate-y-[-0.25rem] data-[starting-style]:opacity-0 data-[ending-style]:translate-y-[-0.25rem] data-[ending-style]:opacity-0">
              <nav class="flex flex-col" aria-label="Navegación móvil">
                <For each={navigation}>
                  {(item) => (
                    <Popover.Close render={(props) => <a {...props} href={item.href} />} class="border-b border-mm-line py-3.5 text-[1.0625rem] font-bold no-underline">
                      {item.label}
                    </Popover.Close>
                  )}
                </For>
                <Popover.Close render={(props) => <a {...props} href={whatsappUrl} />} class="mt-5 inline-flex items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113_/_45%)] hover:bg-[#278e53] [&>svg]:size-5 [&>svg]:fill-current">
                  <WhatsAppIcon />
                  Contáctanos por WhatsApp
                </Popover.Close>
              </nav>
              <address class="mx-[-1.5rem] mb-[-1.5rem] mt-6 flex flex-col gap-2.5 bg-mm-navy p-6 text-[0.8125rem] not-italic text-white/90 [&_a]:text-inherit [&_a]:no-underline">
                <span>Bogotá, Colombia</span>
                <a href="tel:+573173005146">+57 317 300 5146</a>
                <a href="mailto:info@inmobiliariamym.com">info@inmobiliariamym.com</a>
              </address>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" class="relative bg-[radial-gradient(#1e3a5f_1px,transparent_1px)_0_0/2rem_2rem,linear-gradient(180deg,#eef4fb_0%,#fbfaf7_100%)] text-center before:pointer-events-none before:absolute before:inset-0 before:bg-mm-sky-soft before:opacity-94 before:content-['']" aria-labelledby="home-title">
      <div class="relative mx-auto max-w-[59rem] px-6 py-[clamp(3.75rem,8vw,5.5rem)] max-[720px]:py-[3rem_3.5rem]">
        <p class="mb-7 inline-flex items-center gap-2.5 rounded-full border border-mm-line bg-white px-4 py-2 text-xs font-bold tracking-[0.04em] text-mm-navy-ink max-[720px]:mb-5 max-[720px]:px-3 max-[720px]:py-[0.4375rem] max-[720px]:text-[0.625rem] max-[720px]:tracking-[0.01em]"><span class="size-1.5 rounded-full bg-mm-green shadow-[0_0_0_4px_rgb(63_184_113_/_18%)]" aria-hidden="true" />Estamos en línea por WhatsApp · Respuesta en minutos</p>
        <h1 id="home-title" class="mx-auto mb-4 max-w-[54rem] text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-bold tracking-[-0.045em] text-mm-navy-ink max-[720px]:text-[clamp(2.25rem,10vw,3rem)]">
          Estamos renovando nuestra <span class="block font-mm-serif text-mm-navy italic font-normal tracking-[-0.035em]">experiencia digital</span>
        </h1>
        <p class="mx-auto mb-9 max-w-[38rem] text-lg leading-[1.55] text-mm-muted max-[720px]:mb-6 max-[720px]:text-[0.9375rem]">
          Mientras finalizamos la actualización, accede a nuestros portales y servicios.
          Llevamos más de 20 años acompañando a Bogotá.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3 max-[720px]:items-stretch max-[720px]:flex-col">
          <a class="inline-flex items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113_/_45%)] hover:bg-[#278e53] max-[720px]:w-full [&>svg]:size-5 [&>svg]:fill-current" href={whatsappUrl}>
            <WhatsAppIcon />
            Contáctanos por WhatsApp
          </a>
          <button class="inline-flex items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-mm-navy bg-transparent px-[calc(1.75rem-1.5px)] py-[calc(1rem-1.5px)] text-[0.9375rem] font-bold text-mm-navy opacity-72 disabled:cursor-not-allowed max-[720px]:w-full" type="button" disabled>
            Ver inmuebles <span class="whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section id="inmuebles" class="bg-mm-bone px-[clamp(1.5rem,4.4vw,3.5rem)] pt-[clamp(4rem,8vw,5.5rem)] pb-16 max-[720px]:pb-10" aria-labelledby="access-title">
      <div class="mx-auto mb-12 max-w-[45rem] text-center max-[720px]:mb-7">
        <p class="mb-3 text-xs font-extrabold tracking-[0.24em] text-mm-navy uppercase">Accesos directos</p>
        <h2 id="access-title" class="font-mm-serif text-[clamp(2rem,4vw,2.5rem)] leading-[1.1] font-normal tracking-[-0.03em] text-mm-navy-ink">Cuatro caminos hacia <strong class="font-bold">tu gestión</strong></h2>
      </div>
      <div id="servicios" class="mx-auto grid max-w-[67.5rem] grid-cols-2 gap-5 scroll-mt-6 max-[720px]:grid-cols-1">
        <For each={accessCards}>
          {(card) => (
            <article class="relative flex min-h-[18.5rem] flex-col rounded-[1.25rem] border border-mm-line bg-white p-8 transition-[border-color,box-shadow,transform] duration-180 ease-out hover:-translate-y-1 hover:border-[rgb(30_58_95_/_30%)] hover:shadow-[0_1.25rem_2.25rem_-1.75rem_rgb(20_48_79_/_50%)] max-[720px]:min-h-0 max-[720px]:rounded-[0.875rem] max-[720px]:p-5">
              <span class="absolute right-7 top-6 font-mm-serif text-sm tracking-[0.04em] text-mm-muted max-[720px]:right-5 max-[720px]:top-4">{card.number} / 04</span>
              <div class="mb-[1.125rem] flex items-center gap-[1.125rem] pr-14 max-[720px]:mb-3.5 max-[720px]:gap-3">
                <span class="inline-flex size-16 shrink-0 items-center justify-center rounded-2xl bg-mm-sky text-mm-navy max-[720px]:size-12 max-[720px]:rounded-[0.625rem] [&>svg]:size-8 [&>svg]:fill-none [&>svg]:stroke-current [&>svg]:stroke-[1.8] [&>svg]:[stroke-linecap:round] [&>svg]:[stroke-linejoin:round] max-[720px]:[&>svg]:size-6"><AccessIcon name={card.icon} /></span>
                <h3 class="text-[1.375rem] leading-[1.2] font-bold tracking-[-0.025em] text-mm-navy-ink max-[720px]:text-base">{card.title}</h3>
              </div>
              <p class="mb-6 text-[0.9375rem] leading-[1.6] text-mm-muted max-[720px]:mb-4 max-[720px]:text-[0.8125rem]">{card.description}</p>
              <button class="mt-auto inline-flex self-start items-center justify-center gap-2 rounded-[0.625rem] border-0 bg-mm-navy px-[1.375rem] py-3 text-sm font-bold text-white opacity-72 disabled:cursor-not-allowed max-[720px]:self-stretch" type="button" disabled>
                {card.action} <span class="whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span>
              </button>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section class="grid grid-cols-3 bg-mm-navy-ink px-[clamp(1.5rem,4.4vw,3.5rem)] py-10 text-white max-[720px]:grid-cols-1 max-[720px]:py-4" aria-labelledby="benefits-title">
      <h2 id="benefits-title" class="sr-only">Nuestro compromiso</h2>
      <For each={benefits}>
        {(benefit) => (
          <div class="flex items-center gap-4 px-[clamp(1.25rem,3vw,2rem)] py-5 not-last:border-r not-last:border-white/15 max-[720px]:px-0 max-[720px]:py-4 max-[720px]:not-last:border-r-0 max-[720px]:not-last:border-b">
            <span class="font-mm-serif text-[clamp(2rem,3.5vw,2.5rem)] leading-none font-bold tracking-[-0.05em] text-mm-gold">{benefit.value}</span>
            <p class="text-sm leading-[1.4] text-white/85"><strong class="mb-0.5 block text-[0.9375rem] text-white">{benefit.title}</strong>{benefit.description}</p>
          </div>
        )}
      </For>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" class="bg-mm-navy px-[clamp(1.5rem,4.4vw,3.5rem)] pt-[clamp(3rem,6vw,4rem)] pb-8 text-white" aria-labelledby="footer-title">
      <h2 id="footer-title" class="sr-only">Información de contacto de Inmobiliaria M&M</h2>
      <div class="grid grid-cols-[1.4fr_repeat(3,1fr)] gap-[clamp(2rem,5vw,3rem)] border-b border-white/15 pb-10 max-[960px]:grid-cols-[1.4fr_1fr_1fr] max-[720px]:grid-cols-2 max-[380px]:grid-cols-1">
        <div class="max-[720px]:col-span-full">
          <div class="max-w-[17rem] rounded-[0.875rem] bg-mm-bone px-5 py-4"><BrandLogo class="block h-auto w-full" /></div>
          <p class="mt-5 max-w-[18rem] font-mm-serif text-base leading-[1.5] text-white/85 italic">Patrimonio que perdura, confianza que permanece.</p>
        </div>
        <div>
          <h3 class="mb-5 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Contacto</h3>
          <address class="flex flex-col gap-3 text-sm not-italic text-white/85 [&_a]:text-inherit [&_a]:no-underline [&_a:hover]:text-white [&_a:hover]:underline [&_a:hover]:underline-offset-4">
            <span>Bogotá, Colombia</span>
            <a href="tel:+573173005145">+57 317 300 5145</a>
            <a href="tel:+573173005146">+57 317 300 5146</a>
            <a href="mailto:info@inmobiliariamm.com">info@inmobiliariamm.com</a>
          </address>
        </div>
        <nav class="flex flex-col gap-3 text-sm text-white/85 [&_a]:text-inherit [&_a]:no-underline [&_a:hover]:text-white [&_a:hover]:underline [&_a:hover]:underline-offset-4" aria-label="Servicios">
          <h3 class="mb-2 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Servicios</h3>
           <a href="#contacto">Arriendo</a>
           <a href="#contacto">Venta</a>
           <a href="#contacto">Administración</a>
           <span class="text-white/60">Pagar canon <span class="text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span></span>
        </nav>
        <nav class="flex flex-col gap-3 text-sm text-white/85 max-[960px]:col-start-2 max-[720px]:col-auto max-[380px]:col-auto [&_a]:text-inherit [&_a]:no-underline [&_a:hover]:text-white [&_a:hover]:underline [&_a:hover]:underline-offset-4" aria-label="Compañía">
           <h3 class="mb-2 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Compañía</h3>
           <a href="#contacto">Nosotros</a>
           <span class="text-white/60">Inmuebles <span class="text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span></span>
           <a href="#contacto">Contacto</a>
           <a href="#contacto">Aviso legal</a>
        </nav>
      </div>
      <div class="flex items-center justify-between pt-6 text-xs text-white/60 max-[720px]:items-start max-[720px]:flex-col max-[720px]:gap-4">
        <small>© 2026 Organización Inmobiliaria M&M LTDA. Todos los derechos reservados.</small>
        <nav class="flex gap-2.5" aria-label="Canales de contacto">
          <button class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 font-inherit text-base text-white/85 opacity-50 disabled:cursor-not-allowed" type="button" aria-label="Facebook, próximamente" disabled>f</button>
          <button class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 font-inherit text-base text-white/85 opacity-50 disabled:cursor-not-allowed" type="button" aria-label="Instagram, próximamente" disabled>◎</button>
          <a class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 no-underline hover:bg-white/20 [&>svg]:size-4 [&>svg]:fill-current" href={whatsappUrl} aria-label="WhatsApp"><WhatsAppIcon /></a>
          <button class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 font-inherit text-base text-white/85 opacity-50 disabled:cursor-not-allowed" type="button" aria-label="Telegram, próximamente" disabled>↗</button>
          <span class="self-center whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span>
        </nav>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div class="overflow-clip bg-mm-bone text-mm-ink [font-feature-settings:'ss01','cv11'] [&_a]:text-inherit [&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-mm-gold [&_a:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-3 [&_button:focus-visible]:outline-mm-gold [&_button:focus-visible]:outline-offset-4">
      <a class="fixed left-4 top-[-5rem] z-50 bg-white px-4 py-3 font-bold text-mm-navy-ink transition-[top] duration-160 ease-out focus:top-4" href="#contenido-principal">Saltar al contenido principal</a>
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
