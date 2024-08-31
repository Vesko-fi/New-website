import Brand from "@components/home/Brand";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const MissionBrandSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-t from-[#dafef0]">
      <Container className="max-w-4xl py-16">
        <p className="text-balance text-center text-xl font-medium md:text-2xl">
          Our Mission is to connect you! At Vesko we are committed to bring
          authentic Finnish brands and stores closer to the Finnish Consumer.
        </p>
        <Brand />
      </Container>
    </Section>
  );
};

MissionBrandSection.displayName = "MissionBrandSection";

export { MissionBrandSection };
