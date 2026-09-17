# Personal Developer Portfolio

A production-oriented personal portfolio built as a calm, editorial technology
product rather than a résumé template.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- pnpm

## Local development

```bash
pnpm install
copy .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Or run all checks:

```bash
pnpm check
```

## Content editing

Editable portfolio content lives in `src/data`. Unknown personal information is
intentionally represented as placeholder content and tracked in `TODO.md`.
Replace it only with verified details.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical public origin, without a trailing slash |

No secrets are required by the current application.

## Deployment

The project is compatible with Vercel's standard Next.js build. Connect the Git
repository, set `NEXT_PUBLIC_SITE_URL`, and deploy using the default
`pnpm build` command.

See `AGENTS.md`, `DESIGN.md`, `TODO.md`, and `CHANGELOG.md` for the product and
development standards.
