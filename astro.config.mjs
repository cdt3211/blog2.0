import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://cdt3211.top",
  integrations: [preact()],
});