import { Form } from "@components/forms/form";
import { SubmitButton } from "@components/forms/SubmitButton";
import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";
import { useTranslation } from "react-i18next";

const WaitingListForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Form
      additional={
        <>
          <div>
            <Label htmlFor="message">{t("waitlist.message")}</Label>
            <textarea
              id="message"
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={t("waitlist.messagePlaceholder")}
              rows={5}
            />
          </div>
          <SubmitButton />
        </>
      }
    >
      <div>
        <Label htmlFor="first_name">{t("waitlist.firstName")}</Label>
        <Input
          id="first_name"
          type="text"
          placeholder={t("waitlist.firstName")}
          required
        />
      </div>
      <div>
        <Label htmlFor="last_name">{t("waitlist.lastName")}</Label>
        <Input
          id="last_name"
          type="text"
          placeholder={t("waitlist.lastName")}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">{t("waitlist.email")}</Label>
        <Input
          id="email"
          type="text"
          placeholder={t("waitlist.email")}
          required
        />
      </div>{" "}
      <div>
        <Label htmlFor="number">{t("waitlist.phoneNumber")}</Label>
        <Input
          id="number"
          type="number"
          placeholder={t("waitlist.phoneNumber")}
          required
        />
      </div>
      <div>
        <Label htmlFor="company_name">{t("waitlist.companyRole")}</Label>
        <Input
          id="company_name"
          type="text"
          placeholder={t("waitlist.companyRole")}
          required
        />
      </div>
      <div>
        <Label htmlFor="sell">{t("waitlist.sell")}</Label>
        <Input
          id="sell"
          type="text"
          placeholder={t("waitlist.sell")}
          required
        />
      </div>
      <div>
        <Label htmlFor="location">{t("waitlist.location")}</Label>
        <Input
          id="sell"
          type="text"
          placeholder={t("waitlist.location")}
          required
        />
      </div>
      <div>
        <Label htmlFor="linkedin">{t("waitlist.linkedin")}</Label>
        <Input
          id="sell"
          type="text"
          placeholder={t("waitlist.linkedin")}
          required
        />
      </div>
    </Form>
  );
};

WaitingListForm.displayName = "ContactPage";

export { WaitingListForm };
