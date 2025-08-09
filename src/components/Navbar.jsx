import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About", to: "/#about" },
        { name: "Projects", to: "/#projects" },
        { name: "Skills", to: "/#skills" },
        { name: "Resume", to: "/#resume" },
        { name: "Contact", to: "/#contact" },
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
                <Link to="/" className="text-2xl font-bold">
                    <span className="text-primary">&lt;</span>
                    <span>YourName</span>
                    <span className="text-primary">/&gt;</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `hover:text-primary transition-colors font-medium ${
                                            isActive ? "text-primary" : ""
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-4 ml-6">
                        <a href="#" className="hover:text-primary">
                            <FaGithub size={20} />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
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
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `block py-2 hover:text-primary ${
                                            isActive ? "text-primary" : ""
                                        }`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                        <li className="pt-4 border-t border-neutral">
                            <div className="flex space-x-6 justify-center">
                                <a href="#" className="hover:text-primary">
                                    <FaGithub size={20} />
                                </a>
                                <a href="#" className="hover:text-primary">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="#" className="hover:text-primary">
                                    <FaTwitter size={20} />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
