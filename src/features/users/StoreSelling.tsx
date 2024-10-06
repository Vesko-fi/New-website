import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";

import { Container } from "@components/ui/Container";

import { UserShoppingImg } from "@constants/assets";

const StoreSelling = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-4 px-8 md:flex-row md:gap-12">
        <div>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("users.localShopping.heading")}{" "}
          </h2>
          <p className="text-sm xl:text-base">
            {t("users.localShopping.text")}
          </p>
        </div>
        <img
          src={UserShoppingImg}
          className="rounded-xl sm:w-96 lg:w-[500px] xl:w-[650px]"
          alt="Lady focused on a laptop screen displaying Vesko's product details page, highlighting her engagement in online shopping for unique products."
        />
      </Container>
    </Section>
  );
};
StoreSelling.displayName = "StoreSelling";

export { StoreSelling };
