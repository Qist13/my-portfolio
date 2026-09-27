import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "/resume.pdf", label: "Resume" },
];

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur border-b border-muted/20">
            <div className="w-full px-6 py-4 flex items-center justify-between font-mono text-sm">
                <button
                    onClick={() => {
                        setOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-accent font-bold cursor-pointer"
                >
                    QX
                </button>
                <div className="hidden md:flex gap-6">
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
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-muted hover:text-accent transition-colors cursor-pointer"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    {open ? (
                        <HiX className="w-6 h-6" />
                    ) : (
                        <HiMenu className="w-6 h-6" />
                    )}
                </button>
            </div>
            {open && (
                <div className="md:hidden flex flex-col px-6 pb-4 gap-4 font-mono text-sm">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-muted hover:text-accent transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Nav;
