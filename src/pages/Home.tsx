import React from "react";

import { SEO } from "@components/SEO";
import { HeroSection } from "@features/home/HeroSection";
import { MissionBrandSection } from "@features/home/MissionBrandSection";
import { StoreSection } from "@features/home/StoreSection";
import { OrderManagment } from "@features/home/OrderManagment";

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
      <OrderManagment />
      <MissionBrandSection />
    </>
  );
};

export default Home;
