function Nav() {
    const links = [
        { href: "#hero", label: "~/" },
        { href: "#about", label: "about" },
        { href: "#experience", label: "experience" },
        { href: "#projects", label: "projects" },
        { href: "#contact", label: "contact" },
    ];

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur border-b border-muted/20">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between font-mono text-sm">
                <a
                    href="#hero"
                    onClick={scrollToTop}
                    className="text-accent font-bold"
                >
                    Q
                </a>
                <div className="flex gap-6">
                    {links.slice(1).map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-muted hover:text-accent transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
