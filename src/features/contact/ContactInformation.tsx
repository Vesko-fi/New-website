import { useTranslation } from "react-i18next";

const ContactInformation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold">
        <span className="text-accent1">{t("contact.header")}</span>{" "}
      </h1>
      <p className="mb-4 mt-10 font-bold">{t("contact.subheader")}</p>

      <ul className="mt-8 list-disc space-y-4 pl-5">
        <li>
          {t("contact.demoRequest")}
          <a href="/demo" className="text-blue-500 underline">
            {t("contact.link")}
          </a>
        </li>
        <li>
          {t("contact.waitlistPrompt")} ,
          <a href="/waiting-list" className="text-blue-500 underline">
            {t("contact.waitlist")}
          </a>
          {t("contact.now")}!
        </li>
      </ul>
    </div>
  );
};
ContactInformation.displayName = "ContactPage";

export { ContactInformation };
