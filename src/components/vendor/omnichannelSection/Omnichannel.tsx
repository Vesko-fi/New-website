import { useTranslation } from "react-i18next";
import { omnichannelImg } from "@constants/assets";
import { List } from "@components/ui/List";

const Omnichannel: React.FC = () => {
  const { t } = useTranslation();

  const options = [
    {
      title: `${t("vendors.tranditionalRequirements.option1.heading")}`,
      description: `${t("vendors.tranditionalRequirements.option1.text")}`,
    },
    {
      title: `${t("vendors.tranditionalRequirements.option2.heading")}`,
      description: `${t("vendors.tranditionalRequirements.option2.text")}`,
    },
    {
      title: `${t("vendors.tranditionalRequirements.option3.heading")}`,
      description: `${t("vendors.tranditionalRequirements.option3.text")}`,
    },
    {
      title: `${t("vendors.tranditionalRequirements.option4.heading")}`,
      description: `${t("vendors.tranditionalRequirements.option4.text")}`,
    },
    {
      title: `${t("vendors.tranditionalRequirements.option5.heading")}`,
      description: `${t("vendors.tranditionalRequirements.option5.text")}`,
    },
  ];
  return (
    <>
      <div className="mb-10 text-balance px-2 text-center">
        <h2 className="my-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.omnichannel.heading")}
          <span className="text-accent1">
            {t("vendors.omnichannel.headingSpan")}
          </span>
          ?
        </h2>
        <p className="text-balance text-sm lg:text-base">
          {t("vendors.omnichannel.text")}
        </p>
      </div>

      <div className="flex flex-col items-center justify-between gap-12 space-y-8 px-2 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">
            {t("vendors.tranditionalRequirements.heading")}:
          </h2>
          {options.map((option, index) => {
            return (
              <List
                key={index}
                title={option.title}
                description={option.description}
              />
            );
          })}
        </div>

        <img
          src={omnichannelImg}
          alt="Product in store shelf"
          className="rounded-xl sm:w-96 lg:w-[500px] xl:w-[600px]"
        />
      </div>
    </>
  );
};

Omnichannel.displayName = "Omnichannel";
export { Omnichannel };
