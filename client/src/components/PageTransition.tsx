import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { pathname } = useLocation();
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const transition = transitionRef.current;
    if (!transition) return;

    const tl = gsap.timeline();

    // Step 1: Expand the transition overlay (before page change)
    tl.to(transition, {
      scaleY: 1,
      duration: 0.5,
      transformOrigin: "top",
      ease: "power2.inOut",
    })
      .set({}, {}, 0.2) // Short delay
      .to(transition, {
        scaleY: 0,
        duration: 0.5,
        transformOrigin: "bottom",
        ease: "power2.inOut",
      });

  }, [pathname]);

  return (
    <>
      <div
        ref={transitionRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-50 pointer-events-none"
      />
      {children}
    </>
  );
};

export default PageTransition;
