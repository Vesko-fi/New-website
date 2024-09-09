import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t('about.heroHeading')}
          </h1>
          <p className="text-sm xl:text-base">
            {t("about.heroP1")}
          </p>
          <p className="text-sm xl:text-base">
          {t("about.heroP2")}
          </p>
          <p className="text-sm xl:text-base">
          {t("about.heroP3")}
          </p>
        </div>
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
