# uplift-blog

Next.js (App Router) + Tailwind CSS project.

## Development Server

Run `npm run dev` to start the dev server on `$PORT` (default 8443).

## Key Files

- `src/app/layout.jsx` - Root layout and metadata
- `src/app/page.jsx` - Home page, composes the section components
- `src/app/globals.css` - Global styles and Tailwind CSS import
- `src/components/` - Page section components (Navbar, HeroSection, NewsletterSection, LatestArticles, Footer)
- `public/` - Static assets (images, icons), referenced by absolute path (e.g. `/images/uplift_logo.svg`)
- `next.config.mjs` - Next.js configuration
- `package.json` - Dependencies and scripts

## Styling

This project uses **Tailwind CSS v4** for styling. Use Tailwind utility classes directly in JSX. Tailwind is loaded via the `@tailwindcss/postcss` PostCSS plugin (see `postcss.config.mjs`).

## Notes

- Components using React state or browser-only APIs (`Navbar`, `NewsletterSection`, `LatestArticles`) are marked `"use client"`.
- Path alias `@/*` resolves to `./src/*` (see `jsconfig.json`).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
