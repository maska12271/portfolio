// src/components/sections/Contact.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { useTranslation } from "../../hooks/useTranslation.jsx";
import { socials } from "../../data/profile.js";

export default function Contact() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(socials.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* clipboard unavailable */
        }
    };

    const links = [
        { icon: Github, label: t("contact.githubLabel"), href: socials.github },
        { icon: Linkedin, label: t("contact.linkedinLabel"), href: socials.linkedin },
    ];

    return (
        <section id="contact" className="scroll-mt-24 py-20 md:py-28">
            <div className="container-wide">
                <SectionHeading
                    eyebrow={t("contact.eyebrow")}
                    title={t("contact.title")}
                    index="06"
                />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-12"
                >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

                    <p className="max-w-xl text-lg leading-relaxed text-muted">
                        {t("contact.subtitle")}
                    </p>

                    {/* Email */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href={`mailto:${socials.email}`}
                            className="group flex min-w-0 max-w-full items-center gap-2.5 font-display text-lg font-semibold text-text transition-colors hover:text-accent sm:text-xl md:text-2xl"
                        >
                            <Mail className="shrink-0 text-accent" size={24} />
                            <span className="link-underline break-all">{socials.email}</span>
                        </a>
                        <button
                            onClick={copyEmail}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-text"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={copied ? "ok" : "copy"}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.15 }}
                                    className="inline-flex items-center gap-1.5"
                                >
                                    {copied ? (
                                        <>
                                            <Check size={14} className="text-accent" />
                                            {t("contact.copied")}
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={14} />
                                            {t("contact.copy")}
                                        </>
                                    )}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Socials */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-text transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                            >
                                <l.icon size={17} />
                                {l.label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
