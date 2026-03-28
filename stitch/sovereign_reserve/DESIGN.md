# Design System Strategy: The Private Ledger

## 1. Overview & Creative North Star
**Creative North Star: The Architectural Monolith**

This design system is built to evoke the permanence of a private family office and the precision of a high-capital lending firm. We are moving away from the "SaaS-template" look by adopting an **Architectural Monolith** approach. This means layouts are not built with boxes and lines, but through "carved" spaces, intentional asymmetry, and a focus on editorial weight. 

To achieve a signature high-end feel, we prioritize "Active Whitespace." Instead of simply filling the screen, we use the `20` (7rem) and `24` (8.5rem) spacing tokens to create breathing room that feels expensive. High-contrast typography scales—pairing the authoritative Noto Serif with the precision of Manrope—creates a rhythm that feels curated rather than generated.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the "New Neutral" aesthetic: deep charcoals and creams that feel warmer and more human than sterile greys.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. To separate content, you must use **Tonal Transitions**. For example, a section using `surface-container-low` should sit directly against a `surface` background. The shift in value provides a sophisticated boundary that feels integrated into the architecture of the page.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use a "Nested Depth" model:
*   **Base Layer:** `surface` (#faf9f8) - The foundational paper or stone.
*   **Secondary Layer:** `surface-container-low` (#f4f3f2) - For large secondary content areas.
*   **Interaction Layer:** `surface-container-lowest` (#ffffff) - Reserved for high-priority cards or input areas to make them "pop" against the cream background.

### The "Glass & Gradient" Rule
Main CTAs or Hero backgrounds should utilize a subtle "Soul Gradient." Instead of a flat `primary`, use a linear transition from `primary` (#071018) to `primary_container` (#1c252e) at a 135-degree angle. For floating navigation or overlays, apply **Glassmorphism**: use `surface` at 80% opacity with a `20px` backdrop-blur to maintain a sense of transparency and "capital flow."

---

## 3. Typography
Our typography is our primary brand asset. It must feel like a high-end financial prospectus.

*   **The Authority (Display & Headlines):** Use **Noto Serif**. This conveys heritage and credibility. Use `display-lg` (3.5rem) for hero statements with a negative letter-spacing of `-0.02em` to feel tighter and more custom.
*   **The Precision (Body & Labels):** Use **Manrope**. This is a modern, high-legibility sans-serif that balances the traditional weight of the serif. 
*   **The Hierarchy:** Always maintain a minimum of two scale-steps between a headline and its sub-copy to ensure an editorial, "un-crowded" look.

---

## 4. Elevation & Depth
In a "high-trust" environment, heavy shadows feel deceptive. We use physics-based layering.

*   **Tonal Layering:** To lift a card, place a `surface-container-lowest` (#ffffff) element on a `surface-container-low` (#f4f3f2) background. No shadow is required; the value shift creates the lift.
*   **Ambient Shadows:** For floating elements (like dropdowns), use an extra-diffused shadow: `0 24px 48px -12px`. Use a tinted shadow color by taking the `on_surface` color at 6% opacity.
*   **The Ghost Border:** If accessibility requires a stroke (e.g., in high-contrast modes), use `outline_variant` at 15% opacity. Never use 100% opaque borders.
*   **Data Visualization:** When rendering charts, use `secondary` (Gold) for growth and `tertiary` (Navy) for stability. Use `surface_variant` for grid lines at 50% opacity.

---

## 5. Components

### Buttons
*   **Primary:** A "Solid Slab." Background: `primary` (#071018), Text: `on_primary` (#ffffff). Shape: `sm` (0.125rem) for a sharp, architectural edge.
*   **Secondary:** The "Glass Action." Background: `transparent`, Border: `outline_variant` at 20%, Text: `primary`.
*   **Tertiary:** Text-only in `label-md` uppercase with `0.1rem` letter spacing.

### Input Fields
*   **Form Factor:** No background. Use a bottom-border only (`outline_variant` at 40%). When focused, transition the border to `secondary` (Gold) and shift the background to `surface-container-low`.
*   **Error State:** Use `error` (#ba1a1a) for the label text, but keep the input border subtle to avoid "shouting" at the user.

### Cards & Lists
*   **The "No-Divider" Rule:** Forbid 1px horizontal lines between list items. Use the `spacing scale 4` (1.4rem) to create separation through "void space."
*   **Investment Cards:** Use `surface-container-lowest` with a `md` (0.375rem) corner radius. Use `title-lg` for the amount and `label-sm` (Manrope) for the metadata.

### Data Chips
*   **Style:** Pill-shaped (`full`). Background: `secondary_container` (#fddab2) for active status, `surface_variant` for neutral. Text must be `on_secondary_container` (#785e3e) to ensure sophisticated legibility.

---

## 6. Do’s and Don’ts

### Do
*   **Use Asymmetry:** Place a `display-md` headline on the left with a `body-lg` paragraph offset to the right by `spacing 8`.
*   **Embrace the Cream:** Use the `surface` (#faf9f8) color as your primary canvas; pure white should only be used for "high-lighted" interactive components.
*   **Layer Surfaces:** Use nested containers to guide the eye from general information to specific actions.

### Don't
*   **Don't Use Rounded Corners (>0.5rem):** High-trust lending requires stability; overly rounded "bubbly" corners feel like a consumer social app, not a family office.
*   **Don't Use Pure Black:** Use `primary` (#071018) for text; it provides a deep, ink-like quality that is easier on the eyes than #000000.
*   **Don't Over-Animate:** Transitions should be "Swift and Silent"—use `200ms ease-out` for all hover states. No bouncy or elastic easing.