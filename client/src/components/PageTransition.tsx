import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

const PageTransition: React.FC = () => {
  const { pathname } = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const tl = gsap.timeline();

    // Step 1: Show the overlay before page change
    tl.to(overlay, {
      scaleY: 1,
      duration: 0.5,
      transformOrigin: "top",
      ease: "power2.inOut",
    });

    // Step 2: Wait briefly for route change, then hide the overlay
    tl.to(overlay, {
      scaleY: 0,
      duration: 0.5,
      transformOrigin: "bottom",
      ease: "power2.inOut",
      delay: 0.2, // Small delay before revealing new page
    });

  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-50 pointer-events-none"
    />
  );
};

export default PageTransition;
