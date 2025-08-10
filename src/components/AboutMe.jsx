import { FaCode, FaServer, FaDatabase } from "react-icons/fa";

const AboutMe = () => {
    const stats = [
        { value: "3+", label: "Projects Completed" },
        { value: "10+", label: "Technologies Learned" },
        { value: "2+", label: "Years of Experience" },
    ];

    const skillsAreas = [
        {
            icon: <FaCode size={24} className="text-primary" />,
            title: "Frontend Development",
            skills: ["React", "JavaScript", "Tailwind CSS", "HTML5/CSS3"],
        },
        {
            icon: <FaServer size={24} className="text-secondary" />,
            title: "Backend Development",
            skills: ["Node.js", "Express", "REST APIs", "Authentication"],
        },
        {
            icon: <FaDatabase size={24} className="text-accent" />,
            title: "Database",
            skills: ["MongoDB", "Mongoose", "CRUD Operations", "Data Modeling"],
        },
    ];

    return (
        <section id="about" className="py-20 bg-neutral">
            <div className="container mx-auto px-6">
                <h2
                    className="text-3xl font-bold mb-12 text-center"
                    data-aos="fade-up"
                >
                    About <span className="text-info">Me</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Profile Image */}
                    <div className="lg:w-1/3" data-aos="fade-right">
                        <div className="mask mask-squircle w-64 h-64 mx-auto lg:mx-0">
                            <img
                                src="https://i.ibb.co.com/7drZhd6D/admin-asif.jpg"
                                alt="about me"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3" data-aos="fade-left">
                        <h3 className="text-2xl font-semibold mb-6">
                            Who am I?
                        </h3>
                        <p className="mb-4">
                            I'm a passionate MERN stack developer specializing
                            in building modern web applications. With a strong
                            foundation in both frontend and backend
                            technologies, I create full-stack solutions that are
                            efficient, scalable, and user-friendly.
                        </p>

                        <p className="mb-8">
                            My journey in web development began with a curiosity
                            about how websites work, and it has evolved into a
                            career where I combine technical skills with
                            creative problem-solving to build digital
                            experiences that make an impact.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-12">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="stat bg-base-200 rounded-lg p-4 text-center"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="stat-value text-info">
                                        {stat.value}
                                    </div>
                                    <div className="stat-label">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Skills Areas */}
                        <div className="space-y-6">
                            {skillsAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="collapse collapse-plus bg-base-200 rounded-box"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                >
                                    <input
                                        type="checkbox"
                                        defaultChecked={index === 0}
                                    />
                                    <div className="collapse-title text-xl font-medium flex items-center gap-3">
                                        {area.icon}
                                        {area.title}
                                    </div>
                                    <div className="collapse-content">
                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {area.skills.map(
                                                (skill, skillIndex) => (
                                                    <div
                                                        key={skillIndex}
                                                        className="badge badge-outline"
                                                    >
                                                        {skill}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
