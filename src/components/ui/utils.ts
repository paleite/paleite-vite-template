import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

const { cva, cx, compose } = defineConfig({
  hooks: { onComplete: (className) => twMerge(className) },
});

export type { CVA, VariantProps } from "cva";
export { cx as cn, compose, cva };
