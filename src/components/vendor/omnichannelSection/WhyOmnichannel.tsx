import { useTranslation } from "react-i18next";
import { omnichannelImg } from "@constants/assets";

const WhyOmnichannel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-12 py-16 md:flex-row">
        <div>
          <h1 className="mb-4 text-balance text-center text-2xl font-bold lg:text-start lg:text-3xl xl:text-4xl">
            {t("vendors.omnichannelHeading")}
            <span className="text-accent1">
              {t("vendors.omnichannelHeadingSpan")}
            </span>
            ?
          </h1>
          <p className="text-balance text-center text-sm lg:text-start lg:text-base">
            {t("vendors.omnichannelText")}
          </p>
        </div>

        <img
          src={omnichannelImg}
          alt="Product in store shelf"
          className="sm:w-96 lg:w-[500px] xl:w-auto"
        />
      </div>
    </>
  );
};

WhyOmnichannel.displayName = "WhyOmnichannel";
export { WhyOmnichannel };
