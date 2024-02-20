const config = {
    maxSizeOfMobileVersion: 900,
    desktopLinks: [
        {name: 'Projects', link: "/projects"},
        {name: 'About', link: "/about"},
        {name: 'Resume', link: "/resume"}
    ],
    mobileMenuLinks: [
        {name: "Projects", link: "/projects", icon: "browse"},
        {name: "About", link: "/about", icon: "info"},
        {name: "Resume", link: "/resume", icon: "description"},
        {name: "Contact", link: "/contact", icon: "contact_page"}
    ],
    projects: [
        {
            name: 'Koolbet',
            description: "KoolbetDescription",
            toolsUsed: ["React", "JavaScript", "Redux", "REST API", "HTML", "CSS/SCSS", "Responsive Design"],
            projectLink: "https://www.koolbet237.com/"
        },
        {
            name: 'Crash Crash',
            description: "CrashCrashDescription",
            toolsUsed: ["React", "JavaScript", "Redux", "REST API", "GIT", "HTML", "CSS/SCSS", "Responsive Design"],
            projectLink: "http://democc.build-game.com//"
        }
    ],
    mySkills: ["React", "JavaScript", "Redux", "REST API", "GIT", "HTML", "CSS/SCSS", "Github", "Terminal", "Responsive Design", "Figma"]
};

export default config