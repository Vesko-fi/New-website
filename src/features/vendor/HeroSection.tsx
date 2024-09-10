import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { heroImg } from "@constants/assets";

const HeroSetion: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container className="py-16">
        <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
          {t("vendors.hero.heading1")}
          <span className="text-accent1">{t("vendors.hero.headingSpan")}</span>
          {t("vendors.hero.heading2")}
        </h1>
        <p className="text-center text-base">{t("vendors.hero.text")}</p>
        {/**
         * Test Image
         */}
        <img src={heroImg} alt="" className="mx-auto mt-8 h-96 sm:w-auto" />
      </Container>
    </Section>
  );
};

HeroSetion.displayName = "HeroSection";

export { HeroSetion };
