import Image from "next/image";
import Link from "next/link";

export default function IntroSplit() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                <div className="max-w-2xl">
                    <p className="font-body text-lg leading-8 text-text-body/85 sm:text-xl lg:text-2xl lg:leading-9">
                        Student, builder, and lifelong learner. Currently studying Computer
                        Science, exploring web development, and looking for opportunities to
                        build things that matter.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-ui text-sm font-medium text-text-body transition hover:border-pink/60 hover:bg-white/5 hover:text-pink"
                        >
                            Read more
                        </Link>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute -inset-4 rounded-[2rem] border border-white/10 bg-white/5 blur-2xl" />
                    <div className="relative rotate-[-4deg] overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                        <Image
                            src="/images/profile.jpg"
                            alt="Placeholder profile portrait"
                            width={720}
                            height={900}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
