import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
            <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-[16/9] min-h-[420px] lg:min-h-[620px]">

                    {/* Base image — slightly dimmed */}
                    <Image
                        src="/images/about-hero.jpg"
                        alt="About hero background"
                        fill
                        priority
                        unoptimized
                        className="object-cover opacity-50"
                    />

                    {/* Deep vignette — fades into page bg at bottom */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.95)_0%,rgba(10,10,10,0.3)_50%,rgba(10,10,10,0.55)_100%)]" />

                    {/* Faint grid lines matching hero section */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

                    {/* Mint radial glow behind text */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_50%,rgba(197,245,213,0.08),transparent_70%)]" />

                    {/* Purple glow — bottom left */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_90%,rgba(167,139,250,0.1),transparent_65%)]" />

                    {/* Pink glow — top right */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_35%_at_90%_10%,rgba(245,197,229,0.08),transparent_60%)]" />

                    {/* Top border glow */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/30 to-transparent" />

                    {/* Bottom fade into page */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

                    {/* ABOUT text with glow */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                        <div className="relative">
                            {/* Blurred glow clone */}
                            <h1
                                aria-hidden="true"
                                className="absolute inset-0 font-display text-6xl uppercase tracking-[0.12em] text-mint sm:text-8xl lg:text-[10rem] xl:text-[12rem] blur-[40px] opacity-25 select-none"
                            >
                                ABOUT
                            </h1>
                            {/* Real text */}
                            <h1 className="relative font-display text-6xl uppercase tracking-[0.12em] text-mint sm:text-8xl lg:text-[10rem] xl:text-[12rem] underline decoration-mint decoration-2 underline-offset-4 lg:underline-offset-8">
                                ABOUT
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
