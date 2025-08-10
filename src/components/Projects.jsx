import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
            <figure>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                        <div key={tech} className="badge badge-primary">
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link
                        to={`/projects/${project.id}`}
                        className="btn btn-primary btn-sm"
                    >
                        <FaExternalLinkAlt className="mr-2" /> View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-base-200">
            <div className="container mx-auto px-6">
                <h2
                    className="text-3xl font-bold mb-12 text-center"
                    data-aos="fade-up"
                >
                    My <span className="text-info">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            data-aos-delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
