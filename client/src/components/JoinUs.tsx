"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JoinUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "+918851469617";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section Fade-in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Title Animation (Expands + Fade-in)
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text Staggered Fade-in
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Buttons Animation (Staggered)
      gsap.fromTo(
        buttonsRef.current ? buttonsRef.current.children : [],
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="flex min-h-screen w-full bg-black overflow-hidden items-center justify-center px-4">
      <div className="relative z-10 text-white flex flex-col justify-center items-center gap-8 w-full max-w-4xl text-center">
        {/* Title */}
        <h1 ref={titleRef} className="text-4xl md:text-6xl text-[#FC7901] font-extrabold">
          JOIN US
        </h1>
        {/* Subtitle */}
        <p ref={textRef} className="text-lg md:text-xl font-poppins">
          We craft tailored digital marketing strategies to elevate your brand, engage audiences, and drive measurable results.
        </p>
        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-4">
          {/* Mail Button */}
          <a
            href="mailto:info@marketingexl.com"
            className="flex flex-col gap-3 items-center justify-center p-6 bg-[#FC7901] rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-out"
          >
            <img src="/images/ic_round-message.svg" alt="Mail" className="h-8 w-8" />
            <div className="text-center">
              <p className="font-semibold font-poppins">Urgent Message</p>
              <p className="text-sm font-poppins">info@marketingexl.com</p>
            </div>
          </a>
          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex flex-col gap-3 items-center justify-center p-10 bg-white text-black rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-out"
          >
            <img src="/images/ic_round-call.svg" alt="Phone" className="h-8 w-8" />
            <div className="text-center">
              <p className="font-semibold font-poppins">Instant Call</p>
              <p className="font-semibold font-poppins">{phoneNumber}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
