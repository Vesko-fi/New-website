import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const HeroSetion: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container className="flex flex-col items-center">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            An <span className="text-accent1">Omnichannel-Powered </span>
            Online Store
          </h1>
          <p className="text-center text-sm">{t("vendors.heroText")}</p>
        </div>
      </Container>
    </Section>
  );
};

HeroSetion.displayName = "HeroSection";

export { HeroSetion };
