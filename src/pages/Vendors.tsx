import { SEO } from "@components/SEO";
import { Faqs } from "@features/vendor/Faqs";
import { HeroSetion } from "@features/vendor/HeroSection";
import { LogisticsAndPayment } from "@features/vendor/LogisticsAndPayment";
import { OmnichannelSection } from "@features/vendor/OmnichannelSection";
import { OnlineStoreSection } from "@features/vendor/OnlineStoreSection";

const Vendors: React.FC = () => {
  return (
    <>
      <SEO
        title="Vendors"
        description="Vesko for Vendors"
        keywords="vesko for vendors, vesko omnichannel store, omnichannel online store, omnichannel retail solution, unify retail presence, scalable online store, Vesko vendor tools, custom online store platform, point of sale system for vendors, logistics and payment solutions, Vesko for vendors, grow your brand online, omnichannel sales for vendors, retail and online store integration"
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
