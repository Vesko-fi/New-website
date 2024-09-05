import { Card } from "@components/ui/Card";
import { useTranslation } from "react-i18next";

const HowOmnichannelWork: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1 className="p-12 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.howOmnichannelWorkHeading")}?
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          icon="box"
          title={t("vendors.option1Heading")}
          description={t("vendors.option1Text")}
        />
        <Card
          icon="check-square"
          title={t("vendors.option2Heading")}
          description={t("vendors.option2Text")}
        />
        <Card
          icon="cart"
          title={t("vendors.option3Heading")}
          description={t("vendors.option3Text")}
        />
        <Card
          icon="rotate-ccw"
          title={t("vendors.option4Heading")}
          description={t("vendors.option4Text")}
        />
      </div>
    </>
  );
};

HowOmnichannelWork.displayName = "HowOmnichannelWork";
export { HowOmnichannelWork };
