import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

import { WaitingList } from "@features/WaitingList/waitingList";
import { WaitingListForm } from "@features/WaitingList/WaitingListForm";

const WaitingListPage: React.FC = () => {
  return (
    <Section>
      <Container className="mt-16 grid gap-12 !px-12 md:grid-cols-2">
        <WaitingList />
        <WaitingListForm />
      </Container>
    </Section>
  );
};
WaitingListPage.displayName = "ContactPage";

export { WaitingListPage };
