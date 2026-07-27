function ProjectCard({ project }) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-muted/15 rounded-lg overflow-hidden border border-transparent hover:border-accent/50 transition-colors"
        >
            <div className="w-full overflow-hidden bg-muted/20">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="flex flex-col gap-2 p-5">
                <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-text/60 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.split(",").map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                        >
                            {tag.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
