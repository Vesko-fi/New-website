import { Button } from "@components/ui/Button";

const ContactForm: React.FC = () => {
  return (
    <form>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <Button variant="outline" size="lg">
          OKA
        </Button>
      </div>
    </form>
  );
};
ContactForm.displayName = "ContactPage";

export { ContactForm };
