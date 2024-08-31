import { useTranslation } from "react-i18next";

import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { Card } from "@components/ui/Card";
import { Icon } from "@components/ui/Icon";


const BuyingOptionItems = [
  {
    imageSrc: <Icon icon="box"/>,
    heading: "Product Availability",
    text: "Why travel long distances to find a product? Through Vesko you can check who sells it and if it's available in-store or not.",
  },
  {
    imageSrc: <Icon icon="hand-coin"/>,
    heading: "BOPIS",
    text: "Vesko helps you to find products from local retails, Buy them Online in Vesko and Pick them In Store.",
  },
  {
    imageSrc: <Icon icon="product-booking"/>,
    heading: "Product Booking",
    text: "Want to buy the last item but unsure if it meets your needs? Vesko lets you easily book it online.",
  },
  {
    imageSrc: <Icon icon="truck-delivery"/>,
    heading: "Home Delivery",
    text: "Prefer to stay home?We’ll deliver from your local store straight to your door.",
  },
];

const BuyingOptions = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-t from-[#F0F5FF]">
      <Container>
        <div>
          <h1 className="mb-4 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
            {t("users.heroHeading")}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BuyingOptionItems.map((item) => (
            <Card
              icon={item.imageSrc}
              title={item.heading}
              description={item.text}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
BuyingOptions.displayName = "BuyingOptions";

export { BuyingOptions };
