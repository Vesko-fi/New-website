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
      </div>
    </>
  );
};

VeskoOmnichannel.displayName = "VeskoOmnichannel";
export { VeskoOmnichannel };
