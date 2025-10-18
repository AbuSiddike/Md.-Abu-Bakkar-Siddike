// import { useState } from "react";
// import {
//     FaPaperPlane,
//     FaMapMarkerAlt,
//     FaWhatsapp,
//     FaEnvelope,
//     FaGithub,
//     FaLinkedin,
//     FaFacebook,
// } from "react-icons/fa";
// import { RiContactsFill } from "react-icons/ri";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         try {
//             // Simulated API call
//             await new Promise((resolve) => setTimeout(resolve, 1500));
//             setSubmitStatus({
//                 success: true,
//                 message: "Your message has been sent successfully!",
//             });
//             setFormData({ name: "", email: "", message: "" });
//         } catch (error) {
//             setSubmitStatus({
//                 success: false,
//                 message: "Failed to send message. Please try again later.",
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <section id="contact" className="py-20 bg-base-200">
//             <div className="container mx-auto px-6">
//                 <h2
//                     className="flex items-center justify-center text-3xl font-bold mb-12 gap-2"
//                     data-aos="fade-up"
//                 >
//                     <RiContactsFill size={"1.5rem"} />
//                     <span>
//                         Get in <span className="text-info">Touch</span>
//                     </span>
//                 </h2>

//                 <div className="flex flex-col lg:flex-row gap-12">
//                     {/* Contact Info */}
//                     <div className="lg:w-1/2" data-aos="fade-right">
//                         <h3 className="text-2xl font-semibold mb-8">
//                             Contact Information
//                         </h3>

//                         <div className="space-y-6">
//                             <div className="flex items-start gap-4">
//                                 <FaMapMarkerAlt
//                                     className="mt-1 text-secondary"
//                                     size={20}
//                                 />
//                                 <div>
//                                     <h4 className="font-medium text-lg">
//                                         Location
//                                     </h4>
//                                     <p className="text-neutral-content">
//                                         Dhaka, Bangladesh
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-4">
//                                 <FaWhatsapp
//                                     className="mt-1 text-secondary"
//                                     size={20}
//                                 />
//                                 <div>
//                                     <h4 className="font-medium text-lg">
//                                         Whatsapp
//                                     </h4>
//                                     <p className="text-neutral-content">
//                                         +880 1311 820250
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-4">
//                                 <FaEnvelope
//                                     className="mt-1 text-secondary"
//                                     size={20}
//                                 />
//                                 <div>
//                                     <h4 className="font-medium text-lg">
//                                         Email
//                                     </h4>
//                                     <p className="text-neutral-content">
//                                         asiddike18@gmail.com
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Social Links */}
//                         <div className="mt-12">
//                             <h4 className="font-medium text-lg mb-4">
//                                 Follow Me
//                             </h4>
//                             <div className="flex space-x-4">
//                                 <a
//                                     href="https://github.com/AbuSiddike"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="btn btn-circle btn-ghost hover:bg-info hover:text-primary-content"
//                                 >
//                                     <FaGithub size={20} />
//                                 </a>
//                                 <a
//                                     href="https://www.linkedin.com/in/md-abu-bakkar-siddike-7745a2342"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="btn btn-circle btn-ghost hover:bg-info hover:text-primary-content"
//                                 >
//                                     <FaLinkedin size={20} />
//                                 </a>
//                                 <a
//                                     href="https://www.facebook.com/ab.siddike.793748"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="btn btn-circle btn-ghost hover:bg-info hover:text-primary-content"
//                                 >
//                                     <FaFacebook size={20} />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Form */}
//                     <div className="lg:w-1/2" data-aos="fade-left">
//                         <h3 className="text-2xl font-semibold mb-8">
//                             Send Me a Message
//                         </h3>

//                         {submitStatus && (
//                             <div
//                                 className={`alert ${
//                                     submitStatus.success
//                                         ? "alert-success"
//                                         : "alert-error"
//                                 } mb-6`}
//                             >
//                                 <span>{submitStatus.message}</span>
//                             </div>
//                         )}

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="form-control">
//                                 <label htmlFor="name" className="label">
//                                     <span className="label-text">
//                                         Your Name
//                                     </span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="input input-bordered w-full"
//                                     required
//                                     placeholder="Enter your name"
//                                 />
//                             </div>

//                             <div className="form-control">
//                                 <label htmlFor="email" className="label">
//                                     <span className="label-text">
//                                         Your Email
//                                     </span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="input input-bordered w-full"
//                                     required
//                                     placeholder="Enter your email"
//                                 />
//                             </div>

//                             <div className="form-control">
//                                 <label htmlFor="message" className="label">
//                                     <span className="label-text">
//                                         Your Message
//                                     </span>
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                     className="textarea textarea-bordered h-32"
//                                     required
//                                     placeholder="Enter your message"
//                                 ></textarea>
//                             </div>

//                             <div className="form-control pt-2">
//                                 <button
//                                     type="submit"
//                                     className={`btn btn-info ${
//                                         isSubmitting ? "loading" : ""
//                                     }`}
//                                     disabled={isSubmitting}
//                                 >
//                                     {!isSubmitting && (
//                                         <FaPaperPlane className="mr-2" />
//                                     )}
//                                     {isSubmitting
//                                         ? "Sending..."
//                                         : "Send Message"}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                "your_service_id", // Replace with your EmailJS Service ID
                "your_template_id", // Replace with your EmailJS Template ID
                formData,
                "your_public_key" // Replace with your EmailJS Public Key
            );

            setSubmitStatus({
                success: true,
                message: "Your message has been sent successfully!",
            });

            setFormData({ from_name: "", from_email: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                success: false,
                message: "Failed to send message. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-base-200">
            <div className="container mx-auto px-6">
                <h2 className="flex items-center justify-center text-3xl font-bold mb-12 gap-2">
                    <RiContactsFill size={"1.5rem"} />
                    <span>
                        Get in <span className="text-info">Touch</span>
                    </span>
                </h2>

                <div className="max-w-xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-8 text-center">
                        Send Me a Message
                    </h3>

                    {submitStatus && (
                        <div
                            className={`alert ${
                                submitStatus.success
                                    ? "alert-success"
                                    : "alert-error"
                            } mb-6`}
                        >
                            <span>{submitStatus.message}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control">
                            <label htmlFor="from_name" className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="from_email" className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                type="email"
                                id="from_email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="message" className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="textarea textarea-bordered h-32"
                                required
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        <div className="form-control pt-2">
                            <button
                                type="submit"
                                className={`btn btn-info ${
                                    isSubmitting ? "loading" : ""
                                }`}
                                disabled={isSubmitting}
                            >
                                {!isSubmitting && (
                                    <FaPaperPlane className="mr-2" />
                                )}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
