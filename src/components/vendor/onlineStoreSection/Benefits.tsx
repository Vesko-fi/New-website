import { useTranslation } from "react-i18next";
import { Card } from "@components/ui/Card";

const Benefits: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-balance py-20 text-center">
        <h1 className="mb-2 text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.onlineStoreHeading")}
        </h1>
        <p className="text-balance text-center text-sm lg:text-base">
          {t("vendors.onlineStoreText")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          icon="box"
          title={t("vendors.benefitsOption1Heading")}
          description={t("vendors.benefitsOption1Text")}
        />
        <Card
          icon="check-square"
          title={t("vendors.benefitsOption2Heading")}
          description={t("vendors.benefitsOption2Text")}
        />
        <Card
          icon="trending-up"
          title={t("vendors.benefitsOption3Heading")}
          description={t("vendors.benefitsOption3Text")}
        />
        <Card
          icon="bar-chart"
          title={t("vendors.benefitsOption4Heading")}
          description={t("vendors.benefitsOption4Text")}
        />
      </div>
    </>
  );
};

Benefits.displayName = "Benefits";
export { Benefits };
