import DrawerPrimitive, { type ContentProps } from "@corvu/drawer";
import { splitProps, type JSX } from "solid-js";

import { cn } from "@/lib/utils";

export const Drawer = DrawerPrimitive;
export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerClose = DrawerPrimitive.Close;
export const DrawerLabel = DrawerPrimitive.Label;
export const DrawerDescription = DrawerPrimitive.Description;

type DrawerContentProps = ContentProps & JSX.HTMLAttributes<HTMLDivElement>;

export function DrawerContent(props: DrawerContentProps) {
  const [local, others] = splitProps(props, ["children", "class"]);
  const drawer = DrawerPrimitive.useContext();

  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Overlay
        class="fixed inset-0 z-40 data-transitioning:transition-colors data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          "background-color": `rgb(0 0 0 / ${0.5 * drawer.openPercentage()})`,
        }}
      />
      <DrawerPrimitive.Content
        class={cn(
          "fixed inset-y-0 right-0 z-50 flex h-dvh h-screen w-[min(100vw,24rem)] flex-col overflow-hidden bg-white pt-5 shadow-[-0.75rem_0_2rem_rgb(0_0_0/20%)] outline-none data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  );
}
