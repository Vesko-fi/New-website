import { Section } from "@components/ui/Section";
import { Container } from "@components/ui/Container";
import { Link } from "@components/ui/Link";

const BrandSection: React.FC = () => {
  return (
    <Section className="flex min-h-96 flex-col items-center justify-center bg-gradient-to-b from-white to-green-900">
      <Container>
        <h2 className="text-center text-5xl font-extrabold text-white">
          Build Your Brand
        </h2>
        <p className="text-white-100 px-4 pt-4 text-center text-white md:px-20 lg:px-32 xl:px-36">
          <span className="block">
            See how omnichannel powered marketplace will help you to build your
            brand
          </span>
          <span>Be the first to access early version of Vesko.</span>
        </p>

        <div className="flex items-center gap-3 px-4 py-8">
          <Link variant="primary" size="md" href="/">
            Get a Demo
          </Link>
          <span className="text-white">OR</span>
          <Link size="md" href="/" className="bg-white">
            Join the WishList
          </Link>
        </div>
      </Container>
    </Section>
  );
};
BrandSection.displayName = "BrandSection";

export { BrandSection };
