import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    return (
        <section id="resume" className="py-20 bg-base-100">
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center gap-3">
                    <h2
                        className="flex items-center justify-center text-3xl font-bold mb-12 gap-2"
                        data-aos="fade-up"
                    >
                        <FaGraduationCap size={"2rem"} />
                        <span className="text-info">Education</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <p className="mt-8 text-pretty">
                            Currently studying{" "}
                            <strong>Computer Science and Engineering</strong> at{" "}
                            <strong>
                                <a
                                    href="https://iubat.edu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    IUBAT - International University of Business
                                    Agriculture and Technology
                                </a>
                            </strong>
                            .
                        </p>
                        <p className="mt-4 font-semibold">
                            Expected graduation year: 2027
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
