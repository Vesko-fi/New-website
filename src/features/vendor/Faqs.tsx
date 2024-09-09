import { useTranslation } from "react-i18next";

import { Accordion } from "@components/ui/Accordion";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

const Faqs: React.FC = () => {
    const { t } = useTranslation();
  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container className="py-16">
        <div className="flex flex-col items-center gap-4 mb-8">
            <h4 className="text-accent1">FAQ</h4>
            <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
              {t("vendors.faqHeading")}
            </h1>
            <p className="text-center text-base text-balance">{t("vendors.faqText")}</p>
        </div>
        <Accordion title={t("vendors.faqQuestion1")} children={t("vendors.faqAnswer1")}/>
        <Accordion title={t("vendors.faqQuestion2")} children={t("vendors.faqAnswer2")}/>
        <Accordion title={t("vendors.faqQuestion3")} children={t("vendors.faqAnswer3")}/>
        <Accordion title={t("vendors.faqQuestion4")} children={t("vendors.faqAnswer4")}/>
        <Accordion title={t("vendors.faqQuestion5")} children={t("vendors.faqAnswer5")}/>
      </Container>
    </Section>
  );
};

Faqs.displayName = "Faqs";

export { Faqs };
