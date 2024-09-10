import { Container } from "@components/ui/Container";
import { Link } from "@components/ui/Link";
import { Section } from "@components/ui/Section";
import { landingHeroImg } from "@constants/assets";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("home.landingPage.heading")}
            <span className="text-accent1">
              {t("home.landingPage.headingSpan")}
            </span>
          </h1>
          <p className="text-sm xl:text-base">{t("home.landingPage.text")}</p>
          <Link variant="primary" size="lg" href="/" className="mt-8">
            {t("home.landingPage.buttonText")}
          </Link>
        </div>
        <img src={landingHeroImg} className="sm:w-96 lg:w-[500px] xl:w-auto" />
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
