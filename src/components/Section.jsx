function Section({ id, className = "", children }) {
    return (
        <section
            id={id}
            className={`w-full max-w-4xl mx-auto px-6 py-20 ${className}`}
        >
            {children}
        </section>
    );
}

export default Section;
