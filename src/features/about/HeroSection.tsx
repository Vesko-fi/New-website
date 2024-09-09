import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const HeroSection: React.FC = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
            Who we are
          </h1>
          <p className="text-sm xl:text-base">
            Vesko is a next-generation marketplace offering omnichannel
            solutions for both vendors and customers. It provides a unique
            opportunity for physical-only businesses to establish an online
            presence and expand their reach, while also helping businesses with
            existing online stores connect with more customers.
          </p>
          <p className="text-sm xl:text-base">
            For buyers, Vesko offers an extensive range of products, including
            items from small local shops that were previously unavailable
            online. Customers can easily check product availability, saving them
            unnecessary trips if an item is out of stock. They also have the
            option to reserve items for in-store pickup or purchase online for
            doorstep delivery.
          </p>
          <p className="text-sm xl:text-base">
            Vesko is dedicated to helping businesses grow by connecting them
            with a larger customer base, while offering shoppers a wide
            selection of products to choose from.
          </p>
        </div>
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
