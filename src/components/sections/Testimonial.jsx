// src/components/sections/Testimonial.jsx
import { motion } from "framer-motion";
import { Quote, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { useTranslation } from "../../hooks/useTranslation.jsx";
import { testimonial } from "../../data/profile.js";

export default function Testimonial() {
    const { t } = useTranslation();

    return (
        <section id="testimonial" className="scroll-mt-24 py-20 md:py-28">
            <div className="container-wide">
                <SectionHeading
                    eyebrow={t("testimonial.eyebrow")}
                    title={t("testimonial.title")}
                    index="05"
                />

                <motion.figure
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-elevated md:p-12"
                >
                    <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-[100px]" />

                    <Quote className="mb-6 text-accent/70" size={32} />

                    <blockquote className="text-balance text-lg leading-relaxed text-text md:text-xl">
                        “{t(`testimonial.${testimonial.quoteKey}`)}”
                    </blockquote>

                    <figcaption className="mt-8 flex items-center gap-4">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border bg-surface-2 font-display text-sm font-bold text-accent">
                            {testimonial.initials}
                        </span>
                        <div>
                            <p className="font-display text-sm font-semibold text-text">
                                {testimonial.author}
                            </p>
                            <p className="text-xs text-muted">
                                {t(`testimonial.${testimonial.roleKey}`)},{" "}
                                <a
                                    href={testimonial.site}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-0.5 transition-colors hover:text-accent"
                                >
                                    {testimonial.company}
                                    <ExternalLink size={11} />
                                </a>
                            </p>
                        </div>
                    </figcaption>
                </motion.figure>
            </div>
        </section>
    );
}
