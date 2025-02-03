import { NavLink } from "react-router-dom"

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center space-x-11">
        <NavLink 
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
                }
        >
            <span className="hidden lg:inline">Home</span>
        </NavLink>
        <NavLink 
            to="/about"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
                }
        >
            <span className="hidden lg:inline">About Us</span>
        </NavLink>
        <NavLink 
            to="/services"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
                }
        >
            <span className="hidden lg:inline">Services</span>
        </NavLink>
        <NavLink 
            to="/packages"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
                }
        >
            <span className="hidden lg:inline">Packages</span>
        </NavLink>
        <NavLink 
            to="/blog"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
                }
        >
            <span className="hidden lg:inline">Blog</span>
        </NavLink>
        <NavLink 
            to="/contact"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
                }
        >
            <span className="hidden lg:inline">Contact Us</span>
        </NavLink>
    </div>
  )
}

export default DesktopNavbar
