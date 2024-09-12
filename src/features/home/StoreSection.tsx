import { SellingPoint } from "@components/home/SellingPoint";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { orderOnlineImg, orderOnlineImgFi } from "@constants/assets";

import { useTranslation } from "react-i18next";

interface options {
  usp_num: string;
  heading: string;
  text: string;
  img?: string;
}

const StoreSection: React.FC<options> = () => {
  const { t, i18n } = useTranslation();

  const veskoChart = i18n.language === "fi" ? orderOnlineImgFi : orderOnlineImg;

  return (
    <Section>
      <Container>
        <h2 className="lg:w-53 mb-2 text-center text-3xl font-bold">
          <span className="block"> {t("home.sellingPoint.heading")}</span>
          <span className="block">{t("home.sellingPoint.heading2")}</span>
        </h2>
        <p className="text-balance px-4 text-center">
          {t("home.sellingPoint.text")}
        </p>
        <div className="mt-6">
          <SellingPoint
            usp_num={1}
            heading="test heading"
            text="text"
            img={veskoChart}
          />
        </div>
      </Container>
    </Section>
  );
};

StoreSection.displayName = "StoreSection";

export { StoreSection };
