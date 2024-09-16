import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { Container } from "@components/ui/Container";

import { onlineStoreImage } from "@constants/assets";

const OnlineStoreSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container className="flex flex-col items-center justify-between gap-12 py-8 lg:flex-row">
        <div>
          <h1 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("vendors.onlineStoreOverview.heading")}
            <span className="text-accent1">
              {t("vendors.onlineStoreOverview.headingSpan")}
            </span>
          </h1>
        </div>
        <img
          src={onlineStoreImage}
          alt=" Product in store shelf"
          className="mx-auto rounded-xl sm:w-auto sm:p-0 md:w-[680px] lg:w-[700px]"
        />
      </Container>
    </Section>
  );
};

OnlineStoreSection.displayName = "OnlineStoreSection";
export { OnlineStoreSection };
