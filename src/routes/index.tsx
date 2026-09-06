import { createFileRoute } from "@tanstack/solid-router";

import { HomePage } from "../components/home/home-page";

// Canonical production origin for absolute social/canonical URLs.
// Configured via VITE_SITE_URL in .env (see .env.example).
const SITE_URL = import.meta.env.VITE_SITE_URL;

const SITE_TITLE = "Inmobiliaria M&M";
const SITE_DESCRIPTION =
  "Accede a los portales y servicios de Organización Inmobiliaria M&M LTDA en Bogotá.";
// Raster (PNG) required: OG crawlers (WhatsApp, Facebook, X, LinkedIn) do not
// render SVG og:image. Canonical 1200x630 card, pre-generated from og-image.svg.
const OG_IMAGE = `${SITE_URL}/og-image.png`;

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
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Organización Inmobiliaria M&M LTDA",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: `${SITE_URL}/` },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "twitter:image:alt",
        content: "Organización Inmobiliaria M&M LTDA",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Home,
});

function Home() {
  return <HomePage />;
}
