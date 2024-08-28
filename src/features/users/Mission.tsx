import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const Mission = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col gap-8 px-40 text-center">
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            Our Mission is to connect You
          </h1>
          <p>
            Finland is home to many small stores and brands that offer unique &
            authentic products and items often crafted locally and sustainably.
            These products are distinct and often unavailable in large chain
            stores or through major foreign online vendors. Most of these firms
            are not able to list their product in online stores or do not have
            the opportunity to have an online presence.
          </p>
          <p>
            At Vesko, we are committed to bridge this gap by giving the Finnish
            brands and stores an online presence, allowing you to discover and
            support these local firms and entrepreneurs, no matter where you
            are.
          </p>
        </div>
      </Container>
    </Section>
  );
};
Mission.displayName = "Mission";

export { Mission };
