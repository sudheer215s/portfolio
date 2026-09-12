import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://sudheer215s.pages.dev",
  output: "static",
  trailingSlash: "never",
  fonts: [
    {
      name: "IBM Plex Sans",
      cssVariable: "--font-plex-sans",
      provider: fontProviders.local(),
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/ibm-plex-sans-latin-400.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/ibm-plex-sans-latin-600.woff2"],
            weight: 600,
            style: "normal",
          },
        ],
      },
    },
    {
      name: "IBM Plex Serif",
      cssVariable: "--font-plex-serif",
      provider: fontProviders.local(),
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/ibm-plex-serif-latin-400.woff2"],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
    {
      name: "IBM Plex Mono",
      cssVariable: "--font-plex-mono",
      provider: fontProviders.local(),
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/ibm-plex-mono-latin-400.woff2"],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
  ],
});
