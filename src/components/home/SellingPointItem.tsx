import { Container } from "@components/ui/Container";
import { Section } from "@components/ui/Section";

interface UPSItem {
  id: number;
  usp_num: string;
  header: string;
  subheader: string;
  img: string;
}

interface UniqueSellingPointsProps {
  points: UPSItem[];
}

const SellingPointItem: React.FC<UniqueSellingPointsProps> = ({ points }) => {
  return (
    <Section>
      {points.map((point) => (
        <Container
          key={point.id}
          className={`flex flex-col items-center justify-between gap-16 md:flex-row lg:gap-24 ${point.id % 2 === 0 ? "md:flex-row-reverse" : ""}`}
        >
          <img
            src={point.img}
            alt={point.header}
            className="sm:w-96 lg:w-auto"
          />

          <div className="flex flex-col items-start gap-4 sm:p-4">
            <div className="text-3xl text-accent1-40 sm:text-4xl md:text-5xl lg:text-7xl">
              <span>{point.usp_num}</span>
              <span className="block h-1 w-full bg-accent1-40"></span>
            </div>
            <h1 className="text-balance text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              {point.header}
            </h1>
            <p>{point.subheader}</p>
          </div>
        </Container>
      ))}
    </Section>
  );
};

export { SellingPointItem };
