import { SEO } from "@components/SEO";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

import { WaitingList } from "@features/WaitingList/waitingList";
import { WaitingListForm } from "@features/WaitingList/WaitingListForm";
import { useTranslation } from "react-i18next";

const WaitingListPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("navbar.contactUs.label")} | ${t("seo.joinTheWaitlist")}`}
        description={t("seo.joinTheWaitlist")}
        keywords="vesko, join the waiting list"
      />
      <Section>
        <Container className="mt-16 grid gap-12 !px-12 lg:grid-cols-2">
          <WaitingList />
          <WaitingListForm />
        </Container>
      </Section>
    </>
  );
};
WaitingListPage.displayName = "WaitingListPage";

export { WaitingListPage };
