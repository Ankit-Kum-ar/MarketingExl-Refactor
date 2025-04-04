import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { phoneNumber } from "@/utils/Constant";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {


  return (
    <section

      className="w-screen bg-[#2b1205] flex flex-col items-center pt-16"
    >
      <div className="footertop w-[80vw] flex flex-col md:flex-row justify-between">
        <div className="about w-full md:w-1/3">
          <div className="img-container py-4">
            <Link
              to="/"
              className="text-xl font-bold text-primary font-poppins tracking-wider"
            >
              <img src="/images/logo marketing EXL.png" alt="" className="h-10"/>
            </Link>
          </div>
          <div className="info object-contain text-left text-white font-poppins leading-relaxed text-xs md:text-sm font-thin py-4">
            <p className="text-justify">
              We are committed to propelling your business forward in the
              dynamic digital marketing landscape. As a leading digital
              marketing agency, we specialize in crafting tailored strategies
              that elevate your brand, engage your audience, and deliver
              measurable results.
            </p>
          </div>
          <div className="icons flex flex-row justify-start gap-4 py-4">
            <a href="https://www.facebook.com/marketingexl/">
            <div className="bg-[#554137] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/face.png" alt="Facebook" className="text-white h-6 rounded-full" />
            </div></a>
            <a href="https://www.linkedin.com/company/marketing-exl/posts/?feedView=all">
            <div className="bg-[#554137] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/in icon.png" alt="LinkedIn" className="text-white h-6 rounded-full" />
            </div> 
            </a>
            <a href="https://www.instagram.com/marketing_exl/">
            <div className="bg-[#554137] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/inst.png" alt="Instagram" className="text-white h-6 rounded-full" />
            </div>
            </a>
          </div>
        </div>
        <div className="quick text-white py-10 hidden md:block">
          <h4 className="py-2 text-xs md:text-sm">Quick Links</h4>
          <ul  className="list-disc list-inside text-xs md:text-sm underline">
            <li className="hover:text-orange-500">
              <Link to="/"> Home </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/packages">Packages</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/blog">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="contact text-white flex flex-col justify-center pb-8">
          <div className="space-y-4">
            <div className="flex gap-2">
              <img src="/images/location.png" alt="Mail" className="h-5  text-white mt-2" />
              <div>
                <p className="text-orange-500 font-bold text-sm">Location</p>
                <p className="text-sm w-[90%]">
                  B-013, ATS Bouquet, Sector-132, Noida, Uttar Pradesh-201304
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="/images/call.png" alt="Phone" className="h-5  mt-2 text-white" />
              <div>
                <p className="text-orange-500 font-bold text-sm">Call</p>
                <p className="text-sm">{phoneNumber}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="/images/email.png" alt="Email" className="h-4 mt-2 text-white" />
              <div>
                <p className="text-orange-500 font-bold text-sm">Email</p>
                <p className="text-sm">info@marketingexl.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-white opacity-20"></div>
      <div className="footerbottom">
        <p className="text-[#CCCCCC] text-xs md:text-base p-2 md:p-4">
          © Copyright 2024 MarketingEXL | All Rights Reserved by{" "}
          <span className="text-white font-bold font-poppins">MarketingEXL</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
