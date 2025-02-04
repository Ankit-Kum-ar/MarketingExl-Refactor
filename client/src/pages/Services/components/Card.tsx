interface CardProps {
  vector?: string;
  image?: string;
  text?: string;
}

const Card: React.FC<CardProps> = ({ vector, image, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-3 rounded-3xl border-2 border-[#FC7901] bg-[url('/images/cards/CARD1.png')] shadow-lg w-64 h-[22rem]">
        <div className="flex flex-col justify-center items-center">
            <img src={`/images/cards/${vector}.png`} alt="" className="relative" /> 
            <img src={`/images/cards/${image}.png`} alt="" className="absolute" /> 
        </div>
        <h2 className="text-white text-center text-2xl font-poppins font-semibold">{text}</h2>
    </div>
  )
}

export default Card
