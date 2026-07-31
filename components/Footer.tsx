import Link from "next/link";
import { ExternalLink, FolderGit, Mail } from "lucide-react";
import AchievementsSection from "./AchievementsSection";

const socialLinks = [
    { label: "GitHub", tooltip: "GitHub", href: "https://github.com/", icon: FolderGit },
    { label: "LinkedIn", tooltip: "LinkedIn", href: "https://www.linkedin.com/", icon: ExternalLink },
    {
        label: "Email",
        tooltip: "Gmail",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=byaqutabidheya@gmail.com",
        icon: Mail,
    },
];

type FooterProps = {
    variant?: "achievements" | "connect";
};

export default function Footer({ variant = "achievements" }: FooterProps) {
    return (
        <footer className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
                {variant === "achievements" ? (
                    <AchievementsSection />
                ) : (
                    <>
                        <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-pink sm:text-5xl lg:text-7xl">
                            Let&apos;s Connect
                        </h2>

                        <p className="mt-4 max-w-2xl font-body text-lg leading-8 text-text-body/80 sm:text-xl lg:text-2xl">
                            Open to internships, collaborations, and interesting conversations.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                            <Link
                                href="mailto:hello@example.com"
                                className="inline-flex w-48 items-center justify-center rounded-full bg-purple px-6 py-3 font-ui text-sm font-medium text-black transition hover:bg-purple/90 hover:scale-[1.01]"
                            >
                                Get in touch
                            </Link>
                            <Link
                                href="https://www.linkedin.com/"
                                className="inline-flex w-48 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-ui text-sm font-medium text-text-body transition hover:border-pink/60 hover:bg-white/5 hover:text-pink sm:-translate-x-[85px]"
                            >
                                Connect on LinkedIn
                            </Link>
                        </div>
                    </>
                )}

                <div className="mt-12 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:pt-8">
                    <p className="font-ui text-xs uppercase tracking-[0.24em] text-text-body/55 sm:text-sm">
                        © 2026 BYAQUTA BIDHEYA BEHERA. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <span key={social.label} className="group relative">
                                    <Link
                                        href={social.href}
                                        aria-label={social.label}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-text-body/75 transition hover:border-pink/40 hover:bg-white/5 hover:text-pink"
                                    >
                                        <Icon aria-hidden="true" className="h-4 w-4" />
                                    </Link>

                                    <span className="pointer-events-none absolute left-1/2 top-[-2.5rem] -translate-x-1/2 rounded-full border border-white/10 bg-black/90 px-3 py-1 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-text-body opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                                        {social.tooltip}
                                    </span>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
