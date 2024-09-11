import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Link } from "@components/ui/Link";
import { Section } from "@components/ui/Section";
import { heroImg } from "@constants/assets";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            A Next Generation Marketplace Platform with{" "}
            <span className="text-accent1">Omnichannel Capabilities</span>
          </h1>
          <p className="text-sm xl:text-base">
            Vesko helps you to unify the physical store with the online store
            enhancing your customer transition from digital browsing to in-store
            purchasing. Vesko&apos;s omnichannel helps you to list and sell the
            same product online or offline.
          </p>
          <Link variant="primary" size="lg" href="/demo" className="mt-8">
            {t("demo.formHeader")}
          </Link>
        </div>
        <img src={heroImg} className="sm:w-96 lg:w-[500px] xl:w-auto" />
      </Container>
    </Section>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
