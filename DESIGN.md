# Design System Document: The Clay & Court Tablet Experience

## 1. Overview & Creative North Star: "The Grand Slam Editorial"
This design system moves away from the "utility-first" look of sports tracking apps and towards a high-end, editorial experience. Our Creative North Star is **The Grand Slam Editorial**. It treats the tablet interface like a premium collector’s magazine—spacious, authoritative, and tactile.

To break the "template" look, we employ **Intentional Asymmetry**. We utilize oversized typography that "bleeds" off-grid, overlapping imagery of clay textures and tennis action, and a depth model based on physical layering rather than digital lines. The goal is to make the user feel the heat of the court and the prestige of the tournament through a sophisticated, non-linear layout.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated evolution of the Roland Garros identity, utilizing Material Design 3 logic to ensure tonal depth and accessibility.

### Primary Palette
- **Primary (`#a03c04`):** The "Clay Orange." Used for active states and brand moments.
- **Secondary (`#0f6d39`):** The "Forest Green." Used for prestige elements and success states.
- **Tertiary (`#416261`):** The "Slate Grey." Used for technical data and secondary navigational cues.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
- Use `surface-container-low` for large background sections.
- Use `surface-container-lowest` (pure white) for high-priority interactive cards.
- This creates a seamless, "molded" aesthetic rather than a fragmented grid.

### Glass & Gradient Signature
To move beyond "flat" design, apply the following:
- **Clay Depth:** Use a subtle radial gradient on Hero CTAs transitioning from `primary` (#a03c04) to `primary_container` (#c1531f).
- **The Glass Overlay:** Floating navigation bars or quick-action menus must use **Glassmorphism**. Apply `surface_container_lowest` at 70% opacity with a `24px` backdrop blur. This allows the vibrant court imagery to bleed through the UI, softening the interface.

---

## 3. Typography: The Modern Classic
We pair **Plus Jakarta Sans** (Display) with **Manrope** (Body) to strike a balance between high-fashion editorial and technical precision.

- **Display-LG (3.5rem):** Reserved for score tallies or legendary player names. Use `tight` letter-spacing (-0.02em).
- **Headline-MD (1.75rem):** Used for article titles and section headers. These should often overlap image containers to create depth.
- **Title-SM (1rem):** Bold, all-caps for "Live" indicators or category labels.
- **Body-LG (1rem):** High-readability Manrope for match summaries and player bios.
- **Label-MD (0.75rem):** Technical stats (e.g., "1st Serve %") using a slightly wider letter-spacing (0.05em) for a premium feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital" for this system. We use **Ambient Light** and **Tonal Stacking**.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The contrast in value creates a soft, natural lift.
- **Ambient Shadows:** For floating elements (like a score overlay), use an extra-diffused shadow: `Y: 12px, Blur: 32px, Opacity: 6%` using a tinted version of `on-surface`.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.
- **Tactile Depth:** Treat the "Clay Orange" elements as if they are slightly recessed into the green or white surfaces, mimicking the way a ball leaves a mark on the court.

---

## 5. Components

### Buttons
- **Primary:** High-radius (`full` - 9999px), using the Clay-to-Orange gradient. No border.
- **Secondary:** Green `secondary` background with `on-secondary` text. Used for "Buy Tickets" or "Watch Live."
- **Tertiary:** Text-only with a subtle `surface-variant` hover state.

### Dynamic Cards
- **Forbid Divider Lines:** Separate card content with white space from the `xl` spacing scale.
- **Imagery:** Cards should use high-quality, high-contrast imagery with a subtle `0.5rem` (DEFAULT) corner radius.
- **Asymmetric Layouts:** Scorecards should place the player names at the top left and the live score at the bottom right, using empty space to create a "breathing" layout.

### Input Fields
- **Style:** Underline-only or pill-shaped with `surface-container-high` backgrounds. 
- **States:** Focus state shifts the background to `primary-fixed-dim` rather than just changing a border color.

### Signature Component: The "Match Momentum" Chip
- A custom chip that uses a dual-gradient (Orange to Green) to show the flow of a match. This is a non-standard component that visualizes data as an art piece.

---

## 6. Do’s and Don'ts

### Do:
- **Do** use large amounts of white space. A tablet screen is a canvas; don't crowd it.
- **Do** use high-quality, "action" photography (clay dust flying, sweat, intense focus) as part of the UI background.
- **Do** use the `primary` orange sparingly to draw the eye to critical CTAs.

### Don’t:
- **Don't** use standard "Material Design" blue or grey for links. Use `secondary` (Forest Green).
- **Don't** use 1px dividers between list items. Use a 4px vertical gap and a color shift to `surface-container-low`.
- **Don't** use sharp corners. Use the `lg` (1rem) or `full` roundedness scale to maintain the "Sporty/Premium" feel.
- **Don't** use pure black (#000000). Use `on-surface` (#1a1c1c) for a softer, more sophisticated contrast.