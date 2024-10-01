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
        keywords="vesko home, vesko marketplace platform, omnichannel marketplace, build your brand online, maximize physical store sales, fulfill online orders from store, scalable store with inventory management, integrated payment and logistics, connect Finnish brands with consumers, Vesko omnichannel store, early access to Vesko marketplace"
      />
      <HeroSection />
      <StoreSection />
      <OrderManagment />
      <MissionBrandSection />
    </>
  );
};

export default Home;
