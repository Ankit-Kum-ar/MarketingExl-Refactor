import PricingPlans from "@/components/PricingPlans"
import ClientCarousel from "@/components/ClientCarousel"
import Heading from "@/components/Heading"
import PageTitle from "@/components/PageTitle"



const Package = () => {
    

  return (
    <div className="flex flex-col items-center justify-center ">
        <PageTitle title="Packages - MarketingExl" />
        <Heading title="Packages"/>
        <PricingPlans />
        <ClientCarousel />
        
      
    </div>
  )
}

export default Package
