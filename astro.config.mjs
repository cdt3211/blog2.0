import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://cdt3211.top",
  integrations: [preact(), vue(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },  
});