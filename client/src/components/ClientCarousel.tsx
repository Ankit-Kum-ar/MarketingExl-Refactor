import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClientCarousel = () => {

    const galleryRef = useRef(null);
    const headingRef = useRef(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Duplicate images for infinite scrolling effect
  const carouselImages = [
    "/images/Frame 151.jpg",
    "/images/Frame 152.png",
    "/images/Frame 153.png",
    "/images/Frame 154.png",
    "/images/Frame 155.png",
    "/images/Frame 156.png",
    "/images/Frame 157.png",
    "/images/Frame 158.png",
    "/images/Frame 159.png",
    "/images/Frame 160.png",
  ];

   // Duplicate images for seamless infinite scrolling
   const extendedImages = [...carouselImages, ...carouselImages];

   useEffect(() => {
    const gallery = galleryRef.current;
    const heading = headingRef.current;
    const carousel = carouselRef.current;
        // Heading Animation (Fades in from top with slight scale)
        gsap.fromTo(
            heading,
            { opacity: 0, y: -30, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: gallery,
                start: "top 80%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
      
          // Infinite Scrolling Effect
          if (carousel) {
            gsap.to(carousel, {
              x: "-50%", // Move to the middle of duplicated images
              duration: 10, // Adjust speed
              ease: "linear",
              repeat: -1,
              modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % -carousel.offsetWidth), // Resets scroll seamlessly
              },
            });
          }
        }, []);
      
        

  return (
    <div ref={galleryRef} className="flex flex-col items-center justify-center w-screen  bg-[#0F0F0F]">
      {/* Heading */}
      <h2 ref={headingRef} className="font-bold text-[#FC7901] text-2xl md:text-4xl lg:text-6xl p-10 md:p-20 opacity-0">
      MEET OUR CLIENTS
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-full py-10">
        <div
          ref={carouselRef}
          className="flex space-x-4 px-4 w-max"
          style={{ whiteSpace: "nowrap" }} // Prevents wrapping
        >
          {extendedImages.map((src, index) => (
            <div
              key={index}
              className="carousel-image relative rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-transform duration-500"
            >
              <img src={src} alt={`Carousel Image ${index + 1}`} className="w-[200px] h-[200px] object-cover" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="absolute bottom-4 left-4 text-white font-medium"></p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default ClientCarousel
