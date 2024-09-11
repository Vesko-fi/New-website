import { useTranslation } from "react-i18next";

const DemoInformation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold text-accent1">{t("demo.header")}</h1>
      <p className="mb-4 mt-10 font-bold">{t("demo.subheader")}</p>
      <ul className="mt-8 list-disc space-y-4 pl-5">
        <li>{t("demo.benefit1")}</li>
        <li>{t("demo.benefit2")}</li>
        <li>{t("demo.benefit3")}</li>
      </ul>
    </div>
  );
};
DemoInformation.displayName = "DemoInformation";

export { DemoInformation };
