import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/Qist13",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/qikun-xia-qwq13",
        icon: FaLinkedin,
    },
    {
        name: "Instagram",
        href: "https://instagram.com/qkxia_13",
        icon: FaInstagram,
    },
    {
        name: "Discord",
        href: "https://discord.com/users/qist13",
        icon: FaDiscord,
    },
    {
        name: "Email",
        href: "mailto:qikunx13@gmail.com",
        icon: MdEmail,
    },
];

function Footer() {
    return (
        <footer className="w-full border-t border-muted/20 py-8">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
                <div className="flex gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="text-muted hover:text-accent transition-colors"
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
                <p className="text-xs text-text font-mono">Qi Kun Xia</p>
            </div>
        </footer>
    );
}

export default Footer;
