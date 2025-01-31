const AboutUs = () => {
  return (
    <div className='bg-[#0f0f0f] w-full h-[100vh] items-center flex flex-col gap-16 ' >
        <div className='divheading bg-gradient-to-b from-black via-transparent to-transparent w-full h-[30vh]'>
            <h3 className='title text-6xl font-semibold text-white text-center align-text-bottom pt-14'>Top Rank <span className='text-[#FC7901] font-bold'>SEO Services</span><br /> for your Growth</h3>
        </div>
        <div className="container flex w-[80vw] gap-12 justify-center">
            <div className="image-container relative bg-[url(/images/AboutUs.jpg)] object-cover w-[20vw] h-[55vh] rounded-3xl ">
                <button className="absolute -left-20 mt-10 py-2 px-6 md:px-6 rounded-lg font-semibold border border-white backdrop-blur bg-white-100 text-white "> 2000+ CLIENTS</button>                
                <button className='absolute -bottom-4 left-7 py-2 px-6 md:px-6 rounded-lg font-semibold border border-white backdrop-blur bg-white-100 text-white'>8 Years of Experience</button>
            </div>
            <div className="text-container w-[40vw] h-[55vh] text-white ">
                <h3 className='font-semibold text-4xl text-poppins '>ABOUT US</h3>
                <p className='text-xl text-justify'><span className='text-[#FC7901] '>At Marketing Exl</span> we are committed to propelling your business forward in the dynamic digital marketing landscape. As a leading digital marketing agency, we specialize in crafting tailored strategies that elevate your brand, engage your audience, and deliver measurable results. Our team of experts leverages the latest technologies and creative solutions to help you achieve your business goals.</p>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs