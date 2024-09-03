import { omnichannelChartImg } from "@constants/assets";
import { useTranslation } from "react-i18next";

const VeskoOmnichannel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center p-24">
        <h1 className="mb-4 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.veskoOmnichannelDifferHeading")}
        </h1>
        <p className="text-balance text-center text-sm">
          {t("vendors.veskoOmnichannelDifferText")}
        </p>
        <img
          src={omnichannelChartImg}
          alt="Omnichannel chart on how Vesko Omnichannel differs from others"
          className="lg:24 xl:24 p-8 sm:w-96 md:p-20 lg:w-[500px] xl:w-auto"
        />
      </div>
    </>
  );
};

VeskoOmnichannel.displayName = "VeskoOmnichannel";
export { VeskoOmnichannel };
