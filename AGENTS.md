<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Personal Developer Portfolio

## Project goal

Build and maintain a production-ready personal developer portfolio that presents
the owner as a thoughtful product builder. The experience should feel calm,
precise, premium, and technology-led without resembling a generic developer
template.

## Technology

- Next.js App Router
- React
- TypeScript in strict mode
- Tailwind CSS
- Framer Motion
- Lucide React
- pnpm
- Vercel-compatible deployment

Prefer platform features and small, focused components over extra dependencies.

## Architecture

- `src/app`: routes, metadata, and global styles
- `src/components/layout`: navigation and global page chrome
- `src/components/sections`: page-level narrative sections
- `src/components/ui`: reusable presentation primitives
- `src/data`: editable portfolio content and typed data
- `src/lib`: shared utilities and configuration
- `public`: static assets

Pages should remain server components by default. Add `"use client"` only when
browser state, event handlers, or Framer Motion require it.

## Coding standards

- Keep TypeScript strict and avoid `any`.
- Use semantic HTML and preserve a logical heading structure.
- Keep data separate from presentation where content will change over time.
- Prefer explicit, readable components over premature abstraction.
- Avoid giant components, duplicate markup, and deep prop drilling.
- Include visible keyboard focus states and meaningful accessible names.
- External links must use `rel="noreferrer"` when opening a new tab.
- Respect `prefers-reduced-motion`.
- Do not add personal claims, employers, awards, metrics, or projects that the
  owner has not supplied.

## Design principles

- Content and typography lead; effects support them.
- Use generous whitespace, disciplined alignment, and a restrained palette.
- Motion should explain hierarchy or state, never decorate empty space.
- Mobile layouts are intentionally recomposed, not merely scaled down.
- Avoid excessive cards, gradients, glass effects, glow, particles, and
  ornamental 3D.
- Never copy a specific Apple page, component, asset, or sentence.

## Prohibited patterns

- Skill percentage bars
- Fake testimonials, employers, awards, project outcomes, or social links
- Hard-coded secrets or deployment tokens
- Autoplay video, WebGL backgrounds, or continuous animation loops
- Low-contrast text used for visual style
- Clickable elements that are not keyboard accessible
- Placeholder links using `href="#"`

## Development workflow

1. Read the current source, `DESIGN.md`, `TODO.md`, and `CHANGELOG.md`.
2. Confirm the change fits the content and design systems.
3. Implement the smallest complete version.
4. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build`.
5. Verify desktop and mobile behavior in a real browser.
6. Check keyboard focus, reduced motion, overflow, and major metadata routes.
7. Update `TODO.md` and `CHANGELOG.md` for meaningful changes.

Do not mark placeholder content as complete until the owner supplies real data.
