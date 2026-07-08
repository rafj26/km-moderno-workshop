import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // TODO: reemplazar por el dominio real antes de desplegar (mejora sitemap/canonical)
  site: "https://www.chentetechcar.com",
  integrations: [
    tailwind({
      applyBaseStyles: false, // usamos nuestro propio global.css
    }),
    sitemap(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
