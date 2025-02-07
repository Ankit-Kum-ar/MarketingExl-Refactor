


const Hero = () => {
  return (
    <section className='HeroContent  bg-black flex flex-col justify-between  relative h-[60vh] md:h-[90vh] w-screen items-center bg-gradient-to-t from-black via-transparent to-transparent'>
        <div className="h-[90vh] w-screen flex justify-center items-center">      <h1 className='greeting text-white opacity-25 text-5xl md:text-[106px] font-extrabold text-center mb-10 z-20 p-0 font-anybody'>CONTACT US</h1>
        </div>
        <div className="absolute h-[60vh] md:h-[90vh] w-screen flex justify-center items-center z-20"> <img src="/images/contact.png" alt="" className="h-[50vh] md:h-[90vh] w-auto" /></div>

    </section>
  )
}

export default Hero
