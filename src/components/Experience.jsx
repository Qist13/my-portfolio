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
        points: [
            "Designed and built a cron-based email notification pipeline that queried application data to identify eligible recipients and automatically delivered scheduled communications",
            "Built location-based search and filtering for short-term accommodations, integrating Google Places API for real-time destination autocomplete and querying listings by user-selected criteria",
            "Developed organization-scoped authentication and property search workflows for partner organizations, enforcing tenant-specific access controls and listing visibility",
        ],
        logo: ScrawlrLogo,
    },
    {
        company: "Avante IO",
        role: "Software Engineering Intern",
        duration: "May 2025 - Aug 2025",
        points: [
            "Implemented an asynchronous background job processing system for AI-powered file processing, incorporating job queuing, status tracking, and failure handling",
            "Built a Django BI reporting application using unmanaged models and PostgreSQL views to aggregate application data and support complex reporting queries",
            "Designed and executed database migrations to support evolving application requirements while maintaining data integrity and backward compatibility",
        ],
        logo: AvanteIOLogo,
    },
    {
        company: "Definity",
        role: "Software Automation Developer Intern",
        duration: "Sept 2024 - Dec 2024",
        points: [
            "Integrated Tricentis Tosca end-to-end automated tests with BrowserStack using Java, enabling cross-platform testing across multiple mobile devices and browsers",
            "Automated end-of-month reporting in Excel using VBA scripts to retrieve and format Jira data, reducing manual reporting effort by 16 hours per month",
        ],
        logo: DefinityLogo,
    },
    {
        company: "Dreamschools",
        role: "Fullstack Software Developer Intern",
        duration: "Jan 2023 - Aug 2023",
        points: [
            "Implemented pagination and optimized PostgreSQL queries, reducing page load latency by 85% through more efficient data retrieval",
            "Developed and maintained RESTful APIs, implemented new endpoints, and updated legacy API systems to enhance functionality and improve performance",
            "Contributed to the development and enhancement of the cart checkout workflow, which efficiently processes over $75,000 in monthly transactions",
        ],
        logo: DreamschoolsLogo,
    },
];

function Experience() {
    return (
        <div className="text-accent text-3xl">
            Experience
            {experiences.map((experience) => (
                <ExperienceCard
                    key={experience.company}
                    experience={experience}
                />
            ))}
        </div>
    );
}

export default Experience;
