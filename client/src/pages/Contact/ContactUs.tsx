import ClientCarousel from "@/components/ClientCarousel"
import Form from "@/components/Form"
// import OfficeMap from "./components/OfficeMap"
import Hero from "./components/Hero"
import Heading from "@/components/Heading"
import PageTitle from "@/components/PageTitle"
import Map from "./components/Map"

const ContactUs = () => {
  return (
    <div>
      <Heading title="Contact Us Today!"/>
      <PageTitle title="Contact Us - MarketingExl" />
      <Hero />
       <Form />
        {/* <OfficeMap /> */}
        <Map />
       
        <ClientCarousel />
        
      
    </div>
  )
}

export default ContactUs
