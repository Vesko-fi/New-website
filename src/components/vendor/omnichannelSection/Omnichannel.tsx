import { useTranslation } from "react-i18next";
import { omnichannelImg } from "@constants/assets";
import { List } from "@components/ui/List";
import { SEO } from "@components/SEO";

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
      <SEO
        title={`${t("navbar.forVendors.label")} | ${t("vendors.hero.heading")}`}
        keywords="vesko omnichannel store, omnichannel online store, why vesko, omnichannel retail solution, unify retail presence, scalable online store, Vesko vendor tools, custom online store platform, point of sale system for vendors, logistics and payment solutions, Vesko for vendors, grow your brand online, omnichannel sales for vendors, retail and online store integration"
      />
      <div className="text-balance py-10 text-center">
        <h2 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          {t("vendors.omnichannel.heading")}
          <span className="text-accent1">
            {t("vendors.omnichannel.headingSpan")}
          </span>
          ?
        </h2>
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
          className="rounded-xl sm:w-96 lg:w-[500px] xl:w-[600px]"
        />
      </div>
    </>
  );
};

Omnichannel.displayName = "Omnichannel";
export { Omnichannel };
