/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.25rem",
                md: "2rem",
                xl: "2.5rem",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1200px",
                "2xl": "1400px",
            },
        },
        extend: {
            screens: {
                "3xl": "1920px",
            },
            colors: {
                // Driven by CSS variables so light/dark swap instantly.
                bg: "rgb(var(--bg) / <alpha-value>)",
                surface: "rgb(var(--surface) / <alpha-value>)",
                "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
                border: "rgb(var(--border) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
                "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
                text: "rgb(var(--text) / <alpha-value>)",
                muted: "rgb(var(--muted) / <alpha-value>)",
            },
            fontFamily: {
                display: ['"Space Grotesk"', "system-ui", "sans-serif"],
                sans: ['"Inter"', "system-ui", "sans-serif"],
                mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
            },
            fontSize: {
                hero: ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
                "section-title": ["clamp(1.85rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
            },
            maxWidth: {
                content: "1200px",
                wide: "1400px",
            },
            boxShadow: {
                glow: "0 0 0 1px rgb(var(--accent) / 0.35), 0 8px 40px -12px rgb(var(--accent) / 0.4)",
                "glow-soft": "0 0 60px -20px rgb(var(--accent) / 0.5)",
            },
            keyframes: {
                blink: {
                    "0%, 49%": { opacity: "1" },
                    "50%, 100%": { opacity: "0" },
                },
                drift: {
                    "0%, 100%": { transform: "translate(0, 0)" },
                    "33%": { transform: "translate(30px, -40px)" },
                    "66%": { transform: "translate(-20px, 20px)" },
                },
                "drift-slow": {
                    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                    "50%": { transform: "translate(-40px, 30px) scale(1.05)" },
                },
            },
            animation: {
                blink: "blink 1.1s step-end infinite",
                drift: "drift 18s ease-in-out infinite",
                "drift-slow": "drift-slow 24s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
