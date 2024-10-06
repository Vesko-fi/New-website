import { SEO } from "@components/SEO";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { useTranslation } from "react-i18next";

interface options {
  heading: string;
  text: string;
}

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  const optionsWaitlist: Array<options> = t(
    "privacyPolicy.purpose.waitlist.options",
    {
      returnObjects: true,
    }
  );
  const optionsDemoRequest: Array<options> = t(
    "privacyPolicy.purpose.demoRequest.options",
    {
      returnObjects: true,
    }
  );
  const optionsPersonalDataRight: Array<options> = t(
    "privacyPolicy.personalDataRight.options",
    {
      returnObjects: true,
    }
  );
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Vesko Praivacy Policy"
        keywords="vesko, privacy policy"
      />

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
            <div className="my-2">
              <h3 className="text-lg font-bold lg:text-lg xl:text-xl">
                A - {t("privacyPolicy.purpose.waitlist.heading")}
              </h3>
              <ul className="list-disc text-start">
                {optionsWaitlist.map((option, index) => {
                  return (
                    <div key={index} className="my-2">
                      <li>
                        <b>{t(option.heading)}</b>
                        {t(option.text)}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="my-4">
              <h3 className="text-lg font-bold lg:text-lg xl:text-xl">
                B - {t("privacyPolicy.purpose.demoRequest.heading")}
              </h3>
              <ul className="list-disc text-start">
                {optionsDemoRequest.map((option, index) => {
                  return (
                    <div key={index} className="my-2">
                      <li>
                        <b>{t(option.heading)}</b>
                        {t(option.text)}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
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
            <div className="my-4 flex flex-col gap-2 text-justify">
              <h2 className="text-start text-xl font-bold lg:text-2xl xl:text-3xl">
                {t("privacyPolicy.personalDataRight.heading")}
              </h2>
              <ul className="list-disc text-start">
                {optionsPersonalDataRight.map((option, index) => {
                  return (
                    <div key={index} className="my-4">
                      <li>
                        <b>{t(option.heading)}</b>
                        {t(option.text)}
                      </li>
                    </div>
                  );
                })}
              </ul>
              <p>{t("privacyPolicy.personalDataRight.privacyContactText")}</p>
            </div>
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

export default PrivacyPolicyPage;
