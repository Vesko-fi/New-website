import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@utils/cn";

const buttonVariants = cva(
  "rounded-md text-sm font-medium inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        primary: "bg-accent1 text-background hover:bg-accent1-90",
        secondary: "bg-secondary-10 hover:bg-secondary-20",
        ghost: "hover:bg-accent1-10 hover:text-accent1",
        link: "text-primary underline-offset-0 hover:underline-offset-4 hover:underline hover:text-accent1",
        outline:
          "border border-accent1-10 text-accent1 hover:border-accent1-40",
      },
      size: {
        sm: "px-3 py-1.5",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
