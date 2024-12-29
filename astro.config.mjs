// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
    base: "/",
    integrations: [
        tailwind(),
        vue(),
        swup({
            theme: false,
            animationClass: "transition-swup-",
            containers: ["main"],
            smoothScrolling: true,
            cache: true,
            preload: true,
            accessibility: true,
            updateHead: true,
            updateBodyClass: false,
            globalInstance: true,
        }),
    ],
});
