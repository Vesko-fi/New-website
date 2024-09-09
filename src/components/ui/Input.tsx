import { HtmlHTMLAttributes, HTMLInputTypeAttribute } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputTypeAttribute> {
  Name?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      type={props.type}
      id="first_name"
      className={className}
      placeholder="John"
      required
    />
  );
};
Input.displayName = "Input";

export { Input };
