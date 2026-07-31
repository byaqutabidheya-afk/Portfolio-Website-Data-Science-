import Image from "next/image";

type Project = {
    title: string;
    description: string;
    tags: string[];
    image: string;
};

const projects: Project[] = [
    {
        title: "[Placeholder] Project One",
        description:
            "Short one-line description of what this project does and what you learned building it.",
        tags: ["React", "Node.js"],
        image: "/images/project1.jpg",
    },
    {
        title: "[Placeholder] Project Two",
        description: "Short one-line description.",
        tags: ["Python", "Data"],
        image: "/images/project2.jpg",
    },
    {
        title: "[Placeholder] Project Three",
        description: "Short one-line description.",
        tags: ["Next.js", "Tailwind"],
        image: "/images/project3.jpg",
    },
];

export default function ProjectsSection() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-3xl">
                    <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-mint sm:text-5xl lg:text-6xl">
                        Select Projects
                    </h2>
                    <p className="mt-4 font-body text-lg leading-8 text-text-body/80 sm:text-xl">
                        A few things I&apos;ve built — class projects, personal builds, and things
                        I&apos;m proud of.
                    </p>
                </div>

                <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-16">
                    {projects.map((project, index) => {
                        const isImageLeft = index % 2 === 0;

                        return (
                            <article
                                key={project.title}
                                className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.18)] sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-8"
                            >
                                <div className={isImageLeft ? "order-1" : "order-1 lg:order-2"}>
                                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#141414]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={900}
                                            className="h-auto w-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div
                                    className={
                                        isImageLeft
                                            ? "order-2 lg:order-2 lg:pl-4"
                                            : "order-2 lg:order-1 lg:pr-4"
                                    }
                                >
                                    <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-pink sm:text-4xl lg:text-5xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-4 max-w-xl font-body text-lg leading-8 text-text-body/80 sm:text-xl">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/10 bg-black/50 px-4 py-2 font-ui text-xs font-medium tracking-[0.12em] text-text-body/80 uppercase"
                                            >
                                                {tag}
                                            </span>
                                        ))}
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
