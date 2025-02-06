'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Joinus = () => {
  const joinRef = useRef(null);
  const phoneNumber = "+918512881278";

  useEffect(() => {
    gsap.fromTo(
      joinRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: joinRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <div ref={joinRef} className='flex min-h-screen w-full bg-black overflow-hidden items-center justify-center px-4'>
      <div className='relative z-10 text-white flex flex-col justify-center items-center gap-8 w-full max-w-4xl text-center'>
        <h1 className='text-4xl md:text-6xl text-[#FC7901] font-extrabold'>JOIN US</h1>
        <p className='text-lg md:text-xl font-poppins'>We craft tailored digital marketing strategies to elevate your brand, engage audiences, and drive measurable results.</p>
        <div className='flex flex-col md:flex-row gap-4'>
          <a
            href="mailto:info@marketingexl.com"
            className="flex flex-col gap-3 items-center justify-center p-6 bg-[#FC7901] rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <img src="/images/ic_round-message.svg" alt="Mail" className="h-8 w-8" />
            <div className='text-center'>
              <p className='font-semibold font-poppins'>Urgent Message</p>
              <p className='text-sm font-poppins'>info@marketingexl.com</p>
            </div>
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="flex flex-col gap-3 items-center justify-center p-10 bg-white text-black rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <img src="/images/ic_round-call.svg" alt="Phone" className="h-8 w-8" />
            <div className='text-center'>
              <p className='font-semibold font-poppins'>Instant Call</p>
              <p className='font-semibold font-poppins'>{phoneNumber}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
