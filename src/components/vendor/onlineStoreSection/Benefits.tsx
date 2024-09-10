import { useTranslation } from "react-i18next";
import { Card } from "@components/ui/Card";

interface options {
  icon: string;
  heading: string;
  text: string;
}

const Benefits: React.FC = () => {
  const { t } = useTranslation();

  const options: Array<options> = t("vendors.benefits.options", {
    returnObjects: true,
  });

  return (
    <>
      <div className="text-balance py-20 text-center">
        <h1 className="mb-2 text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.benefits.heading")}
        </h1>
        <p className="text-balance text-center text-sm lg:text-base">
          {t("vendors.benefits.text")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((option, index) => {
          return (
            <Card
              key={index}
              icon={option.icon}
              title={t(option.heading)}
              description={t(option.text)}
            />
          );
        })}
      </div>
    </>
  );
};

Benefits.displayName = "Benefits";
export { Benefits };
