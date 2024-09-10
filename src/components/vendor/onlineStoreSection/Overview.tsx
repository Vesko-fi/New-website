import { omnichannelImg } from "@constants/assets";
import { useTranslation } from "react-i18next";

const Overview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-12 py-16 md:flex-row">
        <div>
          <h1 className="text-center text-2xl font-bold sm:text-start lg:text-3xl xl:text-4xl">
            {t("vendors.onlineStoreOverview.heading1")}
            <span className="text-accent1">
              {t("vendors.onlineStoreOverview.headingSpan")}
            </span>
            {t("vendors.onlineStoreOverview.heading2")}
          </h1>
        </div>
        <img
          src={omnichannelImg}
          alt=" Product in store shelf"
          className="sm:w-96 lg:w-[500px] xl:w-auto"
        />
      </div>
    </>
  );
};
Overview.displayName = "Overview";
export { Overview };
