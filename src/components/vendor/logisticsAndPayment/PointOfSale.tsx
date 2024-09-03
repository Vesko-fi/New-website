import { posImg } from "@constants/assets";
import { useTranslation } from "react-i18next";

const PointOfSale: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center gap-4 p-20">
        <h1 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.pointofSaleHeading")}
          <span className="text-accent1">
            {t("vendors.pointofSaleHeadingSpan")}
          </span>
        </h1>
        <p className="text-center text-sm">{t("vendors.pointofSaleText")}</p>
        <img
          src={posImg}
          alt="point of sale screen dashboard, order is being picked"
          className="mt-8 sm:w-96 lg:w-[500px] xl:w-auto"
        />
      </div>
    </>
  );
};
PointOfSale.displayName = "PointOfSale";
export { PointOfSale };
