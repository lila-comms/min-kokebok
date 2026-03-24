# Design System: Editorial Elegance for "Min kokebok"

## 1. Overview & Creative North Star: "The Digital Curator"
This design system rejects the "utility-first" aesthetic of standard mobile apps in favor of a high-end, editorial experience. Our Creative North Star is **The Digital Curator**. We treat every recipe not as a data entry, but as a feature article in a premium culinary magazine.

To achieve this, we move away from rigid, symmetrical grids. We embrace **intentional white space**, **overlapping imagery**, and **dramatic typographic scale**. The interface should feel like fine stationery—tactile, layered, and breathable. We prioritize "visual silence" to allow the food photography to act as the primary emotional driver.

---

## 2. Colors: Tonal Depth & Warmth
The palette is rooted in organic, earthy tones. We use a "warm-on-warm" approach to ensure the UI feels inviting rather than clinical.

### Surface Hierarchy & Nesting
We do not use drop shadows to create depth; we use **Tonal Layering**. 
- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries are created through background shifts.
- **Base Layer:** `surface` (#fbf9f6) is your canvas.
- **Sectioning:** Use `surface_container_low` (#f5f3f0) for large background sections (e.g., an "Ingredients" list container).
- **Primary Focus:** Use `surface_container_lowest` (#ffffff) for the recipe cards themselves to make them "pop" against the warmer background.

### The "Glass & Gradient" Rule
For floating headers or navigation bars, use **Glassmorphism**. Apply `surface` at 80% opacity with a `20px` backdrop-blur. This allows the vibrant colors of food photography to bleed through subtly, maintaining a connection between content layers.

### Signature Textures
Main CTAs (like "Start Cooking") should not be flat. Use a subtle linear gradient from `primary` (#765936) to `primary_container` (#b5926a) at a 45-degree angle to provide a "metallic silk" finish.

---

## 3. Typography: The Editorial Voice
Our typography creates a rhythmic contrast between the heritage of serifs and the modernism of sans-serifs.

- **Display & Headlines (Noto Serif/Playfair Display):** Used for recipe titles and section headers. High-contrast serifs convey authority and elegance. 
    - *Usage:* `display-lg` for Hero titles; `headline-md` for "Instructions."
- **Body & Labels (Work Sans/Lato):** Optimized for legibility. The wide aperture of Work Sans ensures that even long cooking steps are easy to read under kitchen lighting.
    - *Usage:* `body-md` for ingredient lists; `label-sm` for nutritional data.
- **Hierarchy Hint:** Always pair a large `display-md` title with a `label-md` (All Caps, letter-spaced +10%) subtitle to mimic magazine bylines.

---

## 4. Elevation & Depth: Atmospheric Layering
We avoid the "floating card" look of 2014-era Material Design. Our depth is physical and atmospheric.

- **The Layering Principle:** Stack `surface_container_highest` (#e4e2df) behind a `surface_container_lowest` (#ffffff) card to create a 3D effect.
- **Ambient Shadows:** For high-priority floating elements (e.g., a "Save" FAB), use a `24px` blur with 6% opacity using the `on_surface` (#1b1c1a) color. It should look like a soft glow, not a dark smudge.
- **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., input fields), use `outline_variant` (#d2c4b8) at **20% opacity**. It should be felt, not seen.

---

## 5. Components: Refined Primitives

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines. 
- **Execution:** Separate recipe steps using the `spacing-6` (2rem) scale. Use a subtle background shift to `surface_container_low` for every second instruction step to create a "zebra-stripe" effect without lines.
- **Recipe Cards:** Use `roundedness-lg` (0.5rem). Images should bleed to the top and sides, with text content sitting on a `surface_container_lowest` base.

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `roundedness-full` for a "pill" shape that contrasts against the rectangular editorial layout.
- **Tertiary (Ghost):** No border. Use `primary` text color. On hover/active, use a `primary_fixed` (#ffddb8) background at 30% opacity.

### Inputs & Selection
- **Text Fields:** Minimalist. No enclosing box; only a bottom "Ghost Border" (20% opacity `outline_variant`). When focused, the border transitions to 100% `primary`.
- **Chips:** Used for "Gluten-Free" or "Quick" tags. Use `secondary_container` (#f5dfc9) with `on_secondary_container` (#726250) text. No borders.

### Signature Component: The "Ingredients Pull-Quote"
For "Chef's Tips" or featured ingredients, use an asymmetrical layout: A `surface_container_highest` vertical bar (4px wide) to the left of the text, with the text set in `headline-sm` italicized serif.

---

## 6. Do’s and Don’ts

### Do:
- **Use Asymmetry:** Place images slightly off-center or overlapping the edge of a container to break the "app" feel.
- **Embrace White Space:** Use `spacing-12` (4rem) between major sections. If it feels like "too much" space, it’s probably just right for this system.
- **Tone-on-Tone:** Use `on_surface_variant` (#4e453c) for secondary text to maintain a soft, low-contrast sophistication.

### Don’t:
- **Don’t use Pure Black:** Never use #000000. Use `on_surface` (#1b1c1a) for all high-contrast text.
- **Don’t use 1px Dividers:** Lines "trap" the eye. Use white space or tonal shifts to let the layout breathe.
- **Don’t Over-Round:** Avoid `roundedness-xl` on everything. Keep the `lg` (0.5rem) as your maximum for cards to maintain a crisp, professional editorial edge.