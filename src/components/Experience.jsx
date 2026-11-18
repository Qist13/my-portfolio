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
            "Designed and built a cron-based email notification pipeline that queried application data to identify eligible recipients and automatically delivered 40+ scheduled emails per month",
            "Built location-based search for short-term accommodations with Google Places autocomplete, filtering 350+ listings in 120 ms average response time",
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
            "Migrated legacy authentication workflows to OAuth 2.0 using Apigee in a Django backend, improving API security and standardizing authorization processes",
        ],
        logo: AvanteIOLogo,
    },
    {
        company: "Definity",
        role: "Software Automation Developer Intern",
        duration: "Sept 2024 - Dec 2024",
        points: [
            "Automated end-of-month reporting in Excel using VBA scripts to retrieve and format Jira data, reducing manual reporting effort by 16 hours per month",
            "Created end-to-end automated test cases using Tricentis Tosca, improving test coverage and reducing software defects by 17%",
        ],
        logo: DefinityLogo,
    },
    {
        company: "Dreamschools",
        role: "Fullstack Software Developer Intern",
        duration: "Jan 2023 - Aug 2023",
        points: [
            "Contributed to the development of the cart checkout workflow, which efficiently processes over $75,000 in monthly transactions",
            "Implemented pagination and optimized PostgreSQL queries, reducing page load latency by 85% through more efficient data retrieval",
            "Developed and maintained RESTful APIs, implemented new endpoints, and updated legacy API systems to enhance functionality and improve performance",
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
