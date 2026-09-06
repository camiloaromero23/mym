import { Link } from "@tanstack/solid-router";
import { cn } from "cn";

import { buttonVariants } from "@/components/button";

import { propertiesUrl } from "./data";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { WhatsAppCta } from "./whatsapp-chooser";

export function Hero() {
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
              <span class="block font-mm-serif font-normal tracking-[-0.035em] text-mm-navy italic">
                experiencia digital
              </span>
            </h1>
            <p class="max-w-130 text-[0.8125rem] leading-normal text-mm-muted md:text-[0.9375rem] md:leading-[1.55] lg:max-w-152 lg:text-lg">
              Mientras finalizamos la actualización, accede a nuestros portales
              y servicios. Llevamos más de 20 años acompañando a Bogotá.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-stretch justify-center gap-3 pt-5 md:flex-row md:flex-wrap md:items-center md:pt-6 lg:pt-9">
          <WhatsAppCta
            class="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-mm-green px-7 py-4 text-[0.9375rem] font-bold text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113/45%)] hover:bg-[#278e53] md:w-auto [&>svg]:size-5 [&>svg]:fill-current"
            popupClass="static m-0 mt-3 w-full md:absolute md:inset-auto md:top-full md:right-0 md:w-60 origin-top-right"
          >
            <WhatsAppIcon />
            Contáctanos por WhatsApp
          </WhatsAppCta>
          <Link
            class={cn(
              buttonVariants({ variant: "outline" }),
              "hidden w-full no-underline opacity-100 md:inline-flex md:w-auto",
            )}
            to={propertiesUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver inmuebles
          </Link>
        </div>
      </div>
    </section>
  );
}
