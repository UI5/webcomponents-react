# Common Pitfalls During UI5 WC Upgrades

## Wrapper Generator Overwrites Custom Code

The generator blindly overwrites ALL files, including wrappers with hand-written
customizations. Step 2b in the main protocol handles restoring this code. See
`references/custom-wrapper-code.md` for the exact customizations. Affected:

- **ExpandableText** (main): deprecated compat props + custom CSS injection
- **Table, TableCell, TableColumn, TableGroupRow, TableRow** (compat): MFE scoping suffix

If you skip Step 2b, these customizations are silently lost.

---

## Renovate Partial Updates

Renovate typically creates a PR that updates ONLY:

- Root `package.json` dependencies/devDependencies
- `yarn.lock`

It does NOT:

- Update peerDependencies in sub-packages
- Run wrapper generation
- Update `config/version-info.json`
- Update ThemingParameters
- Check for new components or breaking changes

**Always complete all steps even when starting from a Renovate PR.**

---

## @ui5/webcomponents-tools Version Lag

The `-tools` package sometimes releases a few days after the main packages. If the target version doesn't exist on npm for `-tools`:

- Keep the previous version in `devDependencies`
- Note in the PR: "`@ui5/webcomponents-tools` not yet available at X.Y.0"
- Follow up when it's published

Check availability: `npm view @ui5/webcomponents-tools@X.Y.0 version`

---

## CLI Compilation Failures

If `(cd packages/cli && tsc)` fails, common causes:

1. New fields in the upstream Custom Elements Manifest (CEM) that the CLI types don't expect. Check `packages/cli/src/scripts/create-wrappers/main.ts`.
2. Breaking changes in `@ui5/webcomponents-tools` types (CEM type definitions come from this package).

Fix: Update the CLI code to handle new CEM fields, then retry.

---

## Wrapper Generator Does NOT Update Barrel Exports

`packages/cli/src/scripts/create-wrappers/main.ts` only creates individual `<Component>/index.tsx` files. It does NOT touch:

- `packages/main/src/webComponents/index.ts`
- `packages/ai/src/components/index.ts`
- `packages/compat/src/components/index.ts`

New components must be added to these barrel files manually BEFORE `yarn build`, otherwise `tsc` won't compile them into `dist/`.

---

## create-exports Requires Prior Build

`scripts/create-export-paths.ts` reads from `dist/` directories using `fs.existsSync`. New components only appear in `dist/` after a successful `yarn build`. Running `yarn create-exports` before building will miss new components.

---

## Abstract / Internal Components

Some generated components are abstract base classes that should not be exported. `scripts/create-export-paths.ts` has an `INTERNAL_COMPONENTS` set that excludes them:

Current list: `ObjectPageAnchorBar`, `Splitter`

If a new abstract component appears (check for `@abstract` in its JSDoc), add it to `INTERNAL_COMPONENTS` before running `yarn create-exports`.

---

## CEM JSON Files Are Large

Changes to `.storybook/custom-element-manifests/*.json` can be 10,000–50,000 lines. This is normal — they are regenerated from upstream CEM data by `sb:prepare-cem`. Do not be alarmed by large diffs in these files.

---

## Compat Package May Have No Changes

Not every UI5 WC release changes the compat package. If `yarn create-webcomponents-wrapper-compat` produces zero diff, that's expected.

---

## Theme Consolidation History

Past theme changes for reference:

- **v2.21.0**: Removed `sap_belize`, `sap_belize_hcb`, `sap_belize_hcw`. Consolidated `sap_horizon_dark` and `sap_horizon_hcw` CSS into `sap_horizon.css` (single selector). Renamed `sap_horizon_hcb.css` to `sap_horizon_hc.css`. Added `sap_horizon_auto` and `sap_horizon_hc_auto` enum values.
- Horizon themes have been the default since v2.0.

---

## Wrapper Generation Already Runs Formatting

`yarn create-webcomponents-wrapper` already runs:

- `prettier --write` on generated files
- `eslint --fix` on `*/index.tsx` files
- `sb:prepare-cem` for Storybook manifests

No need to re-run these separately after wrapper generation.
