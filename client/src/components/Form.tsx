import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useState } from 'react';

import { leadGenerate } from '@/redux/slices/LeadSlice';

const Form = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    package: '',
    service: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target 
    setFormData({
      ...formData,
      [name]:value
    })
    console.log(formData)
  }

  async function FormSubmission(e: React.FormEvent) {
    e.preventDefault()
    
    if(!formData.fullName || !formData.email || !formData.phone){
      toast.error('Please fill all the fields')
      return;
    }

    const response = await dispatch(leadGenerate(formData))
    if(response?.payload?.success){
      toast.success('Form Submitted Successfully')
      navigate('/')
    }

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      package: '',
      service: '',
    })
  }

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
      <div className="form bg-transparent backdrop-blur-lg text-white border-2 border-white flex flex-col justify-center items-center rounded-3xl md:mx-16">
          <div className="title flex flex-row gap-2 justify-center items-center p-5 px-3">
                <div className='flex flex-col'><h3 className='text-3xl font-bold text-[#FC7901] font-anybody'>FILL THE FORM</h3> <h3  className='text-3xl font-bold text-[#FC7901] font-anybody
                '>GET IN TOUCH</h3></div>
                <div><h2 className='text-7xl font-extrabold font-anybody'>&</h2></div>
            </div>
            <div>
              <form onSubmit={FormSubmission} className=" px-10 py-4 rounded-3xl space-y-4  text-black z-50 relative ">
              <input
              type="text"
              id='fullName'
              name='fullName'
              placeholder="Full Name*"
              onChange={handleChange}
              className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
              />
            <input
              type="email"
              id='email'
              name='email'
              placeholder="Email*"
              onChange={handleChange}
              className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              id='phone'
              name='phone'
              onChange={handleChange}
              className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
            />
            <label htmlFor="package" className="sr-only">Select Package</label>
            <select
              id="package"
              name='package'
              // onChange={handleChange}
              className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FC7901]"
            >
              <option value="" disabled selected className="text-gray-400">
              --- Select Package ---
              </option>
              <option value="basic">Standard</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
            <label htmlFor="service" className="sr-only">Choose Service</label>
            <select
              id="service"
              name='service'
              // onChange={handleChange}
              className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FC7901]"
            >
              <option value="" disabled selected className="text-gray-400">
                Choose Service
              </option>
              <option value="socialmedia">Social Media Management</option>
              <option value="seo">SEO & SEM</option>
              <option value="emailmarketing">Email & Whatsapp Marketing</option>
              <option value="web">Web Development & UIUX</option>
              <option value="conversionrate">Conversion Rate Optimization</option>
              <option value="ecommerce">E Commerce Development</option>
              <option value="influencer">Influencer Marketing</option>
              <option value="content">Content Marketing</option>
              <option value="pr">PR & Reputation Management</option>
              <option value="brand">Brand Guidelines</option>
              <option value="logo">Logo Design</option>
              <option value="motion">Motion design & Video Editing</option>


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
