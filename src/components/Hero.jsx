import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaArrowDown, FaFacebook } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center">
            <div className="container mx-auto px-6 mt-30">
                <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                    {/* Profile Image */}
                    <div className="avatar" data-aos="fade-up">
                        <div className="w-60 md:w-80 rounded-full ring ring-info ring-offset-base-100 ring-offset-4">
                            <img
                                src="https://i.ibb.co/7drZhd6D/admin-asif.jpg"
                                alt="Profile_Photo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left max-w-2xl">
                        <h1
                            className="text-4xl md:text-6xl font-bold mb-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Hi, I'm{" "}
                            <span className="text-info">
                                Md Abu Bakkar Siddike
                            </span>
                        </h1>
                        <h2
                            className="text-xl md:text-2xl text-neutral-content mb-6"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            MERN Stack Developer
                        </h2>
                        <p
                            className="text-lg md:text-xl text-neutral-content mb-8"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            I build modern web applications with MongoDB,
                            Express, React, and Node.js. Passionate about
                            creating efficient, user-friendly solutions.
                        </p>

                        {/* Buttons */}
                        <div
                            className="flex flex-wrap justify-center md:justify-start gap-4"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <Link
                                to="/contact"
                                className="btn btn-info px-8 cursor-pointer hover:scale-105 transition-transform"
                            >
                                Contact Me
                            </Link>
                            <Link
                                to="/projects"
                                className="btn btn-outline btn-info px-8 cursor-pointer hover:scale-105 transition-transform"
                            >
                                View Projects
                            </Link>
                        </div>

                        {/* Social Icons */}
                        <div
                            className="flex justify-center md:justify-start mt-10 space-x-6"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <a
                                href="https://github.com/AbuSiddike"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-content hover:text-secondary transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-abu-bakkar-siddike-7745a2342"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-content hover:text-secondary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://www.facebook.com/ab.siddike.793748"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-content hover:text-secondary transition-colors"
                                aria-label="Twitter"
                            >
                                <FaFacebook size={24} />
                            </a>
                        </div>

                        {/* Scroll Down */}
                        <div
                            className="mt-16 flex justify-center md:justify-start animate-bounce"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className="btn btn-ghost btn-circle cursor-pointer"
                                aria-label="Scroll down"
                            >
                                <FaArrowDown size={24} />
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
