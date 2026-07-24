import Nav from "./components/Nav";
import Section from "./components/Section";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="min-h-screen bg-bg text-text font-mono">
            <Nav />
            <Section id="hero">
                <Hero />
            </Section>
            <Section id="experience" className="bg-bg/50">
                <h2 className="text-2xl text-accent">Experience placeholder</h2>
            </Section>
            <Section id="projects" className="bg-bg/50">
                <h2 className="text-2xl text-accent">Projects placeholder</h2>
            </Section>
            <Section id="about">
                <h2 className="text-2xl text-accent">About placeholder</h2>
            </Section>
            <Section id="contact">
                <h2 className="text-2xl text-accent">Contact placeholder</h2>
            </Section>
        </div>
    );
}

export default App;
