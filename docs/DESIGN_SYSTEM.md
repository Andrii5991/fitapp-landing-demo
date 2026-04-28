# FitApp landing — design system (web)

## Brand direction

- **Category:** performance / training—warm dark UI (earthy charcoal, not cold gray), high contrast, generous corner radius to echo the mobile UI.
- **Source of truth:** Colors are tuned to **real device screenshots** (warm charcoal browns + orange/coral accents). If `fit-app-mobile/src/core/theme/colors.ts` still uses pure Zinc hex values, consider updating that file to match what ships in the app UI for full design–dev parity.

## Color tokens (CSS variables)

Defined in `src/styles/global.css` on `:root` (sampled from app screenshots):

| Token | Value (approx.) | Role |
|-------|-----------------|------|
| `--bg` | `#1C1412` | Page background — warm dark brown |
| `--bg-elevated` | `#2D221F` | Cards / panels |
| `--bg-tertiary` | `#3A302C` | Controls / hover surfaces |
| `--text` | `#FFFFFF` | Primary text |
| `--text-muted` | `#9F8D8A` | Secondary body (warm gray) |
| `--text-faint` | `#999999` | Nav, de-emphasized labels |
| `--accent` | `#EF612C` | Primary CTA, active tab, FAB |
| `--accent-bright` | `#FA8131` | Secondary highlights (e.g. small icons) |
| `--accent-hover` | `#FF7A45` | Primary button hover |
| `--accent-dim` | `rgba(239,97,44,0.14)` | Ghost fills / chips |
| `--on-accent` | `#FFFFFF` | Text on orange buttons |
| `--border` | warm white ~8% | Hairlines |
| `--glow` | orange radial | Hero vignette |

**Note:** Destructive / logout coral (`~#F14D43`) is visible in-app but not exposed as a landing token unless you add a destructive action.

## Typography

- **Display / headings:** [Syne](https://fonts.google.com/specimen/Syne) — geometric, athletic energy.
- **Body / UI:** [Inter](https://fonts.google.com/specimen/Inter) first, then [DM Sans](https://fonts.google.com/specimen/DM+Sans) — close to typical system / in-app sans stacks.

Scale (fluid where noted):

- Hero title: clamp ~2.25rem–3.75rem, tight line-height.
- Section titles: clamp ~1.5rem–2rem.
- Body: 1rem–1.0625rem, line-height ~1.6.
- Eyebrow / labels: 0.75rem, uppercase, letter-spacing.

## Spacing & layout

- **Max content width:** ~1120–1200px for text-heavy rows; full-bleed bands use padding-inline `clamp(1.25rem, 4vw, 2rem)`.
- **Section rhythm:** 5–7rem vertical padding between major bands; tighter inside feature rows.
- **Grid:** 12-column mental model; feature lists use 1-column mobile, 2-column desktop where applicable.

## Components

| Component | Behavior |
|-----------|----------|
| **Header** | Sticky, blurred backdrop; collapses to hamburger on small viewports (JS toggle). |
| **Buttons** | Primary: filled accent; secondary: ghost with border. Min height ~44px tap targets. |
| **Cards** | Rounded 1rem, border + subtle shadow; optional gradient border on hero mock. |
| **Logo strip** | Grayscale placeholders; swap for SVG logos with consistent height (~28px). |
| **Rating strip** | Stars + numeric rating + store badges (text-only until assets added). |

## Motion

- Prefer `prefers-reduced-motion`: respect user setting; keep transitions under 200ms for hovers.
- No auto-playing video in v1.

## Accessibility

- Semantic landmarks: `header`, `main`, `footer`, `nav`, `section` with headings in order.
- Focus styles: visible outline on interactive elements.
- Color contrast: aim for WCAG AA for text on `--bg` / `--bg-elevated`.

## Figma / handoff

To recreate in Figma: create **Color styles** from the tokens above, **Text styles** for Hero / H2 / Body / Caption, and **components** for Button (primary/secondary), Nav link, Feature card, and Footer column. Frame width 1440 with 1200 content container.
