import { useTranslation } from "react-i18next";

import { ToggleLocale } from "@components/ToggleLocale";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ToggleLocale />
      <h1>{t("notFoundPage.error")}</h1>
      <h2>{t("notFoundPage.heading")}</h2>
    </>
  );
};

export default NotFoundPage;
