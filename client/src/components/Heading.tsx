import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%", // Start animation when heading is 85% in viewport
          toggleActions: "play none none none",
        },
      });

      // Entrance animation (fade-in, slide-up, scale bounce)
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1.05,
          duration: 1.2,
          ease: "power3.out",
        }
      ).to(
        headingRef.current,
        {
          scale: 1, // Smooth return to normal size
          duration: 0.3,
          ease: "elastic.out(1, 0.5)",
        },
        "-0.3" // Slight overlap for natural feel
      );

    }
  }, []);

  return (
    <div
      ref={headingRef}
      className="w-full  flex items-center justify-center text-white md:h-28 h-20 bg-custom-gradient-2 md:text-5xl text-3xl font-semibold font-poppins"
    >
      {title}
    </div>
  );
};

export default Heading;
