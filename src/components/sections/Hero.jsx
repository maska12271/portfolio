// src/components/sections/Hero.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation.jsx";
import { resume } from "../../data/profile.js";

function useTypewriter(text, speed = 75, enabled = true) {
    const [out, setOut] = useState(enabled ? "" : text);
    const [done, setDone] = useState(!enabled);

    useEffect(() => {
        if (!enabled) {
            setOut(text);
            setDone(true);
            return;
        }
        setOut("");
        setDone(false);
        let i = 0;
        const id = setInterval(() => {
            i += 1;
            setOut(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(id);
                setDone(true);
            }
        }, speed);
        return () => clearInterval(id);
    }, [text, speed, enabled]);

    return { out, done };
}

function RoleRotator({ roles }) {
    const [i, setI] = useState(0);
    const reduce = useReducedMotion();

    useEffect(() => {
        if (reduce) return;
        const id = setInterval(() => setI((p) => (p + 1) % roles.length), 2800);
        return () => clearInterval(id);
    }, [roles.length, reduce]);

    return (
        <span className="relative inline-block align-bottom">
            <AnimatePresence mode="wait">
                <motion.span
                    key={roles[i]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block text-accent"
                >
                    {roles[i]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

export default function Hero() {
    const { t } = useTranslation();
    const reduce = useReducedMotion();
    const name = t("hero.name");
    const roles = t("hero.roles");
    const { out, done } = useTypewriter(name, 70, !reduce);
    const ref = useRef(null);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-grid opacity-60" />
                <motion.div
                    aria-hidden
                    className="absolute -left-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]"
                    animate={reduce ? {} : { x: [0, 40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    aria-hidden
                    className="absolute -right-16 bottom-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-soft/15 blur-[120px]"
                    animate={reduce ? {} : { x: [0, -30, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container-wide">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="eyebrow"
                    >
                        {t("hero.greeting")}
                    </motion.p>

                    <h1 className="mt-4 font-display text-hero font-bold text-text">
                        <span>{out}</span>
                        {!done && (
                            <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-1 animate-blink bg-accent align-middle" />
                        )}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: reduce ? 0 : 1.2, duration: 0.5 }}
                        className="mt-4 font-display text-xl font-medium text-muted md:text-2xl"
                    >
                        <RoleRotator roles={roles} />
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reduce ? 0 : 1.4, duration: 0.5 }}
                        className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted md:text-lg"
                    >
                        {t("hero.intro")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reduce ? 0 : 1.6, duration: 0.5 }}
                        className="mt-9 flex flex-wrap items-center gap-3"
                    >
                        <motion.button
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            whileHover={reduce ? {} : { y: -3, scale: 1.01 }}
                            whileTap={reduce ? {} : { scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 320, damping: 22 }}
                            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg shadow-glow-soft"
                        >
                            <span>{t("hero.ctaWork")}</span>
                            <motion.span
                                className="flex items-center"
                                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                                whileHover={reduce ? {} : { y: 2 }}
                            >
                                <ArrowDown size={16} />
                            </motion.span>
                        </motion.button>

                        <motion.button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            whileHover={reduce ? {} : { y: -3, scale: 1.01 }}
                            whileTap={reduce ? {} : { scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 320, damping: 22 }}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-text shadow-card transition-[box-shadow,border-color,color] hover:border-accent/50 hover:text-accent hover:shadow-card-hover"
                        >
                            <Mail size={16} />
                            {t("hero.ctaContact")}
                        </motion.button>

                        <motion.a
                            href={`${import.meta.env.BASE_URL}${resume.file}`}
                            download={resume.downloadName}
                            whileHover={reduce ? {} : { y: -3, scale: 1.01 }}
                            whileTap={reduce ? {} : { scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 320, damping: 22 }}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-text shadow-card transition-[box-shadow,border-color,color] hover:border-accent/50 hover:text-accent hover:shadow-card-hover"
                        >
                            <Download size={16} />
                            {t("hero.ctaResume")}
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll cue */}
            {!reduce && (
                <motion.div
                    aria-hidden
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted"
                >
                    <ArrowDown size={20} />
                </motion.div>
            )}
        </section>
    );
}
