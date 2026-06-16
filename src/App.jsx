// src/App.jsx
import { ThemeProvider } from "./hooks/useTheme.jsx";
import { LanguageProvider } from "./hooks/useTranslation.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Testimonial from "./components/sections/Testimonial.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="relative min-h-screen bg-bg">
                    <Navbar />
                    <main>
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
            </LanguageProvider>
        </ThemeProvider>
    );
}
