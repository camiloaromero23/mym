import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type JSX } from "solid-js";

export const buttonVariants = cva(
  "inline-flex items-center justify-center disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        outline:
          "gap-2.5 rounded-xl border-[1.5px] border-mm-navy bg-transparent px-[calc(1.75rem-1.5px)] py-[calc(1rem-1.5px)] text-[0.9375rem] font-bold text-mm-navy opacity-72",
        navy:
          "gap-2 rounded-[0.625rem] border-0 bg-mm-navy px-[1.375rem] py-3 text-sm font-bold text-white opacity-72",
        social:
          "size-9 rounded-full border border-white/15 bg-white/10 font-inherit text-base text-white/85 opacity-50",
      },
    },
    defaultVariants: {
      variant: "navy",
    },
  },
);

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["class", "variant"]);

  return (
    <button
      class={cn(buttonVariants({ variant: local.variant }), local.class)}
      {...others}
    />
  );
}
