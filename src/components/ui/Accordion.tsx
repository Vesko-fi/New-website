import { HTMLProps, useState } from "react";
import { Icon } from "./Icon";

interface AccordionProps extends HTMLProps<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`${isOpen ? "bg-accent1-10" : "bg-white"} mt-4 overflow-hidden rounded-md p-6 first:mt-0 sm:px-10 sm:py-8`}
    >
      <div
        className="flex cursor-pointer justify-between"
        onClick={toggleAccordion}
      >
        <div className="text-xl font-semibold">{title}</div>
        <div
          className={`${isOpen ? "rotate-180" : ""} transition-all duration-200`}
        >
          <Icon icon="arrow-up" />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pt-6 text-sm transition-all duration-200 md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

Accordion.displayName = "Accordion";

export { Accordion };
