import { useTranslation } from "react-i18next";

import { Section } from "@components/ui/Section";
import { Container } from "@components/ui/Container";

import { UserOnlineImg } from "@constants/assets";

const Description = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row-reverse md:gap-12">
        <div>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("users.onlineShopping.heading")}{" "}
            <span className="text-accent1">
              {t("users.onlineShopping.span")}{" "}
            </span>
          </h2>
          <p className="text-sm xl:text-base">
            {t("users.onlineShopping.text")}
          </p>
        </div>
        <img
          src={UserOnlineImg}
          className="rounded-xl sm:w-96 lg:w-[500px] xl:w-[650px]"
          alt="Vendor and user engaging in conversation about products, showcasing various items displayed on cabinets, emphasizing personalized shopping experience."
        />
      </Container>
    </Section>
  );
};
Description.displayName = "Description";

export { Description };
