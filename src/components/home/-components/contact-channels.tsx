import { Link } from "@tanstack/solid-router";
import { For, type JSX } from "solid-js";

import { Button } from "@/components/button";

import { ariaLabels, contact, socialLinks, whatsappUrlFor } from "./data";
import { WhatsAppIcon } from "./icons/whatsapp-icon";

interface ContactChannelsProps {
  /** Layout classes for the nav container (gap, borders, visibility). */
  class?: string;
  /** Extra elements appended after the channel icons (e.g. badges). */
  children?: JSX.Element;
}

/**
 * Social + WhatsApp channel row shared by the footer (mobile and desktop
 * variants) and the header drawer contact nav.
 */
export function ContactChannels(props: ContactChannelsProps) {
  return (
    <nav
      class={props.class}
      aria-label={ariaLabels.contactChannels}
    >
      <For each={socialLinks.slice(0, 2)}>
        {(social) => (
          <Button
            variant="social"
            type="button"
            aria-label={social.label}
            disabled
          >
            {social.glyph}
          </Button>
        )}
      </For>
      <For each={contact.whatsapps}>
        {(whatsapp) => (
          <Link
            class="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 no-underline hover:bg-white/20 [&>svg]:fill-current"
            to={whatsappUrlFor(whatsapp.number)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={whatsapp.label}
          >
            <WhatsAppIcon />
          </Link>
        )}
      </For>
      <For each={socialLinks.slice(2)}>
        {(social) => (
          <Button
            variant="social"
            type="button"
            aria-label={social.label}
            disabled
          >
            {social.glyph}
          </Button>
        )}
      </For>
      {props.children}
    </nav>
  );
}
