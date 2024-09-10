import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

import { useTranslation } from "react-i18next";

interface options {
  usp_num: string;
  heading: string;
  text: string;
  img?: string;
}

const StoreSection: React.FC = () => {
  const { t } = useTranslation();

  const options: Array<options> = t("home.sellingPoint.options", {
    returnObjects: true,
  });

  return (
    <Section>
      <Container>
        <h2 className="lg:w-53 mb-2 text-center text-3xl font-bold">
          <span className="block"> {t("home.sellingPoint.heading")}</span>
          <span className="block">{t("home.sellingPoint.heading2")}</span>
        </h2>
        <p className="text-balance px-4 text-center">
          {t("home.sellingPoint.text")}
        </p>
        <div className="mt-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="mt-12 flex flex-col items-center justify-between md:flex-row even:md:flex-row-reverse lg:gap-24"
            >
              <img
                src={option.img}
                alt={t(option.heading)}
                className="sm:w-96 lg:w-auto"
              />
              <div className="flex flex-col items-start gap-4">
                <div className="text-3xl text-accent1-40 sm:text-4xl md:text-5xl lg:text-7xl">
                  <span>{option.usp_num}</span>
                  <span className="block h-1 w-full bg-accent1-40"></span>
                </div>
                <div className="text-balance text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
                  {t(option.heading)}
                </div>
                <p className="text-sm md:text-base">{t(option.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

StoreSection.displayName = "StoreSection";

export { StoreSection };
