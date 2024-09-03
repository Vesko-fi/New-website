import { Card } from "@components/ui/Card";
import { useTranslation } from "react-i18next";

const BenefitsSecond: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-4">
        <div className="flex flex-col items-center p-24">
          <h1 className="mb-4 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("vendors.onlineStoreHeading1")}
            <span className="text-accent1">
              {t("vendors.onlineStoreHeadingSpan")}
            </span>
          </h1>
          <p className="text-balance text-center text-sm">
            {t("vendors.onlineStoreText")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="odd:mt-16">
            <Card
              icon="box"
              title={t("vendors.benefitsOption1Heading")}
              description={t("vendors.benefitsOption1Text")}
            />
          </div>
          <div className="">
            <Card
              icon="check-square"
              title={t("vendors.benefitsOption2Heading")}
              description={t("vendors.benefitsOption2Text")}
            />
          </div>
          <div className="odd:mt-16">
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
      </div>
    </>
  );
};

BenefitsSecond.displayName = "BenefitsSecond";
export { BenefitsSecond };
