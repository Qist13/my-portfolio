import { useEffect } from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    useEffect(() => {
        window.history.replaceState(null, "", window.location.pathname);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-bg text-text font-mono">
            <Nav />
            <Section id="hero">
                <Hero />
            </Section>
            <Section id="about">
                <About />
            </Section>
            <Section id="experience">
                <Experience />
            </Section>
            <Section id="projects">
                <Project />
            </Section>
            <Section id="contact">
                <Contact />
            </Section>
        </div>
    );
}

export default App;
