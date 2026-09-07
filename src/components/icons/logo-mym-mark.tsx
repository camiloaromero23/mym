import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { splitProps, type JSX } from "solid-js";

const logoMarkVariants = cva("[--logo-window:white]", {
  variants: {
    variant: {
      navy: "text-mm-navy [--logo-window:white]",
      bone: "text-mm-bone [--logo-window:var(--color-mm-navy)]",
    },
  },
  defaultVariants: {
    variant: "navy",
  },
});

export type LogoMyMMarkProps = JSX.SvgSVGAttributes<SVGSVGElement> &
  VariantProps<typeof logoMarkVariants>;

/**
 * Compact brand mark: the building monogram from `public/favicon.svg`
 * without the white background, so it sits on any surface. Use it where
 * the full `LogoMyM` wordmark is too wide (e.g. the mobile drawer header).
 */
export function LogoMyMMark(props: LogoMyMMarkProps) {
  const [local, rest] = splitProps(props, ["class", "variant"]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 535.55 535.55"
      class={cn(logoMarkVariants({ variant: local.variant }), local.class)}
      {...rest}
    >
      <g transform="translate(0 40.04)">
        <polygon
          fill="currentColor"
          points="0 241.47 268.45 0 535.55 241.47 0 241.47"
        />
        <rect
          fill="currentColor"
          x="416.06"
          y="73.73"
          width="34.62"
          height="381.74"
        />
        <rect
          fill="currentColor"
          x="422.62"
          y="48.39"
          width="19.4"
          height="70.08"
          transform="translate(515.75 -348.89) rotate(90)"
        />
        <rect
          fill="currentColor"
          x="423.67"
          y="410.31"
          width="19.4"
          height="70.08"
          transform="translate(878.72 11.98) rotate(90)"
        />
        <rect
          fill="currentColor"
          x="95.11"
          y="228.47"
          width="19.54"
          height="226.58"
        />
        <rect
          fill="currentColor"
          x="211.74"
          y="332.06"
          width="19.54"
          height="226.58"
          transform="translate(666.86 223.84) rotate(90)"
        />
        <path
          fill="currentColor"
          d="M150.67,260.31l15,18.46,15.07-18.46h13.34v49.18h-14.71v-28.48l-13.27,16.51h-1.15l-13.34-16.51v28.48h-14.28v-49.18h13.34Z"
        />
        <path
          fill="currentColor"
          d="M257.39,340.46c-3.61-3.75-5.41-6.85-5.41-10.67,0-6.56,5.62-13.27,16.66-13.27,10.24,0,15.29,6.92,15.29,12.11,0,4.9-3.32,9.23-9.45,12.4l6.56,7.07c2.09-1.95,3.61-3.75,5.41-7.07h11.75c-2.38,4.62-6.2,10.31-10.53,14.21l10.53,11.1h-16.59l-3.1-3.25c-3.75,2.52-9.09,3.89-14.85,3.89-11.32,0-17.09-5.99-17.09-12.62,0-5.48,3.1-8.58,10.82-13.92ZM265.33,358.34c2.45,0,4.25-.5,6.78-2.16l-8.58-9.09c-2.88,1.8-4.69,3.82-4.69,5.99,0,1.8,1.73,5.26,6.49,5.26ZM274.12,328.92c0-2.31-1.8-4.25-5.05-4.25-3.46,0-4.83,2.16-4.83,3.89,0,1.37,1.01,2.96,4.47,6.49,3.32-1.44,5.41-3.53,5.41-6.13Z"
        />
        <path
          fill="currentColor"
          d="M353.87,367l15,18.46,15.07-18.46h13.34v49.18h-14.71v-28.48l-13.27,16.51h-1.15l-13.34-16.51v28.48h-14.28v-49.18h13.34Z"
        />
        <rect
          class="fill-(--logo-window)"
          x="244.54"
          y="93.42"
          width="17.28"
          height="17.28"
        />
        <rect
          class="fill-(--logo-window)"
          x="270.01"
          y="93.42"
          width="17.28"
          height="17.28"
        />
        <rect
          class="fill-(--logo-window)"
          x="244.54"
          y="114.78"
          width="17.28"
          height="17.28"
        />
        <rect
          class="fill-(--logo-window)"
          x="270.01"
          y="114.78"
          width="17.28"
          height="17.28"
        />
      </g>
    </svg>
  );
}
