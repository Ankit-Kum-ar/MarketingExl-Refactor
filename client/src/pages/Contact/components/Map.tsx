import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
      }
    }, []);
  return (
    <div ref={mapRef} className="flex justify-center items-center bg-black pt-10 bg-gradient-to-b from-black via-transparent to-transparent">
    <div className="w-full  rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16137.304782935562!2d77.37528787854868!3d28.5095193275603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9e275371d99%3A0x2ca7f2e009f5bdd7!2sMarketingEXL!5e0!3m2!1sen!2sin!4v1740383699504!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-lg"
      ></iframe>
    </div>
  </div>
  )
}

export default Map
