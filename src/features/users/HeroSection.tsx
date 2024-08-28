import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const HeroSection: React.FC = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
             Enhancing Your Shopping Experience with Local and Nationwide Retailers{" "}
          </h1>
        </div>
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
