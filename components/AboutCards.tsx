import { BookOpen, Compass, Rocket } from "lucide-react";

const cards = [
    {
        title: "What I'm studying",
        description:
            "I'm currently focused on Computer Science fundamentals, web development, and the practical side of building useful software. I like learning topics that connect directly to projects I can actually make and improve.",
        icon: BookOpen,
    },
    {
        title: "What drives me",
        description:
            "I enjoy turning ideas into real things, especially when they help people solve everyday problems or understand something more clearly. Curiosity, iteration, and steady progress keep me moving forward.",
        icon: Compass,
    },
    {
        title: "What I'm building",
        description:
            "Right now I’m building a portfolio of class projects, personal experiments, and small tools that help me learn by doing. I want each project to show growth, not just the final result.",
        icon: Rocket,
    },
];

export default function AboutCards() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
                {cards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <article
                            key={card.title}
                            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-pink/40 hover:bg-white/[0.05]"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-mint">
                                <Icon aria-hidden="true" className="h-5 w-5" />
                            </div>

                            <h2 className="font-ui text-xl font-semibold tracking-tight text-text-body sm:text-2xl">
                                {card.title}
                            </h2>

                            <p className="mt-4 font-body text-base leading-7 text-text-body/80 sm:text-lg">
                                {card.description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
