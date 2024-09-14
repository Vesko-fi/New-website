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
    <Section className="scroll-m-0 scroll-p-0">
      <Container className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12 lg:py-24">
        {/* Left side text section */}
        <div className="w-full flex-1 pb-4 text-center lg:text-left">
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
        {/* Right side images section */}
        <div className="relative flex items-center justify-center">
          {/* Background image */}
          <img
            src={heroImgBg}
            alt="Background"
            className="w-full px-8"
            loading="lazy"
          />
          {/* Checkout image */}
          <img
            src={heroImgCheckout}
            alt="Checkout"
            className="absolute -top-16 right-0 w-24 sm:w-28 md:w-32 lg:w-36"
            loading="lazy"
          />
          {/* Product image */}
          <img
            src={heroImgProduct}
            alt="Product"
            className="absolute -bottom-12 left-0 w-24 rounded-md sm:w-32 md:w-40 lg:w-48"
            loading="lazy"
          />
        </div>
      </Container>
    </Section>
  );
};
HeroSection.displayName = "HeroSection";
export { HeroSection };
