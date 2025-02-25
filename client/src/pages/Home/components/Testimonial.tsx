
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Mandeep Jadhav",
    role: "CEO, MKKO",
    company: "MKKO",
    feedback:
      "Working with MarketingEXL transformed MKKO's digital engagement. Their social media strategy enhanced our brand visibility and follower interaction.",
    avatar: "/images/AboutUs.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "John Williams",
    role: "Lead Designer",
    company: "MKKO",
    feedback:
      "MarketingEXL's strategies helped us achieve remarkable growth. Their team's expertise and dedication are unmatched!",
    avatar: "/images/AboutUs.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Jane Doe",
    role: "Marketing Head",
    company: "MKKO",
    feedback:
      "Exceptional service and results! MarketingEXL took our campaigns to the next level.",
    avatar: "/images/AboutUs.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Entrepreneur",
    company: "MKKO",
    feedback:
      "The team at MarketingEXL exceeded our expectations. Highly recommend their services!",
    avatar: "/images/AboutUs.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Freelancer",
    company: "MKKO",
    feedback:
      "A wonderful experience! MarketingEXL's insights and strategies truly made a difference.",
    avatar: "/images/AboutUs.jpg",
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