import { omnichannelImg } from "@constants/assets";
import { useTranslation } from "react-i18next";

const Overview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("vendors.onlineStoreOverviewHeading")}
          </h1>
        </div>
        <img src={omnichannelImg} alt=" Product in store Shelf" />
      </div>
    </>
  );
};
Overview.displayName = "Overview";
export { Overview };
