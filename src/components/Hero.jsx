function Hero() {
    return (
        <div className="min-h-[80vh] flex flex-col justify-center gap-4">
            <p className="text-accent text-sm">Hi, my name is</p>

            <h1 className="text-5xl md:text-6xl font-bold text-text">
                Qi Kun Xia
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-muted">
                Software Developer
            </h2>

            <p className="max-w-xl text-muted leading-relaxed">
                I build software, solve problems, and enjoy learning new
                technologies.
            </p>
            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors animate-bounce"
                aria-label="Scroll to experience section"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </a>
        </div>
    );
}

export default Hero;
