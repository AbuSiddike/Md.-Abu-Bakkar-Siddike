import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-base-content">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About */}
                <div>
                    <h2 className="text-lg font-semibold mb-3 text-info">
                        Md Abu Bakkar Siddike
                    </h2>
                    <p className="text-sm leading-relaxed">
                        I’m a passionate MERN stack developer eager to
                        contribute to impactful projects. Always learning,
                        building, and improving my craft.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#about" className="hover:underline">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:underline">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">
                        Connect with Me
                    </h2>
                    <div className="flex space-x-4 text-xl">
                        <a
                            href="https://github.com/AbuSiddike"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-info"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/md-abu-bakkar-siddike-7745a2342"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-info"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/ab.siddike.793748"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-info"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="mailto:asiddike18@gmail.com"
                            className="hover:text-info"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-base-300 py-4 text-center text-sm">
                Copyright © {new Date().getFullYear()} — All Rights Reserved by{" "}
                <span className="text-info">Md Abu Bakkar Siddike</span>.
            </div>
        </footer>
    );
};

export default Footer;
