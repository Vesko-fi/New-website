import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { ContactForm } from "@features/contact/ContactForm";
import { ContactInformation } from "@features/contact/ContactInformation";

const Contact: React.FC = () => {
  return (
    <Section>
      <Container className="mt-16 grid gap-12 !px-12 md:grid-cols-2">
        <ContactInformation />
        <ContactForm />
      </Container>
    </Section>
  );
};
Contact.displayName = "Contact";

export { Contact };
