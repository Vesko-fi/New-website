import { Container } from "@components/ui/Container";
import { Link } from "@components/ui/Link";
import { Section } from "@components/ui/Section";
import { useTranslation } from "react-i18next";

const MissionBrandSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-t from-[#dafef0]">
      <Container className="max-w-4xl py-16">
        <p className="text-balance text-center text-xl font-medium md:text-2xl">
          {t("home.mission")}
        </p>
        <div className="mt-12 text-center">
          <h2 className="text-4xl font-semibold md:text-5xl xl:text-7xl">
            {t("home.brand.heading")}
          </h2>
          <p className="mx-auto mb-10 mt-4 max-w-96 text-base md:max-w-4xl md:text-xl">
            {t("home.brand.text")}
            <br />
            <span className="mt-2 block font-medium">
              {t("home.brand.textSpan")}
            </span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link variant="primary" size="md" href="/demo" className="mt-8">
              {t("home.orderManagement.buttonText")}
            </Link>
            <span className="mt-8 font-semibold">OR</span>
            <Link
              variant="outline"
              size="md"
              href="/waiting-list"
              className="mt-8"
            >
              {t("waitlist.formHeader")}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

MissionBrandSection.displayName = "MissionBrandSection";

export { MissionBrandSection };
