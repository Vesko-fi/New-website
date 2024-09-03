import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const HeroSetion: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container className="flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.heroHeading1")}{" "}
          <span className="text-accent1">{t("vendors.heroHeadingSpan")}</span>{" "}
          {t("vendors.heroHeading2")}
        </h1>
        <p className="text-center text-sm">{t("vendors.heroText")}</p>
      </Container>
    </Section>
  );
};

HeroSetion.displayName = "HeroSection";

export { HeroSetion };
