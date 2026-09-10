import { defineConfig } from 'vite'

// GitHub Pages serves this as a project site
// (https://damdungn.github.io/Quiz-Web-App/), so every asset URL needs
// the repo name prefixed. Set unconditionally (rather than branching on
// `command`) so `npm run dev`/`npm run preview` are exercised against
// the same base path as production — visit them at
// http://localhost:<port>/Quiz-Web-App/.
export default defineConfig({
  base: '/Quiz-Web-App/',
})
