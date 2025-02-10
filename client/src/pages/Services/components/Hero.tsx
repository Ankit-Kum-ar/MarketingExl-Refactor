import { useEffect, useRef } from "react";
import gsap from "gsap";
import { gifURL } from "@/utils/Constant";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (heroRef.current && imgRef.current) {
      const tl = gsap.timeline();

      // Background fade-in & zoom-in effect
      tl.fromTo(
        heroRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );

      // Image slide-up effect
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5, // Starts after background animation
        }
      );
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative text-white flex justify-center items-center w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${gifURL})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      {/* Animated Image */}
      <img
        ref={imgRef}
        src="/images/Services.png"
        alt="Services"
        className="relative z-10 md:h-[120vh] h-[50vh]"
      />
    </div>
  );
};

export default Hero;
