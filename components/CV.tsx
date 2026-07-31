import { Briefcase, Code2, GraduationCap, Mail, MapPin, Phone, Trophy } from "lucide-react";

const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "[Your University Name]",
        period: "2023 — 2027",
        details: "Specialisation in Data Science & Artificial Intelligence. Relevant coursework: Machine Learning, Data Structures & Algorithms, Database Systems, Statistics for Data Science, Deep Learning.",
    },
];

const experience = [
    {
        role: "[Placeholder] Data Science Intern",
        company: "[Company Name]",
        period: "Summer 2026",
        points: [
            "Built and evaluated ML models for [use case], improving baseline accuracy by [X]%.",
            "Cleaned and engineered features from messy real-world datasets using Python and pandas.",
            "Presented findings to a cross-functional team and documented results in a technical report.",
        ],
    },
    {
        role: "[Placeholder] Research Assistant",
        company: "[University Lab / Department]",
        period: "2025 — 2026",
        points: [
            "Assisted in [research topic] by collecting, preprocessing, and analysing datasets.",
            "Reviewed relevant literature and contributed to a section of an ongoing research paper.",
            "Collaborated with senior researchers to iterate on experimental methodology.",
        ],
    },
];

const projects = [
    {
        name: "[Placeholder] Project One",
        stack: "Python · scikit-learn · Pandas",
        description: "Built a [model type] to predict [outcome] from [dataset]. Achieved [X]% accuracy on the test set. Deployed as a lightweight web app using Streamlit.",
    },
    {
        name: "[Placeholder] Project Two",
        stack: "Next.js · TypeScript · Tailwind CSS",
        description: "Designed and built a full-stack web application that [does X]. Focused on clean UI, accessibility, and performance.",
    },
    {
        name: "[Placeholder] Project Three",
        stack: "Python · TensorFlow · NumPy",
        description: "Trained a neural network on [dataset] to [task]. Experimented with architecture choices and documented results with visualisations.",
    },
];

const skills = {
    languages: ["Python", "TypeScript", "JavaScript", "SQL", "C++"],
    frameworks: ["React", "Next.js", "Tailwind CSS", "scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    tools: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Figma", "Linux"],
};

const achievements = [
    "[Placeholder] 1st Place — [Hackathon Name] (Year)",
    "[Placeholder] Dean's List — [Semester/Year]",
    "[Placeholder] Open-source contribution to [Project Name]",
    "[Placeholder] Speaker at [Event/Conference Name]",
];

export default function CV() {
    return (
        <div className="mx-auto w-full max-w-4xl">
            {/* CV Card */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] shadow-[0_24px_90px_rgba(0,0,0,0.35)] overflow-hidden">

                {/* Header */}
                <div className="relative px-8 py-10 sm:px-12 sm:py-14 border-b border-white/10 bg-white/[0.02]">
                    {/* Subtle glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(197,245,213,0.06),transparent_70%)] pointer-events-none" />
                    <div className="relative">
                        <p className="font-ui text-xs font-semibold uppercase tracking-[0.35em] text-purple mb-3">
                            Curriculum Vitae
                        </p>
                        <h1 className="font-display text-5xl uppercase tracking-[0.06em] text-mint sm:text-6xl lg:text-7xl">
                            Byaquta Bidheya Behera
                        </h1>
                        <p className="mt-3 font-body text-lg text-text-body/70 sm:text-xl">
                            B.Tech Computer Science Student · Data Science & AI/ML
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 font-ui text-sm text-text-body/60">
                            <span className="flex items-center gap-1.5">
                                <Mail className="h-3.5 w-3.5 text-purple" />
                                byaqutabidheya@gmail.com
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin className="h-3.5 w-3.5 text-purple" />
                                [Your City, India]
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Phone className="h-3.5 w-3.5 text-purple" />
                                [Your Phone Number]
                            </span>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-10 sm:px-12 space-y-12">

                    {/* Education */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="h-5 w-5 text-mint" />
                            <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-mint">
                                Education
                            </h2>
                        </div>
                        {education.map((edu) => (
                            <div key={edu.degree} className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                    <h3 className="font-ui font-semibold text-text-body text-lg">{edu.degree}</h3>
                                    <span className="shrink-0 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-purple bg-purple/10 border border-purple/20 rounded-full px-3 py-1 self-start">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="mt-1 font-ui text-sm text-pink">{edu.institution}</p>
                                <p className="mt-3 font-body text-sm leading-7 text-text-body/65">{edu.details}</p>
                            </div>
                        ))}
                    </section>

                    {/* Experience */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="h-5 w-5 text-mint" />
                            <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-mint">
                                Experience
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {experience.map((exp) => (
                                <div key={exp.role} className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                        <h3 className="font-ui font-semibold text-text-body text-lg">{exp.role}</h3>
                                        <span className="shrink-0 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-purple bg-purple/10 border border-purple/20 rounded-full px-3 py-1 self-start">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="mt-1 font-ui text-sm text-pink">{exp.company}</p>
                                    <ul className="mt-3 space-y-1.5">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex gap-2 font-body text-sm leading-7 text-text-body/65">
                                                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-purple/60" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Code2 className="h-5 w-5 text-mint" />
                            <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-mint">
                                Projects
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <div key={project.name} className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <h3 className="font-ui font-semibold text-text-body text-lg">{project.name}</h3>
                                        <span className="font-ui text-xs tracking-[0.1em] text-purple/80 bg-purple/10 border border-purple/20 rounded-full px-3 py-1 self-start">
                                            {project.stack}
                                        </span>
                                    </div>
                                    <p className="mt-3 font-body text-sm leading-7 text-text-body/65">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Code2 className="h-5 w-5 text-mint" />
                            <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-mint">
                                Skills
                            </h2>
                        </div>
                        <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6 space-y-4">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-3">
                                    <span className="shrink-0 w-28 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-pink pt-0.5">
                                        {category}
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-ui text-xs tracking-wide text-text-body/75"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Achievements */}
                    <section className="pb-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="h-5 w-5 text-mint" />
                            <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-mint">
                                Achievements
                            </h2>
                        </div>
                        <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6 space-y-3">
                            {achievements.map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint/60" />
                                    <p className="font-body text-sm leading-7 text-text-body/70">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
