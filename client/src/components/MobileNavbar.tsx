import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"

const MobileNavbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // Function to close menu on navigation
    const closeMenu = () => setShowMobileMenu(false)

    return (
        <div className="flex md:hidden items-center space-x-2">
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MenuIcon className="h-5 w-5 text-white" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-black text-white">
                    <SheetHeader>
                        <SheetTitle className="text-white">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About Us" },
                            { to: "/services", label: "Services" },
                            { to: "/packages", label: "Packages" },
                            { to: "/blog", label: "Blog" },
                            { to: "/contact", label: "Contact Us" },
                        ].map((item) => (
                            <Button
                                key={item.to}
                                variant="ghost"
                                className="flex items-center gap-3 justify-start"
                                asChild
                                onClick={closeMenu} // Close menu on click
                            >
                                <Link to={item.to}>
                                    {item.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar
