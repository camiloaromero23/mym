import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";

import { LogoMyM } from "@/components/icons/logo-mym";

import { ContactChannels } from "./contact-channels";
import { ContactDetails } from "./contact-details";
import { ariaLabels, contact, paymentUrl, propertiesUrl } from "./data";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { WHATSAPP_CTA_BLOCK_CLASS, WhatsAppCta } from "./whatsapp-chooser";

export function Footer() {
  return (
    <footer
      id="contacto"
      class="bg-mm-navy px-5.5 pt-6 pb-6 text-center text-white md:px-8 md:pt-8 md:pb-5 md:text-left lg:px-[clamp(1.5rem,4.4vw,3.5rem)] lg:pt-[clamp(3rem,6vw,4rem)] lg:pb-8"
      aria-labelledby="footer-title"
    >
      <h2
        id="footer-title"
        class="sr-only"
      >
        {ariaLabels.contactSection}
      </h2>
      <div class="grid grid-cols-1 gap-0 pb-0 md:grid-cols-[1.4fr_repeat(2,1fr)] md:gap-6 md:border-b md:border-white/15 md:pb-5 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-[clamp(2rem,5vw,3rem)] lg:pb-10">
        <div class="flex flex-col items-center gap-3 md:items-start md:gap-3 lg:gap-5">
          <div class="w-30 lg:w-auto lg:max-w-68 lg:px-5 lg:py-4">
            <span class="sr-only">Organización Inmobiliaria M&M LTDA</span>
            <LogoMyM
              class="block h-15 w-full object-contain lg:h-auto"
              variant="bone"
              aria-hidden="true"
            />
          </div>
          <p class="max-w-[18rem] font-mm-serif text-base leading-normal text-white/85 italic">
            Patrimonio que perdura, confianza que permanece.
          </p>
          <div class="flex w-full flex-col items-stretch gap-4 md:hidden">
            <WhatsAppCta class={WHATSAPP_CTA_BLOCK_CLASS}>
              <WhatsAppIcon />
              Contáctanos por WhatsApp
            </WhatsAppCta>
            <ContactDetails class="border-t border-white/15 pt-5 text-left text-[0.8125rem] text-white/90" />
          </div>
        </div>
        <div class="hidden flex-col gap-5 md:flex">
          <h3 class="text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">
            Contacto
          </h3>
          <address class="flex flex-col gap-3 text-sm text-white/85 not-italic [&_a]:no-underline [&_a:hover]:underline-offset-4">
            <span>{contact.city}</span>
            <For each={contact.phones}>
              {(phone) => <a href={`tel:${phone.value}`}>{phone.display}</a>}
            </For>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </address>
        </div>
        <nav
          class="hidden flex-col gap-3 text-sm text-white/85 md:flex [&_a]:no-underline [&_a:hover]:underline-offset-4"
          aria-label={ariaLabels.servicesNav}
        >
          <h3 class="pb-2 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">
            Servicios
          </h3>
          <a href="#contacto">Arriendo</a>
          <a href="#contacto">Venta</a>
          <a href="#contacto">Administración</a>
          <Link
            to={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pagar canon
          </Link>
        </nav>
        <nav
          class="hidden flex-col gap-3 text-sm text-white/85 lg:flex [&_a]:no-underline [&_a:hover]:underline-offset-4"
          aria-label={ariaLabels.companyNav}
        >
          <h3 class="pb-2 text-[0.6875rem] tracking-[0.24em] text-mm-gold uppercase">
            Compañía
          </h3>
          <a href="#contacto">Nosotros</a>
          <Link
            to={propertiesUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inmuebles
          </Link>
          <a href="#contacto">Contacto</a>
          <a href="#contacto">Aviso legal</a>
        </nav>
      </div>
      <div class="hidden items-start justify-between gap-4 pt-6 text-xs text-white/60 md:flex md:flex-row md:items-center">
        <small>
          © 2026 Organización Inmobiliaria M&M LTDA. Todos los derechos
          reservados.
        </small>
        <ContactChannels class="flex gap-2.5">
          <span class="self-center text-[0.625rem] tracking-[0.04em] whitespace-nowrap uppercase">
            {ariaLabels.comingSoon}
          </span>
        </ContactChannels>
      </div>
    </footer>
  );
}
