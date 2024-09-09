import { useTranslation } from "react-i18next";
import { omnichannelImg } from "@constants/assets";
import { List } from "@components/ui/List";

const WhyOmnichannel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="space-y-2 text-balance py-8 text-center">
        <h1 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.omnichannel.heading")}
          <span className="text-accent1">
            {t("vendors.omnichannel.headingSpan")}
          </span>
          ?
        </h1>
        <p className="text-sm lg:text-base">{t("vendors.omnichannel.text")}</p>
      </div>

      <div className="flex flex-col items-center justify-between gap-12 space-y-8 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">
            Traditional Omnichannel Requirements:
          </h2>
          <List
            title="Separate Infrastructure"
            description="Requires independent warehouses or fulfillment centers for online
              orders."
          />
          <List
            title="Complex Integration"
            description="Involves
              costly, time-consuming IT projects to integrate in-store and
              online systems."
          />
          <List
            title="Extensive Maintenance"
            description="Needs dedicated teams to
              manage online inventory, logistics, and customer service."
          />
          <List
            title="High Costs"
            description="Expenses from both
              implementation and operational maintenance are significantly high."
          />
          <List
            title="Long Implementation Time"
            description="Traditional setups can take
              several months to over a year to go live."
          />
        </div>
        <img
          src={omnichannelImg}
          alt="Product in store shelf"
          className="sm:w-96 lg:w-[500px] xl:w-auto"
        />
      </div>
    </>
  );
};

WhyOmnichannel.displayName = "WhyOmnichannel";
export { WhyOmnichannel };
