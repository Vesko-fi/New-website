import { Card } from "@components/ui/Card";
import { useTranslation } from "react-i18next";

interface options {
  icon: string;
  heading: string;
  text: string;
}

const HowOmnichannelWork: React.FC = () => {
  const { t } = useTranslation();

  const options: Array<options> = t("vendors.howOmnichannelWorks.options", {
    returnObjects: true,
  });

  return (
    <>
      <div className="space-y-2 text-balance text-center">
        <h1 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.whyVesko.heading")}?
        </h1>
        <p className="text-sm lg:text-base">{t("vendors.whyVesko.text")}</p>
      </div>
      <h1 className="p-12 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
        {t("vendors.howOmnichannelWorks.heading")}?
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((option, index) => (
          <Card
            key={index}
            icon={option.icon}
            title={t(option.heading)}
            description={t(option.text)}
          />
        ))}
      </div>
    </>
  );
};

HowOmnichannelWork.displayName = "HowOmnichannelWork";
export { HowOmnichannelWork };
