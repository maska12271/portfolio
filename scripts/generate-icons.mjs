// Raster icons from favicon.svg — npm run icons
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pub = (f) => resolve(root, "public", f);

const svg = await readFile(pub("favicon.svg"));

// full-bleed (iOS masks corners)
const appleSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
        <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#15151F"/><stop offset="1" stop-color="#0A0A0F"/>
            </linearGradient>
            <linearGradient id="ink" x1="45" y1="50" x2="135" y2="130" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#A39BFF"/><stop offset="1" stop-color="#7C74FF"/>
            </linearGradient>
        </defs>
        <rect width="180" height="180" fill="url(#bg)"/>
        <text x="50%" y="50%" dy="0.04em" text-anchor="middle" dominant-baseline="central"
            font-family="system-ui, sans-serif" font-size="84" font-weight="700"
            letter-spacing="-3" fill="url(#ink)">MZ</text>
    </svg>`
);

// Social share card (Open Graph / Twitter) — 1200×630, on-brand with the favicon.
const ogSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
        <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#0A0A0F"/><stop offset="1" stop-color="#15151F"/>
            </linearGradient>
            <linearGradient id="ink" x1="80" y1="80" x2="176" y2="176" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#A39BFF"/><stop offset="1" stop-color="#7C74FF"/>
            </linearGradient>
            <radialGradient id="glow" cx="0.82" cy="0.12" r="0.7">
                <stop offset="0" stop-color="#7C74FF" stop-opacity="0.38"/>
                <stop offset="1" stop-color="#7C74FF" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#bg)"/>
        <rect width="1200" height="630" fill="url(#glow)"/>
        <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="#7C74FF" stroke-opacity="0.25" stroke-width="2"/>
        <rect x="80" y="80" width="96" height="96" rx="22" fill="#15151F" stroke="#7C74FF" stroke-opacity="0.45" stroke-width="2"/>
        <text x="128" y="128" text-anchor="middle" dominant-baseline="central" dy="0.04em"
            font-family="'Space Grotesk','Segoe UI',system-ui,sans-serif" font-size="44" font-weight="700"
            letter-spacing="-2" fill="url(#ink)">MZ</text>
        <text x="82" y="330" font-family="'JetBrains Mono','Consolas',monospace" font-size="26" font-weight="500"
            letter-spacing="6" fill="#7C74FF">FRONTEND DEVELOPER</text>
        <text x="80" y="418" font-family="'Space Grotesk','Segoe UI',system-ui,sans-serif" font-size="84" font-weight="700"
            letter-spacing="-3" fill="#F0F0FF">Mihhail Zolotarjov</text>
        <text x="82" y="478" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="32" font-weight="400"
            fill="#9A9AB8">React · TypeScript · Modern web interfaces</text>
        <text x="82" y="560" font-family="'JetBrains Mono','Consolas',monospace" font-size="24" fill="#6A6A88">Tallinn, Estonia</text>
        <text x="1118" y="560" text-anchor="end" font-family="'JetBrains Mono','Consolas',monospace" font-size="24"
            fill="#6A6A88">maska12271.github.io/portfolio</text>
    </svg>`
);

const png = (src, size) => sharp(src, { density: 384 }).resize(size, size).png().toBuffer();

const [p16, p32, p48] = await Promise.all([png(svg, 16), png(svg, 32), png(svg, 48)]);

await Promise.all([
    writeFile(pub("favicon-16x16.png"), p16),
    writeFile(pub("favicon-32x32.png"), p32),
    writeFile(pub("favicon.ico"), await pngToIco([p16, p32, p48])),
    writeFile(pub("apple-touch-icon.png"), await png(appleSvg, 180)),
    writeFile(pub("og.png"), await sharp(ogSvg, { density: 144 }).resize(1200, 630).png().toBuffer()),
]);

console.log("Generated: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, og.png");
