// src/components/sections/Skills.jsx
import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { useTranslation } from "../../hooks/useTranslation.jsx";
import { skills } from "../../data/profile.js";

const GROUPS = [
    { key: "frontend", icon: Layout, items: skills.frontend },
    { key: "backend", icon: Server, items: skills.backend },
    { key: "tools", icon: Wrench, items: skills.tools },
];

export default function Skills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="scroll-mt-24 py-20 md:py-28">
            <div className="container-wide">
                <SectionHeading eyebrow={t("skills.eyebrow")} title={t("skills.title")} index="02" />

                <div className="grid gap-5 md:grid-cols-3">
                    {GROUPS.map((group, gi) => (
                        <motion.div
                            key={group.key}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: gi * 0.1 }}
                            className="rounded-2xl border border-border bg-surface p-6"
                        >
                            <div className="flex items-center gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                                    <group.icon size={20} />
                                </span>
                                <h3 className="font-display text-lg font-semibold text-text">
                                    {t(`skills.${group.key}`)}
                                </h3>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span key={item} className="chip hover:border-accent/40 hover:text-text">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
