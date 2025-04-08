
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Shubham",
    role: "CEO",
    company: "Sky Wines & Spirits",
    feedback:
      "The team delivered a sleek and responsive website that truly captures our brand’s essence. We've received great feedback and noticed a real boost in online engagement.",
    avatar: "/images/Sky.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Mangal Verma",
    role: "Director",
    company: "Vision Master",
    feedback:
      "We saw real growth in our social media presence and brand visibility. Their influencer marketing strategy was thoughtful, targeted, and effective.",
    avatar: "/images/VisionMaster.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Zennia",
    role: "Team LaSheen",
    company: "LaSheen",
    feedback:
      "Professional team with a great sense of brand identity. Their social content and influencer campaigns brought excellent exposure and audience engagement.",
    avatar: "/images/Frame 151.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikas",
    role: "CEO",
    company: "Nimi Groups",
    feedback:
      "From the website design to social media management, everything was on point. Their creativity and consistency helped us build a strong digital presence.",
    avatar: "/images/Nimi.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Atul Chauhan ",
    role: "Manager",
    company: "Affinity Express",
    feedback:
      "They brought fresh energy to our social media and executed influencer campaigns that delivered measurable impact. Super smooth collaboration from start to finish",
    avatar: "/images/AffinityExpress.png",
    rating: 5,
  },
];

const Testimonial = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white py-10 px-6 lg:px-16">
      <h2 className="text-4xl lg:text-6xl font-extrabold text-center text-[#FC7901] mb-10 font-anybody">
        What Our Clients Say
      </h2>
      <div className="flex overflow-x-auto space-x-6 py-4 no-scrollbar snap-x snap-mandatory ">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[url(/images/test-bg.png)] bg-no-repeat object-cover text-white rounded-xl shadow-lg p-6 flex-shrink-0 snap-center w-[88vw] md:w-[45vw] lg:w-[28vw] xl:w-[28vw] 2xl:w-[25vw]"
            
          >
            <img src="/images/icon.svg" alt='"' className="h-6 w-6"/>
            <p className=" text-white font-bold">{testimonial.company}</p>
            <p className=" font-bold text-orange-500">{testimonial.name},{testimonial.role}</p>
            <p className="text-gray-300 mb-1 text-xs mt-1">"{testimonial.feedback}"</p>
            <div className="text-yellow-400 mt-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    // <i key={i} className="fas fa-star"></i>
                    <FontAwesomeIcon icon={faStar} key={i} />
                  ))}
                </div>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-xs text-gray-500 font-semibold">{testimonial.role}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;