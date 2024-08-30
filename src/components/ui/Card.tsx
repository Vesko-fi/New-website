interface CardProps {
  imageSrc: string;
  heading: string;
  text: string;
}
const Card: React.FC<CardProps> = ({
  imageSrc,
  heading,
  text,
}) => {
  return (
    <div className="flex flex-col gap-6 py-8 px-7 bg-white rounded-lg shadow-sm">
        <img src={imageSrc} alt={heading} className="h-14 w-14"/>
        <h1 className="text-xl font-bold whitespace-nowrap">{heading}</h1>
        <p className="text-lg">{text}</p>
    </div>
  )
}
Card.displayName = "Card"
export {Card}