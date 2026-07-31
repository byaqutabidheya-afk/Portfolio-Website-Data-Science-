import Link from "next/link";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "CV", href: "/cv.pdf" },
    { label: "Resume", href: "/resume.pdf" },
];

export default function Nav() {
    return (
        <header className="px-4 pt-5 sm:px-6 lg:px-8">
            <nav
                aria-label="Primary"
                className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-black/80 px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur"
            >
                <Link
                    href="/"
                    className="font-ui text-sm font-medium tracking-[0.25em] text-mint uppercase transition hover:text-pink"
                >
                    Your Name
                </Link>

                <div className="flex flex-wrap items-center justify-end gap-2 text-sm font-medium text-text-body sm:gap-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="rounded-full border border-white/10 px-4 py-2 font-ui transition hover:border-pink/60 hover:bg-white/5 hover:text-pink"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
