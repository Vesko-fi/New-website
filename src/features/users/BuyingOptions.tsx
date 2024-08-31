import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { Card } from "@components/ui/Card";

const BuyingOptions = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container>
        <div>
          <h1 className="mb-4 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("users.optionMainHeading")}
          </h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              icon= "box"
              title= {t("users.option1Heading")}
              description= {t("users.option1Text")}
            />
            <Card
              icon= "hand-coin"
              title= {t("users.option2Heading")}
              description= {t("users.option2Text")}
            />
            <Card
              icon= "product-booking"
              title= {t("users.option3Heading")}
              description= {t("users.option3Text")}
            />
            <Card
              icon= "truck-delivery"
              title= {t("users.option4Heading")}
              description= {t("users.option4Text")}
            />
        </div>
      </Container>
    </Section>
  );
};
BuyingOptions.displayName = "BuyingOptions";

export { BuyingOptions };
