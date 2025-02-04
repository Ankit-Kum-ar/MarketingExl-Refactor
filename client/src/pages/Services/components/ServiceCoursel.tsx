import ClientCarousel from "@/components/ClientCarousel"

const ServiceCoursel = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
        <h1 className="text-[#FC7901] font-anybody text-center md:text-6xl text-3xl font-extrabold">Trusted <span className="text-white">2000</span>+ global Clients</h1>      
        <ClientCarousel />
    </div>
  )
}

export default ServiceCoursel
