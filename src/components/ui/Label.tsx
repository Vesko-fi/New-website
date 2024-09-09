import { HtmlHTMLAttributes, HTMLInputTypeAttribute } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputTypeAttribute> {
  Name?: string;
}

const Label: React.FC<InputProps> = ({ className, ...props }) => {
  return <label className={className}>{props.id}</label>;
};
Label.displayName = "Input";

export { Label };
