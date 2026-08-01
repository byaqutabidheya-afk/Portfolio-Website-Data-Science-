import Link from "next/link";
import AchievementsSection from "./AchievementsSection";
import WireframeGlobe from "./WireframeGlobe";

function GitHubIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function GmailIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
    );
}

const socialLinks = [
    { label: "GitHub", tooltip: "GitHub", href: "https://github.com/byaqutabidheya-afk", icon: GitHubIcon },
    { label: "LinkedIn", tooltip: "LinkedIn", href: "https://www.linkedin.com/in/byaquta", icon: LinkedInIcon },
    {
        label: "Email",
        tooltip: "Gmail",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=byaqutabidheya@gmail.com",
        icon: GmailIcon,
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
                    <div className="relative w-full flex flex-col items-center pb-64 sm:pb-72">
                        {/* Globe in background */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                            <WireframeGlobe />
                        </div>

                        {/* Content in front */}
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-pink sm:text-5xl lg:text-7xl">
                                Let&apos;s Connect
                            </h2>

                            <p className="mt-4 max-w-2xl font-body text-lg leading-8 text-text-body/80 sm:text-xl lg:text-2xl">
                                Open to internships, collaborations, and interesting conversations.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                                <Link
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=byaqutabidheya@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-48 items-center justify-center rounded-full bg-purple px-6 py-3 font-ui text-sm font-medium text-black transition hover:bg-purple/90 hover:scale-[1.01]"
                                >
                                    Get in touch
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/byaquta"
                                    className="inline-flex w-48 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-ui text-sm font-medium text-text-body transition hover:border-pink/60 hover:bg-white/5 hover:text-pink"
                                >
                                    Connect on LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>
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
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple/30 bg-purple/10 text-purple transition hover:bg-purple/20 hover:border-purple/60 hover:scale-110 active:scale-95"
                                    >
                                        <Icon className="h-4 w-4" />
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
