import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { AboutImg } from "@constants/assets";

const MainSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <img
        src={AboutImg}
        alt=""
        className="h-[500px] w-full object-cover"
        style={{ clipPath: "inset(0 0 20% 0)" }}
      />
      <Container className="flex flex-col items-center gap-12 pb-6">
        <div className="mt-[-60px] flex max-w-[800px] flex-col gap-4 text-justify">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p1.heading")}
          </h1>
          <p>
            <span className="font-bold">{t("about.p1.span")} </span>
            {t("about.p1.text")}
          </p>
        </div>
        <div className="flex max-w-[800px] flex-col gap-4 text-start">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p2.heading")}
          </h1>
          <p>{t("about.p2.text")}</p>
        </div>
        <div className="flex max-w-[800px] flex-col gap-4 text-justify">
          <h1 className="mb-1 text-balance text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("about.p3.heading")}
          </h1>
          <p>{t("about.p3.text")}</p>
        </div>
        <div className="flex max-w-[800px] flex-col gap-4 text-justify">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p4.heading")}
          </h1>
          <p>{t("about.p4.text")}</p>
        </div>
        <div className="flex max-w-[800px] flex-col gap-4 text-justify">
          <h1 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
            {t("about.p5.heading")}
          </h1>
          <p>{t("about.p5.text")}</p>
        </div>
      </Container>
    </Section>
  );
};

MainSection.displayName = "MainSection";

export { MainSection };
