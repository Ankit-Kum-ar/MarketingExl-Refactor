import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import DesktopNavbar from "./DesktopNavbar";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
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
    <nav className="sticky top-0 w-full bg-black z-50 transition-opacity duration-300 py-2" style={{ opacity }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center md:px-4 px-0">
                        <Link
                            to="/"
                            className="text-xl font-bold text-primary font-mono tracking-wider"
                        >
                            <img src="/images/logo.png" alt="" />
                        </Link>
                    </div>

                    <DesktopNavbar />
                    <Button className="hidden md:block">Get Started</Button>
                    <MobileNavbar />
                </div>
            </div>
        </nav>
  )
}

export default Navbar
