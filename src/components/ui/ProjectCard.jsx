// src/components/ui/ProjectCard.jsx
import { motion } from "framer-motion";
import { Lock, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation.jsx";

export default function ProjectCard({ project }) {
    const { t } = useTranslation();
    const { name, tagline, description, stack, github, demo, privateProject, current } = project;

    const hasGithub = github && (typeof github === "string" ? github : github.frontend || github.backend);

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50 hover:shadow-glow md:p-7"
        >
            {/* Header row */}
            <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-text">{name}</h3>
                <div className="flex shrink-0 items-center gap-2">
                    {current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                            {t("projects.currentBadge")}
                        </span>
                    )}
                    {privateProject && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                            <Lock size={11} />
                            {t("projects.privateLabel")}
                        </span>
                    )}
                </div>
            </div>

            <p className="mt-1.5 font-mono text-xs text-accent/80">{tagline}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{description}</p>

            {/* Stack */}
            <div className="mt-5 flex flex-wrap gap-1.5">
                {stack.map((s) => (
                    <span key={s} className="chip text-[11px]">
                        {s}
                    </span>
                ))}
            </div>

            {/* Links */}
            {(hasGithub || demo) && (
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
                        >
                            <ExternalLink size={15} />
                            {t("projects.demo")}
                        </a>
                    )}
                    {typeof github === "string" && github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
                        >
                            <Github size={15} />
                            {t("projects.source")}
                        </a>
                    )}
                    {typeof github === "object" && github && (
                        <>
                            {github.frontend && (
                                <a
                                    href={github.frontend}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
                                >
                                    <Github size={15} />
                                    {t("projects.frontend")}
                                </a>
                            )}
                            {github.backend && (
                                <a
                                    href={github.backend}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
                                >
                                    <Github size={15} />
                                    {t("projects.backend")}
                                </a>
                            )}
                        </>
                    )}
                </div>
            )}
        </motion.article>
    );
}
