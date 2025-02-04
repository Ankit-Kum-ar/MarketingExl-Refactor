import AboutUs from "@/components/AboutUs"
import Hero from "./components/Hero"
import OurService from "./components/OurService"
import Joinus from "./components/JoinUs"
import ClientCarousel from "@/components/ClientCarousel"
import Form from "@/components/Form"
import PricingPlans from "@/components/PricingPlans"
import Testimonial from "./components/Testimonial"

const Home = () => {
  return (
    <div className="bg-[#0f0f0f] ">
      <Hero />
      <AboutUs />
      {/* <OurService /> */}
      <Joinus />
      <ClientCarousel />
      <Form />
      <PricingPlans />
      <Testimonial />
    </div>
  )
}

export default Home
