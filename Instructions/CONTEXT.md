# Project Context — Read This First

This is a personal portfolio website for a Computer Science undergraduate student, adapted from an editorial-style professional portfolio design for a student context (placeholder projects, a 2025–2030 forward-looking timeline instead of a work history, etc.).

When generating or editing code for this project, always follow the three reference files below. Attach or `#file:` all three in every prompt where possible:

- **TECH_STACK.md** — the exact framework, libraries, and conventions in use. Don't suggest alternatives (different CSS approach, different icon set, different router, etc.).
- **STYLE_GUIDE.md** — colors, fonts, spacing, and layout patterns. Every component's visuals should trace back to this file.
- **PROJECT_STRUCTURE.md** — file/folder locations, the site map, and section order. New components go where this file says, in the order it says.

## Ground Rules for AI-Generated Code
1. Every component should be able to state which line of STYLE_GUIDE.md justifies each color/font/spacing choice it makes.
2. Placeholder content (marked `[Placeholder]` in prompts) should stay clearly editable — arrays of objects, not hardcoded inline strings — so it's easy to swap in real content later.
3. Match existing component patterns rather than introducing a new pattern per section (e.g. if fade-in-on-scroll is used in one section, don't invent a different animation approach for the next).
4. Keep components in TypeScript with proper prop types, even for placeholder/static components.
5. Don't add dependencies beyond what's listed in TECH_STACK.md without flagging it first.

## Current Status
Update this section yourself as you progress, so any AI tool that picks up the project mid-way has current context:
- [ ] Step 1–3: Project scaffolded, folder structure created
- [ ] Step 4–5: DESIGN.md/STYLE_GUIDE.md written, fonts + colors wired into tailwind.config.ts
- [ ] Step 6: Home page components built
- [ ] Step 7: About page components built
- [ ] Step 8: Scroll animations added
- [ ] Step 9: Placeholder content replaced with real content
- [ ] Step 10–12: Tested, pushed to GitHub, deployed to Vercel
