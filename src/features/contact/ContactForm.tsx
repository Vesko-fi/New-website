import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";

const ContactForm: React.FC = () => {
  return (
    <div className="bg- rounded-lg border border-green-700 p-4">
      <form>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
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
            <Input
              id="number"
              type="number"
              placeholder="Phone number"
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Write your message here</Label>
            <textarea
              id="message"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Message"
            />
          </div>
        </div>
        <p className="text-xs">
          We respect your privacy. By submitting this form, you agree that we
          may use this information with our privacy policy.
        </p>{" "}
        <Button className="mt-2">Submit</Button>
      </form>
    </div>
  );
};
ContactForm.displayName = "ContactPage";

export { ContactForm };
