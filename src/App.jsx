// src/App.jsx
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import { LanguageProvider, useTranslation } from "./hooks/useTranslation.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Testimonial from "./components/sections/Testimonial.jsx";
import Contact from "./components/sections/Contact.jsx";

function SkipLink() {
    const { t } = useTranslation();
    return (
        <a
            href="#main"
            className="sr-only z-[100] rounded-lg border border-accent bg-surface px-4 py-2 text-sm font-medium text-text focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
            {t("a11y.skip")}
        </a>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                {/* reducedMotion="user" makes every framer-motion animation respect
                    the OS "reduce motion" setting without per-component checks. */}
                <MotionConfig reducedMotion="user">
                    <div className="relative min-h-screen bg-bg">
                        <SkipLink />
                        <Navbar />
                        <main id="main">
                            <Hero />
                            <About />
                            <Skills />
                            <Projects />
                            <Experience />
                            <Testimonial />
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                </MotionConfig>
            </LanguageProvider>
        </ThemeProvider>
    );
}
