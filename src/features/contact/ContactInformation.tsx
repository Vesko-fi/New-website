import { useTranslation } from "react-i18next";

const ContactInformation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold">
        <span className="text-accent1">{t("contactInformation.contact")}</span>{" "}
        {t("contactInformation.us")}
      </h1>
      <p className="mb-4 mt-10 font-bold">
        {t("contactInformation.formPrompt")}
      </p>
      <p className="mb-6">{t("contactInformation.helpText")}</p>

      <p className="mb-6">
        {t("contactInformation.emailPrompt")}{" "}
        <a href="mailto:support@example.com" className="text-blue-500">
          support@example.com
        </a>{" "}
        {t("contactInformation.phoneText")}
      </p>

      <p className="mb-6">{t("contactInformation.privacyText")}</p>

      <p className="mb-6">{t("contactInformation.thankYouText")} </p>
    </div>
  );
};
ContactInformation.displayName = "ContactPage";

export { ContactInformation };
