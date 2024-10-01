import { useTranslation } from "react-i18next";

import { SEO } from "@components/SEO";

import { Section } from "@components/ui/Section";
import { Container } from "@components/ui/Container";

import { Link } from "@components/ui/Link";

import { heroImgBg, heroImgCheckout, heroImgProduct } from "@constants/assets";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("navbar.home.label")} | ${t("home.seo")}`}
        description={t("home.landingPage.text")}
        keywords="Vesko home, vesko marketplace platform, omnichannel marketplace, build your brand online, maximize physical store sales, fulfill online orders from store, scalable store with inventory management, integrated payment and logistics, connect Finnish brands with consumers, Vesko omnichannel store, early access to Vesko marketplace"
      />
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
              href={"/demo"}
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
              alt="Vesko's landing page, hero section with organized display of various shoes in sleek, modern shoe cabinets with soft lighting, showcasing casual, formal, and athletic footwear."
              className="w-full px-8"
              loading="lazy"
            />
            {/* Checkout image */}
            <img
              src={heroImgCheckout}
              alt="Screen showing checkout section with product details, price, order to home, reserve product, and buy and pick up at store options."
              className="absolute -top-16 right-0 w-24 sm:w-28 md:w-32 lg:w-36"
              loading="lazy"
            />
            {/* Product image */}
            <img
              src={heroImgProduct}
              alt="Mobile screen displaying Vesko's product detail page with product image, thumbnails, name, brand, price, type, color, size, and other options."
              className="absolute -bottom-12 left-0 w-24 rounded-md sm:w-32 md:w-40 lg:w-48"
              loading="lazy"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};
HeroSection.displayName = "HeroSection";
export { HeroSection };
