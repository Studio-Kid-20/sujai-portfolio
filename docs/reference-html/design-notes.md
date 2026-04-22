# Design System Strategy: The Luminal Canvas

## 1. Overview & Creative North Star
This design system is built upon the "Luminal Canvas" philosophy. Unlike standard portfolio templates that rely on rigid grids and boxed containers, this system treats the interface as a deep, multi-dimensional space where content floats within a pressurized environment of light and color.

The Creative North Star is **"Sophisticated Vibrancy."** We are balancing the high-energy "multicolor" request with the restraint of a Senior-level editorial layout. By using intentional asymmetry, generous whitespace (negative space), and overlapping glass surfaces, we create a portfolio that feels like a premium digital gallery rather than a resume. We break the "template" look by allowing typography to dictate the flow and using gradients as "light sources" rather than just decorative fills.

---

## 2. Colors & Surface Logic
The palette is rooted in a deep indigo foundation (`#0c0c21`), allowing vibrant accents to "glow" with physical presence.

### The "No-Line" Rule
Standard UI relies on borders to separate ideas. This system prohibits the use of 1px solid borders for sectioning. Boundaries must be defined through:
*   **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Tonal Transitions:** Using subtle `surface-variant` shifts to imply containment.
*   **Light Spillage:** Using soft gradients from `primary` to `secondary` to define the start of a new content block.

### Surface Hierarchy & Nesting
To create a "High-End" feel, treat the UI as stacked sheets of frosted glass.
*   **Base:** `background` (#0c0c21)
*   **Main Content Sections:** `surface-container-low` (#111128)
*   **Cards/Interactive Elements:** `surface-container-high` (#1d1d39)
*   **Floating Modals/Popovers:** `surface-container-highest` (#232341)

### The Glass & Gradient Rule
Floating elements should utilize **Glassmorphism**. Apply a semi-transparent `surface-variant` with a `backdrop-blur` of 12px–20px. 
*   **Signature Textures:** For main CTAs and Hero backgrounds, do not use flat colors. Use a linear gradient (45deg) moving from `primary` (#b6a0ff) to `secondary` (#ff6c95) or `tertiary` (#81ecff). This creates "visual soul"—a depth that suggests a custom-coded experience.

---

## 3. Typography
The typographic system uses a high-contrast scale to create an editorial rhythm.

*   **Display (Plus Jakarta Sans):** These are your "Visual Anchors." Use `display-lg` (3.5rem) for hero statements. The wide stance of Plus Jakarta Sans provides a tech-forward, premium feel.
*   **Headline (Plus Jakarta Sans):** Used for section titles. Pair these with `primary` color accents to draw the eye.
*   **Title & Body (Inter):** Inter is used for all functional text. Its neutral, high-legibility structure balances the expressive nature of the display faces.
*   **Labels (Manrope):** Use Manrope for metadata, chips, and small captions. Its geometric clarity ensures that even at `label-sm` (0.6875rem), the text remains crisp against dark backgrounds.

**Editorial Rule:** Always pair a `display-lg` headline with a `label-md` overline in all-caps (tracked out +10%) to create a "Magazine" look.

---

## 4. Elevation & Depth
Depth is achieved through physics-based layering rather than traditional drop shadows.

*   **Tonal Layering:** Place a `surface-container-lowest` card on a `surface-container-low` section. This "inward" depth feels more modern than "outward" shadows.
*   **Ambient Shadows:** If an element must "float" (like a primary CTA button), use a shadow tinted with `surface-tint`.
    *   *Spec:* `0px 20px 40px rgba(182, 160, 255, 0.08)` (A soft purple-tinted glow).
*   **The "Ghost Border":** If accessibility requires a container edge, use the `outline-variant` token at 15% opacity. Never use 100% opaque borders.
*   **Interpenetration:** Allow elements to overlap. A project image should slightly "break" the container of the project description, creating a sense of 3D space.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-dim`) with `on-primary` text. `xl` roundedness (1.5rem).
*   **Secondary:** Glassmorphic background (`surface-variant` at 20% opacity) with a `Ghost Border`.
*   **Tertiary:** Text-only using `tertiary` color, with a 2px underline that expands on hover.

### Cards & Lists
*   **Prohibition:** No divider lines. 
*   **Execution:** Use vertical whitespace (from the spacing scale) and `surface-container-high` backgrounds to group related items. For lists, use a 4px left-accent bar in `secondary` color for the "Active" state instead of a full background highlight.

### Chips
*   Used for tech stacks or tags. Use `surface-bright` backgrounds with `on-surface-variant` text. When hovered, the chip should transition to a full `tertiary` background with `on-tertiary` text.

### Input Fields
*   Background: `surface-container-lowest`.
*   Border: `none` by default; 1px `primary` bottom-border only on focus.
*   Focus state: A subtle `primary` outer glow (4px blur).

### Project Showcase (Custom Component)
*   Combine a `surface-container-low` container with a `backdrop-blur` overlay. Use `display-sm` for project names and high-saturation `secondary` or `orange` accents for callouts.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Align the hero text to the left, but place the supporting "Call to Action" on a slightly offset grid line to the right.
*   **Use High-Contrast Scale:** If a headline is large, make the body text significantly smaller to emphasize the hierarchy.
*   **Prioritize Readability:** Ensure all text on `surface` tiers meets WCAG AA standards using the `on-surface` and `primary` tokens.

### Don’t:
*   **Don't use "Pure Black":** Always use the deep indigo `background` (#0c0c21). Pure black (#000000) kills the "luminous" effect of the gradients.
*   **Don't Box Everything:** Avoid wrapping every section in a container with a background. Let some text sit directly on the `background` to provide "breathing room."
*   **Don't Over-Blur:** Glassmorphism is a spice, not the main course. Use it only for top-level interactive layers (Nav bars, Modals, Hover cards).