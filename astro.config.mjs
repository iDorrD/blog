import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.meinscord.com",
  experimental:{
    directRenderScript: true
  },
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed"
    },
    gfm: true
  }), icon(), sitemap(), react(), tailwind({
    applyBaseStyles: false
  })],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  output: "server"
});