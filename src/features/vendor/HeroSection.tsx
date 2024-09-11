import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { useEffect, useState } from "react";
import {
  vendorHeroImg1,
  vendorHeroImg2,
  vendorHeroImg3,
} from "@constants/assets";

const images = [vendorHeroImg1, vendorHeroImg2, vendorHeroImg3];

const HeroSetion: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <Section>
      <div className="relative h-[600px] overflow-hidden md:h-[682px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transform transition-transform duration-700 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-start bg-black bg-opacity-30 text-white">
                <h1 className="px-8 py-2 text-5xl font-bold sm:text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                  {t("vendors.hero.heading")}
                </h1>
                <p className="px-4 py-2 text-center text-2xl leading-8 sm:text-3xl md:text-4xl">
                  {t("vendors.hero.text")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

HeroSetion.displayName = "HeroSection";

export { HeroSetion };
