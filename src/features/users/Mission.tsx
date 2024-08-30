import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { ReinDeer } from "@constants/assets";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <Section
      className="h-[800px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ReinDeer})` }}
    >
      <Container className="flex flex-col items-center justify-between gap-12">
        <div className="md: flex flex-col gap-2 px-6 text-center md:px-16 lg:gap-8 lg:px-40">
          <h1 className="mb-2 text-2xl font-bold md:mb-4 lg:text-3xl xl:text-4xl">
            {t("users.missionHeading")}
          </h1>
          <p>{t("users.missionP1")}</p>
          <p>{t("users.missionP2")}</p>
        </div>
      </Container>
    </Section>
  );
};
Mission.displayName = "Mission";

export { Mission };
