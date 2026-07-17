import { Popover } from "@/components/popover";
import { For, createSignal } from "solid-js";

import "./home.css";

const logoSource = "/inmobiliaria-mm-logo.jpg";
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

function BrandLogo(props: { class?: string }) {
  return (
    <img
      class={props.class}
      src={logoSource}
      width="906"
      height="324"
      alt="Organización Inmobiliaria M&M LTDA"
    />
  );
}

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
    <section id="inicio" class="mm-hero" aria-labelledby="home-title">
      <div class="mm-hero-content">
        <p class="mm-status"><span aria-hidden="true" />Estamos en línea por WhatsApp · Respuesta en minutos</p>
        <h1 id="home-title">
          Estamos renovando nuestra <span>experiencia digital</span>
        </h1>
        <p class="mm-hero-copy">
          Mientras finalizamos la actualización, accede a nuestros portales y servicios.
          Llevamos más de 20 años acompañando a Bogotá.
        </p>
        <div class="mm-hero-actions">
          <a class="mm-whatsapp-link" href={whatsappUrl}>
            <WhatsAppIcon />
            Contáctanos por WhatsApp
          </a>
          <button class="mm-secondary-link mm-unavailable-action" type="button" disabled>
            Ver inmuebles <span class="mm-coming-soon">Próximamente</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section id="inmuebles" class="mm-access" aria-labelledby="access-title">
      <div class="mm-section-heading">
        <p>Accesos directos</p>
        <h2 id="access-title">Cuatro caminos hacia <strong>tu gestión</strong></h2>
      </div>
      <div id="servicios" class="mm-access-grid">
        <For each={accessCards}>
          {(card) => (
            <article class="mm-access-card">
              <span class="mm-card-number">{card.number} / 04</span>
              <div class="mm-card-title-row">
                <span class="mm-card-icon"><AccessIcon name={card.icon} /></span>
                <h3>{card.title}</h3>
              </div>
              <p>{card.description}</p>
               <button class="mm-card-action mm-unavailable-action" type="button" disabled>
                 {card.action} <span class="mm-coming-soon">Próximamente</span>
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
    <section class="mm-benefits" aria-labelledby="benefits-title">
      <h2 id="benefits-title" class="sr-only">Nuestro compromiso</h2>
      <For each={benefits}>
        {(benefit) => (
          <div class="mm-benefit">
            <span>{benefit.value}</span>
            <p><strong>{benefit.title}</strong>{benefit.description}</p>
          </div>
        )}
      </For>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" class="mm-footer" aria-labelledby="footer-title">
      <h2 id="footer-title" class="sr-only">Información de contacto de Inmobiliaria M&M</h2>
      <div class="mm-footer-grid">
        <div class="mm-footer-brand">
          <div class="mm-footer-logo-plate"><BrandLogo /></div>
          <p>Patrimonio que perdura, confianza que permanece.</p>
        </div>
        <div>
          <h3>Contacto</h3>
          <address>
            <span>Bogotá, Colombia</span>
            <a href="tel:+573173005145">+57 317 300 5145</a>
            <a href="tel:+573173005146">+57 317 300 5146</a>
            <a href="mailto:info@inmobiliariamm.com">info@inmobiliariamm.com</a>
          </address>
        </div>
        <nav aria-label="Servicios">
          <h3>Servicios</h3>
           <a href="#contacto">Arriendo</a>
           <a href="#contacto">Venta</a>
           <a href="#contacto">Administración</a>
           <span class="mm-unavailable-footer-link">Pagar canon <span>Próximamente</span></span>
        </nav>
        <nav aria-label="Compañía">
           <h3>Compañía</h3>
           <a href="#contacto">Nosotros</a>
           <span class="mm-unavailable-footer-link">Inmuebles <span>Próximamente</span></span>
           <a href="#contacto">Contacto</a>
           <a href="#contacto">Aviso legal</a>
        </nav>
      </div>
      <div class="mm-footer-bottom">
        <small>© 2026 Organización Inmobiliaria M&M LTDA. Todos los derechos reservados.</small>
        <nav class="mm-social-links" aria-label="Canales de contacto">
          <button type="button" aria-label="Facebook, próximamente" disabled>f</button>
          <button type="button" aria-label="Instagram, próximamente" disabled>◎</button>
          <a href={whatsappUrl} aria-label="WhatsApp"><WhatsAppIcon /></a>
          <button type="button" aria-label="Telegram, próximamente" disabled>↗</button>
          <span class="mm-social-coming-soon">Próximamente</span>
        </nav>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div class="mm-home">
      <a class="mm-skip-link" href="#contenido-principal">Saltar al contenido principal</a>
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
