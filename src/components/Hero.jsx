import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-16">
            <div className="container mx-auto px-6 text-center">
                {/* Profile Image */}
                <div className="avatar mb-8 mx-auto" data-aos="fade-up">
                    <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                        <img
                            src="/assets/images/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Main Heading */}
                <h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Hi, I'm <span className="text-primary">Your Name</span>
                </h1>

                {/* Subheading */}
                <h2
                    className="text-xl md:text-2xl text-neutral-content mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    MERN Stack Developer
                </h2>

                {/* Description */}
                <p
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-neutral-content"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    I build modern web applications with MongoDB, Express,
                    React, and Node.js. Passionate about creating efficient,
                    user-friendly solutions.
                </p>

                {/* Call-to-Action Buttons */}
                <div
                    className="flex flex-wrap justify-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <Link
                        to="/contact"
                        className="btn btn-primary px-8 cursor-pointer hover:scale-105 transition-transform"
                    >
                        Contact Me
                    </Link>
                    <Link
                        to="/projects"
                        className="btn btn-outline btn-primary px-8 cursor-pointer hover:scale-105 transition-transform"
                    >
                        View Projects
                    </Link>
                </div>

                {/* Social Icons */}
                <div
                    className="flex justify-center mt-12 space-x-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-content hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-content hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-content hover:text-primary transition-colors"
                        aria-label="Twitter"
                    >
                        <FaTwitter size={24} />
                    </a>
                </div>

                {/* Scroll Down Indicator */}
                <div
                    className="mt-16 animate-bounce"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <Link
                        to="/about"
                        className="btn btn-ghost btn-circle cursor-pointer"
                        aria-label="Scroll down"
                    >
                        <FaArrowDown size={24} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
