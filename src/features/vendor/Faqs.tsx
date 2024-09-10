import { useTranslation } from "react-i18next";

import { Accordion } from "@components/ui/Accordion";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

interface options {
  heading: string;
  text: string;
}

const Faqs: React.FC = () => {
  const { t } = useTranslation();

  const options: Array<options> = t("vendors.faq.options", {
    returnObjects: true,
  });
  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container className="py-16">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("vendors.faq.heading")}
          </h1>
          <p className="text-balance text-center text-base">
            {t("vendors.faq.text")}
          </p>
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
