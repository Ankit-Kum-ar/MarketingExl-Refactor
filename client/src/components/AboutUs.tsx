import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' } }
    );
    
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: imageRef.current, start: 'top 85%' } }
    );
    
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: textRef.current, start: 'top 85%' } }
    );
  }, []);

  return (
    <div ref={aboutRef} className='bg-[#0f0f0f] w-full min-h-screen items-center flex flex-col gap-16 ' >
        <div className='divheading bg-gradient-to-b from-black via-transparent to-transparent w-full h-[30vh] flex justify-center items-center'>
            <h3 className='title text-3xl md:text-6xl font-semibold text-white text-center align-text-bottom pt-14'>Top Rank <span className='text-[#FC7901] font-bold'>SEO Services</span><br /> for your Growth</h3>
        </div>
        <div ref={imageRef} className="container flex flex-col md:flex-row w-[90vw] max-w-7xl gap-12 justify-center">
            <div  className="image-container relative bg-[url(/images/AboutUs.jpg)] object-cover w-full md:w-[20vw] h-[50vh] rounded-3xl ">
                <button className="absolute -left-20 top-10 mt-10 py-2 px-6 md:px-6 rounded-lg font-semibold border border-white backdrop-blur bg-white/10 text-white "> 2000+ CLIENTS</button>                
                <button className='absolute -bottom-4 left-7 py-2 px-4 md:px-6 rounded-lg font-semibold border border-white backdrop-blur bg-white/10 text-white'>8 Years of Experience</button>
            </div>
            <div ref={textRef} className="text-container w-full md:w-[50%] text-white px-4 md:px-0 ">
                <h3 className='font-semibold text-3xl md:text-4xl text-poppins '>ABOUT US</h3>
                <p className='text-lg md:text-xl text-justify mt-4'><span className='text-[#FC7901] '>At Marketing Exl</span> we are committed to propelling your business forward in the dynamic digital marketing landscape. As a leading digital marketing agency, we specialize in crafting tailored strategies that elevate your brand, engage your audience, and deliver measurable results. Our team of experts leverages the latest technologies and creative solutions to help you achieve your business goals.</p>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs