import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [vue(), react(), mdx({})],
});
