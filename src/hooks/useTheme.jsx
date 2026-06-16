// src/hooks/useTheme.jsx
import { createContext, useContext, useEffect, useState, useCallback } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    // follow system if unset
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme);
    const [hasManualPref, setHasManualPref] = useState(
        () => typeof window !== "undefined" && !!localStorage.getItem("theme")
    );

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        root.setAttribute("data-theme", theme);
    }, [theme]);

    // until manual choice
    useEffect(() => {
        if (hasManualPref) return;
        const mq = window.matchMedia("(prefers-color-scheme: light)");
        const handler = (e) => setTheme(e.matches ? "light" : "dark");
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [hasManualPref]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            localStorage.setItem("theme", next);
            setHasManualPref(true);
            return next;
        });
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
