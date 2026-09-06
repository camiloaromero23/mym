import { For, type JSX } from "solid-js";

import { Button } from "@/components/button";

import { ariaLabels, socialLinks } from "./data";

interface ContactChannelsProps {
  /** Layout classes for the nav container (gap, borders, visibility). */
  class?: string;
  /** Extra elements appended after the channel icons (e.g. badges). */
  children?: JSX.Element;
}

/**
 * Social channel row shared by the footer (mobile and desktop variants)
 * and the header drawer contact nav. WhatsApp channels live in the
 * dedicated contact section and the floating button instead.
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
