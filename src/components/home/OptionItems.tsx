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
    <div className="flex flex-col items-center lg:w-[358px] p-6 bg-white rounded-lg gap-2 border border-gray-300 border-opacity-20">  
      <img src={imageSrc} alt={heading} height={height} width={width}/>
       <h2 className="text-2xl font-bold text-center">{heading}</h2> 
       <p className="text-base font-normal text-center">{text}</p>
    </div>
  )
}
export {OptionItems}