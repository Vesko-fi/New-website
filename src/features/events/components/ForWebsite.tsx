import { banner } from "@constants/assets";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ForWebsite = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleEvents = () => {
    navigate("/events");
  };
  return (
    <div className="flex flex-col gap-8">
      <span className="text-center text-3xl font-bold">
        {t("events.visitUsHeading")}{" "}
      </span>
      <div className="flex animate-gradient-running flex-col items-center gap-6 text-balance py-4 pb-24 sm:flex sm:flex-row sm:gap-8">
        <div className="flex-1">
          <p>
            {t("events.forWebsite.text")}{" "}
            <span onClick={handleEvents} className="cursor-pointer underline">
              {t("events.forWebsite.span")}
            </span>
          </p>
        </div>
        <div className="flex-1">
          <img src={`${banner}`} alt="" sizes="" />
        </div>
      </div>
    </div>
  );
};

export default ForWebsite;
