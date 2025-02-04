import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative flex items-center justify-center h-screen">
    {isVisible && <Spline scene="https://prod.spline.design/u1Gby8M9QTcDpwsD/scene.splinecode"  />}
    </section>
  );
}