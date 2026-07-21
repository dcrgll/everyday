# Development guidance

## Next.js

This project uses Next.js 16. Read the relevant guide in `node_modules/next/dist/docs/` before changing framework code, and follow deprecation notices.

## Quality checks

- Format and fix lint issues: `pnpm lint`
- Check formatting and lint issues: `pnpm lint:check`
- Type-check: `pnpm typecheck`
- Build: `pnpm build`
- Start through Portless: `pnpm dev`
- Start Next.js directly: `pnpm dev:app`

## Git workflow

Lefthook runs Ultracite before commits, validates conventional commit messages, and runs linting and type checking before pushes. Use `pnpm commit` for a guided conventional commit.

Use a conventional branch name such as `feat/add-calendar-filter`, `fix/date-calculation`, or `chore/update-tooling`.

## Project conventions

- Keep the `@/` import alias for files under `src/`.
- Use the existing stack before adding a dependency. See [`docs/PREFERRED_LIBRARIES.md`](./docs/PREFERRED_LIBRARIES.md).
- Keep changes focused and run the lightest relevant check.
