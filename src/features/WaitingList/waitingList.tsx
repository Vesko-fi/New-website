import React from "react";
import { useTranslation } from "react-i18next";

const WaitingList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold text-accent1">
        {t("waitlist.header")}
      </h1>
      <p className="mb-4 mt-10 font-bold">{t("waitlist.subheader")}</p>
      <ul className="mt-8 list-disc space-y-4 pl-5">
        <li>{t("waitlist.benefit1")}</li>
        <li>{t("waitlist.benefit2")}</li>
      </ul>
      <p className="mt-6">
        {t("waitlist.miniheader")}{" "}
        <a href="/demo" className="text-blue-500 underline">
          {t("waitlist.link")}
        </a>
      </p>
    </div>
  );
};

WaitingList.displayName = "ContactPage";

export { WaitingList };
