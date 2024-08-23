interface OptionItemsProps {
  imageSrc: string;
  heading: string;
  text: string;
  height: number;
  width: number;
}
const OptionItems: React.FC<OptionItemsProps> = ({
  imageSrc,
  heading,
  text,
  height,
  width,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 rounded-lg border border-gray-300 border-opacity-20 bg-white p-6 lg:w-[358px]">
      <img src={imageSrc} alt={heading} height={height} width={width} />
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p >{text}</p>
    </div>
  );
};
export { OptionItems };
