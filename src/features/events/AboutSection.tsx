import { Card } from "@components/ui/Card";
import { useTranslation } from "react-i18next";

const cardsData = [
  {
    title: "Technology",
    description:
      "Technology drives modern life, evolving rapidly and requiring businesses to adapt quickly to stay competitive in the digital age.",
  },
  {
    title: "Digital Customer",
    description:
      "The Digital Customer theme highlights an often-overlooked topic in many industries: effectively reaching customers through digital channels to drive business growth.",
  },
  {
    title: "Students",
    description:
      "Joensuu is home to over 20,000 students, including many international and exchange students, representing a vital resource for the growth of Joensuu and the North Karelia region.",
  },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-950 pb-8 text-white">
      <div className="container mx-auto space-y-10 py-8 md:px-12 lg:px-24">
        <h2 className="mb-8 text-center text-4xl font-bold">
          {t("events.about.heading")}
        </h2>

        <p className="mb-6 text-center text-sm leading-relaxed md:text-lg">
          {t("events.about.pText1")}
          <strong> {t("events.about.pDate")}</strong>.{" "}
          {t("events.about.pText2")}
        </p>
        <p className="mb-6 text-center text-sm leading-relaxed lg:text-lg">
          {t("events.about.p2Text1")}
          <strong> {t("events.about.sohjo")}</strong>
          {t("events.about.p2Text2")}
          <strong> {t("events.about.customer")}</strong>,
          <strong> {t("events.about.heading")}</strong>,{t("events.about.and")}
          <strong> {t("events.about.students")}</strong>.
          {t("events.about.p2Text3")}
        </p>
        <p className="mb-6 text-center text-sm leading-relaxed md:text-lg">
          {t("events.about.p3Text")}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
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
