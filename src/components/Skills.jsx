import { skills } from "../data/skills";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <FaCode className="text-primary" size={24} />,
            skills: skills.frontend,
        },
        {
            title: "Backend",
            icon: <FaServer className="text-secondary" size={24} />,
            skills: skills.backend,
        },
        {
            title: "Database",
            icon: <FaDatabase className="text-accent" size={24} />,
            skills: skills.database,
        },
        {
            title: "Tools",
            icon: <FaTools className="text-info" size={24} />,
            skills: skills.tools,
        },
    ];

    return (
        <section id="skills" className="py-20 bg-neutral">
            <div className="container mx-auto px-6">
                <h2
                    className="text-3xl font-bold mb-12 text-center"
                    data-aos="fade-up"
                >
                    My <span className="text-info">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="card bg-base-200 shadow-xl"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    {category.icon}
                                    <h3 className="text-xl font-semibold">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-4"
                                        >
                                            <div className="avatar">
                                                <div className="w-12 rounded-full bg-base-100 p-2">
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between mb-1">
                                                    <span className="font-medium">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-sm">
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value={skill.level}
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
