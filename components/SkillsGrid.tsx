import {
    Braces,
    Code2,
    Database,
    GitBranch,
    LayoutGrid,
    Palette,
    PenTool,
    TerminalSquare,
    type LucideIcon,
} from "lucide-react";

type SkillItem = {
    name: string;
    icon: keyof typeof iconMap;
};

const iconMap = {
    Code2,
    Braces,
    Database,
    GitBranch,
    LayoutGrid,
    Palette,
    PenTool,
    TerminalSquare,
} satisfies Record<string, LucideIcon>;

const skills: SkillItem[] = [
    { name: "JavaScript", icon: "Code2" },
    { name: "Python", icon: "TerminalSquare" },
    { name: "React", icon: "Braces" },
    { name: "Next.js", icon: "LayoutGrid" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "Git & GitHub", icon: "GitBranch" },
    { name: "Figma", icon: "PenTool" },
    { name: "SQL", icon: "Database" },
    { name: "TypeScript", icon: "Code2" },
    { name: "VS Code", icon: "Code2" },
];

export default function SkillsGrid() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-3xl">
                    <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-mint sm:text-5xl lg:text-6xl">
                        Skills &amp; Tools
                    </h2>
                </div>

                <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skill) => {
                        const Icon = iconMap[skill.icon];

                        return (
                            <article
                                key={skill.name}
                                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-pink/40 hover:bg-white/[0.04] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/50 text-mint transition group-hover:border-pink/40 group-hover:text-pink">
                                        <Icon aria-hidden="true" className="h-5 w-5" />
                                    </span>

                                    <div>
                                        <h3 className="font-ui text-lg font-semibold tracking-tight text-text-body">
                                            {skill.name}
                                        </h3>
                                        <p className="mt-1 font-body text-sm leading-6 text-text-body/65">
                                            Tool or technology I use while building.
                                        </p>
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
