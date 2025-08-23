import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
    FaFileDownload,
    FaGithub,
    FaLinkedin,
    FaArrowDown,
    FaFacebook,
} from "react-icons/fa";

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
                                className="w-full h-full object-cover object-top"
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

                        {/* Download Button */}
                        <div className="mt-12" data-aos="fade-up">
                            <Link
                                to="/assets/resume.pdf"
                                target="_blank"
                                download
                                className="btn btn-info btn-wide"
                            >
                                <FaFileDownload className="mr-2" /> Download
                                Full Resume
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

// import SmoothScrollLink from "../utils/SmoothScrollLink";
// import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

// const Hero = () => {
//     return (
//         <section id="home" className="min-h-screen flex items-center pt-16">
//             <div className="container mx-auto px-6">
//                 <div className="flex flex-col md:flex-row items-center gap-12">
//                     {/* Left Column - Text Content */}
//                     <div className="text-center md:text-left max-w-2xl">
//                         <h1
//                             className="text-4xl md:text-6xl font-bold mb-4"
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                         >
//                             Hi, I'm{" "}
//                             <span className="text-info">
//                                 Md Abu Bakkar Siddike
//                             </span>
//                         </h1>
//                         <h2
//                             className="text-xl md:text-2xl text-neutral-content mb-6"
//                             data-aos="fade-up"
//                             data-aos-delay="200"
//                         >
//                             MERN Stack Developer
//                         </h2>
//                         <p
//                             className="text-lg md:text-xl text-neutral-content mb-8"
//                             data-aos="fade-up"
//                             data-aos-delay="300"
//                         >
//                             I build modern web applications with MongoDB,
//                             Express, React, and Node.js. Passionate about
//                             creating efficient, user-friendly solutions.
//                         </p>

//                         {/* Buttons - FIXED: Using SmoothScrollLink for section navigation */}
//                         <div
//                             className="flex flex-wrap justify-center md:justify-start gap-4"
//                             data-aos="fade-up"
//                             data-aos-delay="400"
//                         >
//                             <SmoothScrollLink
//                                 to="/#contact"
//                                 className="btn btn-info px-8 cursor-pointer hover:scale-105 transition-transform"
//                             >
//                                 Contact Me
//                             </SmoothScrollLink>
//                             <SmoothScrollLink
//                                 to="/#projects"
//                                 className="btn btn-outline btn-info px-8 cursor-pointer hover:scale-105 transition-transform"
//                             >
//                                 View Projects
//                             </SmoothScrollLink>
//                         </div>

//                         {/* Social Icons */}
//                         <div
//                             className="flex justify-center md:justify-start mt-12 space-x-6"
//                             data-aos="fade-up"
//                             data-aos-delay="500"
//                         >
//                             <a
//                                 href="https://github.com/yourusername"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-neutral-content hover:text-info transition-colors"
//                                 aria-label="GitHub"
//                             >
//                                 <FaGithub size={24} />
//                             </a>
//                             <a
//                                 href="https://linkedin.com/in/yourusername"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-neutral-content hover:text-info transition-colors"
//                                 aria-label="LinkedIn"
//                             >
//                                 <FaLinkedin size={24} />
//                             </a>
//                             <a
//                                 href="https://twitter.com/yourusername"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-neutral-content hover:text-info transition-colors"
//                                 aria-label="Twitter"
//                             >
//                                 <FaTwitter size={24} />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Right Column - Profile Image */}
//                     <div
//                         className="flex-1"
//                         data-aos="fade-left"
//                         data-aos-delay="600"
//                     >
//                         <div className="avatar w-full max-w-md mx-auto">
//                             <div className="w-full rounded-full ring ring-info ring-offset-base-100 ring-offset-4">
//                                 <img
//                                     src="/assets/images/profile.jpg"
//                                     alt="Md Abu Bakkar Siddike"
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Scroll Down Indicator */}
//                 <div
//                     className="mt-16 animate-bounce text-center"
//                     data-aos="fade-up"
//                     data-aos-delay="700"
//                 >
//                     <SmoothScrollLink
//                         to="/#about"
//                         className="btn btn-ghost btn-circle cursor-pointer"
//                         aria-label="Scroll down"
//                     >
//                         <FaArrowDown size={24} />
//                     </SmoothScrollLink>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;
