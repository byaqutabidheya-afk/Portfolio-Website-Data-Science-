export default function CodeBlocks() {
    return (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl grid gap-4 md:grid-cols-3">

                {/* Block 1 — Python */}
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                        <span className="h-3 w-3 rounded-full bg-red-500/70" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                        <span className="h-3 w-3 rounded-full bg-green-500/70" />
                        <span className="ml-2 font-ui text-xs text-text-body/40 tracking-widest uppercase">life.py</span>
                    </div>
                    <pre className="px-6 py-6 font-ui text-sm leading-7 text-text-body/80 overflow-x-auto">
                        <code>
                            <span className="text-purple">while</span>{" "}
                            <span className="text-mint">alive</span>
                            <span className="text-text-body/50">:</span>{"\n"}
                            {"    "}
                            <span className="text-pink">learn</span>
                            <span className="text-text-body/50">()</span>{"\n"}
                            {"    "}
                            <span className="text-pink">build</span>
                            <span className="text-text-body/50">()</span>{"\n"}
                            {"    "}
                            <span className="text-pink">improve</span>
                            <span className="text-text-body/50">()</span>{"\n"}
                            {"\n"}
                            <span className="text-purple">print</span>
                            <span className="text-text-body/50">(</span>
                            <span className="text-mint">&quot;Mission Complete&quot;</span>
                            <span className="text-text-body/50">)</span>
                        </code>
                    </pre>
                </div>

                {/* Block 2 — JavaScript */}
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                        <span className="h-3 w-3 rounded-full bg-red-500/70" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                        <span className="h-3 w-3 rounded-full bg-green-500/70" />
                        <span className="ml-2 font-ui text-xs text-text-body/40 tracking-widest uppercase">success.js</span>
                    </div>
                    <pre className="px-6 py-6 font-ui text-sm leading-7 text-text-body/80 overflow-x-auto">
                        <code>
                            <span className="text-purple">const</span>{" "}
                            <span className="text-mint">success</span>{" "}
                            <span className="text-text-body/50">=</span>{"\n"}
                            {"    "}
                            <span className="text-pink">consistency</span>{" "}
                            <span className="text-text-body/50">+</span>{"\n"}
                            {"    "}
                            <span className="text-pink">curiosity</span>{" "}
                            <span className="text-text-body/50">+</span>{"\n"}
                            {"    "}
                            <span className="text-pink">patience</span>{" "}
                            <span className="text-text-body/50">+</span>{"\n"}
                            {"    "}
                            <span className="text-pink">countlessBugFixes</span>
                            <span className="text-text-body/50">;</span>{"\n"}
                            {"\n"}
                            <span className="text-purple">console</span>
                            <span className="text-text-body/50">.</span>
                            <span className="text-mint">log</span>
                            <span className="text-text-body/50">(</span>
                            <span className="text-pink">success</span>
                            <span className="text-text-body/50">);</span>
                        </code>
                    </pre>
                </div>

                {/* Block 3 — Git */}
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                        <span className="h-3 w-3 rounded-full bg-red-500/70" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                        <span className="h-3 w-3 rounded-full bg-green-500/70" />
                        <span className="ml-2 font-ui text-xs text-text-body/40 tracking-widest uppercase">terminal</span>
                    </div>
                    <pre className="px-6 py-6 font-ui text-sm leading-7 text-text-body/80 overflow-x-auto">
                        <code>
                            <span className="text-mint">$</span>{" "}
                            <span className="text-text-body/80">git status</span>{"\n"}
                            {"\n"}
                            <span className="text-text-body/50">On branch: </span>
                            <span className="text-purple">life</span>{"\n"}
                            {"\n"}
                            <span className="text-text-body/50">Changes not staged</span>{"\n"}
                            <span className="text-text-body/50">for commit:</span>{"\n"}
                            {"    "}
                            <span className="text-pink">modified: </span>
                            <span className="text-text-body/80">skills</span>{"\n"}
                            {"    "}
                            <span className="text-pink">modified: </span>
                            <span className="text-text-body/80">mindset</span>{"\n"}
                            {"    "}
                            <span className="text-pink">modified: </span>
                            <span className="text-text-body/80">future</span>{"\n"}
                            {"\n"}
                            <span className="text-text-body/50">no regrets added.</span>
                        </code>
                    </pre>
                </div>

            </div>
        </section>
    );
}
