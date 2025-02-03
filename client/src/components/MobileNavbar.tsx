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
    return (
        <div className="flex md:hidden items-center space-x-2">
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MenuIcon className="h-5 w-5 text-white"  />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] bg-black text-white">
                        <SheetHeader>
                            <SheetTitle className="text-white">Menu</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-4 mt-6">
                            <Button
                                variant="ghost"
                                className="flex items-center gap-3 justify-start"
                                asChild
                            >
                                <Link to="/">
                                    Home
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-3 justify-start"
                                asChild
                            >
                                <Link to="/about">
                                    About Us
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-3 justify-start"
                                asChild
                            >
                                <Link to="/services">
                                    Services
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-3 justify-start"
                                asChild
                            >
                                <Link to="/packages">
                                    Packages
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-3 justify-start"
                                asChild
                            >
                                <Link to="/blog">
                                    Blog
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-3 justify-start"
                                asChild
                            >
                                <Link to="/contact">
                                    Contact Us
                                </Link>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>      
        </div>
    )
}

export default MobileNavbar
