import { Popover } from "@/components/popover";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/button";
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
      <div class="flex items-center justify-center bg-mm-navy-ink px-[clamp(1.5rem,4.4vw,3.5rem)] py-2 text-[0.6875rem] tracking-[0.04em] text-white/90 md:py-[0.65rem] md:text-xs lg:justify-between">
        <div class="flex items-center justify-center gap-[1.2rem] [&>i]:hidden [&>span:last-child]:hidden md:[&>i]:block md:[&>span:last-child]:inline">
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

      <Popover.Root onOpenChange={(open) => setIsMenuOpen(open)}>
        <div ref={navigationBar} class="relative z-30 flex min-h-21 items-center justify-between border-b border-mm-line bg-mm-bone px-[clamp(1.5rem,4.4vw,3.5rem)] py-3 md:min-h-25 md:py-4">
          <a class="block basis-34 leading-none md:basis-43" href="#inicio" aria-label="Inicio, Organización Inmobiliaria M&M LTDA">
            <BrandLogo class="block h-auto max-w-full" />
          </a>
          <nav class="hidden items-center gap-[clamp(1.15rem,2.8vw,2.25rem)] md:flex" aria-label="Navegación principal">
            <For each={navigation}>{(item) => <a class="text-sm font-bold no-underline hover:text-mm-navy" href={item.href}>{item.label}</a>}</For>
            <a class="rounded-full bg-mm-navy px-[1.35rem] py-3 text-[0.8125rem] font-bold text-white no-underline hover:bg-mm-navy-ink" href={whatsappUrl}>
              Contáctanos
            </a>
          </nav>
          <Popover.Trigger
            class="inline-flex size-10 items-center justify-center rounded-lg border-0 bg-mm-navy text-xl text-white md:hidden"
            aria-label={isMenuOpen() ? "Cerrar menú" : "Abrir menú"}
          >
            <span class="sr-only">{isMenuOpen() ? "Cerrar menú" : "Abrir menú"}</span>
            <span aria-hidden="true">{isMenuOpen() ? "×" : "☰"}</span>
          </Popover.Trigger>
        </div>
        <Popover.Portal>
          <Popover.Positioner anchor={() => navigationBar ?? null} positionMethod="fixed" side="bottom" align="start" class="z-20 block w-screen md:hidden">
            <Popover.Popup id="mobile-navigation" class="flex flex-col gap-6 border-b border-mm-line bg-mm-bone text-mm-ink shadow-[0_1rem_1.5rem_-1.5rem_rgb(15_26_42/60%)] transition-[opacity,transform] duration-150 ease-out data-starting-style:-translate-y-1 data-starting-style:opacity-0">
              <div class="p-6 pb-0">
                <nav class="flex flex-col gap-5" aria-label="Navegación móvil">
                  <div class="flex flex-col">
                    <For each={navigation}>
                      {(item) => (
                        <Popover.Close render={(props) => <a {...props} href={item.href} />} class="border-b border-mm-line py-3.5 text-[1.0625rem] font-bold no-underline">
                          {item.label}
                        </Popover.Close>
                      )}
                    </For>
                  </div>
                  <Popover.Close render={(props) => <a {...props} href={whatsappUrl} />} class="inline-flex items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113/45%)] hover:bg-[#278e53] [&>svg]:size-5 [&>svg]:fill-current">
                    <WhatsAppIcon />
                    Contáctanos por WhatsApp
                  </Popover.Close>
                </nav>
              </div>
              <address class="flex flex-col gap-2.5 bg-mm-navy p-6 text-[0.8125rem] not-italic text-white/90 [&_a]:no-underline">
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
    <section id="inicio" class="relative flex flex-col items-center bg-[radial-gradient(#1e3a5f_1px,transparent_1px)_0_0/2rem_2rem,linear-gradient(180deg,#eef4fb_0%,#fbfaf7_100%)] text-center before:pointer-events-none before:absolute before:inset-0 before:bg-mm-sky-soft before:opacity-94 before:content-['']" aria-labelledby="home-title">
      <div class="relative flex w-full max-w-236 flex-col items-center px-6 py-[3rem_3.5rem] md:py-[clamp(3.75rem,8vw,5.5rem)]">
        <div class="flex flex-col items-center gap-5 md:gap-7">
          <p class="inline-flex items-center gap-2.5 rounded-full border border-mm-line bg-white px-3 py-1.75 text-[0.625rem] font-bold tracking-[0.01em] text-mm-navy-ink md:px-4 md:py-2 md:text-xs md:tracking-[0.04em]"><span class="size-1.5 rounded-full bg-mm-green shadow-[0_0_0_4px_rgb(63_184_113/18%)]" aria-hidden="true" />Estamos en línea por WhatsApp · Respuesta en minutos</p>
          <div class="flex flex-col items-center gap-4">
            <h1 id="home-title" class="max-w-216 text-[clamp(2.25rem,10vw,3rem)] leading-[1.05] font-bold tracking-[-0.045em] text-mm-navy-ink md:text-[clamp(2.5rem,6vw,3.75rem)]">
              Estamos renovando nuestra <span class="block font-mm-serif text-mm-navy italic font-normal tracking-[-0.035em]">experiencia digital</span>
            </h1>
            <p class="max-w-152 text-[0.9375rem] leading-[1.55] text-mm-muted md:text-lg">
              Mientras finalizamos la actualización, accede a nuestros portales y servicios.
              Llevamos más de 20 años acompañando a Bogotá.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-stretch justify-center gap-3 pt-6 md:flex-row md:flex-wrap md:items-center md:pt-9">
          <a class="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113/45%)] hover:bg-[#278e53] md:w-auto [&>svg]:size-5 [&>svg]:fill-current" href={whatsappUrl}>
            <WhatsAppIcon />
            Contáctanos por WhatsApp
          </a>
          <Button variant="outline" class="w-full md:w-auto" type="button" disabled>
            Ver inmuebles <span class="whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section id="inmuebles" class="flex flex-col items-center gap-7 bg-mm-bone px-[clamp(1.5rem,4.4vw,3.5rem)] pt-[clamp(4rem,8vw,5.5rem)] pb-10 md:gap-12 md:pb-16" aria-labelledby="access-title">
      <div class="flex w-full max-w-180 flex-col items-center gap-3 text-center">
        <p class="text-xs font-extrabold tracking-[0.24em] text-mm-navy uppercase">Accesos directos</p>
        <h2 id="access-title" class="font-mm-serif text-[clamp(2rem,4vw,2.5rem)] leading-[1.1] font-normal tracking-[-0.03em] text-mm-navy-ink">Cuatro caminos hacia <strong class="font-bold">tu gestión</strong></h2>
      </div>
      <div id="servicios" class="grid w-full max-w-270 grid-cols-1 gap-5 scroll-mt-6 md:grid-cols-2">
        <For each={accessCards}>
          {(card) => (
            <article class="relative flex min-h-0 flex-col rounded-[0.875rem] border border-mm-line bg-white p-5 transition-[border-color,box-shadow,transform] duration-180 ease-out hover:-translate-y-1 hover:border-[rgb(30_58_95/30%)] hover:shadow-[0_1.25rem_2.25rem_-1.75rem_rgb(20_48_79/50%)] md:min-h-74 md:rounded-[1.25rem] md:p-8">
              <span class="absolute right-5 top-4 font-mm-serif text-sm tracking-[0.04em] text-mm-muted md:right-7 md:top-6">{card.number} / 04</span>
              <div class="flex flex-1 flex-col">
                <div class="flex items-center gap-3 pr-14 md:gap-4.5">
                  <span class="inline-flex size-12 shrink-0 items-center justify-center rounded-[0.625rem] bg-mm-sky text-mm-navy md:size-16 md:rounded-2xl [&>svg]:size-6 [&>svg]:fill-none [&>svg]:stroke-current [&>svg]:stroke-[1.8] [&>svg]:[stroke-linecap:round] [&>svg]:[stroke-linejoin:round] md:[&>svg]:size-auto"><AccessIcon name={card.icon} /></span>
                  <h3 class="text-base leading-[1.2] font-bold tracking-tight text-mm-navy-ink md:text-[1.375rem]">{card.title}</h3>
                </div>
                <p class="pt-3.5 text-[0.8125rem] leading-[1.6] text-mm-muted md:pt-4.5 md:text-[0.9375rem]">{card.description}</p>
              </div>
              <Button variant="navy" class="self-stretch md:self-start" type="button" disabled>
                {card.action} <span class="whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span>
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
    <section class="grid grid-cols-1 bg-mm-navy-ink px-[clamp(1.5rem,4.4vw,3.5rem)] py-4 text-white md:grid-cols-3 md:py-10" aria-labelledby="benefits-title">
      <h2 id="benefits-title" class="sr-only">Nuestro compromiso</h2>
      <For each={benefits}>
        {(benefit) => (
          <div class="flex items-center gap-4 px-0 py-4 not-last:border-b not-last:border-white/15 md:px-[clamp(1.25rem,3vw,2rem)] md:py-5 md:not-last:border-r md:not-last:border-b-0">
            <span
              class="font-mm-serif text-[clamp(2rem,3.5vw,2.5rem)] leading-none font-bold tracking-tighter text-mm-gold"
            >{benefit.value}</span>
            <p class="flex flex-col gap-0.5 text-sm leading-[1.4] text-white/85"><strong class="text-[0.9375rem] text-white">{benefit.title}</strong><span>{benefit.description}</span></p>
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
      <div class="grid grid-cols-1 gap-[clamp(2rem,5vw,3rem)] border-b border-white/15 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div class="flex flex-col gap-5 md:col-span-full lg:col-span-1">
          <div class="max-w-68 rounded-[0.875rem] bg-mm-bone px-5 py-4"><BrandLogo class="block h-auto w-full" /></div>
          <p class="max-w-[18rem] font-mm-serif text-base leading-normal text-white/85 italic">Patrimonio que perdura, confianza que permanece.</p>
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Contacto</h3>
          <address class="flex flex-col gap-3 text-sm not-italic text-white/85 [&_a]:no-underline [&_a:hover]:underline-offset-4">
            <span>Bogotá, Colombia</span>
            <a href="tel:+573173005145">+57 317 300 5145</a>
            <a href="tel:+573173005146">+57 317 300 5146</a>
            <a href="mailto:info@inmobiliariamm.com">info@inmobiliariamm.com</a>
          </address>
        </div>
        <nav class="flex flex-col gap-3 text-sm text-white/85 [&_a]:no-underline [&_a:hover]:underline-offset-4" aria-label="Servicios">
          <h3 class="pb-2 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Servicios</h3>
           <a href="#contacto">Arriendo</a>
           <a href="#contacto">Venta</a>
           <a href="#contacto">Administración</a>
           <span class="text-white/60">Pagar canon <span class="text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span></span>
        </nav>
        <nav class="flex flex-col gap-3 text-sm text-white/85 md:col-start-2 lg:col-auto [&_a]:no-underline [&_a:hover]:underline-offset-4" aria-label="Compañía">
           <h3 class="pb-2 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">Compañía</h3>
           <a href="#contacto">Nosotros</a>
           <span class="text-white/60">Inmuebles <span class="text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span></span>
           <a href="#contacto">Contacto</a>
           <a href="#contacto">Aviso legal</a>
        </nav>
      </div>
      <div class="flex flex-col items-start justify-between gap-4 pt-6 text-xs text-white/60 md:flex-row md:items-center">
        <small>© 2026 Organización Inmobiliaria M&M LTDA. Todos los derechos reservados.</small>
        <nav class="flex gap-2.5" aria-label="Canales de contacto">
          <Button variant="social" type="button" aria-label="Facebook, próximamente" disabled>f</Button>
          <Button variant="social" type="button" aria-label="Instagram, próximamente" disabled>◎</Button>
          <a class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 no-underline hover:bg-white/20 [&>svg]:fill-current" href={whatsappUrl} aria-label="WhatsApp"><WhatsAppIcon /></a>
          <Button variant="social" type="button" aria-label="Telegram, próximamente" disabled>↗</Button>
          <span class="self-center whitespace-nowrap text-[0.625rem] tracking-[0.04em] uppercase">Próximamente</span>
        </nav>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div class="overflow-clip bg-mm-bone text-mm-ink font-features-['ss01','cv11'] [&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-mm-gold [&_button:focus-visible]:outline-offset-4">
      <a class="fixed left-4 -top-20 z-50 bg-white px-4 py-3 font-bold text-mm-navy-ink transition-[top] duration-160 ease-out" href="#contenido-principal">Saltar al contenido principal</a>
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
