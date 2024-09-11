import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { heroImg } from "@constants/assets";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="py-6">
        <div className="flex flex-col gap-4">
          <p className="text-sm xl:text-base">{t("about.hero.p1")}</p>
          <p className="text-sm xl:text-base">{t("about.hero.p2")}</p>
          <p className="text-sm xl:text-base">{t("about.hero.p3")}</p>
          <p className="text-sm xl:text-base">{t("about.hero.p4")}</p>
        </div>
        <img src={heroImg} alt="" className="mx-auto mt-8 h-96 sm:w-auto" />
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
