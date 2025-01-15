import { useTranslation } from "react-i18next";
import { Card } from "@components/ui/Card";

const Benefits: React.FC = () => {
  const { t } = useTranslation();

  const options = [
    {
      icon: "box",
      title: `${t("vendors.benefits.option1.heading")}`,
      description: `${t("vendors.benefits.option1.text")}`,
    },
    {
      icon: "check-square",
      title: `${t("vendors.benefits.option2.heading")}`,
      description: `${t("vendors.benefits.option2.text")}`,
    },
    {
      icon: "trending-up",
      title: `${t("vendors.benefits.option3.heading")}`,
      description: `${t("vendors.benefits.option3.text")}`,
    },
    {
      icon: "bar-chart",
      title: `${t("vendors.benefits.option3.heading")}`,
      description: `${t("vendors.benefits.option4.text")}`,
    },
  ];

  return (
    <>
      {/**
       *
       * A Marketplace, But it's Your Own Online Store and options
       *
       */}
      <div className="text-balance py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.benefits.heading")}
          <span className="text-accent1">
            {t("vendors.benefits.headingSpan")}
          </span>
        </h2>
        <p className="text-balance text-sm lg:text-base">
          {t("vendors.benefits.text")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`${index === options.length - 4 || index === options.length - 2 ? "lg:mt-16" : ""}`}
            >
              <Card
                icon={option.icon}
                title={t(option.title)}
                description={t(option.description)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

Benefits.displayName = "Benefits";
export { Benefits };
