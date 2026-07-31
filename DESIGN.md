# Design Spec

## Colors (add these to tailwind.config.ts)
- background: #0a0a0a
- mint: #c5f5d5     (used for hero name, big section titles)
- pink: #f5c5e5     (used for project headlines, CTA text)
- purple: #a78bfa   (used for year labels, primary button fill)
- text-body: #e5e5e5

## Typography
- Display font (headlines, hero name): a bold condensed sans — use "Anton" or "Archivo Expanded" from Google Fonts
- Body font (paragraphs, intro text): a humanist serif — use "Fraunces" or "Lora" from Google Fonts
- UI font (nav, buttons): a clean geometric sans — use "Inter" or "Space Grotesk"

## Layout patterns
- Hero: full-width oversized name in the display font, subtitle below in the serif font, two CTA buttons side by side (primary = purple filled pill, secondary = outlined pill)
- Timeline: vertical list, each row = year (purple) + icon + title, right-aligned, appears on scroll
- Project cards: alternating left/right layout — image on one side, big pink headline + one-line description on the other, repeat for each project
- Skills grid: responsive grid of icon + label cards
- Photo gallery: simple responsive grid of images with captions
- Footer: big centered headline, subtitle, two CTA buttons, social icons row at the very bottom

## Spacing & feel
- Generous vertical spacing between sections (at least 96px)
- Dark background throughout, no pure white sections
- Rounded pill-shaped buttons
- Sections should fade/slide up into view on scroll
