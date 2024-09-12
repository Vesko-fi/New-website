import { HtmlHTMLAttributes, HTMLInputTypeAttribute } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputTypeAttribute> {
  Name?: string;
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, required }) => {
  return (
    <input
      type={type}
      id={id}
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder={placeholder}
      required={required}
    />
  );
};
Input.displayName = "Input";

export { Input };
