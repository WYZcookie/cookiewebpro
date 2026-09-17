# Design System

Last updated: 2026-09-17

## Direction

The portfolio should feel like a focused digital product: editorial in rhythm,
technical in precision, and quiet in presentation. The visual language is
Apple-inspired in its discipline, not in copied layouts or assets.

The core sequence is:

1. Establish a clear product-minded developer identity.
2. Explain the working philosophy.
3. Present selected work as case-study material.
4. Show the technology used to build the experience.
5. Give a truthful view of the current direction.
6. End with one simple contact decision.

## Color system

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#f4f4f1` | Main page background |
| Surface | `#fbfbf8` | Elevated editorial surfaces |
| Ink | `#11110f` | Primary text |
| Muted | `#65655f` | Supporting copy |
| Faint | `#92928a` | Metadata and labels |
| Line | `rgba(17,17,15,.12)` | Borders and rules |
| Accent | `#315efb` | Focus, links, active details |
| Accent soft | `#dfe6ff` | Subtle accent fields |
| Dark surface | `#151514` | Project media and footer |

The palette is intentionally near-monochrome. Accent blue appears only where
attention or interactivity needs explanation. Dark mode is not included in the
first release; the light art direction is deliberate rather than automatic.

## Typography

- Display: native UI sans stack with tight tracking and balanced wrapping.
- Body: native UI sans stack for zero font-network dependency and stable layout.
- Mono: native monospace stack for labels, indexes, and technical metadata.
- Display scale uses `clamp()` to interpolate instead of breakpoint jumps.
- Body copy targets 65–72 characters per line.

Hierarchy:

- Hero: `clamp(3.8rem, 10vw, 9.5rem)`
- Section title: `clamp(2.5rem, 6vw, 5.75rem)`
- Feature title: `clamp(1.75rem, 3vw, 3rem)`
- Body large: `clamp(1.1rem, 1.7vw, 1.45rem)`
- Body: `1rem`
- Labels: `0.72rem`, uppercase, mono, expanded tracking

## Spacing

The base unit is 4px. Common intervals:

- `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`
- Desktop section padding: `clamp(6rem, 12vw, 11rem)`
- Mobile section padding: `5.5rem`
- Page gutter: `clamp(1.25rem, 4vw, 4rem)`
- Content max width: `90rem`

Large vertical pauses are part of the narrative, not wasted space.

## Radius

- Small controls: `10px`
- Buttons: pill radius
- Editorial media: `24px` desktop, `18px` mobile
- Large section shells: `32px` only when the surface requires containment

Rounded rectangles are used selectively. Most information is organized by
alignment and rules rather than card containers.

## Shadows

Shadows are soft and structural:

- Floating navigation: low-opacity, large-blur shadow
- Project media: subtle dark ambient shadow
- Buttons: no default shadow; use tone and border

Avoid colored glows and high-contrast drop shadows.

## Motion

Motion curve: `[0.22, 1, 0.36, 1]`

- Fast state change: `160–220ms`
- Hover or control transition: `240–320ms`
- Section reveal: `650–900ms`
- Navigation entrance: `500ms`

Patterns:

- Content enters with opacity and a short vertical translation.
- Groups stagger lightly; reading order remains clear without animation.
- Project media moves only in response to hover or scroll state.
- Navigation hides on intentional downward scrolling and returns on upward
  scrolling.
- `prefers-reduced-motion` disables transforms, stagger, and smooth scrolling.

No infinite ornamental motion is permitted.

## Breakpoints

The implementation uses content-driven breakpoints aligned with Tailwind:

- Mobile: `< 640px`
- Large mobile / tablet: `640–767px`
- Tablet / small laptop: `768–1023px`
- Desktop: `1024–1439px`
- Wide desktop: `>= 1440px`

The design is checked at 390×844, 768×1024, 1280×720, 1440×900, and
1920×1080.

## Layout

- A 12-column mental model guides desktop alignment.
- Section labels occupy a narrow rail when space permits.
- Primary text aligns to a consistent editorial column.
- Hero fills the opening viewport without forcing every device to exactly
  `100vh`; `svh` and minimum dimensions prevent clipping.
- Project stories alternate emphasis without alternating arbitrary decoration.
- Mobile collapses to one column and moves metadata above content.

## Components

### Navigation

Fixed, compact, and translucent only enough to separate it from content. It
contains the identity, key anchors, and a direct contact action. Mobile uses a
full-height menu with large targets and a clear close state.

### Buttons

One primary dark action and one quiet text action. Every interactive state has a
visible hover and focus treatment.

### Section heading

Combines a mono index/label with a large editorial heading and optional
supporting sentence.

### Project story

Uses a large custom visual, concise problem framing, technology list, truthful
status, and links only when a real destination exists. Placeholder entries are
explicitly marked and never imitate completed client work.

### Stack list

Technology appears as text and grouped capability, never percentage bars.

### Timeline / direction

Uses rules and typographic hierarchy. Unknown history remains a content task
rather than invented copy.

## Interaction principles

- Links communicate destination through copy, icon, or context.
- Disabled placeholder actions are non-interactive text, not fake links.
- Hover enhancement is optional; the base state remains complete on touch.
- Focus rings use accent blue with sufficient contrast.
- Scroll targets account for the fixed navigation.
- Touch targets are at least 44×44px.
- The page remains readable and usable when JavaScript or motion is reduced.
