import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { HowOmnichannelWork } from "@components/vendor/omnichannelSection/HowOmnichannelWork";
import { VeskoOmnichannel } from "@components/vendor/omnichannelSection/VeskoOmnichannel";
import { WhyOmnichannel } from "@components/vendor/omnichannelSection/WhyOmnichannel";
import {} from "react-i18next";

const OmnichannelSection = () => {
  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container>
        <WhyOmnichannel />
        <HowOmnichannelWork />
        <VeskoOmnichannel />
      </Container>
    </Section>
  );
};

OmnichannelSection.displayName = "OmnichannelSection";
export { OmnichannelSection };
