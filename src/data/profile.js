// src/data/profile.js
// strings live in i18n

export const skills = {
    frontend: [
        "React",
        "Next.js",
        "React Router v7",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "SCSS",
        "Redux",
        "React SSR / CSR",
    ],
    backend: ["Java", "Spring Boot", "GoERP (SSR)", "Query", "REST API"],
    tools: ["Git", "Figma", "AI tools", "Claude Code", "C#", "Python"],
};

// keys point at i18n
export const experience = [
    {
        id: "erply",
        company: "Erply",
        roleKey: "exp_erply_role",
        period: "Feb 2025 — Jun 2026",
        current: false,
        descKey: "exp_erply_desc",
        stack: ["GoERP", "Go-based SSR", "JavaScript", "SQL", "Automations", "Responsive Design"],
    },
    {
        id: "build-game",
        company: "Build Game",
        roleKey: "exp_build_game_role",
        period: "Aug 2020 — May 2024",
        current: false,
        descKey: "exp_build_game_desc",
        stack: ["React", "JavaScript", "Redux", "SCSS", "REST API", "Authentication"],
    },
];

export const facts = {
    yearsKey: "fact_years_value",
    company: "Erply",
    location: "Tallinn, Estonia",
};

export const socials = {
    email: "misha.zolotarjov@gmail.com",
    github: "https://github.com/maska12271",
    linkedin: "https://www.linkedin.com/in/mihhail-zolotarjov-94886a2a9",
};

// CV in /public
export const resume = {
    file: "cv.pdf",
    downloadName: "Mihhail Zolotarjov CV.pdf",
};

// Hours OÜ recommendation
export const testimonial = {
    quoteKey: "quote",
    author: "Mihkel Männamaa",
    roleKey: "role",
    company: "Hours OÜ",
    site: "https://www.hours24.ee",
    initials: "MM",
};
