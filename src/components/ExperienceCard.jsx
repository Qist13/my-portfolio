import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

function ExperienceCard({ experience }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-muted/15 rounded-lg my-4">
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="w-full p-4 flex flex-row items-center gap-4 text-left cursor-pointer rounded-lg hover:bg-muted/10 transition-colors"
            >
                <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-16 h-auto rounded-lg"
                />
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-accent">
                        {experience.company}
                    </h3>
                    <p className="text-base text-text">{experience.role}</p>
                    <p className="text-sm text-text/75">
                        {experience.duration}
                    </p>
                </div>
                <HiChevronDown
                    className={`w-6 h-6 shrink-0 text-muted transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden" inert={!open}>
                    <ul className="list-disc pl-10 pr-6 pb-4 flex flex-col gap-2 text-sm text-text/75 leading-relaxed">
                        {experience.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
