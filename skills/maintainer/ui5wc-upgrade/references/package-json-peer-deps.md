# Package peerDependency Map for UI5 WC Upgrades

When upgrading to a target version, update tilde ranges to `~TARGET_VERSION` in these files.

## Root package.json (dependencies, NOT peerDeps)

Update to exact target version (e.g. `2.25.1`):

```json
"dependencies": {
  "@ui5/webcomponents": "TARGET_VERSION",
  "@ui5/webcomponents-ai": "TARGET_VERSION",
  "@ui5/webcomponents-compat": "TARGET_VERSION",
  "@ui5/webcomponents-fiori": "TARGET_VERSION",
  "@ui5/webcomponents-icons": "TARGET_VERSION"
},
"devDependencies": {
  "@ui5/webcomponents-tools": "TARGET_VERSION"
}
```

`@ui5/webcomponents-base` is NOT a direct root dependency.

---

## packages/main/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents": "~X.Y.Z",
  "@ui5/webcomponents-base": "~X.Y.Z",
  "@ui5/webcomponents-fiori": "~X.Y.Z",
  "@ui5/webcomponents-icons": "~X.Y.Z"
}
```

## packages/base/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-base": "~X.Y.Z"
}
```

## packages/ai/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-ai": "~X.Y.Z"
}
```

## packages/compat/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-compat": "~X.Y.Z",
  "@ui5/webcomponents-react": "~X.Y.Z"
}
```

## packages/charts/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-react": "~X.Y.Z",
  "@ui5/webcomponents-react-base": "~X.Y.Z"
}
```

## packages/cypress-commands/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents": "~X.Y.Z",
  "@ui5/webcomponents-base": "~X.Y.Z"
}
```

---

## Important Notes

- `charts` and `compat` reference `@ui5/webcomponents-react` (the React wrapper), not the upstream `@ui5/webcomponents` packages directly.
- `@ui5/webcomponents-react-base` in `charts` tracks the monorepo version, which since v2.4.0 aligns with the UI5 WC minor version.
- `peerDependenciesMeta` sections do NOT need updating — they only mark deps as optional and contain no version info.
- Non-UI5 peer deps (`react`, `react-dom`, `@types/react`, `cypress`) are NOT touched during upgrades.
