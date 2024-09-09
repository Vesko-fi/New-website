import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { ContactForm } from "@features/contact/ContactForm";
import { ContactPage } from "@features/contact/ContactPage";

const Contact: React.FC = () => {
  return (
    <Section>
      <Container className="mt-16 grid gap-12 !px-12 md:grid-cols-2">
        <ContactPage />
        <ContactForm />
      </Container>
    </Section>
  );
};
Contact.displayName = "ContactPage";

export { Contact };
