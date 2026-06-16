import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// `base` must match the GitHub Pages repo name so asset URLs resolve correctly.
// If you later add a custom domain, change this to "/".
export default defineConfig({
    plugins: [react()],
    base: "/portfolio/",
});
