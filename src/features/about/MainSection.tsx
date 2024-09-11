import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { heroImg } from "@constants/assets";

const MainSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center gap-8 py-6">
        <div className="flex flex-col gap-4 text-balance">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p1.heading")}
          </h1>
          <p className="text-center text-base">
            <span className="font-bold">{t("about.p1.span")} </span>
            {t("about.p1.text")}
          </p>
        </div>
        <img src={heroImg} alt="" className="mx-auto mt-8 h-96 sm:w-auto" />
        <div className="flex flex-col gap-4 text-balance">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p2.heading")}
          </h1>
          <p className="text-center text-base">{t("about.p2.text")}</p>
        </div>
        <div className="flex flex-col gap-4 text-balance">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p3.heading")}
          </h1>
          <p className="text-center text-base">{t("about.p3.text")}</p>
        </div>
        <div className="flex flex-col gap-4 text-balance">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p4.heading")}
          </h1>
          <p className="text-center text-base">{t("about.p4.text")}</p>
        </div>
        <div className="flex flex-col gap-4 text-balance">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p5.heading")}
          </h1>
          <p className="text-center text-base">{t("about.p5.text")}</p>
        </div>
      </Container>
    </Section>
  );
};

MainSection.displayName = "MainSection";

export { MainSection };
