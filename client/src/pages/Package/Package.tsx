import PricingPlans from "@/components/PricingPlans"
import Header from "./components/Header"
import ClientCarousel from "@/components/ClientCarousel"


const Package = () => {
    

  return (
    <div className="flex flex-col items-center justify-center ">
        <Header />
        <PricingPlans />
        <ClientCarousel />
      
    </div>
  )
}

export default Package
