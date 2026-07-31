Add a decorative, non-interactive animated network/mesh background to the site — a canvas-based particle system of small dots ("nodes") connected by thin lines to their nearest neighbors, forming a triangulated web pattern. This should sit behind the page content as a subtle atmospheric layer, not as a standalone section.

REFERENCE: STYLE_GUIDE.md and TECH_STACK.md for this project's conventions — colors, spacing, dark palette. Don't introduce new colors outside what those files define; the mesh itself should be greyscale/white at low opacity, not colored.

VISUAL TARGET
- Dark background (#0a0a0a, matching the existing `background` token), with a scattered field of small circular dots
- Thin lines (roughly 1px, low opacity, greyish-white) connecting each dot to its nearest few neighbors — NOT every dot to every other dot, only near neighbors, so it reads as an organic triangulated mesh rather than a dense scribble
- Uneven density: a couple of denser "cluster" regions where nodes and connections bunch up, with sparser scattered nodes filling the rest of the canvas — not a perfectly uniform grid
- The whole pattern should fade toward the edges/bottom of its container (a gradient overlay darkening toward the bottom works well), so it reads as atmospheric background texture, not a busy foreground graphic
- Very subtle overall opacity — this sits behind real content, so it must never compete with foreground text for attention

BEHAVIOR
- Nodes should drift very slowly (slow independent random-walk movement per node, small pixel range) so the mesh feels alive without being distracting — connections should redraw each frame as node positions update
- Non-interactive: no mouse/click response needed
- Respect `prefers-reduced-motion`: render a single static frame with no drift animation if that OS setting is enabled
- Must not cause layout shift or block scrolling — it's a background layer only

TECHNICAL APPROACH
- Plain HTML5 Canvas + `requestAnimationFrame`, no external particle/animation library needed (avoid adding a new dependency like tsparticles or particles.js — this is simple enough to hand-roll and keeps the bundle light)
- Client component (`"use client"`), using `useRef` for the canvas element and `useEffect` to set up/tear down the animation loop and resize listener
- Cancel the animation frame loop and remove any resize listener on unmount, so navigating between pages doesn't leave a dangling render loop
- Canvas should resize responsively to its container (use `ResizeObserver` or a window resize listener, redrawing node positions proportionally rather than stretching)
- Where to place it: as a fixed or absolutely positioned full-bleed background layer, likely at the root layout level (`app/layout.tsx`) behind all page content, OR scoped to specific sections if that fits better visually — use your judgment based on how it looks once rendered, but keep it low-opacity and non-intrusive either way

PERFORMANCE
- Cap the number of nodes (e.g. 40–60 total) so this stays lightweight on lower-end devices — this is a decorative touch, not a data visualization
- Throttle the neighbor-connection calculation if node count or movement makes it expensive every frame

DELIVERABLES
1. A new `components/MeshBackground.tsx` (or similar name) client component
2. Wire it into the appropriate place (root layout or specific sections) so it's visible behind existing content
3. Confirm it doesn't break existing scroll animations (`FadeIn` component) or push any content down/shift layout

Ask me before changing any file outside the new background component and wherever you place it.
