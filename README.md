# My Portfolio

A personal portfolio website for a Computer Science undergraduate student, showcasing skills, projects, and academic journey.
https://pfb3ds.vercel.app/

## Overview

This portfolio site is adapted from an editorial-style professional portfolio design, tailored specifically for a student context. It features placeholder projects, a 2025-2030 forward-looking timeline, and is built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (latest) - App Router with React Server Components
- **Language**: [TypeScript](https://typescriptlang.org) - all files in `.tsx`/`.ts` format
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - utility-first, no CSS-in-JS
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - scroll-triggered fade/slide effects
- **Icons**: [Lucide React](https://lucide-react.com) - for all iconography
- **Fonts**: Google Fonts loaded via `next/font/google` (Anton, Fraunces, Inter)
- **Linting**: [ESLint](https://eslint.org) with `eslint-config-next`
- **Hosting**: [Vercel](https://vercel.com) - auto-deploy from GitHub main branch

## Project Structure

```
app/
  page.tsx              — Home page (all home components)
  layout.tsx            — Root layout with fonts and CSS variables
  about/
    page.tsx            — About page (all about components)
components/
  Nav.tsx               — Navigation bar
  Hero.tsx              — Hero section with name and CTAs
  IntroSplit.tsx        — Bio + photo split
  Timeline.tsx          — 2025-2030 timeline milestones
  ProjectsSection.tsx   — Select Projects section
  CurrentlyLearning.tsx — Currently Learning section
  SkillsGrid.tsx        — Skills & Tools grid
  CampusLife.tsx        — Campus Life photo gallery
  Footer.tsx            — Footer with social links
  ... (more components)
lib/
  design-tokens.ts       — Optional shared design tokens
public/
  images/                — All photos and placeholder images
```

## Development

### Prerequisites

- Node.js (v18+)
- npm or yarn (pnpm/bun also supported)

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site during development.

### Design & Layout

This project follows a strict design system with:

- **Colors**: 5 custom tokens (background, mint, pink, purple, text-body)
- **Typography**: Three font roles (Display, Body, UI) with Google Fonts
- **Layout**: Consistent spacing (96px between sections), dark-only theme
- **Components**: Reusable patterns with scroll animations

All visual choices should reference the [STYLE_GUIDE.md](Instructions/STYLE_GUIDE.md) file to maintain consistency.

### Project Conventions

When editing this project, follow these guidelines:

1. **Every component must reference STYLE_GUIDE.md** to justify colors/fonts/spacing choices
2. **Placeholder content remains editable** as arrays of objects (not hardcoded strings)
3. **Match existing patterns** instead of introducing new ones
4. **Use TypeScript** with proper prop types
5. **Don't add dependencies** beyond those listed in TECH_STACK.md
6. **Follow the PROJECT_STRUCTURE.md** for component placement and site map order

## Site Map

### Home Page (`/`)

Rendered in this order:

1. **Nav** — Home / About / CV / Resume
2. **Hero** — Name + tagline + two CTA buttons
3. **IntroSplit** — Short bio (left) + photo (right)
4. **Timeline** — 2025 → 2030 forward-looking milestones
5. **ProjectsSection** — "Select Projects" alternating layout
6. **CurrentlyLearning** — Single highlighted learning card
7. **SkillsGrid** — "Skills & Tools" grid of icons/labels
8. **CampusLife** — "Campus Life & Activities" photo gallery
9. **Footer** — "Let's Connect" CTA + social links

### About Page (`/about`)

Rendered in this order:

1. **AboutHero** — Photo hero with "ABOUT" text overlay
2. **AboutCards** — 3 introductory cards
3. **StoryTimeline** — "My Story" placeholder years + stories
4. **Footer** — Same component as home page

## Placeholder Content

The project ships with placeholder data that should be personalized:

- `Timeline.tsx` — `timelineData` array (years 2025-2030)
- `ProjectsSection.tsx` — `projects` array
- `StoryTimeline.tsx` — `storyData` array
- `SkillsGrid.tsx` — skill/tool list
- `CampusLife.tsx` — images `campus1.jpg` through `campus5.jpg` + captions

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

1. Push your code to GitHub
2. Connect your repository to Vercel (zero-config setup)
3. Vercel will auto-redeploy on push to `main`

For detailed deployment instructions, see [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## AI Tool Instructions

When working with this project, always reference:

- **[TECH_STACK.md](Instructions/TECH_STACK.md)** — exact tech stack and conventions
- **[STYLE_GUIDE.md](Instructions/STYLE_GUIDE.md)** — visual style specifications
- **[PROJECT_STRUCTURE.md](Instructions/PROJECT_STRUCTURE.md)** — folder structure and site map

These three files form the binding project conventions. Treat them as non-negotiable requirements unless explicitly overridden.

## License

This portfolio is for personal use and demonstration purposes.
