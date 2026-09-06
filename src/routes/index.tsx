import { createFileRoute } from "@tanstack/solid-router";

import { HomePage } from "../components/home/home-page";

// Canonical production origin for absolute social/canonical URLs.
// Configured via VITE_SITE_URL in .env (see .env.example).
const SITE_URL = import.meta.env.VITE_SITE_URL;

const SITE_TITLE = "Inmobiliaria M&M";
const SITE_DESCRIPTION =
  "Accede a los portales y servicios de Organización Inmobiliaria M&M LTDA en Bogotá.";
const OG_IMAGE = `${SITE_URL}/og-image.svg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Inmobiliaria M&M" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:locale", content: "es_CO" },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Organización Inmobiliaria M&M LTDA",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: `${SITE_URL}/` },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Home,
});

function Home() {
  return <HomePage />;
}
