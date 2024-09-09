import React from "react";

import { SEO } from "@components/SEO";
import { HeroSection } from "@features/about/HeroSection";

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO title="About" description="About Vesko" keywords="vesko, about" />
      <HeroSection />
    </>
  );
};

export default AboutUs;
