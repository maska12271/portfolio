// src/data/projects.js
const projects = [
    {
        id: "hours",
        name: "Hours",
        tagline: "Workforce management and time tracking platform",
        description:
            "A commercial workforce management platform I have been working on for more than a year at Erply. " +
            "The product covers time tracking, scheduling, absences, HR processes, and manager/employee workflows. " +
            "I work on major product features across the platform, including dashboards for managers and workers, " +
            "an assets module with assignment and return flows plus email notifications, a built-in user chat, " +
            "announcements and custom polls/forms, and a full absence management system with flexible absence types, " +
            "request approval flows, balance calculation, and direct absence entry. " +
            "I also work on mobile design adaptation, debugging, and general product improvements. " +
            "The project is built with ERPLY's server-side rendering language GoERP, which is based on Go.",
        stack: [
            "GoERP",
            "Go-based SSR",
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Email Notifications",
        ],
        github: "",
        demo: "https://www.hours24.com/et",
        privateProject: true,
        company: "Erply",
        current: true,
    },
    {
        id: "tender",
        name: "TenderApp — Full-Stack Business Platform",
        tagline: "Ongoing full-stack project (backend + frontend)",
        description:
            "A full-stack business management system split across two repositories. The backend is a Spring Boot REST API built with Java 21, JWT authentication, role-based access control, and modules for companies, clients, products, orders, and tenders. The frontend is a React + Vite + Tailwind CSS admin dashboard for managing the same business workflows through a modern SPA interface.",
        stack: [
            "Java 21",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "JPA",
            "H2",
            "REST API",
            "React",
            "Vite",
            "Tailwind CSS",
            "React Router",
        ],
        github: {
            backend: "https://github.com/maska12271/tenderapp",
            frontend: "https://github.com/maska12271/tender-frontend",
        },
        demo: "",
        current: true,
    },
    {
        id: "koolbet",
        name: "Koolbet",
        tagline: "Sports betting and online casino platform",
        description:
            "My first large commercial frontend project in the betting and online gaming domain. I worked on account and settings pages, debugging, redesign tasks, mobile adaptation, and payout check printing for different printer setups. The project is no longer active for me, and the source code is private.",
        stack: ["React", "JavaScript", "Redux", "REST API", "HTML", "SCSS", "Responsive Design"],
        github: "",
        demo: "",
        privateProject: true,
    },
    {
        id: "crash-crash",
        name: "Crash Crash",
        tagline: "Casino-only gaming platform built from scratch",
        description:
            "A side project related to Koolbet, focused on online casino games only. I built the frontend alone from scratch, including the overall layout, game list page, and account pages such as profile data, withdrawal, balance refill, and balance history. The project is no longer active, and the code is private.",
        stack: ["React", "JavaScript", "Redux", "REST API", "Git", "HTML", "SCSS", "Responsive Design"],
        github: "",
        demo: "",
        privateProject: true,
    },
    {
        id: "portfolio",
        name: "Portfolio",
        tagline: "Personal site & experiments",
        description:
            "This portfolio itself, showcasing projects, experience, and design experiments using modern React, Vite, and Tailwind CSS, with full Estonian / English / Russian translations and light/dark theming.",
        stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/maska12271/portfolio",
        demo: "",
    },
];

export default projects;
