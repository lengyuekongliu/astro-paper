import type { AstroIntegration } from "@swup/astro";

declare global {
    interface Window {
        // type from '@swup/astro' is incorrect
        swup: AstroIntegration;
    }
}

declare module "astro:assets" {
    export const assetsDir: URL;
}
