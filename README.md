# Portfolio — Mihhail Zolotarjov

Personal portfolio built with **React + Vite + Tailwind CSS**, with Estonian / English / Russian translations, light & dark themes, and smooth Framer Motion animations. Responsive from mobile up to 2K / 4K displays.

🔗 Live: https://maska12271.github.io/portfolio

## Tech stack

- React 18 + Vite 5
- Tailwind CSS 3 (CSS-variable theming, `darkMode: "class"`)
- Framer Motion (animations, respects `prefers-reduced-motion`)
- Lucide React (icons)
- Custom lightweight i18n (no external library)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Icons & CV

- **Favicons** are generated from `public/favicon.svg`. After editing the SVG, run `npm run icons` to regenerate `favicon.ico`, the PNG fallbacks, and `apple-touch-icon.png`.
- **CV download** — the "Download CV" button in the hero serves `public/cv.pdf`. Drop your PDF there as `cv.pdf`; visitors download it as `Mihhail Zolotarjov CV.pdf`.

## Deploy to GitHub Pages

Two options are set up:

### Option A — GitHub Actions (recommended)

1. Push this repo to GitHub (branch `main` or `master`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push auto-builds and deploys via `.github/workflows/deploy.yml`.

### Option B — gh-pages CLI

```bash
npm run deploy
```

This builds and pushes `/dist` to the `gh-pages` branch. Then set **Settings → Pages → Source: Deploy from branch → gh-pages**.

## Important config

The repo name must match the Vite `base` path.

- Repo at `github.com/maska12271/portfolio` → `base: "/portfolio/"` (already set in `vite.config.js`).
- If you rename the repo, update `base` and the `homepage` field in `package.json`.
- Using a custom domain? Set `base: "/"`.

## Editing content

| What | Where |
| --- | --- |
| Projects | `src/data/projects.js` |
| Skills / experience / socials / CV / testimonial | `src/data/profile.js` |
| Text in 3 languages | `src/i18n/en.js`, `et.js`, `ru.js` |
| Colors / theme tokens | `src/index.css` (CSS variables) + `tailwind.config.js` |
| Favicon source | `public/favicon.svg` (then `npm run icons`) |

## Structure

```
src/
├── components/
│   ├── layout/    Navbar, Footer
│   ├── sections/  Hero, About, Skills, Projects, Experience, Testimonial, Contact
│   └── ui/        ThemeToggle, LangSwitcher, SectionHeading, ProjectCard
├── data/          projects.js, profile.js
├── hooks/         useTheme, useTranslation
├── i18n/          en / et / ru locale files
├── App.jsx
└── main.jsx

scripts/           generate-icons.mjs   (favicon raster generation)
public/            favicon.svg, generated icons, cv.pdf
```
