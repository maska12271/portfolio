// src/components/layout/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import LangSwitcher from "../ui/LangSwitcher.jsx";
import { useTranslation } from "../../hooks/useTranslation.jsx";

const SECTIONS = ["about", "skills", "projects", "experience", "testimonial", "contact"];

export default function Navbar() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(SECTIONS[0]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll spy
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
        );
        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Lock scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const navTo = (id) => {
        setOpen(false);
        // The open mobile menu locks the page with `overflow: hidden` on <body>.
        // The effect that clears that lock runs *after* this handler, so we
        // release it synchronously right here — otherwise scrollIntoView fires
        // against a still-locked body and is cancelled on mobile (desktop never
        // locks the body, which is why it worked there but not on mobile).
        document.body.style.overflow = "";
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
        <motion.header
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "border-b border-border bg-bg/80 backdrop-blur-xl"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <nav className="container-wide flex h-16 items-center justify-between md:h-[72px]">
                {/* Monogram */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="group flex items-center gap-2"
                    aria-label="Top"
                >
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface font-display text-sm font-bold text-accent transition-colors group-hover:border-accent/50">
                        MZ
                    </span>
                </button>

                {/* Desktop nav */}
                <div className="hidden items-center gap-1 md:flex">
                    {SECTIONS.map((id) => {
                        const isActive = active === id;
                        return (
                            <button
                                key={id}
                                onClick={() => navTo(id)}
                                aria-current={isActive ? "true" : undefined}
                                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                                    isActive
                                        ? "text-text"
                                        : "text-muted hover:bg-surface hover:text-text"
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute inset-0 rounded-md bg-surface"
                                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                    />
                                )}
                                <span className="relative z-10">{t(`nav.${id}`)}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <div className="hidden sm:block">
                        <LangSwitcher />
                    </div>
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen((o) => !o)}
                        aria-label={t("a11y.menu")}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-text transition-colors hover:border-accent/50 md:hidden"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="container-wide flex flex-col gap-1 py-4">
                            {SECTIONS.map((id) => (
                                <button
                                    key={id}
                                    onClick={() => navTo(id)}
                                    aria-current={active === id ? "true" : undefined}
                                    className={`rounded-lg px-3 py-3 text-left text-base transition-colors ${
                                        active === id
                                            ? "bg-surface text-accent"
                                            : "text-text hover:bg-surface"
                                    }`}
                                >
                                    {t(`nav.${id}`)}
                                </button>
                            ))}
                            <div className="mt-3 flex items-center gap-3 border-t border-border px-3 pt-4 sm:hidden">
                                <span className="text-xs text-muted">{t("a11y.switchLang")}</span>
                                <LangSwitcher />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>

        {/* Mobile backdrop */}
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setOpen(false)}
                    aria-hidden
                    className="fixed inset-0 z-40 bg-bg/60 backdrop-blur-sm md:hidden"
                />
            )}
        </AnimatePresence>
        </>
    );
}
