import { HTMLProps } from "react";

import { cn } from "@utils/cn";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("mx-auto max-w-custom-container px-2 md:px-4", className)}
      {...props}
    />
  );
};

Container.displayName = "Container";

export { Container };
