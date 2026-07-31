"use client";

import Image from "next/image";
import { useState } from "react";

const bioParagraphs = [
    "I am a B.Tech Computer Science student specializing in Data Science, AI, and Machine Learning. For me, tech isn't just about writing code; it is about solving problems from the ground up and understanding the mechanics of how systems work together.",
    "My technical foundation spans software and hardware. On the software side, I am deeply focused on mastering Data Structures and Algorithms in C, alongside the advanced mathematics—like differential equations and Laplace transforms—that power machine learning. On the hardware side, I am a hands-on builder. I love bridging the gap between theory and physical engineering, which led me to recently build and submit autonomous systems, including a smart vacuum and a firefighting robot, using Arduino, ultrasonic sensors, and pre-made motor driver modules.",
    "I pride myself on a relentless work ethic and resilience. I believe in putting in the focused effort required to overcome any hurdle, which helped me finish my second semester with a 9.9 CGPA despite early scheduling challenges. More than just chasing grades, I am driven by a genuine curiosity to learn and a deep desire to make the people who support me proud.",
    "Whether I am troubleshooting a circuit, debugging a complex algorithm, or exploring data sets, I bring a positive, collaborative, and dedicated mindset to everything I do. I am always eager to connect with fellow developers, tech enthusiasts, and mentors.",
];

export default function IntroSplit() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                <div className="max-w-2xl">
                    <div className="space-y-5 font-body text-lg leading-8 text-text-body/85 sm:text-xl lg:text-2xl lg:leading-9">
                        <p>{bioParagraphs[0]}</p>
                        {isExpanded && bioParagraphs.slice(1).map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={() => setIsExpanded((expanded) => !expanded)}
                            aria-expanded={isExpanded}
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-ui text-sm font-medium text-text-body transition hover:border-pink/60 hover:bg-white/5 hover:text-pink"
                        >
                            {isExpanded ? "Read less" : "Read more"}
                        </button>
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
                            unoptimized
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
