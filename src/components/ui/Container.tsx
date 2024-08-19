import { cn } from "@utils/cn";
import { HTMLProps } from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("max-w-custom-container mx-auto", className)}
      {...props}
    />
  );
};
