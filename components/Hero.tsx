import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32 lg:pt-14">

            {/* 21:9 banner container */}
            <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_90px_rgba(0,0,0,0.35)]" style={{ aspectRatio: "21/9" }}>

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

                {/* Content centered inside the banner */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4 text-center sm:gap-10">
                    <div className="w-full flex justify-center">
                        <h1 className="font-display text-[clamp(1.25rem,4.8vw,5.25rem)] leading-none tracking-[-0.02em] text-mint uppercase whitespace-nowrap text-center">
                            BYAQUTA BIDHEYA BEHERA
                        </h1>
                    </div>

                    <p className="max-w-2xl font-body text-lg leading-8 text-text-body/85 sm:text-xl lg:text-2xl lg:leading-9">
                        Computer Science student building things and learning as I go.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                        <Link
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=byaqutabidheya@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-44 items-center justify-center rounded-full bg-purple px-6 py-3 font-ui text-sm font-medium text-black transition hover:bg-purple/90 hover:scale-[1.01]"
                        >
                            Get in touch
                        </Link>
                        <Link
                            href="/cv"
                            className="inline-flex w-44 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-ui text-sm font-medium text-text-body transition hover:border-pink/60 hover:bg-white/5 hover:text-pink"
                        >
                            View my resume
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}
