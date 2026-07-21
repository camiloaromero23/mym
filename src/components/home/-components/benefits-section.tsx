import { For } from "solid-js";

import { benefits } from "./data";

export function BenefitsSection() {
  return (
    <section
      class="grid grid-cols-1 bg-mm-navy-ink px-5.5 py-5 text-white md:grid-cols-3 md:px-8 md:py-6 lg:px-[clamp(1.5rem,4.4vw,3.5rem)] lg:py-10"
      aria-labelledby="benefits-title"
    >
      <h2
        id="benefits-title"
        class="sr-only"
      >
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
