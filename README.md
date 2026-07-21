# everyday

## Development

Install dependencies and Git hooks:

```bash
pnpm install
```

Start the app through Portless:

```bash
pnpm dev
```

Open [https://everyday.local](https://everyday.local). To run Next.js without Portless, use `pnpm dev:app`.

## Checks

```bash
pnpm lint:check
pnpm typecheck
pnpm build
```

See [`AGENTS.md`](./AGENTS.md) and [`docs/PREFERRED_LIBRARIES.md`](./docs/PREFERRED_LIBRARIES.md) for development conventions.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
