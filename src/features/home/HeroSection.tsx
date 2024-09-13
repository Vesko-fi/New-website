import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Link } from "@components/ui/Link";
import { Section } from "@components/ui/Section";
import { heroImgBg, heroImgCheckout, heroImgProduct } from "@constants/assets";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/demo");
  };

  return (
    <Section>
<<<<<<< feat-updates
      <Container className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12 lg:py-24">
        <div className="w-full flex-1 text-balance pb-20">
=======
      <Container className="flex flex-col items-center justify-between gap-12 pb-24 md:flex-row">
        <div className="w-full flex-1">
>>>>>>> dev
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("home.landingPage.heading")}
            <span className="text-accent1">
              {t("home.landingPage.headingSpan")}
            </span>
          </h1>
          <p className="text-sm xl:text-base">{t("home.landingPage.text")}</p>

          <Link
            onClick={handleClick}
            variant="primary"
            size="lg"
            className="mb-16 mt-8"
          >
            {t("home.landingPage.buttonText")}
          </Link>
        </div>
        <div className="relative flex justify-center">
          <img src={heroImgBg} className="w-2/3" />
          <img
            src={heroImgCheckout}
            className="absolute -top-12 right-8 w-36"
          />
          <img
            src={heroImgProduct}
            className="absolute -bottom-28 left-2 w-48 rounded-md"
          />
        </div>
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
