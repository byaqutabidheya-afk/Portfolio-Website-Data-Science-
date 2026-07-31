"use client";

import {
    Briefcase,
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
    title: string;
    subtitle: string;
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
        title: "[Placeholder] Started my degree",
        subtitle: "Computer Science, [Your University]",
    },
    {
        year: 2026,
        icon: "Code2",
        title: "[Placeholder] Learned web development",
        subtitle: "Building my first real projects",
    },
    {
        year: 2027,
        icon: "Briefcase",
        title: "[Placeholder] First internship",
        subtitle: "Company name goes here",
    },
    {
        year: 2028,
        icon: "Users",
        title: "[Placeholder] Led a student project/club",
        subtitle: "Team or organization name",
    },
    {
        year: 2029,
        icon: "Trophy",
        title: "[Placeholder] Hackathon / competition win",
        subtitle: "Event name goes here",
    },
    {
        year: 2030,
        icon: "Rocket",
        title: "[Placeholder] Graduated & started career",
        subtitle: "Role and company goes here",
    },
];

export default function Timeline() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto w-full max-w-5xl">
                <div className="space-y-6 sm:space-y-8">
                    {timelineData.map((item, index) => {
                        const Icon = iconMap[item.icon];

                        return (
                            <motion.article
                                key={item.year}
                                className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.02] px-5 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:px-6 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-6 lg:px-8"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                            >
                                <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:gap-3 lg:pt-1">
                                    <span className="font-display text-4xl leading-none text-purple sm:text-5xl lg:text-6xl">
                                        {item.year}
                                    </span>
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-pink">
                                        <Icon aria-hidden="true" className="h-4 w-4" />
                                    </span>
                                </div>

                                <div className="max-w-2xl lg:justify-self-end lg:text-right">
                                    <h3 className="font-ui text-lg font-semibold tracking-tight text-text-body sm:text-xl">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 font-body text-base leading-7 text-text-body/75 sm:text-lg">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
