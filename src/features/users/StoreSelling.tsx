import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { UserShoppingImg } from "@constants/assets";

const StoreSelling = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-4 md:gap-12 md:flex-row">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("users.localShopping.heading")}{" "}
          </h1>
          <p className="text-sm xl:text-base">
            {t("users.localShopping.text")}
          </p>
        </div>
        <img src={UserShoppingImg} className="sm:w-96 lg:w-[500px] xl:w-[650px]" />
      </Container>
    </Section>
  );
};
StoreSelling.displayName = "StoreSelling";

export { StoreSelling };
