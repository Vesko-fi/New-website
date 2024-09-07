import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { Benefits } from "@components/vendor/onlineStoreSection/Benefits";
import { Overview } from "@components/vendor/onlineStoreSection/Overview";

const OnlineStoreSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container>
        <Overview />
        <Benefits />
      </Container>
    </Section>
  );
};

OnlineStoreSection.displayName = "OnlineStoreSection";
export { OnlineStoreSection };
