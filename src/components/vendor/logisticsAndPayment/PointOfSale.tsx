import { posImg } from "@constants/assets";
import { useTranslation } from "react-i18next";

const PointOfSale: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="py-8">
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
          className="mx-auto mt-8 sm:w-auto sm:p-0"
        />
      </div>
    </>
  );
};

PointOfSale.displayName = "PointOfSale";
export { PointOfSale };
