// @ts-check
import { defineConfig } from "astro/config";

import vercelServerless from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
});
