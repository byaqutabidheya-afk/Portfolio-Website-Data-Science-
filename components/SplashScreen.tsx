"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show once every 24 hours
        const key = "splashLastShown";
        const last = localStorage.getItem(key);
        const now = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (last && now - parseInt(last) < twentyFourHours) return;

        localStorage.setItem(key, String(now));
        setVisible(true);

        const timer = setTimeout(() => setVisible(false), 3200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="splash"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    {/* Radial glow behind name */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(197,245,213,0.07),transparent_70%)] pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(245,197,229,0.05),transparent_60%)] pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_35%_at_20%_80%,rgba(167,139,250,0.06),transparent_60%)] pointer-events-none" />

                    {/* Faint grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

                    {/* Name */}
                    <div className="relative flex flex-col items-center gap-5">
                        {/* Blurred glow clone */}
                        <motion.h1
                            aria-hidden="true"
                            className="absolute font-display text-[clamp(2rem,7vw,6rem)] uppercase tracking-[-0.01em] text-mint blur-[40px] opacity-0 select-none pointer-events-none"
                            animate={{ opacity: [0, 0.3, 0.3, 0] }}
                            transition={{ duration: 3, times: [0, 0.2, 0.75, 1], ease: "easeInOut" }}
                        >
                            BYAQUTA BIDHEYA BEHERA
                        </motion.h1>

                        {/* Main name — letters stagger in */}
                        <motion.h1
                            className="font-display text-[clamp(2rem,7vw,6rem)] uppercase tracking-[-0.01em] text-mint"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        >
                            BYAQUTA BIDHEYA BEHERA
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            className="font-body text-base text-text-body/60 tracking-[0.15em] sm:text-lg"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        >
                            Building data driven intelligent solutions.
                        </motion.p>

                        {/* Animated underline */}
                        <motion.div
                            className="h-px bg-gradient-to-r from-transparent via-mint to-transparent"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                        />

                        {/* Loading dots */}
                        <motion.div
                            className="flex gap-1.5 mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.span
                                    key={i}
                                    className="h-1.5 w-1.5 rounded-full bg-purple"
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Bottom motto */}
                    <motion.p
                        className="absolute bottom-10 font-ui text-xs font-semibold italic tracking-[0.2em] text-mint/40 uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                    >
                        Sic Parvis Magna
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
