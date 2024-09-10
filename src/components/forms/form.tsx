interface FormProps {
  children?: React.ReactNode;
  additional?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, additional }) => {
  return (
    <div className="rounded-lg border bg-white p-6 border-accent1-40">
      <form>
        <div className="mb-6 grid gap-4 md:grid-cols-2">{children}</div>
        {additional}
      </form>
    </div>
  );
};
Form.displayName = "ContactPage";

export { Form };
