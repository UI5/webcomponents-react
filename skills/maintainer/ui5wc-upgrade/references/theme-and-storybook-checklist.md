# Theme Change Checklist

When UI5 Web Components adds, removes, or renames themes, ALL of the following locations must be updated consistently.

## 1. Theme CSS Files

**Location:** `packages/main/src/themes/`

Each theme has:

- `<theme_name>.css` — CSS custom properties scoped by `[data-sap-theme]` selector
- `<theme_name>.css.ts` — TypeScript module for the build system

Current files (as of 2.21.0):

- `base.css` / `base.css.ts` (always present)
- `sap_fiori_3.css` / `.css.ts`
- `sap_fiori_3_dark.css` / `.css.ts`
- `sap_fiori_3_hcb.css` / `.css.ts`
- `sap_fiori_3_hcw.css` / `.css.ts`
- `sap_horizon.css` / `.css.ts`
- `sap_horizon_hc.css` / `.css.ts`
- `CustomVariables.ts` (always present, not a theme file)

Action: Add files for new themes, remove files for deleted themes. Note that some theme enum values (like `sap_horizon_dark`) may not have their own CSS file if they were consolidated into another file's selector.

---

## 2. ThemeProvider CSS Imports

**Location:** `packages/main/src/components/ThemeProvider/ThemeProvider.css`

This file imports all theme CSS files. Must exactly match the set of `.css` files from the themes directory (excluding `.css.ts` and `CustomVariables.ts`).

Current:

```css
@import './Sizes.css';
@import '../../themes/base.css';
@import '../../themes/sap_fiori_3.css';
@import '../../themes/sap_fiori_3_dark.css';
@import '../../themes/sap_fiori_3_hcb.css';
@import '../../themes/sap_fiori_3_hcw.css';
@import '../../themes/sap_horizon.css';
@import '../../themes/sap_horizon_hc.css';
```

---

## 3. Theme Enum

**Location:** `packages/main/src/enums/Theme.ts`

TypeScript enum with all valid runtime theme identifiers.

Current:

```typescript
export enum Theme {
  sap_fiori_3 = 'sap_fiori_3',
  sap_fiori_3_dark = 'sap_fiori_3_dark',
  sap_fiori_3_hcb = 'sap_fiori_3_hcb',
  sap_fiori_3_hcw = 'sap_fiori_3_hcw',
  sap_horizon = 'sap_horizon',
  sap_horizon_dark = 'sap_horizon_dark',
  sap_horizon_hcb = 'sap_horizon_hcb',
  sap_horizon_hcw = 'sap_horizon_hcw',
  sap_horizon_auto = 'sap_horizon_auto',
  sap_horizon_hc_auto = 'sap_horizon_hc_auto',
}
```

Note: The enum may contain values without a corresponding CSS file (e.g. `sap_horizon_dark` has no separate file since 2.21.0 — it was consolidated into `sap_horizon.css`'s selector). Enum values are valid runtime identifiers, not file names.

---

## 4. Storybook Theme Picker

**Location:** `.storybook/utils.ts`

Update the `MAPPED_THEMES` array:

```typescript
export const MAPPED_THEMES = [
  { value: 'sap_horizon', title: 'Morning Horizon (Light)' },
  { value: 'sap_horizon_dark', title: 'Evening Horizon (Dark)' },
  { value: 'sap_horizon_hcb', title: 'Horizon High Contrast Black' },
  { value: 'sap_horizon_hcw', title: 'Horizon High Contrast White' },
  { value: 'sap_horizon_auto', title: 'OS Adaptive Horizon Theme' },
  { value: 'sap_horizon_hc_auto', title: 'OS Adaptive High Contrast Horizon Theme' },
  { value: 'sap_fiori_3', title: 'Quartz Light' },
  { value: 'sap_fiori_3_dark', title: 'Quartz Dark' },
  { value: 'sap_fiori_3_hcb', title: 'Quartz High Contrast Black' },
  { value: 'sap_fiori_3_hcw', title: 'Quartz High Contrast White' },
];
```

---

## 5. Welcome Documentation

**Location:** `docs/Welcome.mdx`

Contains a manually written "Available Themes" section. Update to match the current theme set.

---

## Not Updated During Upgrades

- **Examples, templates, patterns** — Renovate handles these separately.
