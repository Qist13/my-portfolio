function Contact() {
    return (
        <section className="text-accent text-3xl">
            <div className="mx-auto">
                Contact Me
                <p className="text-base text-text/75 mt-4">
                    I'm currently looking for software engineering opportunities
                    and would love to connect. Feel free to reach out if you
                    have a question, opportunity, or just want to chat.
                </p>
                <form className="flex flex-col gap-4 mt-4 text-sm text-text">
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-2 w-1/2">
                            <label htmlFor="name" className="text-text">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Tom Pherry"
                                className="w-full p-3 rounded-xl bg-background border
                            border-muted/20 bg-muted/15 focus:border-accent focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-1/2">
                            <label htmlFor="email" className="text-text">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                className="w-full p-3 rounded-xl bg-background border border-muted/30 bg-muted/15 focus:border-accent focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-text">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Hi, I would love to have a chat!"
                            className="w-full p-3 rounded-xl bg-background border border-muted/30 bg-muted/15 h-32 focus:border-accent focus:outline-none"
                        />
                    </div>

                    <button className="self-center w-fit px-6 py-3 rounded-2xl font-bold text-background bg-accent/80 hover:bg-accent/80 cursor-pointer transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
