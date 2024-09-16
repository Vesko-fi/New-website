import { useTranslation } from "react-i18next";
import { omnichannelChartImg, omnichannelChartImgFi } from "@constants/assets";

const VeskoOmnichannel: React.FC = () => {
  const { t, i18n } = useTranslation();

  const omnichannelChartImage =
    i18n.language === "fi" ? omnichannelChartImgFi : omnichannelChartImg;

  return (
    <>
      <div className="text-balance py-20 text-center">
        <h1 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.uniqueOmnichannel.heading")}
          <span className="text-accent1">
            {t("vendors.uniqueOmnichannel.headingSpan")}
          </span>
        </h1>
        <p className="mt-2 text-sm lg:text-base">
          {t("vendors.uniqueOmnichannel.text")}
        </p>
        <img
          src={omnichannelChartImage}
          alt="Omnichannel chart on how Vesko Omnichannel differs from others"
          className="mx-auto mt-16 sm:w-3/4"
        />
      </div>
    </>
  );
};

VeskoOmnichannel.displayName = "VeskoOmnichannel";

export { VeskoOmnichannel };
