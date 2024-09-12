import React from "react";

import { SEO } from "@components/SEO";
import { HeroSection } from "@features/home/HeroSection";
import { MissionBrandSection } from "@features/home/MissionBrandSection";
import { StoreSection } from "@features/home/StoreSection";
import { OrderManagment } from "@features/home/OrderManagment";

interface options {
  usp_num?: string;
  heading?: string;
  text?: string;
  img?: string;
}

const Home: React.FC<options> = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Vesko"
        keywords="vesko, services"
      />
      <HeroSection />
      <StoreSection usp_num="" heading="" text="" img="" />
      <OrderManagment />
      <MissionBrandSection />
    </>
  );
};

export default Home;
