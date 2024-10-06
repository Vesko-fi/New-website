import { useTranslation } from "react-i18next";

interface options {
  heading: string;
  text: string;
}

const DemoRequest = () => {
  const { t } = useTranslation();
  const options: Array<options> = t(
    "privacyPolicy.purpose.demoRequest.options",
    {
      returnObjects: true,
    }
  );
  return (
    <>
      <div className="my-4">
        <h3 className="text-lg font-bold lg:text-lg xl:text-xl">
          B - {t("privacyPolicy.purpose.demoRequest.heading")}
        </h3>
        <ul className="list-disc text-start">
          {options.map((option, index) => {
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
    </>
  );
};

DemoRequest.displayName = "DemoRequest";

export { DemoRequest };
