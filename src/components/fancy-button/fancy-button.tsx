import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import type { VariantProps } from "../ui/utils";
import { cva } from "../ui/utils";

const fancyButtonVariants = cva({
  base: "px-4 py-2 rounded font-bold text-white",
  variants: {
    intent: {
      primary: "bg-blue-500 hover:bg-blue-700",
      secondary: "bg-red-500 hover:bg-red-700",
    },
    loading: {
      true: "opacity-50 cursor-wait",
      false: "",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    intent: "primary",
    loading: false,
  },
});

interface FancyButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fancyButtonVariants> {}

const FancyButton = forwardRef<HTMLButtonElement, FancyButtonProps>(
  ({ intent, loading, disabled, type, ...props }, ref) => (
    <button
      type={type ?? "button"}
      disabled={disabled || loading}
      className={fancyButtonVariants({ intent, disabled, loading })}
      {...props}
      ref={ref}
    />
  ),
);

FancyButton.displayName = "Button";

export { FancyButton };
export type { FancyButtonProps };

