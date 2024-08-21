import Brand from "@components/Brand";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const MissionSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-white to-green-900">
      <Container>
        <h2 className="text-center text-xl font-bold lg:text-2xl">
          Our Mission Is To Connect You!
        </h2>
        <p className="mt-4 px-8 text-center text-base md:px-20 lg:px-32 xl:px-36">
          Our Mission is to connect you! At Vesko we are committed to bring
          authentic Finnish brands and stores closer to the Finnish Consumer.
        </p>
        <Brand />
      </Container>
    </Section>
  );
};
MissionSection.displayName = "MissionSection";

export { MissionSection };
