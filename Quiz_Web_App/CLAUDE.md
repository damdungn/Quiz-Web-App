# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A browser-based Quiz Web App, built with Vite + vanilla JavaScript (no framework). The app currently
contains only the default `npm create vite@latest` scaffold — the quiz itself has not been built yet.
Features should be added incrementally, one at a time.

## Commands

Run all commands from this directory (`Quiz_Web_App/`), not the repo root.

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

There is no test runner or linter configured in `package.json` yet. Don't assume `npm test` or
`npm run lint` exist — if tests/linting are added, update this file with the actual commands.

## Repo layout note

The git repo root is one directory above this one (`../`, i.e. `Quiz-Web-App/`). The repo-level
`README.md` lives there, not in this directory. This directory (`Quiz_Web_App/`) is the actual
Vite project and is where `npm` commands must be run.

## Architecture

- `index.html` is the entry point; it loads `src/main.js` as an ES module and mounts everything
  into `<div id="app">`.
- `src/main.js` currently renders the stock Vite template markup (hero section, docs/social links,
  a demo counter) via a template-literal `innerHTML` assignment, and wires up `src/counter.js`.
  This whole render should be replaced with the quiz UI as it's built.
- `src/counter.js` is the Vite template's demo counter — remove it once real quiz logic replaces it.
- `src/style.css` holds the scaffold's global styles/theme variables (`:root` custom properties for
  colors, fonts, shadows) — reuse or replace these tokens rather than introducing a second styling
  system.
- `src/assets/` holds static images/logos referenced via JS imports (Vite resolves these to hashed
  URLs at build time); `public/` holds files served as-is from the root (favicon, `icons.svg`
  referenced via `<use href="/icons.svg#...">`).
- No router, no state-management library, no component framework — state and rendering are plain
  JS/DOM. Keep it that way unless explicitly asked to add a dependency.

## Conventions

- Keep quiz questions data in a single source of truth (e.g. one `src/questions.js` module) —
  never duplicate question content across files.
- Separate game state/logic (score, timer, current question index) from DOM-rendering code so each
  can be reasoned about independently.
- Build one feature at a time (quiz flow → scoring → timer → results → gamification extras) and
  keep the app runnable after each step.

## Never

- Never add a new dependency or framework (React, a state library, a CSS framework, etc.) without
  asking first — this is meant to stay a vanilla Vite app.
- Never commit `node_modules` or `dist` (already covered by `.gitignore` — don't remove those entries).
- Never hardcode the same quiz content or scoring logic in more than one place.
- Never delete or break previously working functionality (timer, scoring, results) while adding a
  new feature without flagging it first.
