import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://cdt3211.top",
  integrations: [preact(), vue(), mdx(), react()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'aurora-x',
        dark: 'github-dark'
      }
    }
  }
});