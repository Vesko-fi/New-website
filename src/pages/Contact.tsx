import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { ContactForm } from "@features/contact/ContackForm";
import { ContactPage } from "@features/contact/ContactPage";

const Contact: React.FC = () => {
  return (
    <Section>
      <Container className="grid gap-12 bg-gray-500 !px-12 md:grid-cols-2">
        <ContactPage />
        <ContactForm />
      </Container>
    </Section>
  );
};
Contact.displayName = "ContactPage";

export { Contact };
