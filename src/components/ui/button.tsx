import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90  dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-primary hover:text-primary-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-8 rounded-full",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  asChild?: boolean;
};

type ButtonComponent = "button" | "link" | React.ElementType;

type LinkButtonProps = {
  component: "link";
  href: string;
};

type RegularButtonProps<T extends React.ElementType> = {
  component?: Exclude<T, "link">;
};

type ButtonProps<T extends ButtonComponent> = (T extends "link"
  ? LinkButtonProps
  : RegularButtonProps<T>) &
  ButtonBaseProps &
  React.ComponentPropsWithoutRef<T>;

function Button<T extends ButtonComponent = "button">({
  component,
  className,
  variant = "default",
  size = "default",
  asChild = false,
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps<T>) {
  const Comp = asChild
    ? Slot
    : component === "link"
      ? Link
      : component || "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {startIcon && (
        <span
          data-slot="start-icon"
          className="inline-flex shrink-0 items-center"
        >
          {startIcon}
        </span>
      )}

      {children}

      {endIcon && (
        <span
          data-slot="end-icon"
          className="inline-flex shrink-0 items-center"
        >
          {endIcon}
        </span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
