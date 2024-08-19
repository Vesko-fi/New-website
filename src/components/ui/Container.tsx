import { HTMLProps } from "react";

import { cn } from "@utils/cn";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("mx-auto max-w-custom-container", className)}
      {...props}
    />
  );
};

Container.displayName = "Container";

export { Container };
