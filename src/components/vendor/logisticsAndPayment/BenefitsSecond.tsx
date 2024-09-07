import { Card } from "@components/ui/Card";
import { useTranslation } from "react-i18next";

const BenefitsSecond: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-balance py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.onlineStoreHeading1")}
          <span className="text-accent1">
            {t("vendors.onlineStoreHeadingSpan")}
          </span>
        </h1>
        <p className="text-balance text-sm lg:text-base">
          {t("vendors.onlineStoreText")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:mt-16">
          <Card
            icon="box"
            title={t("vendors.benefitsOption1Heading")}
            description={t("vendors.benefitsOption1Text")}
          />
        </div>
        <div>
          <Card
            icon="check-square"
            title={t("vendors.benefitsOption2Heading")}
            description={t("vendors.benefitsOption2Text")}
          />
        </div>
        <div className="lg:mt-16">
          <Card
            icon="trending-up"
            title={t("vendors.benefitsOption3Heading")}
            description={t("vendors.benefitsOption3Text")}
          />
        </div>
        <div>
          <Card
            icon="bar-chart"
            title={t("vendors.benefitsOption4Heading")}
            description={t("vendors.benefitsOption4Text")}
          />
        </div>
      </div>
    </>
  );
};

BenefitsSecond.displayName = "BenefitsSecond";
export { BenefitsSecond };
