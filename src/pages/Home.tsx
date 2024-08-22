import React from "react";

import { SEO } from "@components/SEO";
import { HeroSection } from "@features/home/HeroSection";

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Vesko"
        keywords="vesko, services"
      />
      <HeroSection />
    </>
  );
};

export default Home;
