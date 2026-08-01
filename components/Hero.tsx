import Image from "next/image";
import Link from "next/link";
import {
    Database,
    GraduationCap,
    MapPin,
    Sparkles,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32 lg:pt-14">

            {/* 21:9 banner container */}
            <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_20px_40px_rgba(0,0,0,0.5)]" style={{ aspectRatio: "21/9" }}>

                {/* Banner image at 75% opacity */}
                <Image
                    src="/images/banner.jpg"
                    alt=""
                    fill
                    priority
                    unoptimized
                    className="object-cover opacity-75"
                />

                {/* Dark overlay so text stays readable */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.75),rgba(10,10,10,0.3)_50%,rgba(10,10,10,0.5))]" />

                {/* Existing decorative overlays */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
                    <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/5 md:block" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,245,213,0.08),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.08),_transparent_35%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
                </div>

                {/* Floating glass chips around the banner */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-ui text-xs font-medium text-text-body/80 backdrop-blur-md">
                        <GraduationCap aria-hidden="true" className="h-3.5 w-3.5 text-mint" />
                        CS Undergrad
                    </div>
                    <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-ui text-xs font-medium text-text-body/80 backdrop-blur-md">
                        <Database aria-hidden="true" className="h-3.5 w-3.5 text-purple" />
                        Data Science & AI/ML
                    </div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-ui text-xs font-medium text-text-body/80 backdrop-blur-md">
                        <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-pink" />
                        Bhubaneswar, IN
                    </div>
                    <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-ui text-xs font-medium text-text-body/80 backdrop-blur-md">
                        <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-mint" />
                        Open to internships/Jobs
                    </div>
                </div>

                {/* Content centered inside the banner */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4 text-center sm:gap-10">
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-[-15%] top-1/2 h-1/2 -translate-y-1/2 rounded-full bg-mint/10 blur-3xl"
                        />
                        <h1 className="font-display text-[clamp(1.25rem,4.8vw,5.25rem)] leading-none tracking-[0.03em] text-mint uppercase whitespace-nowrap text-center">
                            BYAQUTA BIDHEYA BEHERA
                        </h1>
                    </div>

                    <p className="max-w-2xl font-ui text-lg leading-8 text-text-body/85 sm:text-xl lg:text-2xl lg:leading-9">
                        Computer Science student building things and learning as I go.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                        <Link
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=byaqutabidheya@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-44 items-center justify-center rounded-full bg-purple px-6 py-3 font-ui text-sm font-medium text-black transition-all duration-200 ease hover:bg-purple/90 hover:scale-[1.01] hover:shadow-lg"
                        >
                            Get in touch
                        </Link>
                        <Link
                            href="/cv"
                            className="inline-flex w-44 items-center justify-center rounded-full border border-white/30 px-6 py-3 font-ui text-sm font-medium text-white transition-all duration-200 ease hover:border-white/50 hover:bg-white/10 hover:text-pink hover:shadow-md"
                        >
                            View my resume
                        </Link>
                    </div>
                </div>

            </div>

        </section>
    );
}
