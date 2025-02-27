import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import DesktopNavbar from "./DesktopNavbar";
// import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface NavbarProps {
  formVis: () => void;
}

const Navbar = ({ formVis }: NavbarProps) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScroll = 1000; // Adjust this value as needed
        const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.8); // Min opacity 0.5
        setOpacity(newOpacity);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <nav className="sticky top-0 w-full bg-black backdrop-blur-lg z-50 transition-opacity duration-300 py-2" style={{ opacity }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center md:px-4 px-0">
                        <Link
                            to="/"
                            className="text-xl font-bold text-primary font-poppins tracking-wider"
                        >
                            <img src="/images/logo marketing EXL.png" alt="" className="h-10" />
                        </Link>
                    </div>

                    <DesktopNavbar />
                    <HoverBorderGradient onClick={()=> formVis()} className="hidden md:block">Get Started</HoverBorderGradient>
                    <MobileNavbar />
                </div>
            </div>
        </nav>
  )
}

export default Navbar
