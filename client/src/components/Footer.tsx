import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (iconsRef.current) {
      gsap.fromTo(
        iconsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: iconsRef.current,
            start: "top 95%",
          },
        }
      );
    }

    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 95%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={footerRef}
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
          <div ref={iconsRef} className="icons flex flex-row justify-start gap-4 py-4">
            <div className="bg-[#554137] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/face.png" alt="Facebook" className="text-white h-6 rounded-full" />
            </div>
            <div className="bg-[#554137] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/in icon.png" alt="LinkedIn" className="text-white h-6 rounded-full" />
            </div>
            <div className="bg-[#554137] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/inst.png" alt="Instagram" className="text-white h-6 rounded-full" />
            </div>
          </div>
        </div>
        <div className="quick text-white py-10 hidden md:block">
          <h4 className="py-2 text-xs md:text-sm">Quick Links</h4>
          <ul ref={linksRef} className="list-disc list-inside text-xs md:text-sm underline">
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
                <p className="text-sm">+91-8178070852</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="/images/email.png" alt="Email" className="h-4 mt-2 text-white" />
              <div>
                <p className="text-orange-500 font-bold text-sm">Email</p>
                <p className="text-sm">info@marketingexl.com</p>
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
