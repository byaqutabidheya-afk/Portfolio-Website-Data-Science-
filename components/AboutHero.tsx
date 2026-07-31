import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
            <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-[16/9] min-h-[420px] lg:min-h-[620px]">
                    <Image
                        src="/images/about-hero.jpg"
                        alt="About hero background"
                        fill
                        priority
                        unoptimized
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.72),rgba(10,10,10,0.18)_50%,rgba(10,10,10,0.46))]" />

                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                        <h1 className="font-display text-6xl uppercase tracking-[0.12em] text-mint sm:text-8xl lg:text-[10rem] xl:text-[12rem]">
                            ABOUT
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
