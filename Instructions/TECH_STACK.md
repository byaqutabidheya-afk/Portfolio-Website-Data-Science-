# Tech Stack

Reference this file so generated code matches the actual project setup — don't suggest alternative libraries, routers, or CSS approaches.

## Framework
- **Next.js** (latest) — App Router (`app/` directory), NOT Pages Router
- **TypeScript** — all files are `.tsx` / `.ts`, not `.jsx` / `.js`
- **React Server Components** by default — only add `"use client"` to a component when it needs hooks, state, or browser APIs (e.g. framer-motion's `useInView`, `onClick` handlers)

## Styling
- **Tailwind CSS** — utility classes only, no separate `.css` files per component and no CSS-in-JS (styled-components, emotion, etc.)
- Custom design tokens (colors, fonts) are defined in `tailwind.config.ts` — always use the token names (`bg-background`, `text-mint`, `font-display`, etc.) instead of raw hex codes or arbitrary values in components
- No component libraries (no MUI, Chakra, shadcn) — everything is hand-built with Tailwind

## Animation
- **Framer Motion** (`framer-motion`) — used only for scroll-triggered fade/slide-in effects via `useInView` or `whileInView`
- Wrapped in a reusable `FadeIn` component (built in Step 8) rather than repeating animation props in every section

## Icons
- **lucide-react** — the only icon library. Reference icons by their exact export name (e.g. `GraduationCap`, `Code2`, `Briefcase`, `Users`, `Trophy`, `Rocket`)

## Fonts
- Loaded via `next/font/google`, not linked via `<link>` tags or `@import`
- Applied as CSS variables on the `<body>` tag in `app/layout.tsx`
- Three font roles (see STYLE_GUIDE.md for which font fills which role): display, body/serif, UI/sans

## Linting
- **ESLint** with the default `eslint-config-next` rules — don't introduce a different lint config

## Hosting / Deployment
- **Vercel** — zero-config deploy from GitHub, auto-redeploys on push to `main`
- No custom server, no Docker, no other hosting target

## Version Control
- Git + GitHub — standard flow, no monorepo tooling needed for this single project

## Explicitly NOT part of this stack
- No backend framework / API routes beyond what Next.js provides out of the box
- No database (this is a static/placeholder-data portfolio site, not a CMS-backed one)
- No state management library (Redux, Zustand, etc.) — component state only, no global store is needed
- No testing framework has been set up yet — don't assume Jest/Vitest/Playwright config exists
