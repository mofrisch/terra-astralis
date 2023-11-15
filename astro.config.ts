import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

export default defineConfig({
  site: "https:/demo.a.stro.pictures",
  output: "server",
  integrations: [
    cloudflare({
      mode: "directory",
      functionPerRoute: true,
      runtime: { mode: "off" },
    }),
  ],
  vite: {
    experimental: {},
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist("defaults")),
        drafts: {
          nesting: true,
          customMedia: true,
        },
      },
    },
    build: {
      minify: true,
      cssMinify: "lightningcss",
    },
  },
});
