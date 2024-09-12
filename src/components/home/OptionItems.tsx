interface OptionItemsProps {
  imageSrc: string;
  heading: string;
  height: number;
  width: number;
}
const OptionItems: React.FC<OptionItemsProps> = ({
  imageSrc,
  heading,
  height,
  width,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-300 border-opacity-20 bg-white p-6 text-center lg:w-[358px]">
      <img src={imageSrc} alt={heading} height={height} width={width} />
      <h2 className="text-2xl font-bold">{heading}</h2>
    </div>
  );
};
export { OptionItems };
