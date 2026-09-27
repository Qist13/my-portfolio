import ProjectCard from "./ProjectCard";
import WATtoEat from "../assets/images/wat-to-eat.png";
import Chess from "../assets/images/chess.png";
import RainbowRenderer from "../assets/images/rainbow-renderer.png";
import Verbolt from "../assets/images/verbolt.png";

const projects = [
    {
        title: "Verbolt",
        description:
            "A language translation app that supports text, image, video, and voice-based translations",
        tags: "Python,FastAPI,TypeScript,React",
        image: Verbolt,
        link: "https://github.com/Qist13/verbolt",
    },
    {
        title: "Rainbow Renderer",
        description:
            "A physically-based rainbow renderer built on a custom ray tracer — simulates dispersion, internal reflection, and Fresnel attenuation through water droplets to render a primary bow, secondary bow, and Alexander's dark band.",
        tags: "C++",
        image: RainbowRenderer,
        link: "https://github.com/Qist13/rainbow-renderer",
    },
    {
        title: "WATtoEat",
        description:
            "A food discovery platform that helps University of Waterloo students find and explore nearby restaurants based on their preferences, location, and dining needs.",
        tags: "Kotlin,Compose Multiplatform",
        image: WATtoEat,
        link: "https://github.com/Qist13/WAT-to-Eat",
    },
    {
        title: "Chess",
        description:
            "A fully functional chess game featuring legal move validation, check/checkmate detection, castling, en passant, and pawn promotion.",
        tags: "C++",
        image: Chess,
        link: "https://github.com/Qist13/Chess",
    },
];

function Projects() {
    return (
        <div className="flex flex-col gap-8 text-accent text-3xl">
            Projects
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
