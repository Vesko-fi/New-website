import { useTranslation } from "react-i18next";

import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";

const DemoForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form
      additional={
        <>
          <div>
            <Label htmlFor="message">
              {t("contactForm.messagePlaceholder")}
            </Label>
            <textarea
              id="message"
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={t("contactForm.messagePlaceholder")}
              rows={5}
            />
          </div>
          <p className="mt-2 text-xs">{t("contactForm.privacyText")}</p>{" "}
          <SubmitButton />
        </>
      }
    >
      <div>
        <Label htmlFor="first_name">{t("contactForm.firstName")}</Label>
        <Input id="first_name" type="text" placeholder="John" required />
      </div>
      <div>
        <div>
          <Label htmlFor="last_name">{t("contactForm.lastName")}</Label>
          <Input id="last_name" type="text" placeholder="Doe" required />
        </div>
      </div>
      <div>
        <div>
          <Label htmlFor="Company name">{t("contactForm.companyName")}</Label>
          <Input
            id="text"
            type="text"
            placeholder={t("contactForm.companyName")}
            required
          />
        </div>
      </div>
      <div>
        <div>
          <Label htmlFor="email">{t("contactForm.email")}</Label>
          <Input
            id="email"
            type="text"
            placeholder={t("contactForm.email")}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="number">{t("contactForm.contactNumber")}</Label>
        <Input
          id="number"
          type="number"
          placeholder={t("contactForm.contactNumber")}
          required
        />
      </div>{" "}
      <div>
        <Label htmlFor="city">{t("contactForm.city")}</Label>
        <Input
          id="city"
          type="text"
          placeholder={t("contactForm.city")}
          required
        />
      </div>
    </Form>
  );
};
DemoForm.displayName = "DemoForm";

export { DemoForm };
