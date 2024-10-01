import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";

import { UserHeroImg } from "@constants/assets";
import { SEO } from "@components/SEO";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("navbar.forUsers.label")} | ${t("users.hero.heading")} `}
        description={t("vendors.hero.text")}
      />
      <Section className="scroll-margin-top-[64px] -mt-8">
        <div className="relative h-[630px] overflow-hidden md:h-[720px]">
          <div className="h-full w-full bg-cover bg-center">
            <img
              src={UserHeroImg}
              alt={`Users checking a product in-store while taking a picture for reference, showcasing the interactive shopping experience.`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center bg-black/30 px-8 py-12 text-white sm:px-8">
            <h2 className="max-w-4xl text-3xl font-bold sm:text-balance md:text-5xl lg:text-6xl xl:text-7xl">
              {t("users.hero.heading")}
            </h2>
            <p className="xl:4xl mt-2 max-w-2xl text-xl sm:mt-4 md:text-2xl lg:mt-6 lg:text-3xl">
              {t("users.hero.text")}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
