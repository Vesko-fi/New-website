import { useTranslation } from "react-i18next";
import { posImg } from "@constants/assets";

const PointOfSale: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/**
       *
       * A Point of Sale to Ease Your Sales
       *
       */}
      <div className="px-4 py-8 md:px-2">
        <h2 className="mb-2 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.pointOfSale.heading")}
          <span className="text-accent1">
            {t("vendors.pointOfSale.headingSpan")}
          </span>
        </h2>
        <p className="text-center text-sm">{t("vendors.pointOfSale.text")}</p>
        <img
          src={posImg}
          alt="Point of sale screen dashboard displaying bakery items with an order being picked, featuring a customer and employee interacting in a busy retail environment."
          className="mx-auto mt-8 rounded-xl sm:w-auto sm:p-0"
        />
      </div>
    </>
  );
};

PointOfSale.displayName = "PointOfSale";
export { PointOfSale };
