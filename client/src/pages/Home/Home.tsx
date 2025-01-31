import AboutUs from "@/components/AboutUs"
import Hero from "./components/Hero"
import OurService from "./components/OurService"

const Home = () => {
  return (
    <div className="bg-[#0f0f0f] h-[100vh]">
      <Hero />
      <AboutUs />
      <OurService />
    </div>
  )
}

export default Home
