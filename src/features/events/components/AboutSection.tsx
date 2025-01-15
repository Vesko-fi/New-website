import { Card } from "@components/ui/Card";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const options = [
    {
      title: `${t("events.about.option1.title")}`,
      description: `${t("events.about.option1.description")}`,
    },
    {
      title: `${t("events.about.option2.title")}`,
      description: `${t("events.about.option2.description")}`,
    },
    {
      title: `${t("events.about.option3.title")}`,
      description: `${t("events.about.option3.description")}`,
    },
  ];

  return (
    <div className="bg-neutral-950 pb-8 text-white">
      <div className="container mx-auto space-y-10 py-8 md:px-12 lg:px-24">
        <h2 className="mb-8 text-center text-4xl font-bold">
          {t("events.about.heading")}
        </h2>

        <p className="mb-6 text-center text-sm leading-relaxed md:text-lg">
          {t("events.about.subheading")}
        </p>
        <p className="mb-6 text-center text-sm leading-relaxed lg:text-lg">
          {t("events.about.p2Text1")}
          <span className="text-lg font-bold"> SOHJO </span>
          {t("events.about.p2Text2")}
          <strong> {t("events.about.technology")}</strong>,{" "}
          <strong> {t("events.about.customer")}</strong>,{" "}
          {t("events.about.and")}
          <strong> {t("events.about.students")}</strong>.{" "}
          {t("events.about.p2Text3")}
        </p>
        <p className="mb-6 text-center text-sm leading-relaxed md:text-lg">
          {t("events.about.p3Text")}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {options.map((option, index) => (
            <Card
              key={index}
              title={option.title}
              description={option.description}
              className="flex-wrap space-y-4 border bg-transparent text-center text-neutral-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

AboutSection.displayName = "AboutSection";
export { AboutSection };
