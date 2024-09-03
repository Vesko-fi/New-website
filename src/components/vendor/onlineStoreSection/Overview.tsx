import { omnichannelImg } from "@constants/assets";
import { useTranslation } from "react-i18next";

const Overview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-20 p-4 md:flex-row">
        <div>
          <h1 className="mb-4 p-8 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("vendors.onlineStoreOverviewHeading1")}
            <span className="text-accent1">
              {t("vendors.onlineStoreOverviewHeadingSpan")}
            </span>
            {t("vendors.onlineStoreOverviewHeading2")}
          </h1>
        </div>
        <img
          src={omnichannelImg}
          alt=" Product in store Shelf"
          className="sm:w-96 lg:w-[500px] xl:w-auto"
        />
      </div>
    </>
  );
};
Overview.displayName = "Overview";
export { Overview };
