// Generates raster icon fallbacks from public/favicon.svg
//   - favicon.ico       (16/32/48 multi-size, for legacy browsers)
//   - favicon-16/32.png (modern PNG fallbacks)
//   - apple-touch-icon.png (180x180, full-bleed for iOS home screen)
// Run with: npm run icons
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pub = (f) => resolve(root, "public", f);

const svg = await readFile(pub("favicon.svg"));

// iOS masks the icon itself, so corners must be opaque (no transparency).
// Full-bleed square version using the same dark gradient + accent monogram.
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

const png = (src, size) => sharp(src, { density: 384 }).resize(size, size).png().toBuffer();

const [p16, p32, p48] = await Promise.all([png(svg, 16), png(svg, 32), png(svg, 48)]);

await Promise.all([
    writeFile(pub("favicon-16x16.png"), p16),
    writeFile(pub("favicon-32x32.png"), p32),
    writeFile(pub("favicon.ico"), await pngToIco([p16, p32, p48])),
    writeFile(pub("apple-touch-icon.png"), await png(appleSvg, 180)),
]);

console.log("Icons generated: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png");
