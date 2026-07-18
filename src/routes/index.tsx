import { createFileRoute } from "@tanstack/solid-router";

import { HomePage } from "../components/home/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inmobiliaria M&M | Gestión inmobiliaria en Bogotá" },
      {
        name: "description",
        content:
          "Accede a los portales y servicios de Organización Inmobiliaria M&M LTDA en Bogotá.",
      },
      {
        property: "og:title",
        content: "Inmobiliaria M&M | Gestión inmobiliaria en Bogotá",
      },
      {
        property: "og:description",
        content:
          "Accede a los portales y servicios de Organización Inmobiliaria M&M LTDA en Bogotá.",
      },
      { property: "og:locale", content: "es_CO" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Inmobiliaria M&M | Gestión inmobiliaria en Bogotá",
      },
      {
        name: "twitter:description",
        content:
          "Accede a los portales y servicios de Organización Inmobiliaria M&M LTDA en Bogotá.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return <HomePage />;
}
