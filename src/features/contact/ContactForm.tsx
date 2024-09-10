import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";

const ContactForm: React.FC = () => {
  return (
    <Form
      additional={
        <>
          <div>
            <Label htmlFor="message">Write your message here</Label>
            <textarea
              id="message"
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Message"
              rows={5}
            />
          </div>
          <p className="mt-2 text-xs">
            We respect your privacy. By submitting this form, you agree that we
            may use this information with our privacy policy.
          </p>{" "}
          <SubmitButton />
        </>
      }
    >
      <div>
        <Label htmlFor="first_name">First name</Label>
        <Input id="first_name" type="text" placeholder="John" required />
      </div>
      <div>
        <div>
          <Label htmlFor="last_name">Last name</Label>
          <Input id="last_name" type="text" placeholder="Doe" required />
        </div>
      </div>
      <div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" placeholder="email" required />
        </div>
      </div>
      <div>
        <Label htmlFor="number">Contact Number</Label>
        <Input id="number" type="number" placeholder="Phone number" required />
      </div>
    </Form>
  );
};
ContactForm.displayName = "ContactPage";

export { ContactForm };
