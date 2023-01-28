# sveltekit-t3-starter

Adds the following to the project created using `npm create svelte@latest`:

- Configured for Typescript
- Tailwinds
- tRPC
- Auth.js (with Github OAuth implementation)
- VS code launcher for `npm run dev` and for executing ???.test.ts using vitest (launches current file).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
