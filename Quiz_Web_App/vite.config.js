import { defineConfig } from 'vite'

// Relative asset paths so the exact same build works from any mount
// point: a GitHub Pages project subpath
// (https://damdungn.github.io/Quiz-Web-App/), a Vercel deployment at its
// domain root, or any other static host — without branching on which
// target is building.
export default defineConfig({
  base: './',
})
