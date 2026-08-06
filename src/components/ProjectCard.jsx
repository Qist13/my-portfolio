function ProjectCard({ project }) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col aspect-video rounded-lg overflow-hidden border border-transparent hover:border-accent/50 transition-colors bg-muted/20"
        >
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg font-bold text-white">
                    {project.title}
                </h3>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-5 bg-black/85 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
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
