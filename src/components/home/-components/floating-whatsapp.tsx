import { contact } from "./data";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { WhatsAppCta } from "./whatsapp-chooser";

const CTA_CLASS =
  "inline-flex size-14 items-center justify-center rounded-full bg-mm-green text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113/45%)] hover:bg-[#278e53] transition-[background-color,scale] duration-160 ease-out active:scale-97 [&>svg]:size-7 [&>svg]:fill-current";

/**
 * Floating WhatsApp shortcut pinned to the bottom-right corner of the
 * viewport. With a single channel it links straight to WhatsApp; with
 * several it toggles the chooser popup (opened upward). Channels come
 * exclusively from `contact.whatsapps` in data.ts.
 */
export function FloatingWhatsApp() {
  return (
    <div class="fixed right-4.5 bottom-4.5 z-40 md:right-6 md:bottom-6">
      {/* The bounce wrapper keeps the ping ring and the CTA moving as one
          unit so the ring stays aligned with the button. `isolate` keeps
          the ring's -z-10 inside this wrapper's stacking context. */}
      <div class="relative isolate inline-flex animate-float-bounce motion-reduce:animate-none">
        <span
          aria-hidden="true"
          class="pointer-events-none absolute inset-1.5 -z-10 animate-ripple rounded-full bg-mm-green motion-reduce:animate-none"
        />
        <WhatsAppCta
          class={CTA_CLASS}
          linkAriaLabel={contact.whatsapps[0].label}
          triggerAriaLabel="Contactar por WhatsApp"
          popupClass="absolute inset-auto right-0 bottom-full m-0 mb-3 w-60"
        >
          <WhatsAppIcon />
        </WhatsAppCta>
      </div>
    </div>
  );
}
