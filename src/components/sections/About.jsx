// src/components/sections/About.jsx
import { motion } from "framer-motion";
import { MapPin, Building2, Clock, CircleDot } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { useTranslation } from "../../hooks/useTranslation.jsx";

export default function About() {
    const { t } = useTranslation();

    const facts = [
        { icon: Clock, label: t("about.factYears"), value: t("about.factYearsValue") },
        { icon: Building2, label: t("about.factCompany"), value: "Erply" },
        { icon: MapPin, label: t("about.factLocation"), value: "Tallinn, Estonia" },
        { icon: CircleDot, label: t("about.factStatus"), value: t("about.factStatusValue") },
    ];

    return (
        <section id="about" className="scroll-mt-24 py-20 md:py-28">
            <div className="container-wide">
                <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} index="01" />

                <div className="grid gap-10 md:grid-cols-5 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-3"
                    >
                        <p className="text-lg leading-relaxed text-muted md:text-xl">
                            {t("about.bio")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-2"
                    >
                        <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                            {t("about.factsTitle")}
                        </h3>
                        <ul className="grid grid-cols-2 gap-3">
                            {facts.map((f) => (
                                <li
                                    key={f.label}
                                    className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40"
                                >
                                    <f.icon size={18} className="text-accent" />
                                    <p className="mt-3 text-xs text-muted">{f.label}</p>
                                    <p className="mt-0.5 font-display text-sm font-semibold text-text">
                                        {f.value}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
