import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { UserHeroImg } from "@constants/assets";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="relative h-[600px] overflow-hidden md:h-[682px]">
      <div className="h-full w-full bg-cover bg-center">
          <img
            src={UserHeroImg}
            alt={`shopping`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-8 py-12 text-white sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold sm:text-balance md:text-5xl lg:text-6xl xl:text-7xl">
          {t("users.hero.heading")}
        </h1>
        <p className="xl:4xl mt-2 text-xl sm:mt-4 md:text-2xl lg:mt-6 lg:text-3xl">
          {t("users.hero.text")}
        </p>
       </div>

      </div>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
