"use client";

import { Fragment } from "react";
import {
    Briefcase,
    ChevronDown,
    Code2,
    GraduationCap,
    Rocket,
    Trophy,
    Users,
    type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

type TimelineItem = {
    year: number;
    icon: keyof typeof iconMap;
    category: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
};

const iconMap = {
    GraduationCap,
    Code2,
    Briefcase,
    Users,
    Trophy,
    Rocket,
} satisfies Record<string, LucideIcon>;

const timelineData: TimelineItem[] = [
    {
        year: 2025,
        icon: "GraduationCap",
        category: "Education",
        title: "Started my Bachelor's Degree",
        subtitle: "Computer Science(DS), [DRIEMS University]",
        description: "Began my undergraduate journey, laying down the foundations in math, programming, and problem solving.",
        tags: ["B.Tech", "Data Science"],
    },
    {
        year: 2026,
        icon: "Code2",
        category: "Achievement",
        title: "Learned to talk to Computers",
        subtitle: "Learned C, Python, Java",
        description: "Picked up my first languages and built small projects to turn ideas into working code.",
        tags: ["C", "Python", "Java"],
    },
    {
        year: 2027,
        icon: "Briefcase",
        category: "Internship",
        title: "[Placeholder] First internship",
        subtitle: "Company name goes here",
        description: "Put classroom knowledge to work on real engineering problems with a professional team.",
        tags: ["Full-Stack", "Team"],
    },
    {
        year: 2028,
        icon: "Users",
        category: "Leadership",
        title: "[Placeholder] Led a student project/club",
        subtitle: "Team or organization name",
        description: "Organized people, ran meetings, and shipped a shared goal with a group of peers.",
        tags: ["Club", "Mentorship"],
    },
    {
        year: 2029,
        icon: "Trophy",
        category: "Achievement",
        title: "[Placeholder] Hackathon / competition win",
        subtitle: "Event name goes here",
        description: "Competed under pressure, shipped a demo in limited hours, and learned fast.",
        tags: ["Hackathon", "AI"],
    },
    {
        year: 2030,
        icon: "Rocket",
        category: "Education",
        title: "[Placeholder] Graduated & started career",
        subtitle: "Role and company goes here",
        description: "Completed my degree and stepped into the next chapter of building things.",
        tags: ["Graduate", "Career"],
    },
];

export default function Timeline() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto w-full max-w-5xl">
                <div className="relative flex flex-col gap-8 sm:gap-12">
                    {timelineData.map((item, index) => {
                        const Icon = iconMap[item.icon];

                        return (
                            <Fragment key={item.year}>
                                <motion.article
                                    className="relative grid gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-white/20 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-6 lg:px-8"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-purple),transparent_65%)] opacity-30"
                                    />
                                    <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:items-end lg:gap-3 lg:pt-1">
                                    <span className="font-display text-4xl leading-none text-purple sm:text-5xl lg:text-6xl">
                                        {item.year}
                                    </span>
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-pink">
                                        <Icon aria-hidden="true" className="h-4 w-4" />
                                    </span>
                                </div>

                                <div className="relative z-10 max-w-2xl lg:justify-self-end lg:text-right">
                                    <span className="inline-flex rounded-full border border-purple/40 bg-purple/10 px-3 py-1 font-ui text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-purple">
                                        {item.category}
                                    </span>

                                    <h3 className="mt-3 font-ui text-lg font-semibold tracking-tight text-text-body sm:text-xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1 font-ui text-sm leading-6 text-text-body/75 sm:text-base">
                                        {item.subtitle}
                                    </p>

                                    <p className="mt-3 font-ui text-sm leading-6 text-text-body/60">
                                        {item.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2 lg:justify-end">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tag}
                                                className={
                                                    tagIndex % 2 === 0
                                                        ? "rounded-full border border-purple/30 bg-purple/5 px-3 py-1 font-ui text-xs font-medium text-purple"
                                                        : "rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 font-ui text-xs font-medium text-cyan-300"
                                                }
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    </div>
                                </motion.article>

                                {index < timelineData.length - 1 && (
                                    <div
                                        aria-hidden="true"
                                        className="mx-auto flex h-16 w-[3px] flex-col items-center justify-start"
                                    >
                                        <div className="h-11 w-[3px] bg-gradient-to-b from-mint to-mint/50" />
                                        <ChevronDown
                                            className="-mt-0.5 h-6 w-6 stroke-[2.5] text-mint drop-shadow-[0_0_10px_rgba(197,245,213,0.8)]"
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                )}
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
