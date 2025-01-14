import React from "react";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { HeroSection } from "./HeroSection";
import { KeynoteSection } from "./KeynoteSection";
import { Registration } from "./Registration";
import { AboutSection } from "./AboutSection";
import { PresenterSection } from "./PresenterSection";
import { TimelineSection } from "./TimelineSection";

const Events: React.FC = () => {
  return (
    <>
      <Section className="scroll-margin-top-[64px] -mt-8 scroll-m-0 scroll-p-0 bg-black font-mono text-white">
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
