import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite"

export default defineConfig({
  plugins: [
    sveltekit(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      // disablePreprocessor: true,
    }),
  ],
  server: {
    port: 3020,
  },
})
