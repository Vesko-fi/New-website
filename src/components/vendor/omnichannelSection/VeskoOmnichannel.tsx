import { useTranslation } from "react-i18next";
import { omnichannelChartImg, omnichannelChartImgFi } from "@constants/assets";
import { SEO } from "@components/SEO";

const VeskoOmnichannel: React.FC = () => {
  const { t, i18n } = useTranslation();

  const omnichannelChartImage =
    i18n.language === "fi" ? omnichannelChartImgFi : omnichannelChartImg;

  return (
    <>
      <SEO
        title={`${t("navbar.forVendors.label")} | ${t("vendors.hero.heading")}`}
        description={t("seo.vendors.whyVesko")}
        keywords="vesko omnichannel store, omnichannel online store, why vesko, omnichannel retail solution, unify retail presence, scalable online store, Vesko vendor tools, custom online store platform, point of sale system for vendors, logistics and payment solutions, Vesko for vendors, grow your brand online, omnichannel sales for vendors, retail and online store integration"
      />
      <div className="text-balance py-20 text-center">
        <h2 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.uniqueOmnichannel.heading")}
          <span className="text-accent1">
            {t("vendors.uniqueOmnichannel.headingSpan")}
          </span>
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          {t("vendors.uniqueOmnichannel.text")}
        </p>

        <img
          src={omnichannelChartImage}
          alt="Omnichannel chart illustrating how Vesko's online store and physical store inventory systems are uniquely integrated, showcasing Vesko's innovative approach to retail."
          className="mx-auto mt-16 sm:w-3/4"
        />
      </div>
    </>
  );
};

VeskoOmnichannel.displayName = "VeskoOmnichannel";

export { VeskoOmnichannel };
