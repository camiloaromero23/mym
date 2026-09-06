import { Link } from "@tanstack/solid-router";
import { cn } from "cn";
import { For } from "solid-js";

import { buttonVariants } from "@/components/button";

import { accessCards } from "./data";
import { AccessIcon } from "./icons/access-icon";

export function AccessSection() {
  return (
    <section
      id="servicios"
      class="flex flex-col items-center gap-3 bg-mm-bone px-4.5 pt-6 pb-6 md:gap-7 md:px-8 md:pt-12 md:pb-8 lg:gap-12 lg:px-[clamp(1.5rem,4.4vw,3.5rem)] lg:pt-[clamp(4rem,8vw,5.5rem)] lg:pb-16"
      aria-labelledby="access-title"
    >
      <div
        style={{ "animation-delay": "320ms" }}
        class="flex w-full max-w-180 animate-rise-in flex-col items-center gap-1.5 text-center motion-reduce:animate-none md:gap-2.5 lg:gap-3"
      >
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
      <div class="grid w-full max-w-270 grid-cols-1 gap-3 md:grid-cols-2 md:gap-3.5 lg:gap-5">
        <For each={accessCards}>
          {(card, index) => (
            <article
              style={{ "animation-delay": `${320 + 40 * (index() + 1)}ms` }}
              class="relative flex min-h-0 animate-rise-in flex-col rounded-[0.875rem] border border-mm-line bg-white p-4.5 [transition:translate_350ms_ease-in-out,border-color_450ms_ease-out,box-shadow_450ms_ease-out] focus-within:-translate-y-1.5 focus-within:border-[rgb(30_58_95/30%)] focus-within:shadow-[0_1.25rem_2.25rem_-1.75rem_rgb(20_48_79/50%)] hover:-translate-y-1.5 hover:border-[rgb(30_58_95/30%)] hover:shadow-[0_1.25rem_2.25rem_-1.75rem_rgb(20_48_79/50%)] motion-reduce:animate-none md:gap-3 md:p-5.5 lg:min-h-74 lg:rounded-[1.25rem] lg:p-8"
            >
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
              <Link
                class={cn(
                  buttonVariants({ variant: "navy" }),
                  "mt-3 self-start px-3.5 py-2.5 text-xs no-underline opacity-100 md:mt-0 lg:mt-3 lg:px-5.5 lg:py-3 lg:text-sm",
                )}
                to={card.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.action}
              </Link>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}
