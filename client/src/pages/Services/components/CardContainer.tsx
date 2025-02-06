import { Link } from "react-router-dom";
import Card from "./Card"
import { services } from "@/utils/Constant";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-20">
      {services.map(service => (
        <Link key={service.id} to={`/service/${service.id}`} className="block">
          <Card vector={service.vector} image={service.image} text={service.text} />
        </Link>
      ))}
    </div>
  )
}

export default CardContainer
