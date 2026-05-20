# TajemnikTV personal site

Personal dashboard for Grzegorz Kaczmarski / TajemnikTV.

This is a static Astro site with a dark glassy dashboard direction: identity, project cockpit, Lab Notes, interest pillars, verified links, and a small amount of controlled purple chaos.

## Tech stack

- Astro
- Tailwind CSS 4
- TypeScript
- Astro content collections
- GitHub Pages

## Local development

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` runs `astro check` before `astro build`, so it catches content/schema and TypeScript issues before producing `dist/`.

## Project structure

```text
/
├── public/
│   ├── admin/              # Static CMS/admin shell files
│   ├── images/             # Static image assets
│   └── favicon.svg
├── src/
│   ├── components/         # Astro UI components and dashboard cards
│   ├── content/lab/        # Markdown source notes for the Lab Notes collection
│   ├── data/               # Site identity, dashboard content, and highlights
│   ├── layouts/            # Shared HTML/layout wrappers
│   ├── pages/              # Static routes
│   └── styles/             # Tailwind entry and global CSS
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Content model

Most homepage copy lives in `src/data/dashboard.ts`, with shared identity and public links in `src/data/site.ts`.

Public note-style content is presented as **Lab Notes**. The Markdown collection is named `lab` and reads from `src/content/lab/`; legacy `/writing` routes only exist to redirect old links.

## Deployment

The site is built as a static Astro project and deployed to GitHub Pages. The workflow in `.github/workflows/astro.yml` handles install, build, and Pages deployment.

## Editor setup

The repository includes `tajemniktv.github.io.code-workspace` with VS Code settings for Astro, Biome, Prettier, Tailwind, and TypeScript. Open the workspace file when working on the site so extension-specific formatting and validation settings are applied consistently.
