export default function CurrentlyLearning() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto flex w-full max-w-4xl justify-center">
                <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                    <p className="font-ui text-xs font-semibold uppercase tracking-[0.35em] text-pink">
                        Now
                    </p>

                    <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.04em] text-mint sm:text-5xl lg:text-6xl">
                        Currently Learning
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-8 text-text-body/80 sm:text-xl">
                        [Placeholder] Currently deepening my skills in [topic/course/certification] —
                        more on this soon.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <span className="inline-flex items-center rounded-full border border-pink/30 bg-pink/10 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-pink">
                            In progress
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
