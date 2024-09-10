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
            <Label htmlFor="message">{t("waitingListForm.messageLabel")}</Label>
            <textarea
              id="message"
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={t("waitingListForm.messagePlaceholder")}
              rows={5}
            />
          </div>
          <p className="mt-2 text-xs">{t("waitingListForm.privacyText")}</p>
          <SubmitButton />
        </>
      }
    >
      <div>
        <Label htmlFor="first_name">{t("waitingListForm.firstName")}</Label>
        <Input
          id="first_name"
          type="text"
          placeholder={t("waitingListForm.firstNamePlaceholder")}
          required
        />
      </div>
      <div>
        <Label htmlFor="last_name">{t("waitingListForm.lastName")}</Label>
        <Input
          id="last_name"
          type="text"
          placeholder={t("waitingListForm.lastNamePlaceholder")}
          required
        />
      </div>
      <div>
        <Label htmlFor="company_name">{t("waitingListForm.companyName")}</Label>
        <Input
          id="company_name"
          type="text"
          placeholder={t("waitingListForm.companyNamePlaceholder")}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">{t("waitingListForm.email")}</Label>
        <Input
          id="email"
          type="text"
          placeholder={t("waitingListForm.emailPlaceholder")}
          required
        />
      </div>
      <div>
        <Label htmlFor="number">{t("waitingListForm.phoneNumber")}</Label>
        <Input
          id="number"
          type="number"
          placeholder={t("waitingListForm.phoneNumberPlaceholder")}
          required
        />
      </div>
      <div>
        <Label htmlFor="sell">{t("waitingListForm.sell")}</Label>
        <Input
          id="sell"
          type="text"
          placeholder={t("waitingListForm.sellPlaceholder")}
          required
        />
      </div>
    </Form>
  );
};

WaitingListForm.displayName = "ContactPage";

export { WaitingListForm };
