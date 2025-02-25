import AboutUs from "@/components/AboutUs"
import Hero from "./components/Hero"
// import OurService from "./components/OurService"
import Joinus from "@/components/JoinUs"
import ClientCarousel from "@/components/ClientCarousel"
import Form from "@/components/Form"
import PricingPlans from "@/components/PricingPlans"
import Testimonial from "./components/Testimonial"
import PageTitle from "@/components/PageTitle"

interface HomeProps {
  toggleForm: () => void;
}

const Home: React.FC<HomeProps> = ( {toggleForm} ) => {
  return (
    <div className="bg-[#0f0f0f] ">
      <PageTitle title="Home - MarketingExl" />
      <Hero />
      <AboutUs />
      {/* <OurService /> */}
      <Joinus />
      <ClientCarousel />
      <Form />
      <PricingPlans toggleForm={toggleForm} />
      <Testimonial />
      
    </div>
  )
}

export default Home
