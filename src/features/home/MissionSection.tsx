import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const MissionSection: React.FC = () => {
  return (
    <Section className="bg-slate-300 py-8">
      <Container className="flex flex-col items-center">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">
          Our Mission Is To Connect You!
        </h2>
        <p className="px-4 pt-4 text-center text-lg sm:text-xl md:px-20 lg:px-32 xl:px-36">
          Our Mission is to connect you! At Vesko we are committed to bring
          authentic Finnish brands and stores closer to the Finnish Consumer
        </p>
      </Container>
    </Section>
  );
};

export { MissionSection };
