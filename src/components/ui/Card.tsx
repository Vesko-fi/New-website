import { HTMLProps, ReactNode } from "react";

import { cn } from "@utils/cn";
import { Icon } from "./Icon";

interface CardProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  icon?: string | ReactNode;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ className, icon, title, description }) => {
  return (
    <div className={cn("rounded-md bg-white p-6", className)}>
      {icon && (
        <div className="mb-6 flex size-14 items-center justify-center rounded-md bg-accent1-20">
          {typeof icon === "string" ? <Icon icon={icon} /> : icon}
        </div>
      )}
      {title && (
        <div className="text-xl font-semibold leading-5 xl:text-2xl">
          {title}
        </div>
      )}
      {description && (
        <div className="mt-2 text-sm lg:text-base">{description}</div>
      )}
    </div>
  );
};

Card.displayName = "Card";

export { Card };
