import { useTranslation } from "react-i18next";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { omnichannelImg } from "@constants/assets";

const OnlineStoreSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container className="flex flex-col items-center justify-between gap-12 py-16 md:flex-row">
        <div>
          <h1 className="text-center text-2xl font-bold sm:text-start lg:text-3xl xl:text-4xl">
            {t("vendors.onlineStoreOverview.heading")}
            <span className="text-accent1">
              {t("vendors.onlineStoreOverview.headingSpan")}
            </span>
          </h1>
        </div>
        <img
          src={omnichannelImg}
          alt=" Product in store shelf"
          className="sm:w-96 lg:w-[500px] xl:w-auto"
        />
      </Container>
    </Section>
  );
};

OnlineStoreSection.displayName = "OnlineStoreSection";
export { OnlineStoreSection };
