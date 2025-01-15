import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { Container } from "@components/ui/Container";

import { Accordion } from "@components/ui/Accordion";

interface options {
  heading: string;
  text: string;
}

const Faqs: React.FC = () => {
  const { t } = useTranslation();

  const options: options[] = [
    {
      heading: t("vendors.faq.heading1"),
      text: t("vendors.faq.text1"),
    },
    {
      heading: t("vendors.faq.heading2"),
      text: t("vendors.faq.text2"),
    },
    {
      heading: t("vendors.faq.heading3"),
      text: t("vendors.faq.text3"),
    },
    {
      heading: t("vendors.faq.heading4"),
      text: t("vendors.faq.text4"),
    },
    {
      heading: t("vendors.faq.heading5"),
      text: t("vendors.faq.text5"),
    },
  ];

  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container className="py-16">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h2 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("vendors.faq.heading")}
          </h2>
        </div>

        {options.map((option, index) => {
          return (
            <Accordion
              key={index}
              title={t(option.heading)}
              children={t(option.text)}
            />
          );
        })}
      </Container>
    </Section>
  );
};

Faqs.displayName = "Faqs";

export { Faqs };
