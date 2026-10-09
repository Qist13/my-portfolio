import { useEffect, useRef, useState } from "react";

const ABOUT_TEXT =
    "I'm currently a computer science student at the University of Waterloo and an aspiring Software Developer who enjoys turning ideas into reality through code. I love working across the stack, exploring new technologies, and building projects that I find interesting. Outside of coding, I enjoy going on walks, spending time with my cat, and playing Hearthstone.";

const TYPING_SPEED_MS = 30;

const reducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function About() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    const [count, setCount] = useState(() =>
        reducedMotion() ? ABOUT_TEXT.length : 0,
    );

    useEffect(() => {
        if (reducedMotion()) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 },
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started || count >= ABOUT_TEXT.length) return;
        const timer = setTimeout(() => setCount(count + 1), TYPING_SPEED_MS);
        return () => clearTimeout(timer);
    }, [started, count]);

    const done = count >= ABOUT_TEXT.length;

    return (
        <div className="text-accent text-3xl">
            About Me
            <div
                ref={ref}
                className="bg-muted/15 py-4 px-6 rounded-lg text-text text-sm my-4 leading-loose grid"
            >
                {/* Invisible full text reserves the final height so the layout doesn't jump */}
                <p className="invisible col-start-1 row-start-1">
                    {ABOUT_TEXT}
                </p>
                <p className="col-start-1 row-start-1" aria-label={ABOUT_TEXT}>
                    <span aria-hidden="true">
                        {ABOUT_TEXT.slice(0, count)}
                        <span
                            className={`inline-block w-2 h-4 ml-0.5 align-middle bg-accent ${
                                done ? "animate-pulse" : ""
                            }`}
                        />
                    </span>
                </p>
            </div>
        </div>
    );
}

export default About;
