import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { HowOmnichannelWork } from "@components/vendor/omnichannelSection/HowOmnichannelWork";
import { Omnichannel } from "@components/vendor/omnichannelSection/Omnichannel";
import { VeskoOmnichannel } from "@components/vendor/omnichannelSection/VeskoOmnichannel";

const OmnichannelSection = () => {
  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container>
        <Omnichannel />
        <HowOmnichannelWork />
        <VeskoOmnichannel />
      </Container>
    </Section>
  );
};

OmnichannelSection.displayName = "OmnichannelSection";
export { OmnichannelSection };
