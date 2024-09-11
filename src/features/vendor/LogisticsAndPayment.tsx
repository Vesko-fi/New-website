import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { Benefits } from "@components/vendor/logisticsAndPayment/Benefits";
import { PointOfSale } from "@components/vendor/logisticsAndPayment/PointOfSale";
import { Slider } from "@components/vendor/logisticsAndPayment/Slider";

const LogisticsAndPayment: React.FC = () => {
  return (
    <>
      <Section className="bg-gradient-to-t from-[#F0F5FF]">
        <Container>
          <Benefits />
          <Slider />
          <PointOfSale />
        </Container>
      </Section>
    </>
  );
};

LogisticsAndPayment.displayName = "LogisticsAndPayment";
export { LogisticsAndPayment };
