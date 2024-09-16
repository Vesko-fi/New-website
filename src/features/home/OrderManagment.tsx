import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { Container } from "@components/ui/Container";

import { OptionItems } from "@components/home/OptionItems";

import { Link } from "@components/ui/Link";

import {
  optimizeLogisticImg,
  orderManagementImg,
  securePaymentImg,
} from "@constants/assets";

const OrderManagment: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="mt-8 flex flex-col items-center gap-8 px-4 lg:gap-12 xl:flex-row xl:items-center">
        <div className="mb-8 text-center lg:text-start">
          <h2 className="max-w-2xl text-2xl font-bold lg:text-3xl">
            {t("home.orderManagement.heading")}
            <span className="text-accent1">
              {t("home.orderManagement.headingSpan")}
            </span>
            {t("home.orderManagement.heading2")}
          </h2>
          <Link href="/demo" variant="primary" size="lg" className="mt-8">
            {t("home.orderManagement.buttonText")}
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 md:flex-row">
          <div className="flex w-full flex-1 flex-col gap-4 lg:items-end">
            <OptionItems
              imageSrc={securePaymentImg}
              heading={t("home.orderManagement.paymentHeading")}
              height={180}
              width={210}
            />
            <OptionItems
              imageSrc={orderManagementImg}
              heading={t("home.orderManagement.orderHeading")}
              height={180}
              width={210}
            />
          </div>
          <div className="w-full flex-1">
            <OptionItems
              imageSrc={optimizeLogisticImg}
              heading={t("home.orderManagement.logisticHeading")}
              height={180}
              width={210}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

OrderManagment.displayName = "OrderManagment";

export { OrderManagment };
