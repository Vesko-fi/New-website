import { SEO } from "@components/SEO";
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
        keywords="vesko, vendors"
      />
      <HeroSetion />
      <OmnichannelSection />
      <OnlineStoreSection />
      <LogisticsAndPayment />
    </>
  );
};

export default Vendors;
