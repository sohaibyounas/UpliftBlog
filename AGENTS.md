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
