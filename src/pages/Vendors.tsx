import { SEO } from "@components/SEO";
import { Faqs } from "@features/vendor/Faqs";
import { HeroSetion } from "@features/vendor/HeroSection";
import { LogisticsAndPayment } from "@features/vendor/LogisticsAndPayment";
import { OmnichannelSection } from "@features/vendor/OmnichannelSection";
import { OnlineStoreSection } from "@features/vendor/OnlineStoreSection";
import { useTranslation } from "react-i18next";

const Vendors: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("navbar.forVendors.label")} | ${t("vendors.hero.heading")}`}
        description={t("vendors.hero.text")}
        keywords="vesko omnichannel store, omnichannel online store, why vesko, omnichannel retail solution, unify retail presence, scalable online store, Vesko vendor tools, custom online store platform, point of sale system for vendors, logistics and payment solutions, Vesko for vendors, grow your brand online, omnichannel sales for vendors, retail and online store integration"
      />
      <HeroSetion />
      <OmnichannelSection />
      <OnlineStoreSection />
      <LogisticsAndPayment />
      <Faqs />
    </>
  );
};

export default Vendors;
