import { cn } from "@utils/cn";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "filled" | "outlined";
  size?: "sm";
}

const buttonVariants = cva("", {
  variants: {
    variant: {
      filled: "bg-accent1-90",
      outlined: "border border-blue-500",
    },
    size: {
      sm: "text-sm",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "sm",
  },
});

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
