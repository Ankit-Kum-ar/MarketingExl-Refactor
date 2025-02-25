import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PricingPlansProps {
  toggleForm: () => void;
}

const PricingPlans: React.FC< PricingPlansProps> = ({ toggleForm}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".plan-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div ref={containerRef} className="bg-black text-white py-10 px-6 lg:px-16 w-full">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-orange-500 mb-10">
        CHOOSE YOUR PLAN TODAY!
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-0 relative">
        {/* Standard Plan */}
        <div className="my-10 bg-white text-black rounded-l-2xl shadow-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold font-poppins text-[#3E1E00]">Standard Plan</h3>
          <ul className="space-y-1 text-gray-700">
            <p className="text-black text-lg font-semibold font-poppins">SEO & SEM</p>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2 " />
              Advanced keyword research
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              On-page and off-page SEO
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Google Ads management
            </li>
            <p className="text-black text-lg font-semibold font-poppins space-y-2">Social Media Management</p>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              Content creation and scheduling
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              On-page and off-page SEO            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              Google Ads management            </li>
              <p className="text-black text-lg font-semibold font-poppins space-y-2">Email & WhatsApp Marketing</p>

            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Bi-weekly email campaigns            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Targeted WhatsApp marketing            </li>
          <p className="text-black text-lg font-semibold font-poppins space-y-2">Web Development</p>

            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Basic Website Design            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              UIUX Revamps            </li>

          </ul>

          <div className="flex justify-center items-center w-full">
            <button onClick={toggleForm} className="bg-[#ff9534] bg-opacity-10 px-16 object-center py-2 text-center text-[#ff9534] text-base font-semibold font-poppins rounded-full hover:bg-[#ff9534] hover:text-white transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-[url('/images/Premium.png')] object-cover text-white rounded-2xl shadow-lg p-6 space-y-6 relative ">
          <div className="absolute top-6 right-0 mr-6 bg-white py-1 px-4 rounded-full  text-center text-black text-xs font-medium font-poppins tracking-wide">
            MOST POPULA
          </div>
          <h3 className="text-2xl font-poppins font-semibold">Premium Plan</h3>
          <ul className="space-y-2">
          <p className="text-white text-lg font-semibold font-poppins">SEO & SEM</p>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2 " />
              Advanced keyword research
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              On-page and off-page SEO
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Google Ads management
            </li>
            <p className="text-white text-lg font-semibold font-poppins space-y-2">Social Media Management</p>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              Content creation and scheduling
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              On-page and off-page SEO            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              Google Ads management            </li>
              <p className="text-white text-lg font-semibold font-poppins space-y-2">Email & WhatsApp Marketing</p>

            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Bi-weekly email campaigns            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Targeted WhatsApp marketing            </li>
          <p className="text-white text-lg font-semibold font-poppins space-y-2">Web Development</p>

            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Basic Website Design            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              UIUX Revamps            </li>
              <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Conversion and Rate Optimization            </li>
              <p className="text-white text-lg font-semibold font-poppins space-y-2">E Commerce Development</p>

            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Product Listing on all major marketplaces
            </li>
            
          </ul>
          <div className="flex justify-center items-center w-full">
            <button onClick={toggleForm}  className="bg-[#ffc896] bg-opacity-10 px-16 object-center py-2 text-center text-white text-base font-semibold font-poppins rounded-full hover:bg-white hover:text-[#ff9534] transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="my-10 bg-white text-black rounded-r-2xl shadow-lg p-6 space-y-6">
        <h3 className="text-xl font-semibold font-poppins text-[#3E1E00]">Enterprise Plan</h3>
          <ul className="space-y-1 text-gray-700">
            <p className="text-black text-lg font-semibold font-poppins">SEO & SEM</p>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2 " />
              Advanced keyword research
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              On-page and off-page SEO
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Google Ads management
            </li>
            <p className="text-black text-lg font-semibold font-poppins space-y-2">Social Media Management</p>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              Content creation and scheduling
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              On-page and off-page SEO            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c]  mr-2" />
              Google Ads management            </li>
              <p className="text-black text-lg font-semibold font-poppins space-y-2">Email & WhatsApp Marketing</p>

            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Bi-weekly email campaigns            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Targeted WhatsApp marketing            </li>
          <p className="text-black text-lg font-semibold font-poppins space-y-2">Web Development</p>

            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Custom Website Development           </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Advanced UIUX Design            </li>
              <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Continuous CRO             </li>

              <p className="text-black text-lg font-semibold font-poppins space-y-2">E Commerce Development</p>

            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Extensive Product Listings          </li>

              <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Marketplace Management          </li>
              <li>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#ffa43c] mr-2" />
              Sales Optimisation          </li>
            

          </ul>

          <div className="flex justify-center items-center w-full">
            <button onClick={toggleForm}  className="bg-[#ff9534] bg-opacity-10 px-16 object-center py-2 text-center text-[#ff9534] text-base font-semibold font-poppins rounded-full hover:bg-[#ff9534] hover:text-white transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
      </div>

      
    </div>
    <div className="bg-gradient-to-r from-[#FD4C2A] to-[#F99115] flex justify-center items-center gap-4 p-10 my-10 cursor-not-allowed w-screen ">
      <h3 className="text-white font-anybody text-3xl lg:text-5xl font-bold ">CUTOMIZE YOUR PACKAGE</h3>
      <img src="images/emojione-monotone_left-arrow.svg" alt="" className="h-10 w-10" />
    </div>
    </>
  );
};

export default PricingPlans;