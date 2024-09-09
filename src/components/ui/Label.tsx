interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
};
Label.displayName = "Input";

export { Label };
