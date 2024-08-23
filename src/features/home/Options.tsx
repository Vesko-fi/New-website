import { useTranslation } from "react-i18next";

import { OptionItems } from "@components/home/OptionItems";
import { Container } from "@components/ui/Container";
import { Link } from "@components/ui/Link";
import { Section } from "@components/ui/Section";
import {
  securePaymentImg,
  optimizeLogisticImg,
  orderManagementImg,
} from "@constants/assets";


const Options: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
       className="bg-gradient-to-b from-white to-[#F0F5FF]"
    >
      <Container className="flex flex-col items-center gap-4 lg:gap-12 px-2 lg:flex-row">
        <div>
          <h2 className="text-3xl font-bold max-w-4xl">{t("options.heading")}</h2>
          <Link variant="primary" size="lg" href="/" className="mt-8">
            {t("options.link")}
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col md:flex-row lg:flex-col gap-4">
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
        </div>
      </Container>
    </Section>
  );
};
Options.displayName = "Options";
export default Options;
