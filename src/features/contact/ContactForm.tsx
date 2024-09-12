import { useTranslation } from "react-i18next";

import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form
      additional={
        <>
          <div>
            <Label htmlFor="message">{t("contact.messagePlaceholder")}</Label>
            <textarea
              id="message"
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={t("contact.messagePlaceholder")}
              rows={5}
            />
          </div>
          <SubmitButton />
        </>
      }
    >
      <div>
        <Label htmlFor="first_name">{t("contact.firstName")}</Label>
        <Input id="first_name" type="text" placeholder="John" required />
      </div>
      <div>
        <div>
          <Label htmlFor="last_name">{t("contact.lastName")}</Label>
          <Input id="last_name" type="text" placeholder="Doe" required />
        </div>
      </div>
      <div>
        <div>
          <Label htmlFor="email">{t("contact.email")}</Label>
          <Input
            id="email"
            type="text"
            placeholder={t("contact.email")}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="contactInfo">{t("contact.phoneNumber")}</Label>
        <Input
          id="number"
          type="text"
          placeholder={t("contact.phoneNumber")}
          required
        />
      </div>
    </Form>
  );
};
ContactForm.displayName = "ContactPage";

export { ContactForm };
