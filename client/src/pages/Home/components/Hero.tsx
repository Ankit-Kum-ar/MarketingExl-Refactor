'use client';
import { useEffect, useRef, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const SplineBall = lazy(() => import('./SplineBall'));
const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.greeting',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power3.out' }
    );
    
    gsap.to(textRef.current, {
      text: 'MARKETING EXL',
      duration: 2.5,
      ease: 'power1.inOut',
      delay: 1.5,
    });
  }, []);

  return (
    <>
    
    <div  ref={heroRef} className='HeroContent  bg-black flex flex-col justify-between  relative h-screen w-screen items-center bg-gradient-to-t from-black via-transparent to-transparent'>
        <div className='flex flex-col items-start w-11/12 md:w-8/12 z-10 mt-20 px-6 md:px-0'>
            <h2 className='greeting text-white text-5xl md:text-9xl font-extrabold text-left uppercase z-10 font-anybody '>Hello</h2>
            <h2 className='greeting text-white text-2xl md:text-4xl font-extrabold text-left uppercase z-10 font-anybody'>Welcome To</h2>
        </div>
      <h1 ref={textRef} className='greeting text-[#FC7901] text-5xl md:text-[106px] font-extrabold text-center mb-10 z-20 p-0 font-anybody'>MARKETING EXL</h1>
      <div className='bg-black absolute bottom-0 right-0 z-10 w-48 h-20 md:w-48 md:h-40'></div>
    </div>
    <div className=' h-full w-full absolute top-0 left-0   '>
    <Suspense fallback={<div className='w-full h-full bg-black'></div>}>
          <SplineBall />
        </Suspense>
    </div>
    
    
    </>
  )
}

export default Hero