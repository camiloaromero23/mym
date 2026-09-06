import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { splitProps, type JSX } from "solid-js";

export const buttonVariants = cva(
  "inline-flex items-center justify-center transition-[background-color,border-color,color,scale] duration-160 ease-out active:scale-97 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        outline:
          "gap-2.5 rounded-xl border-[1.5px] border-mm-navy bg-transparent px-[calc(1.75rem-1.5px)] py-[calc(1rem-1.5px)] text-[0.9375rem] font-bold text-mm-navy opacity-72 hover:border-mm-navy-ink hover:bg-mm-navy/5",
        navy: "gap-2 rounded-[0.625rem] border-0 bg-mm-navy px-[1.375rem] py-3 text-sm font-bold text-white opacity-72 hover:bg-mm-navy-ink",
        social:
          "font-inherit size-9 rounded-full border border-white/15 bg-white/10 text-base text-white/85 opacity-50",
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
