import { useTranslation } from "react-i18next";
import ActionButton from "@components/ui/ActionButton";

const Registration = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-cover bg-center pt-24">
      <div className="relative flex flex-col items-center gap-8 px-4 pb-16 text-center">
        <h1 className="text-7xl font-extrabold text-neutral-100">
          MIOPIA 2025
        </h1>
        <div className="flex flex-col items-center gap-4 sm:flex sm:items-center sm:text-3xl">
          <span className="text-lg">{t("events.registration.span1")}</span>
          <a
            href="https://businessjoensuu.fi/sohjo2025"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-3xl font-extrabold underline"
          >
            SOHJO
          </a>
          <span className="text-lg"> {t("events.registration.span2")}</span>
        </div>
        <h3 className="text-3xl font-extrabold text-neutral-200">
          {t("events.registration.theme")}
        </h3>
        {/* Event Details */}
        <p className="text-lg text-neutral-300">
          {t("events.registration.location")}
        </p>
        {/* Registration Section */}
        <div className="flex flex-col items-center gap-4">
          <ActionButton
            href="https://link.webropolsurveys.com/EP/32F6D81F7C730E78"
            buttonText={`${t("events.registration.button")}`}
            description={`${t("events.registration.text")}`}
            isExternal={true}
            className="w-64"
          />
        </div>
      </div>
    </div>
  );
};

Registration.displayName = "Registration";
export { Registration };
