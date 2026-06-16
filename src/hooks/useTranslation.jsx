// src/hooks/useTranslation.jsx
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { translations, defaultLang } from "../i18n/index.js";

const LangContext = createContext(null);

function getInitialLang() {
    if (typeof window === "undefined") return defaultLang;
    const stored = localStorage.getItem("lang");
    if (stored && translations[stored]) return stored;
    // Match browser language if we support it (et / en / ru), else default.
    const browser = navigator.language?.slice(0, 2);
    if (browser && translations[browser]) return browser;
    return defaultLang;
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const changeLang = useCallback((code) => {
        if (!translations[code]) return;
        localStorage.setItem("lang", code);
        setLang(code);
    }, []);

    // t("projects.title") -> nested lookup with graceful fallback.
    const t = useCallback(
        (path) => {
            const keys = path.split(".");
            let node = translations[lang];
            for (const k of keys) {
                node = node?.[k];
                if (node === undefined) break;
            }
            return node === undefined ? path : node;
        },
        [lang]
    );

    const value = useMemo(() => ({ lang, changeLang, t }), [lang, changeLang, t]);

    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useTranslation() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
    return ctx;
}
