import { gifURL } from "@/utils/Constant"

const Hero = () => {
  return (
    <div className={`relative text-white flex justify-center items-center w-screen bg-cover bg-no-repeat`} style={{backgroundImage: `url(${gifURL})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>
      <img src="/images/Services.png" alt="" className="relative z-10 md:h-[120vh] h-[50vh]" />
    </div>
  )
}

export default Hero
