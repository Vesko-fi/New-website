import { useTranslation } from "react-i18next";
import { omnichannelImg } from "@constants/assets";
import { List } from "@components/ui/List";

interface options {
  heading: string;
  text: string;
}

const Omnichannel: React.FC = () => {
  const { t } = useTranslation();

  const options: Array<options> = t(
    "vendors.tranditionalRequirements.options",
    {
      returnObjects: true,
    }
  );

  return (
    <>
      <div className="text-balance py-10 text-center">
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
            {t("vendors.tranditionalRequirements.heading")}:
          </h2>
          {options.map((option, index) => {
            return (
              <List
                key={index}
                title={option.heading}
                description={option.text}
              />
            );
          })}
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

Omnichannel.displayName = "Omnichannel";
export { Omnichannel };
