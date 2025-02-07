import Heading from "@/components/Heading"
import Hero from "./components/Hero"
import OurServices from "./components/OurServices"
import CardContainer from "./components/CardContainer"
import ServiceCoursel from "./components/ServiceCoursel"


const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading />
      <Hero />
      <OurServices />
      <CardContainer />
      <ServiceCoursel />
      
    </div>
  )
}

export default Services
