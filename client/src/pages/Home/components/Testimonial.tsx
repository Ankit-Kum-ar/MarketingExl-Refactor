import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Mandeep Jadhav",
    role: "CEO, MKKO",
    feedback:
      "Working with MarketingEXL transformed MKKO's digital engagement. Their social media strategy enhanced our brand visibility and follower interaction. Focused campaigns boosted our sales and online presence. MarketingEXL's creative ideas resonated with our audience. Thrilled with the results!",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    id: 2,
    name: "John Williams",
    role: "Lead Designer",
    feedback:
      "MarketingEXL's strategies helped us achieve remarkable growth. Their team's expertise and dedication are unmatched!",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    id: 3,
    name: "Jane Doe",
    role: "Marketing Head",
    feedback:
      "Exceptional service and results! MarketingEXL took our campaigns to the next level.",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Entrepreneur",
    feedback:
      "The team at MarketingEXL exceeded our expectations. Highly recommend their services!",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Freelancer",
    feedback:
      "A wonderful experience! MarketingEXL's insights and strategies truly made a difference.",
    avatar: "https://via.placeholder.com/150",
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
    <div ref={containerRef} className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 px-6 lg:px-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-orange-500 mb-10">
        What Our Clients Say
      </h2>
      <div className="flex overflow-x-auto space-x-6 py-4 no-scrollbar snap-x snap-mandatory ">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-800 text-white rounded-xl shadow-lg p-6 flex-shrink-0 snap-center w-[88vw] md:w-[45vw] lg:w-[28vw]"
            
          >
            <p className="italic text-gray-300 mb-4">"{testimonial.feedback}"</p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-orange-500">{testimonial.role}</p>
                <div className="text-yellow-400 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
