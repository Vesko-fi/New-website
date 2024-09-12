import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { vendorHeroImg } from "@constants/assets";

const HeroSetion: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="relative h-[600px] overflow-hidden md:h-[682px]">
        <div className="h-full w-full bg-cover bg-center">
          <img
            src={vendorHeroImg}
            alt={`Slide image`}
            className="h-full w-full transform object-cover"
          />
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 bg-black/50 px-8 py-16 text-white sm:px-14">
          <h1 className="max-w-4xl text-3xl font-bold sm:text-balance md:text-5xl lg:text-6xl xl:text-7xl">
            {t("vendors.hero.heading")}
          </h1>
          <p className="xl:4xl mt-2 max-w-2xl text-xl sm:mt-4 md:text-2xl lg:mt-6 lg:text-3xl">
            {t("vendors.hero.text")}
          </p>
        </div>
      </div>
    </Section>
  );
};

HeroSetion.displayName = "HeroSection";

export { HeroSetion };
