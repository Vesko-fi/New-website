import { OptionItems } from "@components/home/OptionItems";
import { Container } from "@components/ui/Container";
import { Link } from "@components/ui/Link";
import { Section } from "@components/ui/Section";
import {
  securePaymentImg,
  optimizeLogisticImg,
  orderManagementImg,
} from "@constants/assets";
import { useTranslation } from "react-i18next";

const Options: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F0F5FF 100%)",
      }}
      className="w-100%"
    >
      <Container className="flex flex-col items-center gap-8 px-2 md:flex-row md:px-8 lg:gap-16 lg:px-12">
        <div>
          <h2 className="text-3xl font-bold">{t("options.heading")}</h2>
          <Link variant="primary" size="lg" href="/" className="mt-8">
            {t("options.link")}
          </Link>
        </div>
        <div className="flex flex-col gap-8 lg:gap-16">
          <OptionItems
            imageSrc={securePaymentImg}
            heading={t("options.paymentHeading")}
            text={t("options.paymentText")}
            height={180}
            width={210}
          />
          <OptionItems
            imageSrc={orderManagementImg}
            heading={t("options.orderHeading")}
            text={t("options.orderText")}
            height={180}
            width={236}
          />
        </div>
        <div>
          <OptionItems
            imageSrc={optimizeLogisticImg}
            heading={t("options.logisticHeading")}
            text={t("options.logisticText")}
            height={180}
            width={208}
          />
        </div>
      </Container>
    </Section>
  );
};
Options.displayName = "Options";
export default Options;
