import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Project 1",
        description: "desc",
        tags: "tag 1",
        image: "img link",
        link: "link",
    },
    {
        title: "Project 2",
        description: "desc",
        tags: "tag 1",
        image: "img link",
        link: "link",
    },
    {
        title: "Project 3",
        description: "desc",
        tags: "tag 1",
        image: "img link",
        link: "link",
    },
];

function Projects() {
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-text">
                <span className="text-accent">#</span> projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
