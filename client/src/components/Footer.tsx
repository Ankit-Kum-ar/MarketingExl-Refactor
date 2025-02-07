
const Footer = () => {
  return (
    <section className="w-screen bg-[#2b1205] flex flex-col items-center pt-16">
      <div className="footertop w-[80vw] flex flex-col md:flex-row justify-between ">
        <div className="about w-full md:w-1/3"> 
          <div className="img-container py-4">
            <img src="./images/logo.png" alt="MarketingEXL" />
          </div>
          <div className="info object-contain text-left text-white font-poppins leading-relaxed text-xs md:text-sm font-thin py-4 "><p>we are committed to propelling your business forward in the dynamic digital marketing landscape. As a leading digital marketing agency, we specialize in crafting tailored strategies that elevate your brand, engage your audience, and deliver measurable results.
          </p></div>
          <div className="icons bg-black rounded-lg py-4">hi</div>
        </div>
        <div className="quick text-white py-10">
          <h4 className="py-2 text-xs md:text-sm">Quick Links</h4>
          <ul className="list-disc list-inside text-xs md:text-sm ">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Packages</li>
            <li>Conatct Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="contact text-white flex flex-col justify-center pb-8 ">
            <div className="space-y-4 ">
        <div className="flex gap-2">
        <img
                 src= "/images/Vector.png"
                 alt="Mail"
        
                    className="h-5 w-4 text-white mt-2"
                  />
            <div>
          <p className="text-orange-500 font-bold text-sm  ">Location</p>
          <p className="text-sm">B-013, ATS Bouquet, Sector-132, Noida, Uttar <br /> Pradesh-201304</p></div>
        </div>
        <div className="flex gap-2">
        <img
                 src= "/images/Vector (1).png"
                 alt="Phone"
        
                    className="h-5 w-5 mt-2 text-white"
                  />
            <div>
          <p className="text-orange-500 font-bold text-sm ">Call</p>
          <p className="text-sm ">+91-8178070852</p></div>
        </div>
        <div className="flex gap-2">
        <img
                 src= "/images/Vector.svg"
                 alt="Phone"
        
                    className="h-4 w-5 mt-2 text-white"
                  />
            <div>
          <p className="text-orange-500 font-bold text-sm ">Email</p>
          <p className="text-sm ">info@marketingexl.com</p></div>
        </div>
      </div>
    </div>
      </div>
      <div className="w-full h-0.5 bg-white opacity-20"></div>
      <div className="footerbottom"><p className="text-[#CCCCCC] text-xs md:text-base p-2 md:p-4">© Copyright 2024 MarketingEXL | All Rights Reserved by | Design by <span className="text-white font-bold font-poppins">MarketingEXL</span></p></div>
    </section>
  )
}

export default Footer
