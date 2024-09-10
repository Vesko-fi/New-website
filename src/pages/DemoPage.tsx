import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { DemoForm } from "@features/demo/DemoForm";
import { DemoInformation } from "@features/demo/DemoInformation";

const DemoPage: React.FC = () => {
  return (
    <Section>
      <Container className="mt-16 grid gap-12 !px-12 lg:grid-cols-2">
        <DemoInformation />
        <DemoForm />
      </Container>
    </Section>
  );
};
DemoPage.displayName = "DemoPage";

export { DemoPage };
