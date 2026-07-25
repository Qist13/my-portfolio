function ExperienceCard({ experience }) {
    return (
        <div className="bg-muted/15 p-4 rounded-lg my-4 flex flex-row gap-4">
            <div className="">
                <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-16 h-auto mt-4 rounded-lg"
                />
            </div>
            <div>
                <h3 className="text-xl font-bold text-accent">
                    {experience.company}
                </h3>
                <p className="text-base">{experience.role}</p>
                <p className="text-sm text-text/75">{experience.duration}</p>
                <p className="text-sm text-text/50">{experience.description}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;
