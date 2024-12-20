// @ts-check
import { defineConfig } from "astro/config";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
    },
  }),
});
