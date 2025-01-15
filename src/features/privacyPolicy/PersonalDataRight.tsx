import { useTranslation } from "react-i18next";
interface options {
  heading: string;
  text: string;
}

const PersonalDataRight = () => {
  const { t } = useTranslation();
  const options: options[] = [
    {
      heading: t("privacyPolicy.personalDataRight.options1.heading"),
      text: t("privacyPolicy.personalDataRight.options1.text"),
    },
    {
      heading: t("privacyPolicy.personalDataRight.options2.heading"),
      text: t("privacyPolicy.personalDataRight.options2.text"),
    },
    {
      heading: t("privacyPolicy.personalDataRight.options3.heading"),
      text: t("privacyPolicy.personalDataRight.options3.text"),
    },
    {
      heading: t("privacyPolicy.personalDataRight.options4.heading"),
      text: t("privacyPolicy.personalDataRight.options4.text"),
    },
  ];

  return (
    <>
      <div className="my-4 flex flex-col gap-2 text-justify">
        <h2 className="text-start text-xl font-bold lg:text-2xl xl:text-3xl">
          {t("privacyPolicy.personalDataRight.heading")}
        </h2>
        <ul className="list-disc text-start">
          {options.map((option, index) => {
            return (
              <div key={index} className="my-4">
                <li className="text-sm xl:text-base">
                  <b>{t(option.heading)}</b>
                  {t(option.text)}
                </li>
              </div>
            );
          })}
        </ul>
        <p>{t("privacyPolicy.personalDataRight.privacyContactText")}</p>
      </div>
    </>
  );
};

PersonalDataRight.displayName = "PersonalDataRight";

export { PersonalDataRight };
