import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Project not found
                    </h2>
                    <Link to="/" className="btn btn-primary">
                        <FaArrowLeft className="mr-2" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <Link to="/" className="btn btn-ghost mb-8">
                    <FaArrowLeft className="mr-2" /> Back to Projects
                </Link>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-lg shadow-xl"
                        />
                    </div>

                    <div className="lg:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-lg mb-6">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.technologies.map((tech) => (
                                <div key={tech} className="badge badge-primary">
                                    {tech}
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost"
                                >
                                    <FaGithub className="mr-2" /> View Code
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <FaExternalLinkAlt className="mr-2" /> Live
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
