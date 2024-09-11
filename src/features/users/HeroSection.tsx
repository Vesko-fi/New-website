import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { UserHeroImg } from "@constants/assets";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      className="bg-cover bg-center flex items-center h-[92vh]"
      style={{ backgroundImage: `url(${UserHeroImg})` }}
    >
      <Container className="flex flex-col justify-start gap-8 text-white">
          <h1 className="mb-1 text-6xl text-center md:text-left font-bold sm:text-balance md:text-8xl shadow-lg">
            {t("users.hero.heading")}
          </h1>
          <p className="text-3xl text-center md:text-left md:text-4xl font-bold shadow-lg">{t("users.hero.text")}</p>
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
