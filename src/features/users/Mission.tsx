import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { reinDeer, reinDeer2 } from "@constants/assets";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section className="relative mt-52 min-h-screen !p-0 md:mt-0">
        <div className="absolute inset-x-0 -top-40 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] px-6 pb-10 pt-20 text-center md:top-0 md:pt-32">
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="mb-6 text-2xl font-bold md:mb-8 lg:text-3xl xl:text-4xl">
              {t("users.missionHeading")}
            </h1>
            <p className="mb-4 text-sm font-medium sm:text-base">
              {t("users.missionP1")}
            </p>
            <p className="text-sm font-medium sm:text-base">
              {t("users.missionP2")}
            </p>
          </div>
        </div>
        <img
          src={reinDeer}
          className="h-[800px] w-full object-cover lg:h-full"
        />
        <img
          src={reinDeer2}
          className="absolute inset-x-0 bottom-0 z-20 h-96 w-full"
        />
      </Section>
      <div className="h-32 bg-white" />
    </>
  );
};
Mission.displayName = "Mission";

export { Mission };
