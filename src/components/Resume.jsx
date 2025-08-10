import { FaFileDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Resume = () => {
    const experiences = [
        {
            role: "MERN Stack Developer",
            company: "Tech Solutions Inc.",
            period: "2022 - Present",
            description:
                "Developed and maintained full-stack web applications using MongoDB, Express, React, and Node.js.",
        },
        {
            role: "Frontend Developer",
            company: "Digital Creations",
            period: "2020 - 2022",
            description:
                "Implemented responsive UIs and collaborated with backend teams to integrate APIs.",
        },
    ];

    const education = [
        {
            degree: "B.Sc. Computer Science",
            institution: "State University",
            period: "2016 - 2020",
        },
        {
            degree: "Web Development Bootcamp",
            institution: "Coding Academy",
            period: "2019",
        },
    ];

    return (
        <section id="resume" className="py-20 bg-base-100">
            <div className="container mx-auto px-6">
                <h2
                    className="text-3xl font-bold mb-12 text-center"
                    data-aos="fade-up"
                >
                    My <span className="text-primary">Resume</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Experience */}
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-8">
                            <FaBriefcase className="text-primary" size={24} />
                            <h3 className="text-2xl font-semibold">
                                Experience
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="card bg-base-200 shadow"
                                >
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {exp.role}
                                        </h4>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium">
                                                {exp.company}
                                            </span>
                                            <span className="badge badge-primary">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p>{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className="flex items-center gap-3 mb-8">
                            <FaGraduationCap
                                className="text-primary"
                                size={24}
                            />
                            <h3 className="text-2xl font-semibold">
                                Education
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="card bg-base-200 shadow"
                                >
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {edu.degree}
                                        </h4>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium">
                                                {edu.institution}
                                            </span>
                                            <span className="badge badge-primary">
                                                {edu.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Download Button */}
                <div className="text-center mt-12" data-aos="fade-up">
                    <Link
                        to="/assets/resume.pdf"
                        target="_blank"
                        download
                        className="btn btn-primary btn-wide"
                    >
                        <FaFileDownload className="mr-2" /> Download Full Resume
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Resume;
