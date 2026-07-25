import ExperienceCard from "./ExperienceCard";
import DreamschoolsLogo from "../assets/logos/dreamschools.png";
import DefinityLogo from "../assets/logos/definity.png";
import AvanteIOLogo from "../assets/logos/avante-io.png";
import ScrawlrLogo from "../assets/logos/scrawlr.png";

const experiences = [
    {
        company: "Scrawlr",
        role: "Backend Software Developer Intern",
        duration: "Jan 2026 - Apr 2026",
        description: "...",
        logo: ScrawlrLogo,
    },
    {
        company: "Avante IO",
        role: "Software Engineering Intern",
        duration: "May 2025 - Aug 2025",
        description: "...",
        logo: AvanteIOLogo,
    },
    {
        company: "Definity",
        role: "Software Automation Developer Intern",
        duration: "Sept 2024 - Dec 2024",
        description: "...",
        logo: DefinityLogo,
    },
    {
        company: "Dreamschools",
        role: "Fullstack Software Developer Intern",
        duration: "Jan 2023 - Aug 2023",
        description: "...",
        logo: DreamschoolsLogo,
    },
];

function Experience() {
    return (
        <div className="text-accent text-3xl">
            Experience
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
            ))}
        </div>
    );
}

export default Experience;
