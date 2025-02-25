import PricingPlans from "@/components/PricingPlans"
import ClientCarousel from "@/components/ClientCarousel"
import Heading from "@/components/Heading"
import PageTitle from "@/components/PageTitle"

interface PackageProps {
  toggleForm: () => void;
}

const Package: React.FC<PackageProps> = ({toggleForm}) => {
    

  return (
    <div className="flex flex-col items-center justify-center ">
        <PageTitle title="Packages - MarketingExl" />
        <Heading title="Packages"/>
        <PricingPlans toggleForm={toggleForm} />
        <ClientCarousel />
        
      
    </div>
  )
}

export default Package
