import { useEffect, useState } from "react"
import { cn } from "./lib/utils"
import { Menu, X } from "lucide-react";

const navitems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Rates", href: "#RateCard"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect (() => {
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);

 },[] );
    return <nav className={cn(
        "fixed w-full z-40 transition-all duration-300",
     isScrolled ? "py-3 bg-background/80  shadow-xs" : "py-5" )}>

            <div className="container flex items-center text-3xl justify-between">
                <a className="text-sm font-bold text-primary flex items-center"
                href="#hero">
                    <span className="relative z-10 text-2xl">
                        <span className="text-glow text-foreground"> Tallest </span>{" "}
                         Portfolio
                    </span>
                </a>

                {/*desktop nav */}

                <div className="hidden md:flex space-x-8 text-2xl">
                    {navitems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 
                        hover:text-primary transition-colors duration-300 mr-6">
                            {item.name}</a>
                    ))}
                </div>

                {/*mobile nav */}

                <button onClick={()=> setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-0 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                {isMenuOpen ? <X size={36} /> : <Menu size={36} />}</button>
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                <div className="flex flex-col space-y-8 text-2xl">
                    {navitems.map((item, key) => (
                        <a key={key}
                href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}>
                            {item.name}</a>
                    ))}
                </div>
                </div>
            </div>
        </nav>
};