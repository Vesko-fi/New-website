import { useTranslation } from "react-i18next";

interface options {
  heading: string;
  text: string;
}

const WaitingList = () => {
  const { t } = useTranslation();
  const options: Array<options> = t("privacyPolicy.purpose.waitlist.options", {
    returnObjects: true,
  });
  return (
    <>
      <div className="my-2">
        <h3 className="text-lg font-bold lg:text-lg xl:text-xl">
          A - {t("privacyPolicy.purpose.waitlist.heading")}
        </h3>
        <ul className="list-disc text-start">
          {options.map((option, index) => {
            return (
              <div key={index} className="my-2">
                <li className="text-sm xl:text-base">
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

WaitingList.displayName = "WaitingList";

export { WaitingList };
