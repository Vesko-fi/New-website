import { useTranslation } from "react-i18next";

import { SEO } from "@components/SEO";
import { Section } from "@components/ui/Section";
import { Container } from "@components/ui/Container";

import { ContactForm } from "@features/contact/ContactForm";
import { ContactInformation } from "@features/contact/ContactInformation";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("navbar.contactUs.label")} | ${t("seo.contactUs")}`}
        description={t("contact.header")}
      />
      <Section>
        <Container className="mt-16 grid gap-12 !px-12 md:grid-cols-2">
          <ContactInformation />
          <ContactForm />
        </Container>
      </Section>
    </>
  );
};
Contact.displayName = "Contact";

export { Contact };
