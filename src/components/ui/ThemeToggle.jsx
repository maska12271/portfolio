// src/components/ui/ThemeToggle.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme.jsx";
import { useTranslation } from "../../hooks/useTranslation.jsx";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            aria-label={t("a11y.toggleTheme")}
            className="relative grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-text transition-colors hover:border-accent/50 hover:text-accent"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? "moon" : "sun"}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                    className="absolute"
                >
                    {isDark ? <Moon size={17} /> : <Sun size={17} />}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
