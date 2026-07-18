import { TanStackDevtools } from "@tanstack/solid-devtools";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/solid-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/solid-router-devtools";
import "@fontsource/inter/400.css";
import { Suspense } from "solid-js";
import { HydrationScript } from "solid-js/web";

import styleCss from "../styles.css?url";

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [{ rel: "stylesheet", href: styleCss }],
  }),
  shellComponent: RootComponent,
});

function RootComponent() {
  return (
    <html lang="es">
      <head>
        <HydrationScript />
        <HeadContent />
      </head>
      <body class="isolate">
        <Suspense>
          <Outlet />
          {import.meta.env.DEV && typeof window !== "undefined" && (
            <TanStackDevtools
              config={{
                position: "bottom-right",
                openHotkey: ["CtrlOrMeta", "`"],
                triggerHidden: true,
                hideUntilHover: true,
              }}
              plugins={[
                {
                  name: "TanStack Router",
                  render: <TanStackRouterDevtoolsPanel />,
                },
              ]}
            />
          )}
        </Suspense>
        <Scripts />
      </body>
    </html>
  );
}
