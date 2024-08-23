import React from "react";

import { SEO } from "@components/SEO";
import { HeroSection } from "@features/home/HeroSection";
import { StoreSection } from "@features/home/StoreSection";
import { Options } from "@features/home/Options";


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
    </>
  );
};

export default Home;
