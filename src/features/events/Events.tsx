import React from "react";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { HeroSection } from "./components/HeroSection";
import { KeynoteSection } from "./components/KeynoteSection";
import { Registration } from "./components/Registration";
import { AboutSection } from "./components/AboutSection";
import { PresenterSection } from "./components/PresenterSection";
import { TimelineSection } from "./components/TimelineSection";

const Events: React.FC = () => {
  return (
    <>
      <Section className="scroll-margin-top-[64px] -mt-8 scroll-m-0 scroll-p-0 overflow-hidden bg-black font-mono text-white">
        {/* Hero Section */}
        <Container>
          <HeroSection />
          <Registration />
          <AboutSection />
          <KeynoteSection />
          <PresenterSection />
          <TimelineSection />
        </Container>
      </Section>
    </>
  );
};

Events.displayName = "Events";
export { Events };
