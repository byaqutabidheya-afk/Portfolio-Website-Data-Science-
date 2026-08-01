"use client";

import { useState } from "react";
import {
    Award,
    Briefcase,
    Code2,
    ChevronLeft,
    ChevronRight,
    Gift,
    GraduationCap,
    Medal,
    Rocket,
    Shield,
    Star,
    Trophy,
    Users,
    type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Achievement = {
    id: number;
    title: string;
    description: string;
    icon: keyof typeof iconMap;
    period: string;
};

const iconMap = {
    Trophy,
    Rocket,
    Award,
    Medal,
    Star,
    Shield,
    Code2,
    GraduationCap,
    Briefcase,
    Users,
    Gift,
} satisfies Record<string, LucideIcon>;

const achievements: Achievement[] = [
    {
        id: 1,
        title: "[Placeholder] First hackathon win",
        description:
            "Built a small but polished project under time pressure and learned how to ship with focus.",
        icon: "Trophy",
        period: "2025",
    },
    {
        id: 2,
        title: "[Placeholder] Dean's List",
        description:
            "Balanced coursework, projects, and consistency while keeping academic performance strong.",
        icon: "Award",
        period: "2025-2026",
    },
    {
        id: 3,
        title: "[Placeholder] Open-source contribution",
        description:
            "Made a first contribution to a public codebase and learned how collaboration works in practice.",
        icon: "Code2",
        period: "2026",
    },
    {
        id: 4,
        title: "[Placeholder] Hackathon 1st place",
        description:
            "Returned to the competition scene with better teamwork, cleaner execution, and a stronger result.",
        icon: "Medal",
        period: "2027",
    },
    {
        id: 5,
        title: "[Placeholder] Research assistant",
        description:
            "Supported a campus research project while building deeper problem-solving habits and technical range.",
        icon: "GraduationCap",
        period: "2028",
    },
    {
        id: 6,
        title: "[Placeholder] Conference talk",
        description:
            "Shared lessons from projects and student work with a broader audience in a clear, confident way.",
        icon: "Users",
        period: "2029",
    },
    {
        id: 7,
        title: "[Placeholder] Internship milestone",
        description:
            "Applied classroom learning in a real setting and proved I can contribute to a team environment.",
        icon: "Briefcase",
        period: "2030",
    },
    {
        id: 8,
        title: "[Placeholder] Growth award",
        description:
            "Marked the moment where persistence, iteration, and good habits started compounding visibly.",
        icon: "Gift",
        period: "2030",
    },
];

const slideVariants = {
    enter: (dir: number) => ({
        x: dir > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (dir: number) => ({
        x: dir < 0 ? "100%" : "-100%",
        opacity: 0,
    }),
};

export default function AchievementsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const currentAchievement = achievements[currentIndex];
    const Icon = iconMap[currentAchievement.icon];

    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((current) => (current - 1 + achievements.length) % achievements.length);
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((current) => (current + 1) % achievements.length);
    };

    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto w-full max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="md:translate-x-[27px]"
                >
                    <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-mint sm:text-5xl lg:text-6xl">
                        Achievements
                    </h2>
                    <p className="mt-4 font-body text-lg leading-8 text-text-body/80 sm:text-xl">
                        A short line about milestones and recognitions.
                    </p>
                </motion.div>

                <div className="mt-10 grid items-center gap-4 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-4 md:pl-[30px]">
                    <button
                        type="button"
                        onClick={goToPrevious}
                        aria-label="Previous"
                        className="order-2 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-ui text-lg text-black transition hover:bg-white/90 hover:scale-[1.02] md:order-1 md:justify-self-end"
                    >
                        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                    </button>

                    <div className="order-1 relative flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:px-8 md:order-2 md:translate-x-0">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-purple),transparent_65%)] opacity-30"
                        />
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 0.35, ease: "easeOut" },
                                    opacity: { duration: 0.25 },
                                }}
                                className="relative z-10 w-full max-w-2xl"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-mint">
                                        <Icon aria-hidden="true" className="h-5 w-5" />
                                    </span>

                                    <h3 className="mt-6 font-ui text-xl font-semibold tracking-tight text-text-body sm:text-2xl">
                                        {currentAchievement.title}
                                    </h3>

                                    <span className="mt-2 inline-flex items-center rounded-full border border-pink/30 bg-pink/10 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-pink">
                                        {currentAchievement.period}
                                    </span>

                                    <p className="mt-4 font-body text-base leading-7 text-text-body/75 sm:text-lg">
                                        {currentAchievement.description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        type="button"
                        onClick={goToNext}
                        aria-label="Next"
                        className="order-3 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-ui text-lg text-black transition hover:bg-white/90 hover:scale-[1.02] md:justify-self-start"
                    >
                        <ChevronRight aria-hidden="true" className="h-5 w-5" />
                    </button>
                </div>

                <div className="mt-8 flex justify-center gap-2 md:translate-x-[15px]">
                    {achievements.map((achievement, index) => (
                        <span
                            key={achievement.id}
                            className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-pink" : "w-2 bg-white/20"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}