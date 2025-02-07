import PricingPlans from "@/components/PricingPlans"
import ClientCarousel from "@/components/ClientCarousel"
import Heading from "@/components/Heading"



const Package = () => {
    

  return (
    <div className="flex flex-col items-center justify-center ">
        <Heading title="Packages"/>
        <PricingPlans />
        <ClientCarousel />
        
      
    </div>
  )
}

export default Package
