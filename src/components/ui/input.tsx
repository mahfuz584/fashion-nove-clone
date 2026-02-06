import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  classes?: {
    root?: string;
    startIcon?: string;
    endIcon?: string;
  };
};

function Input({ classes, startIcon, endIcon, type, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {startIcon && (
        <span
          className={cn(
            "pointer-events-none absolute left-3 top-[55%] -translate-y-1/2 text-muted-foreground [&_svg]:size-4",
            classes?.startIcon,
          )}
        >
          {startIcon}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-11 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "hover:shadow-sm focus:shadow-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          startIcon && "pl-9",
          endIcon && "pr-9",
          classes?.root,
        )}
        {...props}
      />
      {endIcon && (
        <span
          className={cn(
            "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-4",
            classes?.endIcon,
          )}
        >
          {endIcon}
        </span>
      )}
    </div>
  );
}

export { Input };
