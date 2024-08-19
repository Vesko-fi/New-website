import { AnchorHTMLAttributes } from "react";

import { cn } from "@utils/cn";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button";

interface LinkProps
  extends VariantProps<typeof buttonVariants>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  variant = "link",
  size = "sm",
  className,
  ...props
}) => {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

Link.displayName = "Link";

export { Link };
