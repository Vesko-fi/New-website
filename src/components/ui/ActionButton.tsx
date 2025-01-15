import { cn } from "@utils/cn";
import React from "react";

interface ActionButtonProps {
  buttonText: string;
  description: string;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  buttonText,
  description,
  onClick,
  href,
  isExternal = false,
  className,
}) => {
  const buttonClasses = cn(
    "h-14 w-full md:w-60 lg:w-72 rounded-full bg-red-400 transition-all hover:bg-red-500",
    className
  );

  return (
    <div className="flex flex-col items-center gap-4">
      {href ? (
        <a
          href={href}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          <button className={buttonClasses}>
            <p className="text-lg font-bold text-black sm:text-xl lg:text-2xl">
              {buttonText}
            </p>
          </button>
        </a>
      ) : (
        <button className={buttonClasses} onClick={onClick}>
          <p className="cursor-pointer text-lg font-bold text-black sm:text-xl lg:text-2xl">
            {buttonText}
          </p>
        </button>
      )}
      <p className="text-center text-sm text-white sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default ActionButton;
