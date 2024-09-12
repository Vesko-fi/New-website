import { useTranslation } from "react-i18next";

const Slider: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-balance py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.logisticPayment.heading")}
        </h1>
        <p className="text-sm lg:text-base">
          {t("vendors.logisticPayment.text")}
        </p>
      </div>
    </>
  );
};
Slider.displayName = "Slider";
export { Slider };
