import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvgwzno";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(e.target),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section className="text-accent text-3xl">
            <div className="mx-auto">
                Contact Me
                <p className="text-base text-text/75 mt-4">
                    I'm currently looking for software engineering opportunities
                    and would love to connect. Feel free to reach out if you
                    have a question, opportunity, or just want to chat.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 mt-4 text-sm text-text"
                >
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label htmlFor="name" className="text-text">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tom Pherry"
                                className="w-full p-3 rounded-xl border
                            border-muted/20 bg-muted/15 focus:border-accent focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label htmlFor="email" className="text-text">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full p-3 rounded-xl border border-muted/30 bg-muted/15 focus:border-accent focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-text">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Hi, I would love to have a chat!"
                            className="w-full p-3 rounded-xl border border-muted/30 bg-muted/15 h-32 min-h-32 max-h-64 resize-y focus:border-accent focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="self-center w-fit px-6 py-3 rounded-2xl font-bold text-bg bg-accent/80 hover:bg-accent cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    {status === "success" && (
                        <p className="text-center text-green-400 text-sm">
                            Message sent! I'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-center text-red-400 text-sm">
                            Something went wrong. Please try again or email me
                            directly.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;
