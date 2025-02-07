import ClientCarousel from "@/components/ClientCarousel"
import Form from "@/components/Form"
import OfficeMap from "./components/OfficeMap"
import Hero from "./components/Hero"
import Heading from "@/components/Heading"

const ContactUs = () => {
  return (
    <div>
      <Heading title="Contact Us Today!"/>
      <Hero />
       <Form />
        <OfficeMap />
       
        <ClientCarousel />
        
      
    </div>
  )
}

export default ContactUs
