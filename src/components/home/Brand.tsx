import { useTranslation } from "react-i18next";

import { Button } from "@components/ui/Button";
import { useNavigate } from "react-router-dom";

const Brand: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleWaitingList = () => {
    navigate("/waiting-list");
  };

  const handleDemo = () => {
    navigate("/demo");
  };

  return (
    <div className="mt-12 text-center">
      <h2 className="text-4xl font-semibold md:text-5xl xl:text-7xl">
        Build your Brand
      </h2>
      <p className="mx-auto mb-10 mt-4 max-w-96 text-base md:max-w-4xl md:text-xl">
        See how omnichannel powered marketplace will help you build your brand.{" "}
        <br />
        <span className="mt-2 block font-medium">
          Be the first to access early version of Vesko.
        </span>
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button onClick={handleDemo}>{t("demo.getDemo")}</Button>
        <Button variant="outline" onClick={handleWaitingList}>
          {t("waitingList.join")}
          {t("waitingList.waitlist")}
        </Button>
      </div>
    </div>
  );
};
Brand.displayName = "Brand";
export default Brand;
