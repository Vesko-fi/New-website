import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { UserHeroImg } from "@constants/assets";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-t from-[#E1F4EF]">
      <Container className="py-16">
        <div>
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("users.hero.heading")}
          </h1>
          <p className="text-center text-base">{t("users.hero.text")}</p>
        </div>
        <img src={UserHeroImg} alt="" className="mx-auto mt-8 h-96 sm:w-auto" />
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
