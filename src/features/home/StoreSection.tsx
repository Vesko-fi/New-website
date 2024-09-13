import { useTranslation } from "react-i18next";
import { SellingPoint } from "@components/home/SellingPoint";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import {
  expandReachImg,
  onlineStoreImage,
  veskoChartEn,
  veskoChartFi,
  maximiseStores,
} from "@constants/assets";

interface options {
  usp_num?: string;
  heading?: string;
  text?: string;
  img?: string;
}

const StoreSection: React.FC<options> = () => {
  const { t, i18n } = useTranslation();

  const veskoChart = i18n.language === "fi" ? veskoChartFi : veskoChartEn;

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
            usp_num={"01"}
            heading={t("home.sellingPoint.option1Heading")}
            text={t("home.sellingPoint.option1Text")}
            img={maximiseStores}
          />
          <SellingPoint
            usp_num={"02"}
            heading={t("home.sellingPoint.option2Heading")}
            text={t("home.sellingPoint.option2Text")}
            img={expandReachImg}
          />
          <SellingPoint
            usp_num={"03"}
            heading={t("home.sellingPoint.option3Heading")}
            text={t("home.sellingPoint.option3Text")}
            img={veskoChart}
          />
          <SellingPoint
            usp_num={"04"}
            heading={t("home.sellingPoint.option4Heading")}
            text={t("home.sellingPoint.option4Text")}
            img={onlineStoreImage}
          />
        </div>
      </Container>
    </Section>
  );
};

StoreSection.displayName = "StoreSection";

export { StoreSection };
