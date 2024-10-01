import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { Container } from "@components/ui/Container";

import { Card } from "@components/ui/Card";

const BuyingOptions = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container>
        <div>
          <h2 className="mb-6 text-balance text-center text-2xl font-bold lg:mb-12 lg:text-3xl xl:text-4xl">
            {t("users.options.heading")}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon="box"
            title={t("users.options.option1Heading")}
            description={t("users.options.option1Text")}
          />
          <Card
            icon="hand-coin"
            title={t("users.options.option2Heading")}
            description={t("users.options.option2Text")}
          />
          <Card
            icon="product-booking"
            title={t("users.options.option3Heading")}
            description={t("users.options.option3Text")}
          />
          <Card
            icon="truck-delivery"
            title={t("users.options.option4Heading")}
            description={t("users.options.option4Text")}
          />
        </div>
      </Container>
    </Section>
  );
};
BuyingOptions.displayName = "BuyingOptions";

export { BuyingOptions };
