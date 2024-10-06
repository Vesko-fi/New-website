import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { WaitingList } from "./WaitingList";
import { DemoRequest } from "./DemoRequest";
import { PersonalDataRight } from "./PersonalDataRight";
import { useTranslation } from "react-i18next";

const MainContents = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section className="scroll-margin-top-[64px] mt-8">
        <Container className="flex flex-col items-center gap-16 pb-6">
          <div className="flex flex-col text-justify">
            <h2 className="mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl">
              {t("privacyPolicy.heading")}
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-justify">
            <p>{t("privacyPolicy.date")}</p>
            <h2 className="text-balance text-xl font-bold lg:text-2xl xl:text-3xl">
              {t("privacyPolicy.introduction.heading")}
            </h2>
            <p>{t("privacyPolicy.introduction.text1")}</p>
            <p>{t("privacyPolicy.introduction.text2")}</p>
          </div>
          <div className="flex flex-col gap-4 text-justify">
            <h2 className="text-start text-xl font-bold md:text-balance lg:text-2xl xl:text-3xl">
              {t("privacyPolicy.purpose.heading")}
            </h2>
            <WaitingList />
            <DemoRequest />

            <div className="my-4 flex flex-col gap-4 text-justify">
              <h2 className="text-start text-xl font-bold lg:text-2xl xl:text-3xl">
                {t("privacyPolicy.dataProtection.heading")}
              </h2>
              <p>{t("privacyPolicy.dataProtection.text1")}</p>
              <p>{t("privacyPolicy.dataProtection.text2")}</p>
            </div>
            <div className="my-4 flex flex-col gap-2 text-justify">
              <h2 className="text-start text-xl font-bold lg:text-2xl xl:text-3xl">
                {t("privacyPolicy.dataTransfer.heading")}
              </h2>
              <p>{t("privacyPolicy.dataTransfer.text")}</p>
            </div>
            <PersonalDataRight />
            <div className="my-4 flex flex-col gap-4 text-justify">
              <h2 className="text-start text-xl font-bold lg:text-2xl xl:text-3xl">
                {t("privacyPolicy.dataSharing.heading")}
              </h2>
              <p>{t("privacyPolicy.dataSharing.text")}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

MainContents.displayName = "MainContents";
export { MainContents };
