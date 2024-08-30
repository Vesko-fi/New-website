import React from "react";

import { SEO } from "@components/SEO";
import { HeroSection } from "@features/home/HeroSection";
import { MissionBrandSection } from "@features/home/MissionBrandSection";
import { Options } from "@features/home/Options";
import { StoreSection } from "@features/home/StoreSection";

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Vesko"
        keywords="vesko, services"
      />
      <HeroSection />
      <StoreSection />
      <Options />
      <MissionBrandSection />
    </>
  );
};

export default Home;
