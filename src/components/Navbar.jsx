import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Projects", to: "projects" },
        { name: "Skills", to: "skills" },
        { name: "Resume", to: "resume" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-base-100/90 backdrop-blur-md py-2 shadow-lg"
                    : "bg-base-100/70 py-4"
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold text-info cursor-pointer"
                >
                    Siddike
                </ScrollLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <ScrollLink
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="text-primary"
                                    spy={true}
                                    className="cursor-pointer hover:text-info transition-colors font-medium"
                                >
                                    {link.name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-base-content focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <HiX size={24} />
                    ) : (
                        <HiMenuAlt3 size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-base-100 absolute top-16 left-0 right-0 shadow-lg">
                    <ul className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <ScrollLink
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 cursor-pointer hover:text-primary"
                                >
                                    {link.name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
