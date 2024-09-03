import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";
import { BenefitsSecond } from "@components/vendor/logisticsAndPayment/BenefitsSecond";
import { Slider } from "@components/vendor/logisticsAndPayment/Slider";

const LogisticsAndPayment: React.FC = () => {
  return (
    <>
      <Section className="bg-gradient-to-t from-[#F0F5FF]">
        <Container>
          <BenefitsSecond />
          <Slider />
        </Container>
      </Section>
    </>
  );
};

LogisticsAndPayment.displayName = "LogisticsAndPayment";
export { LogisticsAndPayment };
