import { useTranslation } from "react-i18next";

import { Accordion } from "@components/ui/Accordion";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const Faqs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container className="py-16">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("vendors.pointOfSale.faqHeading")}
          </h1>
          <p className="text-balance text-center text-base">
            {t("vendors.pointOfSale.faqText")}
          </p>
        </div>
        <Accordion
          title={t("vendors.pointOfSale.faqQuestion1")}
          children={t("vendors.pointOfSale.faqAnswer1")}
        />
        <Accordion
          title={t("vendors.pointOfSale.faqQuestion2")}
          children={t("vendors.pointOfSale.faqAnswer2")}
        />
        <Accordion
          title={t("vendors.pointOfSale.faqQuestion3")}
          children={t("vendors.pointOfSale.faqAnswer3")}
        />
        <Accordion
          title={t("vendors.pointOfSale.faqQuestion4")}
          children={t("vendors.pointOfSale.faqAnswer4")}
        />
        <Accordion
          title={t("vendors.pointOfSale.faqQuestion5")}
          children={t("vendors.pointOfSale.faqAnswer5")}
        />
      </Container>
    </Section>
  );
};

Faqs.displayName = "Faqs";

export { Faqs };
