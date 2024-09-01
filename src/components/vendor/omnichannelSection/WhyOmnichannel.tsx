import { omnichannelImg } from "@constants/assets";
import { useTranslation } from "react-i18next";

const WhyOmnichannel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("vendors.omnichannelHeading")}
          </h1>
          <p className="text-sm xl:text-base">{t("vendors.omnichannelText")}</p>
        </div>
        <img src={omnichannelImg} alt=" Product in store Shelf" />
      </div>
    </>
  );
};

WhyOmnichannel.displayName = "WhyOmnichannel";
export { WhyOmnichannel };
