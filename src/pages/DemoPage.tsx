import { SEO } from "@components/SEO";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { DemoForm } from "@features/demo/DemoForm";
import { DemoInformation } from "@features/demo/DemoInformation";
import { useTranslation } from "react-i18next";

const DemoPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("navbar.contactUs.label")} | ${t("seo.getDemo")}`}
        description={t("seo.getDemo")}
        keywords="vesko, get demo"
      />
      <Section>
        <Container className="mt-16 grid gap-12 !px-12 lg:grid-cols-2">
          <DemoInformation />
          <DemoForm />
        </Container>
      </Section>
    </>
  );
};
DemoPage.displayName = "DemoPage";

export { DemoPage };
