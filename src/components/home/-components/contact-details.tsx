import { cn } from "cn";
import { For } from "solid-js";

import { ContactChannels } from "./contact-channels";
import { contact } from "./data";

/**
 * Contact information block: city, phone numbers, email and the social
 * channels row. Shared by the header drawer footer and the page footer so
 * the same details appear in both places.
 */
export function ContactDetails(props: { class?: string }) {
  return (
    <address
      class={cn(
        "flex flex-col gap-2.5 not-italic [&_a]:no-underline",
        props.class,
      )}
    >
      <span>{contact.city}</span>
      <For each={contact.phones}>
        {(phone) => <a href={`tel:${phone.value}`}>{phone.display}</a>}
      </For>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <ContactChannels class="flex gap-2 border-t border-white/15 pt-3" />
    </address>
  );
}
