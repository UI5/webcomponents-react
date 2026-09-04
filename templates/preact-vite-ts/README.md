# UI5 Web Components for React - Preact + Vite + TypeScript Template

This template runs [`@ui5/webcomponents-react`](https://ui5.github.io/webcomponents-react/) on top of [Preact](https://preactjs.com/) instead of React.

## How to use this template

```bash
npx degit UI5/webcomponents-react/templates/preact-vite-ts#main my-project
cd my-project
```

## Getting Started

First, install the `node_modules`:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

## How it works

`@ui5/webcomponents-react` is a React library. It runs on Preact through
[`preact/compat`](https://preactjs.com/guide/v10/switching-to-preact/). The
[`@preact/preset-vite`](https://github.com/preactjs/preset-vite) plugin
automatically aliases `react`/`react-dom` to `preact/compat` at build time,
and `tsconfig.json` mirrors those aliases via `paths` so the TypeScript types
resolve as well.

## Learn More

To learn more about Preact and UI5 Web Components for React, please visit the following resources:

- [Preact Documentation](https://preactjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [UI5 Web Components Documentation](https://ui5.github.io/webcomponents/)
- [UI5 Web Components for React Documentation](https://ui5.github.io/webcomponents-react/)
