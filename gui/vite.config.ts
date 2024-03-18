import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite"
import checker from "vite-plugin-checker"

export default defineConfig({
  plugins: [
    sveltekit(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    checker({ typescript: true, eslint: { lintCommand: "eslint ." } }),
  ],
  server: {
    port: 3020,
  },
})
