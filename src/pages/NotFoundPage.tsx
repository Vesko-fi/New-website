import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="font-bold">{t("notFoundPage.error")}</h1>
      <h2>{t("notFoundPage.heading")}</h2>
    </>
  );
};

export default NotFoundPage;
