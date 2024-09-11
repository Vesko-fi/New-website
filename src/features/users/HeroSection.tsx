import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { UserHeroImg } from "@constants/assets";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      className="flex h-[92vh] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${UserHeroImg})` }}
    >
      <Container className="flex flex-col justify-start gap-8 text-white">
        <h1 className="mb-1 text-center text-6xl font-bold shadow-lg sm:text-balance md:text-left md:text-8xl">
          {t("users.hero.heading")}
        </h1>
        <p className="text-center text-3xl font-bold shadow-lg md:text-left md:text-4xl">
          {t("users.hero.text")}
        </p>
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
