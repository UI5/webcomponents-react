# @ui5/webcomponents-react-cli

CLI for generating React wrappers from UI5 Web Components and code-mods for migrations.

## Installation

```bash
npm install -D @ui5/webcomponents-react-cli
```

## Wrapper Generation

Generate React component wrappers from any UI5 Web Components package. This is how `@ui5/webcomponents-react` wraps the official UI5 Web Components.

See [Bring Your Own Web Components](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-bring-your-own-web-components--docs) for full documentation.

```bash
npx @ui5/webcomponents-react-cli create-wrappers \
  --packageName your-package-name \
  --out ./src/components
```

**Requirements:**

- Package must contain a Custom Element Manifest (`custom-elements.json`)

**Options:**

| Option                      | Description                                        |
| --------------------------- | -------------------------------------------------- |
| `--packageName`             | npm package containing web components (required)   |
| `--out`, `-o`               | Output directory for generated wrappers (required) |
| `--additionalComponentNote` | Custom note to add to generated component JSDoc    |

## Codemods

### `v2` - Migrate from v1 to v2

Automates v1 to v2 migration. See [Migration Guide](https://ui5.github.io/webcomponents-react/v2/?path=/docs/migration-guide--docs#codemod).

```bash
npx @ui5/webcomponents-react-cli codemod --transform v2 \
    --src ./src \
    --typescript  # omit for JavaScript projects
```

**What it transforms:**

- Component renames (`StandardListItem` → `ListItemStandard`, `Badge` → `Tag`)
- Prop renames (`busy` → `loading`, `mode` → `selectionMode`, `placementType` → `placement`)
- Event renames (`onAfterClose` → `onClose`, `onAfterOpen` → `onOpen`)
- Enum value changes (`ValueState.Error` → `ValueState.Negative`)
- Enum import path updates
- Removed prop cleanup

**Limitations:**

- Handles ~90% of changes automatically
- Some changes require manual review (e.g., inverted logic for `showCancelButton` → `hideCancelButton`)
- Complex prop merges need manual attention (e.g., `itemsPerPageS/M/L` → `itemsPerPage`)

### `export-maps` - Convert to Subpath Imports

Convert root imports to tree-shakeable subpath imports. See [FAQ](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-faq--docs#why-use-direct-imports-via-package-export-maps).

```bash
npx @ui5/webcomponents-react-cli codemod --transform export-maps \
    --src ./src \
    --typescript  # omit for JavaScript projects
```

**Before:**

```tsx
import { Button, Input, Dialog } from '@ui5/webcomponents-react';
```

**After:**

```tsx
import { Button } from '@ui5/webcomponents-react/Button';
import { Input } from '@ui5/webcomponents-react/Input';
import { Dialog } from '@ui5/webcomponents-react/Dialog';
```

**Supported packages:**

- `@ui5/webcomponents-react`
- `@ui5/webcomponents-react-base`
- `@ui5/webcomponents-react-charts`
- `@ui5/webcomponents-ai-react`
- `@ui5/webcomponents-react-compat`
