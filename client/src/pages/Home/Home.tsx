import AboutUs from "@/components/AboutUs"
import Hero from "./components/Hero"
import OurService from "./components/OurService"
import Joinus from "./components/JoinUs"
import ClientCarousel from "@/components/ClientCarousel"
import Form from "@/components/Form"

const Home = () => {
  return (
    <div className="bg-[#0f0f0f] h-[100vh]">
      <Hero />
      <AboutUs />
      <OurService />
      <Joinus />
      <ClientCarousel />
      <Form />
    </div>
  )
}

export default Home
