import { cn } from "@utils/cn";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "filled" | "outlined";
  size?: "sm";
  color?: "primary";
}

const buttonVariants = cva("rounded-sm transition-colors duration-200", {
  variants: {
    variant: {
      filled: "",
      outlined: "border border-blue-500",
      text: "",
    },
    size: {
      sm: "text-sm px-2 py-1",
    },
    color: {
      primary: "bg-accent1 hover:bg-accent1-90 text-background",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "sm",
    color: "primary",
  },
});

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  color,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, color, className }))}
      {...props}
    />
  );
};
