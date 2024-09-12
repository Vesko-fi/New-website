import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { UserOnlineImg } from "@constants/assets";

const Description = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row-reverse md:gap-12">
        <div>
          <h1 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("users.onlineShopping.heading")}{" "}
            <span className="text-accent1">
              {t("users.onlineShopping.span")}{" "}
            </span>
          </h1>
          <p className="text-sm xl:text-base">
            {t("users.onlineShopping.text")}
          </p>
        </div>
        <img
          src={UserOnlineImg}
          className="sm:w-96 lg:w-[500px] xl:w-[650px] rounded-xl"
        />
      </Container>
    </Section>
  );
};
Description.displayName = "Description";

export { Description };
