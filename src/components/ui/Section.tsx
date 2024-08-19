import { HTMLProps } from "react";

import { cn } from "@utils/cn";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

const Section: React.FC<SectionProps> = ({ className, ...props }) => {
  return <section className={cn("py-6 sm:py-8", className)} {...props} />;
};

Section.displayName = "Section";

export { Section };
