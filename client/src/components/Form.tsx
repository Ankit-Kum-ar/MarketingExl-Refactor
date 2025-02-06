import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Form = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);


  return (
    <section ref={formRef} className="bg-black text-white p-6 lg:p-10  shadow-lg  grid grid-cols-1 lg:grid-cols-2 gap-12 w-full ">
        <div className="form bg-transparent backdrop-blur-lg text-white border-2 border-white flex flex-col justify-center items-center rounded-3xl">
            <div className="title flex flex-row gap-2 justify-center items-center p-5">
                <div className='flex flex-col'><h3 className='text-3xl font-bold text-[#FC7901] font-anybody'>FILL THE FORM</h3> <h3  className='text-3xl font-bold text-[#FC7901] font-anybody
                '>GET IN TOUCH</h3></div>
                <div><h2 className='text-7xl font-extrabold font-anybody'>&</h2></div>
            </div>
            <div>
            <form className=" px-10 py-4 rounded-3xl space-y-4  text-black z-50 relative ">
            <input
            type="text"
            placeholder="Full Name*"
            className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
          />
          <select
            className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FC7901]"
          >
            <option value="" disabled selected className="text-gray-400">
             --- Select Package ---
            </option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
          <select
            className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FC7901]"
          >
            <option value="" disabled selected className="text-gray-400">
              Choose Service
            </option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
          <button
            type="submit"
            className="w-full p-2 bg-[#FC7901] hover:bg-orange-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
          </form>
            </div>

        </div>
        <div className="contact text-white flex flex-col justify-center ">
            <div className="space-y-4 ">
        <div className="flex gap-2">
        <img
                 src= "/images/Vector.svg"
                 alt="Mail"
        
                    className="h-8 w-10 text-white"
                  />
            <div>
          <p className="text-orange-500 font-bold ">Location</p>
          <p>B-013, ATS Bouquet, Sector-132, Noida, Uttar <br /> Pradesh-201304</p></div>
        </div>
        <div className="flex gap-2">
        <img
                 src= "/images/Vector.png"
                 alt="Phone"
        
                    className="h-10 w-8 text-white"
                  />
            <div>
          <p className="text-orange-500 font-bold">Call</p>
          <p>+91-8178070852</p></div>
        </div>
        <div className="flex gap-2">
        <img
                 src= "/images/Vector (1).png"
                 alt="Phone"
        
                    className="h-10 w-10 text-white"
                  />
            <div>
          <p className="text-orange-500 font-bold">Email</p>
          <p>info@marketingexl.com</p></div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Form
