import { SellingPointItem } from "@components/home/SellingPointItem";
import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import {
  expandReachImg,
  inventoryImg,
  newArrivalImg,
  orderOnlineImg,
} from "@constants/assets";
interface USPItem {
  id: number;
  usp_num: string;
  header: string;
  subheader: string;
  img: string;
}
const StoreSection: React.FC = () => {
  /** USP: Unique Selling Points  */
  const usp_items: USPItem[] = [
    {
      id: 1,
      usp_num: "01",
      header: `Maximise your Physical Store Sales`,
      subheader: `The built-in omnichannel system brings your store and its product line
           closer to your customer by giving them access to your inventory.`,
      img: newArrivalImg,
    },
    {
      id: 2,
      usp_num: "02",
      header: `Expand your Reach & Grow`,
      subheader: `Why limit your sales to just one channel when you can maximise your
           reach by selling through both online and offline channels
           simultaneously?`,
      img: expandReachImg,
    },
    {
      id: 3,
      usp_num: "03",
      header: `Fulfill online orders from store shelf`,
      subheader: `Vesko unifys your offline and online inventory which enables you listing
         the same item online and offline to maximise your sales and eliminate
        the need for extra storage for online sales, 1st  e-commerce platform in the world.`,
      img: orderOnlineImg,
    },
    {
      id: 4,
      usp_num: "04",
      header: `Scalable store with built in inventory and order management system`,
      subheader: `Vesko’s store can hold a large number of products as your store will
          have its own search engine, predefined and customisable categorising system.`,
      img: inventoryImg,
    },
  ];
  return (
    <Section>
      <Container>
        <h2 className="lg:w-53 mb-2 text-center text-3xl font-bold">
          <span className="block">A marketplace </span>
          <span className="block">but it's your store</span>
        </h2>
        <p className="text-balance px-4 text-center">
          Vesko gives you a complete control on your store selling terms &
          conditions
        </p>
        <SellingPointItem points={usp_items} />
      </Container>
    </Section>
  );
};
StoreSection.displayName = "StoreSection";
export { StoreSection };
