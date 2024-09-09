import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { ContactForm } from "@features/contact/ContactForm";
import { WaitingList } from "@features/waitingList";

const WaitingListPage: React.FC = () => {
  return (
    <Section>
      <Container className="mt-16 grid gap-12 !px-12 md:grid-cols-2">
        <WaitingList />
        <ContactForm />
      </Container>
    </Section>
  );
};
WaitingListPage.displayName = "ContactPage";

export { WaitingListPage };
