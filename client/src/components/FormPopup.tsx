import { useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

import { leadGenerate } from '@/redux/slices/LeadSlice';
import { useAppDispatch } from '@/redux/hook';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  packages: string;
  chooseService: string;
}

const FormPopup = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    packages: '',
    chooseService: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function FormSubmission(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error('Please fill all the fields');
      return;
    }

    try {
      const response = await dispatch(leadGenerate(formData)).unwrap();
      if (response.success) {
        toast.success('Form Submitted Successfully');
        onClose(); // Close the popup
        navigate('/');
      }
    } catch (error) {
      toast.error('Form submission failed');
    }

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      packages: '',
      chooseService: '',
    });
  }

  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Disable scrolling when the popup is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling when the popup is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div ref={formRef} className="fixed inset-0 top-5 bg-transparent backdrop-blur bg-opacity-50 flex justify-center items-center z-50 w-[100vw] h-[100vh]">
      <div className="bg-black p-4 lg:p-10 shadow-lg rounded-3xl w-full max-w-lg relative h-auto  overflow-y-auto">
        <button onClick={onClose} className="absolute top-1 right-2 md:top-6 md:right-4 text-white text-2xl">&times;</button>
        <div className="form m-2 md:m-0 bg-transparent backdrop-blur-lg text-white border-2 border-white flex flex-col justify-center items-center rounded-3xl">
          <div className="title flex flex-row gap-1 justify-center items-center p-3 px-3">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-[#FC7901] font-anybody">FILL THE FORM</h3>
              <h3 className="text-2xl font-bold text-[#FC7901] font-anybody">GET IN TOUCH</h3>
            </div>
            <div>
              <h2 className="text-5xl font-extrabold font-anybody">&</h2>
            </div>
          </div>
          <div>
            <form onSubmit={FormSubmission} className="px-10 py-2 rounded-3xl space-y-4 text-white z-50 relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name*"
                onChange={handleChange}
                value={formData.fullName}
                className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                onChange={handleChange}
                value={formData.email}
                className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-white focus:outline-none focus:border-[#FC7901]"
              />
              <label htmlFor="packages" className="sr-only">Select Package</label>
              <select
                id="packages"
                name="packages"
                onChange={handleChange}
                value={formData.packages}
                className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FC7901]"
              >
                <option value="" disabled className="text-gray-400">
                  --- Select Package ---
                </option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Entreprise">Enterprise</option>
              </select>
              <label htmlFor="chooseService" className="sr-only">Choose Service</label>
              <select
                id="chooseService"
                name="chooseService"
                onChange={handleChange}
                value={formData.chooseService}
                className="w-full p-2 bg-black border border-gray-700 text-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FC7901]"
              >
                <option value="" disabled className="text-gray-400">
                  Choose Service
                </option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="SEO and SEM">SEO and SEM</option>
                <option value="Email and Whatsapp Marketing">Email and Whatsapp Marketing</option>
                <option value="Web Development and UIUX">Web Development and UIUX</option>
                <option value="Conversion Rate Optimization">Conversion Rate Optimization</option>
                <option value="E Commerce Development">E Commerce Development</option>
                <option value="Influencer Marketing">Influencer Marketing</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="PR & Reputation Management">PR & Reputation Management</option>
                <option value="Brand Guidelines">Brand Guidelines</option>
                <option value="Logo Design">Logo Design</option>
                <option value="Motion design & Video Editing">Motion design & Video Editing</option>
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
      </div>
    </div>
  );
}

export default FormPopup;
