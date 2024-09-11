import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { IconImg } from "@constants/assets";

const Description = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-12 md:flex-row-reverse">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("users.descriptionHeading1")}{" "}
            <span className="text-accent1">{t("users.descriptionSpan1")} </span>
            {t("users.descriptionHeading2")}{" "}
            <span className="text-accent1">{t("users.descriptionSpan2")}</span>
          </h1>
          <p className="text-sm xl:text-base">{t("users.descriptionText")}</p>
        </div>
        <img src={IconImg} className="sm:w-96 lg:w-[500px] xl:w-auto" />
      </Container>
    </Section>
  );
};
Description.displayName = "Description";

export { Description };
