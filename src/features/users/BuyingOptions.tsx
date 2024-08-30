import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

// const BuyingOptionItems = [
//     {
//       imageSrc: " ",
//       heading: "Product Availability",
//       text: "Why travel long distances to find a product? Through Vesko you can check who sells it and if it's available in-store or not."
//     },
//     {
//       imageSrc: " ",
//       heading: "BOPIS",
//       text: "(Buy Online, Pick Up In-Store): Vesko helps you to find products from local retails, Buy them Online in Vesko and Pick them In Store."
//     },
//     {
//       imageSrc: " ",
//       heading: "Product Booking",
//       text: "Want to buy the last item but unsure if it meets your needs? Vesko lets you easily book it online."
//     },
//     {
//       imageSrc: " ",
//       heading: "Home Delivery",
//       text: "Prefer to stay home?We’ll deliver from your local store straight to your door."
//     },
// ]

const BuyingOptions = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <div>
          <h1 className="mb-4 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("users.heroHeading")}
          </h1>
        </div>
        <div>items to be mapped</div>
      </Container>
    </Section>
  );
};
BuyingOptions.displayName = "BuyingOptions";

export { BuyingOptions };
