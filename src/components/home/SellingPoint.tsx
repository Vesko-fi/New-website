interface SellingPoint {
  usp_num: string;
  heading: string;
  text: string;
  img: string;
}

const SellingPoint: React.FC<SellingPoint> = ({
  usp_num,
  heading,
  text,
  img,
}) => {
  return (
    <>
      <div className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row odd:md:flex-row-reverse lg:gap-24">
        <div className="flex flex-col items-start gap-4 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-3xl text-accent1-40 sm:text-4xl md:text-5xl lg:text-7xl">
            <span>{usp_num}</span>
            <span className="block h-1 w-full bg-accent1-40"></span>
          </div>
          <div className="text-start text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            {heading}
          </div>
          <p className="text-sm md:text-base">{text}</p>
        </div>

        <img
          src={img}
          alt="Unique selling points"
          className="rounded-xl sm:w-96 lg:w-[580px]"
        />
      </div>
    </>
  );
};

SellingPoint.displayName = "SellingPoint";
export { SellingPoint };
