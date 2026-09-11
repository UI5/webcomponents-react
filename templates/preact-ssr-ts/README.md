# UI5 Web Components for React - Preact SSR + TypeScript Template

This template server-side renders [`@ui5/webcomponents-react`](https://ui5.github.io/webcomponents-react/) on top of [Preact](https://preactjs.com/), using [Vite's SSR support](https://vite.dev/guide/ssr) and Preact's official server renderer [`preact-render-to-string`](https://github.com/preactjs/preact-render-to-string).

## How to use this template

```bash
npx degit UI5/webcomponents-react/templates/preact-ssr-ts#main my-project
cd my-project
```

## Getting Started

First, install the `node_modules`:

```bash
npm install
```

Then, run the development server (Vite in middleware mode):

```bash
npm run dev
```

Build and run the production server:

```bash
npm run build
npm run preview
```

## How it works

`@ui5/webcomponents-react` is a React library. It runs on Preact through
[`preact/compat`](https://preactjs.com/guide/v10/switching-to-preact/), aliased
automatically by [`@preact/preset-vite`](https://github.com/preactjs/preset-vite).

The app is built twice:

- **`build:client`** — the browser bundle used for hydration (`src/entry-client.tsx`).
- **`build:server`** — the SSR bundle rendered in Node (`src/entry-server.tsx`).

Because the server bundle is resolved with Vite's SSR (`node`) export conditions,
`@ui5/webcomponents-base` loads its **SSR DOM shim** and `lit-html` loads its **Node
build**. This is what makes `class UI5Element extends HTMLElement` and `lit-html`
evaluate in Node without `HTMLElement is not defined` / `window is not defined` errors.

The browser bundle keeps the normal browser export conditions, so real `ResizeObserver`,
`showPopover`, etc. are left intact on the client.

> **Note:** As custom elements are only defined on the client, UI5 Web Components render
> their **outer markup** on the server and upgrade during hydration.

## Learn More

- [Vite SSR Guide](https://vite.dev/guide/ssr)
- [Preact Server-Side Rendering](https://preactjs.com/guide/v10/server-side-rendering/)
- [Preact Documentation](https://preactjs.com/)
- [UI5 Web Components Documentation](https://ui5.github.io/webcomponents/)
- [UI5 Web Components for React Documentation](https://ui5.github.io/webcomponents-react/)
