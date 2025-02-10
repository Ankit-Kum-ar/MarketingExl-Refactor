import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [missionRef.current, visionRef.current],
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3, // Adds delay between animations
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col md:flex-row gap-8 justify-center items-center my-12 px-4">
      {/* Mission Card */}
      <div
        ref={missionRef}
        className="mission flex flex-col gap-2 items-center justify-center p-8 bg-[url(/images/test-bg.png)] object-cover text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 w-[90vw] md:w-[40vw] lg:w-[35vw]"
      >
        <h3 className="text-[#FC7901] font-poppins font-bold text-xl md:text-2xl">
          OUR MISSION
        </h3>
        <p className="text-white text-center font-poppins text-sm md:text-base">
          MarketingEXL empowers businesses with cutting-edge digital strategies, delivering exceptional growth, engagement, and long-term success.
        </p>
      </div>

      {/* Vision Card */}
      <div
        ref={visionRef}
        className="vision flex flex-col gap-3 items-center justify-center p-6 bg-[url(/images/test-bg.png)] object-cover text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 w-[90vw] md:w-[40vw] lg:w-[35vw]"
      >
        <h3 className="text-[#FC7901] font-poppins font-bold text-xl md:text-2xl">
          OUR VISION
        </h3>
        <p className="text-white text-center font-poppins text-sm md:text-base">
          MarketingEXL aims to be the leading digital marketing firm, driving business growth with innovative campaigns and industry-leading strategies.
        </p>
      </div>
    </section>
  );
};

export default Vision;
