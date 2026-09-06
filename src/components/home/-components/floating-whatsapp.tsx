import { contact } from "./data";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { WhatsAppCta } from "./whatsapp-chooser";

const CTA_CLASS =
  "inline-flex size-14 items-center justify-center rounded-full bg-mm-green text-white no-underline shadow-[0_0.5rem_1.5rem_-0.625rem_rgb(63_184_113/45%)] hover:bg-[#278e53] [&>svg]:size-7 [&>svg]:fill-current";

/**
 * Floating WhatsApp shortcut pinned to the bottom-right corner of the
 * viewport. With a single channel it links straight to WhatsApp; with
 * several it toggles the chooser popup (opened upward). Channels come
 * exclusively from `contact.whatsapps` in data.ts.
 */
export function FloatingWhatsApp() {
  return (
    <div class="fixed right-4.5 bottom-4.5 z-40 md:right-6 md:bottom-6">
      <WhatsAppCta
        class={CTA_CLASS}
        linkAriaLabel={contact.whatsapps[0].label}
        triggerAriaLabel="Contactar por WhatsApp"
        popupClass="absolute inset-auto right-0 bottom-full m-0 mb-3 w-60"
      >
        <WhatsAppIcon />
      </WhatsAppCta>
    </div>
  );
}
