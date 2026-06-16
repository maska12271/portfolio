// src/components/sections/Experience.jsx
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import { useTranslation } from "../../hooks/useTranslation.jsx";
import { experience } from "../../data/profile.js";

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section id="experience" className="scroll-mt-24 py-20 md:py-28">
            <div className="container-wide">
                <SectionHeading
                    eyebrow={t("experience.eyebrow")}
                    title={t("experience.title")}
                    index="04"
                />

                <div className="relative max-w-3xl">
                    {/* Timeline spine */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent md:left-2" />

                    <div className="flex flex-col gap-10">
                        {experience.map((job, i) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Node */}
                                <span
                                    className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 ${
                                        job.current
                                            ? "border-accent bg-accent shadow-glow-soft"
                                            : "border-border bg-surface"
                                    } md:left-0.5`}
                                >
                                    {job.current && (
                                        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-bg" />
                                    )}
                                </span>

                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                    <h3 className="font-display text-lg font-semibold text-text">
                                        {t(`experience.${job.roleKey}`)}
                                    </h3>
                                    <span className="text-accent">·</span>
                                    <span className="font-medium text-accent">{job.company}</span>
                                    {job.current && (
                                        <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                                            {t("experience.current")}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-1 font-mono text-xs text-muted">{job.period}</p>
                                <p className="mt-3 text-sm leading-relaxed text-muted">
                                    {t(`experience.${job.descKey}`)}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {job.stack.map((s) => (
                                        <span key={s} className="chip text-[11px]">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
