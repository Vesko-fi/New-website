import { useTranslation } from "react-i18next";
import { Card } from "@components/ui/Card";

const HowOmnichannelWork: React.FC = () => {
  const { t } = useTranslation();

  const options = [
    {
      icon: "box",
      title: `${t("vendors.howOmnichannelWorks.option1.heading")}`,
      description: `${t("vendors.howOmnichannelWorks.option1.text")}`,
    },
    {
      icon: "check-square",
      title: `${t("vendors.howOmnichannelWorks.option2.heading")}`,
      description: `${t("vendors.howOmnichannelWorks.option2.text")}`,
    },
    {
      icon: "trending-up",
      title: `${t("vendors.howOmnichannelWorks.option3.heading")}`,
      description: `${t("vendors.howOmnichannelWorks.option3.text")}`,
    },
    {
      icon: "bar-chart",
      title: `${t("vendors.howOmnichannelWorks.option4.heading")}`,
      description: `${t("vendors.howOmnichannelWorks.option4.text")}`,
    },
  ];

  return (
    <>
      <div className="space-y-2 text-balance pb-16 pt-20 text-center">
        <h2 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.whyVesko.heading")}?
        </h2>
        <p className="text-sm lg:text-base">{t("vendors.whyVesko.text")}</p>
      </div>
      <h2 className="mb-8 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
        {t("vendors.howOmnichannelWorks.heading")}?
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((option, index) => (
          <Card
            key={index}
            icon={option.icon}
            title={t(option.title)}
            description={t(option.description)}
          />
        ))}
      </div>
    </>
  );
};

HowOmnichannelWork.displayName = "HowOmnichannelWork";
export { HowOmnichannelWork };
