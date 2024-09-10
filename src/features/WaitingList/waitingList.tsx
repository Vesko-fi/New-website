import React from "react";
import { useTranslation } from "react-i18next";

const WaitingList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold">
        {t("waitingList.join")}{" "}
        <span className="text-accent1">{t("waitingList.waitlist")}</span>
      </h1>
      <p className="mb-4 mt-10 font-bold">{t("waitingList.formPrompt")}</p>
      <p className="mb-6">{t("waitingList.excitingThings")}</p>

      <p className="mb-6">{t("waitingList.nextRelease")}</p>

      <p className="mb-6">{t("waitingList.dontMissOut")}</p>

      <p className="mb-6">{t("waitingList.signUp")}</p>
    </div>
  );
};

WaitingList.displayName = "ContactPage";

export { WaitingList };
