import Image from "next/image";

type StoryItem = {
    year: string;
    location: string;
    heading: string;
    text: string;
    image: string;
};

const storyData: StoryItem[] = [
    {
        year: "[Placeholder Year]",
        location: "[Your City, Country]",
        heading: "[Placeholder] Where it started",
        text: "[Placeholder] Write a short story here about an early memory that shaped your interest in your field — a moment, a person, or an event.",
        image: "/images/story1.jpg",
    },
    {
        year: "[Placeholder Year]",
        location: "[Placeholder Location]",
        heading: "[Placeholder] First taste of the craft",
        text: "[Placeholder] Write about the first time you built, coded, or created something — however small.",
        image: "/images/story2.jpg",
    },
    {
        year: "[Placeholder Year]",
        location: "[Placeholder Location]",
        heading: "[Placeholder] Choosing this path",
        text: "[Placeholder] Write about the decision to pursue your degree/field and what led you there.",
        image: "/images/story3.jpg",
    },
    {
        year: "[Placeholder Year]",
        location: "[Placeholder Location]",
        heading: "[Placeholder] Where I am now",
        text: "[Placeholder] Write about what you're currently working on, learning, or excited about.",
        image: "/images/story4.jpg",
    },
];

export default function StoryTimeline() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-3xl">
                    <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-mint sm:text-5xl lg:text-6xl">
                        My Story
                    </h2>
                </div>

                <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-16">
                    {storyData.map((item, index) => {
                        const imageLeft = index % 2 === 1;

                        return (
                            <article
                                key={`${item.heading}-${index}`}
                                className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10"
                            >
                                <div className={imageLeft ? "order-2" : "order-2 lg:order-1"}>
                                    <div className="max-w-2xl">
                                        <span className="font-display text-5xl leading-none text-mint sm:text-6xl lg:text-7xl">
                                            {item.year}
                                        </span>
                                        <p className="mt-2 font-ui text-xs font-semibold uppercase tracking-[0.28em] text-pink">
                                            {item.location}
                                        </p>
                                        <h3 className="mt-4 font-ui text-2xl font-semibold tracking-tight text-text-body sm:text-3xl">
                                            {item.heading}
                                        </h3>
                                        <p className="mt-4 font-body text-lg leading-8 text-text-body/80 sm:text-xl">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>

                                <div className={imageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                                    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.2)]">
                                        <div className="relative aspect-[4/5]">
                                            <Image
                                                src={item.image}
                                                alt={item.heading}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
