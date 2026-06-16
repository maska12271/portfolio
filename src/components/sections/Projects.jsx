// src/components/sections/Projects.jsx
import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import { useTranslation } from "../../hooks/useTranslation.jsx";
import projects from "../../data/projects.js";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="scroll-mt-24 py-20 md:py-28">
            <div className="container-wide">
                <SectionHeading
                    eyebrow={t("projects.eyebrow")}
                    title={t("projects.title")}
                    index="03"
                />

                <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
