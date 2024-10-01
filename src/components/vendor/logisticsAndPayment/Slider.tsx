import { useTranslation } from "react-i18next";

const Slider: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/**
       *
       * Logistics & Payment in Vesko
       *
       */}
      <div className="text-balance py-20 text-center">
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.logisticPayment.heading")}
        </h2>
        <p className="text-sm lg:text-base">
          {t("vendors.logisticPayment.text")}
        </p>
      </div>
    </>
  );
};
Slider.displayName = "Slider";
export { Slider };
