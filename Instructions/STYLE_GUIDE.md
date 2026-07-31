# Style Guide (Design Spec)

This is the single source of truth for visual style. Reference this file in every prompt ("Using STYLE_GUIDE.md, build...") so output stays visually consistent across every component and every AI tool used on this project.

## Colors
Add these as custom colors in `tailwind.config.ts`, then use them by name (`bg-background`, `text-mint`, etc.) — never raw hex codes in component files.

| Token | Hex | Used for |
|---|---|---|
| `background` | `#0a0a0a` | Page background — dark throughout, no pure white sections anywhere |
| `mint` | `#c5f5d5` | Hero name, big section titles |
| `pink` | `#f5c5e5` | Project headlines, CTA text |
| `purple` | `#a78bfa` | Year labels, primary button fill |
| `text-body` | `#e5e5e5` | Body copy |

## Typography
Three font roles, loaded via `next/font/google` and applied as CSS variables in `app/layout.tsx`.

| Role | Style | Candidates | Used for |
|---|---|---|---|
| Display | bold condensed sans | Anton / Archivo Expanded | Headlines, hero name, big section titles |
| Body | humanist serif | Fraunces / Lora | Paragraphs, intro text, descriptions |
| UI | clean geometric sans | Inter / Space Grotesk | Nav, buttons, labels, captions |

## Layout Patterns
- **Hero:** full-width oversized name in display font, subtitle below in serif font, two CTA buttons side by side (primary = purple filled pill, secondary = outlined pill)
- **Timeline:** vertical list, each row = year (purple) + icon + title, right-aligned, fades in on scroll
- **Project cards:** alternating left/right layout — image on one side, big pink headline + one-line description on the other, alternates per row
- **Skills grid:** responsive grid of icon + label cards, hover = slight lift + border color change
- **Photo gallery:** simple responsive grid of images with captions underneath
- **Footer:** big centered headline, subtitle, two CTA pill buttons, social icons row at the very bottom

## Spacing & Feel
- Generous vertical spacing between sections — **minimum 96px**
- Dark background throughout — no light/white sections, ever
- Buttons are always rounded, pill-shaped (`rounded-full`)
- Sections fade/slide up into view on scroll (via the `FadeIn` wrapper — see TECH_STACK.md)

## Component-Specific Notes
Quick reference for recurring visual details, pulled from the individual build prompts — keep new components consistent with these:
- **Nav:** horizontal pill-shaped bar, dark background, rounded corners, logo/name left, links right
- **Buttons:** primary = purple filled pill; secondary = outlined pill
- **Cards (Skills, About intro cards):** subtle border, hover = lift + border color change
- **Images:** rounded corners; profile photo specifically is rotated slightly for a candid feel

## What NOT to do
- No pure white or light-mode sections (dark-only by design intent)
- No sharp-cornered buttons — always pill-shaped
- No introducing new colors outside the 5 tokens above without updating this file first
- No cramped spacing — respect the 96px minimum between major sections
