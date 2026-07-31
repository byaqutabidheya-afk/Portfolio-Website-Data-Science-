"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "CV", href: "/cv.pdf" },
];

export default function Nav() {
    const [isMottoOpen, setIsMottoOpen] = useState(false);
    const popupTitleId = useId();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMottoOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <header className="px-4 pt-5 sm:px-6 lg:px-8">
            <nav
                aria-label="Primary"
                className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-black/80 px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur"
            >
                <button
                    type="button"
                    onClick={() => setIsMottoOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={isMottoOpen}
                    className="group inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/5 px-3 py-2 font-ui text-xs font-semibold italic tracking-[0.12em] text-mint shadow-[0_0_24px_rgba(197,245,213,0.08)] transition hover:-translate-y-0.5 hover:border-pink/60 hover:bg-pink/10 hover:text-pink hover:shadow-[0_0_28px_rgba(245,197,229,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                >
                    <Quote aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                    Sic Parvis Magna
                </button>

                <div className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium text-text-body sm:gap-4 lg:gap-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="rounded-full border border-white/10 px-4 py-2 font-ui transition hover:border-pink/60 hover:bg-white/5 hover:text-pink sm:px-5"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>

            <AnimatePresence>
                {isMottoOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMottoOpen(false)}
                    >
                        <motion.section
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={popupTitleId}
                            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-mint/30 bg-background p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.5)] sm:p-10"
                            initial={{ opacity: 0, scale: 0.9, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 16 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-mint/60" />
                            <button
                                type="button"
                                onClick={() => setIsMottoOpen(false)}
                                aria-label="Close motto popup"
                                className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-body/70 transition hover:border-pink/60 hover:bg-white/5 hover:text-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                            >
                                <X aria-hidden="true" className="h-4 w-4" />
                            </button>

                            <Quote aria-hidden="true" className="mx-auto h-8 w-8 text-pink" />
                            <p className="mt-6 font-ui text-xs font-semibold uppercase tracking-[0.24em] text-mint">
                                Sic Parvis Magna
                            </p>
                            <h2 id={popupTitleId} className="mt-4 font-body text-3xl leading-tight text-text-body sm:text-4xl">
                                Greatness from small beginnings.
                            </h2>
                        </motion.section>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
