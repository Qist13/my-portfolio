function Nav() {
    const links = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
        { href: "/resume.pdf", label: "Resume" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur border-b border-muted/20">
            <div className="w-full px-6 py-4 flex items-center justify-between font-mono text-sm">
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-accent font-bold cursor-pointer"
                >
                    QX
                </button>
                <div className="flex gap-6">
                    {links.map((link) => (
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
