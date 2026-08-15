import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"

// Tailwind 3 runs through postcss.config.mjs, so no Astro integration is needed.
// https://astro.build/config
export default defineConfig({
  site: "https://giyaseddin.com/",
  integrations: [sitemap(), solidJs()],
})
