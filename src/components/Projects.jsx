import ProjectCard from "./ProjectCard";
import WATtoEat from "../assets/images/wat-to-eat.png";
import Chess from "../assets/images/chess.png";
import TychesCharm from "../assets/images/tyches-charm.png";

const projects = [
    {
        title: "Tyche's Charm",
        description:
            "A casino-style gaming platform featuring interactive games, simulated betting mechanics, and an engaging gameplay experience.",
        tags: "Python,Django,React,JavaScript",
        image: TychesCharm,
        link: "https://github.com/Qist13/tyches-charm",
    },
    {
        title: "WATtoEat",
        description:
            "A food discovery platform that helps University of Waterloo students find and explore nearby restaurants based on their preferences, location, and dining needs.",
        tags: "Kotlin",
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
