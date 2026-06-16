// src/components/ui/LangSwitcher.jsx
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation.jsx";
import { languages } from "../../i18n/index.js";

export default function LangSwitcher() {
    const { lang, changeLang, t } = useTranslation();

    return (
        <div
            role="group"
            aria-label={t("a11y.switchLang")}
            className="flex h-9 items-center gap-0.5 rounded-lg border border-border bg-surface p-1"
        >
            {languages.map((l) => {
                const active = l.code === lang;
                return (
                    <button
                        key={l.code}
                        onClick={() => changeLang(l.code)}
                        aria-pressed={active}
                        title={l.name}
                        className={`relative flex h-full items-center rounded-md px-2.5 font-mono text-sm font-medium transition-colors ${
                            active ? "text-bg" : "text-muted hover:text-text"
                        }`}
                    >
                        {active && (
                            <motion.span
                                layoutId="lang-pill"
                                className="absolute inset-0 rounded-md bg-accent"
                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            />
                        )}
                        <span className="relative z-10">{l.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
