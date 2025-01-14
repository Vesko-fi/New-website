import { Button } from "@components/ui/Button";
import { useTranslation } from "react-i18next";

const Registration = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col items-center gap-8 px-4 pb-16 text-center">
      <h1 className="text-5xl font-bold text-neutral-100">MIOPIA 2025</h1>

      <h3 className="text-2xl font-extrabold text-neutral-200">
        {t("events.registration.theme")}
      </h3>

      {/* Event Details */}
      <p className="text-lg text-neutral-300">
        {t("events.registration.location")}
      </p>

      {/* Registration Section */}
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://link.webropolsurveys.com/EP/32F6D81F7C730E78"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="h-14 w-60 rounded-full bg-red-400 transition-all hover:bg-red-500">
            <p className="text-xl font-bold text-black">
              {t("events.registration.button")}
            </p>
          </Button>
        </a>
        <p>{t("events.registration.text")}</p>
      </div>
    </div>
  );
};

Registration.displayName = "Registration";
export { Registration };
