import config from "../Config.js";
import '/src/CSSFiles/Projects.scss'
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

function Projects() {
    const [openedProject, setOpenedProject] = useState({});
    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const [fadeComplete, setFadeComplete] = useState(true);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setOpenedProject(config.projects[0])
        setShowProjectDetails(true);
    }, []);

    const handleProjectClick = (project) => {
        setFadeComplete(false);
        setTimeout(() => {
            setOpenedProject(project);
            setFadeComplete(true);
        }, 500);
    };

    return(
        <div className={"projectsPage"}>
            <div>
                <div className={`exactProjectDiv ${showProjectDetails ? 'show' : ''} ${fadeComplete ? 'fade-in' : 'fade-out'}`}>
                    <div className={"exactProjectTitle"}>{openedProject.name}</div>
                    <div className={"exactProjectDescription"}>{t("projectsPage" + openedProject.description)}</div>
                    <div className={"exactProjectUsedToolsTitle"}>{t("projectsPageToolsUsed")}</div>
                    <div className={"exactProjectUsedTools"}>
                        {openedProject.toolsUsed && openedProject.toolsUsed.map((tool) => {
                            return(
                                <div className={'tool'}>{t("mySkills" + tool)}</div>
                            )
                        })}
                    </div>
                    {openedProject.projectLink && <div className={"exactProjectLink"}><a target="_blank" href={openedProject.projectLink}>{t("projectsPageViewSite")}</a></div>}
                </div>
                <div className={"allProjectsDiv"}>
                    <div className={"projectsTitle"}>{t("projectsPageProjects")}</div>
                    {config.projects.map((project) => {
                        return(
                            <div className={"projectName"} onClick={() => handleProjectClick(project)}>{project.name}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
