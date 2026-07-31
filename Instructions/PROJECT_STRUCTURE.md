# Project Structure & Site Map

Reference this so generated components go in the right files and the site map stays intact — don't invent new pages, routes, or reorganize folders without updating this file.

## Folder Structure
```
app/
  page.tsx              — home page, assembles all home components
  layout.tsx            — root layout, loads fonts, applies font CSS variables
  about/
    page.tsx            — about page, assembles about components
components/
  Nav.tsx
  Hero.tsx
  IntroSplit.tsx
  Timeline.tsx
  ProjectsSection.tsx
  CurrentlyLearning.tsx
  SkillsGrid.tsx
  CampusLife.tsx
  Footer.tsx
  AboutHero.tsx
  AboutCards.tsx
  StoryTimeline.tsx
  FadeIn.tsx             — reusable scroll-animation wrapper (built in Step 8)
lib/
  design-tokens.ts       — optional shared values
public/
  images/                — all photos and placeholder images live here
```

## Site Map

### Home page (`/`)
Rendered in this exact order inside `app/page.tsx`, each wrapped for consistent spacing (min 96px between sections, see STYLE_GUIDE.md):
1. **Nav** — Home / About / CV / Resume
2. **Hero** — name + tagline + two CTA buttons
3. **IntroSplit** — short bio (left) + photo (right)
4. **Timeline** — 2025 → 2030, placeholder milestones
5. **ProjectsSection** ("Select Projects") — alternating layout, placeholder projects
6. **CurrentlyLearning** — single highlighted card
7. **SkillsGrid** ("Skills & Tools") — grid of skill icons/labels
8. **CampusLife** ("Campus Life & Activities") — photo gallery
9. **Footer** ("Let's Connect") — CTA + social links

### About page (`/about`)
Rendered in this order inside `app/about/page.tsx`:
1. **AboutHero** — photo hero with "ABOUT" text overlay
2. **AboutCards** — 3 intro cards
3. **StoryTimeline** ("My Story") — placeholder years + stories, alternating layout
4. **Footer** — same component reused from home page

## Naming & Section Mapping
The site is adapted from a professional portfolio template — some sections were renamed for a student context. Keep this mapping in mind so naming stays consistent:
| Original template section | This project's version |
|---|---|
| "Select Work" | "Select Projects" |
| "Now Building" | "Currently Learning" |
| Podcast section | "Skills & Tools" |
| Community section | "Campus Life & Activities" |

## Placeholder Data Locations
Each of these components ships with placeholder data meant to be edited later — don't remove the placeholder structure, only the placeholder values, when personalizing:
- `Timeline.tsx` — `timelineData` array, years 2025–2030
- `ProjectsSection.tsx` — `projects` array
- `StoryTimeline.tsx` — `storyData` array
- `SkillsGrid.tsx` — skill/tool list
- `CampusLife.tsx` — `public/images/campus1.jpg` through `campus5.jpg` + captions

## Routing Rules
- Only two routes exist: `/` and `/about`. Don't create additional routes unless explicitly asked.
- Resume links point to a PDF uploaded to `public/`, not a separate route.
