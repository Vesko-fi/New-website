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
    <div className="mt-6 bg-red-200">
      {points.map((point) => (
        <div
          key={point.id}
          className="mt-12 flex flex-col items-center justify-between bg-teal-100 md:flex-row even:md:flex-row-reverse lg:gap-24"
        >
          <img
            src={point.img}
            alt={point.header}
            className="bg-green-300 sm:w-96 md:mr-4 lg:w-auto"
          />
          <div className="flex flex-col items-start gap-4">
            <div className="text-3xl text-accent1-40 sm:text-4xl md:text-5xl lg:text-7xl">
              <span>{point.usp_num}</span>
              <span className="block h-1 w-full bg-accent1-40"></span>
            </div>
            <div className="text-balance text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              {point.header}
            </div>
            <p className="text-sm md:text-base">{point.subheader}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export { SellingPointItem };
