
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Grid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(gridRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2, // Creates a smooth parallax effect
      },
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full bg-black py-10">
      <div ref={gridRef} className="flex justify-center items-center w-[90vw]">
        <img src="/images/grid.png" alt="grid" className="w-full max-w-[800px]" />
      </div>
    </section>
  );
};

export default Grid;
