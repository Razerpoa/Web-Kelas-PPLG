# Web-Kelas-PPLG

Next.js 16 app (bootstrapped via v0.dev) — a single-page showcase for the
X-PPLG 10th-grade Software & Games class.

## Commands

| command | runs |
|---------|------|
| `pnpm dev` | dev server at `localhost:3000` |
| `pnpm build` | production build |
| `pnpm start` | production server |
| `pnpm lint` | ESLint (Next.js built-in; no local eslint config) |

**pnpm is the canonical package manager.** Both `pnpm-lock.yaml` and
`package-lock.json` exist, but pnpm overrides in `package.json` make it the
truth.

## Structure

- `app/` — Next.js App Router (`layout.tsx`, `page.tsx`, `globals.css`).
  Single page: hero + footer.
- `components/` — UI components. `ui/button.tsx` is a shadcn/ui wrapper around
  `@base-ui/react`.
- `lib/` — `utils.ts` (cn helper: clsx + tailwind-merge), `students-data.ts`
  (static student array).
- `public/images/students/` — student profile images (uncommitted/placeholder).

Path alias `@/*` → project root (not `src/`).

## Key facts an agent may miss

- **No test framework.** No test files, runners, or scripts exist.
- **Type errors will NOT fail `next build`** — `next.config.mjs` sets
  `ignoreBuildErrors: true`. Use `npx tsc --noEmit` for explicit type checking.
- **Images are unoptimized** — `images.unoptimized: true` in next.config.
  `next/image` works but returns files as-is.
- **shadcn/ui style: `base-nova`** (not the older `default` style, not `new-york`).
  Uses `@base-ui/react` for primitives, lucide-react for icons.
- **v0.dev linked.** Commits may be pushed by v0 automatically. Every merge to
  `main` deploys to Vercel. `.vercel/` is gitignored.
- **`StudentGrid` component exists but is NOT wired into `page.tsx`** — dead
  code / planned feature.
- **Dark mode** — CSS class-based (`.dark`), also respects `prefers-color-scheme`.
- **No CI/CD config** (no `.github/` workflows, no Dockerfile).
- **`.hive/` directory** — OpenCode Hive session tracking. Leave it alone.
- **V0 sandbox artifacts** (`__v0_*`, `.snowflake/`, `.v0-trash/`) are
  gitignored — ignore them.

## Conventions

- Use `@/` absolute imports (no relative `../../`).
- Use the `cn()` utility from `@/lib/utils` for className merging.
- Tailwind CSS v4 with `@import 'tailwindcss'` syntax (no `@tailwind` directives,
  no `tailwind.config` file).
