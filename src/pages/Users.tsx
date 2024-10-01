import React from "react";

import { SEO } from "@components/SEO";
import { HeroSection } from "@features/users/HeroSection";
import { BuyingOptions } from "@features/users/BuyingOptions";
import { StoreSelling } from "@features/users/StoreSelling";
import { Description } from "@features/users/Description";
import { Mission } from "@features/users/Mission";

const Users: React.FC = () => {
  return (
    <>
      <SEO
        title="Users"
        description="Vesko for Users"
        keywords=" vesko for users, vesko user platform, Vesko users, Vesko product details, Vesko mission, how to use Vesko, Vesko for users, Vesko user features"
      />
      <HeroSection />
      <StoreSelling />
      <BuyingOptions />
      <Description />
      <Mission />
    </>
  );
};

export default Users;
