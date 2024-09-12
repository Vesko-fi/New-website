import React from "react";

import { SEO } from "@components/SEO";
import { MainSection } from "@features/about/MainSection";

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO title="About" description="About Vesko" keywords="vesko, about" />
      <MainSection />
    </>
  );
};

export default AboutUs;
