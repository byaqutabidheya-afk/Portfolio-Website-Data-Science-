import { BookOpen, Compass, Rocket } from "lucide-react";

const cards = [
    {
        title: "What I'm studying?",
        description:
            "Hey! I'm a BTech Computer Science student diving deep into Data Science and AI/ML. I love figuring out how machines can make sense of messy, real-world data — and honestly, I just find the whole field endlessly fascinating. Outside of coursework, I'm the kind of person who'll randomly go down a rabbit hole comparing car models or rereading Kafka, so curiosity is pretty much my default mode. I'm gearing up to get some real industry experience next, with an eye on eventually building my own startup someday.",
        icon: BookOpen,
    },
    {
        title: "What drives me?",
        description:
            "What drives me is a genuine curiosity about how things work — and a restlessness to build something that matters. I'm endlessly fascinated by the way data and intelligent systems can turn noise into insight, and that fascination pushes me to keep learning, keep experimenting, keep asking \"what if?\" I don't just want to study technology — I want to wield it, to eventually build something of my own that solves a real problem for real people. Every line of code, every dataset I dig into, every rabbit hole I fall down is a small step toward that bigger vision. I'm not chasing perfection right now — I'm chasing momentum, experience, and the kind of hands-on growth that turns ambition into ability. The startup I'll build someday isn't a distant dream to me; it's the destination I'm already walking toward, one skill at a time.",
        icon: Compass,
    },
    {
        title: "What I'm building?",
        description:
            "What I want to build isn't tied to a single idea yet — it's tied to a feeling. I want to create something that takes a real, everyday problem and makes it simpler, smarter, or just better using technology. I'm drawn to the intersection of data, intelligence, and impact — building tools that don't just look impressive on paper but actually change how people work, decide, or live. Right now, I'm in the phase of learning deeply, exploring widely, and gathering the skills and experience I'll need to eventually take that leap. But the destination is clear in my head: a startup born out of curiosity, built with purpose, and driven by the belief that good technology should quietly make life easier for the people who use it.",
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
