# Package peerDependency Map for UI5 WC Upgrades

When upgrading to version X.Y.0, update tilde ranges to `~X.Y.0` in these files.

## Root package.json (dependencies, NOT peerDeps)

Update to exact version (e.g. `2.22.0`):

```json
"dependencies": {
  "@ui5/webcomponents": "X.Y.0",
  "@ui5/webcomponents-ai": "X.Y.0",
  "@ui5/webcomponents-compat": "X.Y.0",
  "@ui5/webcomponents-fiori": "X.Y.0",
  "@ui5/webcomponents-icons": "X.Y.0"
},
"devDependencies": {
  "@ui5/webcomponents-tools": "X.Y.0"
}
```

`@ui5/webcomponents-base` is NOT a direct root dependency.

---

## packages/main/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents": "~X.Y.0",
  "@ui5/webcomponents-base": "~X.Y.0",
  "@ui5/webcomponents-fiori": "~X.Y.0",
  "@ui5/webcomponents-icons": "~X.Y.0"
}
```

## packages/base/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-base": "~X.Y.0"
}
```

## packages/ai/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-ai": "~X.Y.0"
}
```

## packages/compat/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-compat": "~X.Y.0",
  "@ui5/webcomponents-react": "~X.Y.0"
}
```

## packages/charts/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-react": "~X.Y.0",
  "@ui5/webcomponents-react-base": "~X.Y.0"
}
```

## packages/cypress-commands/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents": "~X.Y.0",
  "@ui5/webcomponents-base": "~X.Y.0"
}
```

---

## Important Notes

- `charts` and `compat` reference `@ui5/webcomponents-react` (the React wrapper), not the upstream `@ui5/webcomponents` packages directly.
- `@ui5/webcomponents-react-base` in `charts` tracks the monorepo version, which since v2.4.0 aligns with the UI5 WC minor version.
- `peerDependenciesMeta` sections do NOT need updating — they only mark deps as optional and contain no version info.
- Non-UI5 peer deps (`react`, `react-dom`, `@types/react`, `cypress`) are NOT touched during upgrades.
