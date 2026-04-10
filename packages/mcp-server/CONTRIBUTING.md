# Contributing

## Scripts

```bash
npm run compile               # Build TypeScript + copy JSON assets (fast rebuild)
npm run inspector             # Debug with MCP Inspector (opens web UI)
npm run test                  # Run tests in watch mode (AVA + tsx)
npm run test:ci               # Run tests once (CI)
npm run extract:descriptions  # Regenerate component metadata from monorepo sources
npm run bundle:docs           # Copy documentation files from monorepo into docs/
npm run fetch:skills          # Fetch upstream documentation (e.g. accessibility skill)
npm run update                # Full pipeline: fetch:skills + extract:descriptions + bundle:docs + compile
npm run clean                 # Remove dist/, build cache, and all generated files
```

## Updating After a Version Bump

When `@ui5/webcomponents-react` packages are updated, regenerate all data:

```bash
npm run update
```

This runs the full pipeline:

1. Fetch upstream skills (accessibility docs from UI5 Web Components)
2. Extract component descriptions and API data from monorepo TypeScript sources
3. Bundle documentation files (copy MDX/MD from monorepo into `docs/`)
4. Build the TypeScript server and copy JSON assets to `dist/`

## Debug Logging

Enable debug logging by setting the `DEBUG` environment variable:

```bash
DEBUG=true npm run dev
```

## Testing with MCP Inspector

The MCP Inspector provides a web-based UI for testing your MCP server:

```bash
npm run inspector
```

## Architecture

### Overview

The MCP server is a **stdio-based** Node.js process that communicates with AI clients via the [Model Context Protocol](https://modelcontextprotocol.io/). All data is pre-processed at build time and bundled with the server — no network access is required at runtime.

```
┌─────────────────────────────────────────────────────────────────────┐
│ Build Time (npm run update)                                         │
│                                                                     │
│  monorepo sources ──► extract-component-descriptions.ts             │
│    (TypeScript,        ├─► descriptions.json (component summaries)  │
│     JSDoc, CEM)        └─► component-apis.json (full prop/method    │
│                              data, event details, CSS parts)        │
│                                                                     │
│  monorepo docs ──────► bundle-docs.ts                               │
│    (MDX, MD files)     └─► docs/ (local copies for offline access)  │
│                                                                     │
│  upstream skills ────► fetch-upstream-skills.ts                      │
│    (GitHub raw)        └─► docs/upstream--accessibility.mdx          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ Runtime (stdio)                                                     │
│                                                                     │
│  AI Client ◄──► MCP Server (index.ts)                               │
│                   ├─ create_app        reads project-templates.json  │
│                   ├─ list_components   reads descriptions.json       │
│                   ├─ get_component_api reads component-apis.json     │
│                   ├─ get_documentation reads docs/ + sections.json   │
│                   ├─ get_public_utils  hardcoded documentation       │
│                   └─ llms.txt resource reads resources/llms.txt      │
└─────────────────────────────────────────────────────────────────────┘
```

### Build Pipeline

`npm run update` runs these steps in order:

1. **`fetch:skills`** — Downloads upstream skill documents (e.g. accessibility) from GitHub, adapts HTML examples to React JSX, writes to `docs/`
2. **`extract:descriptions`** — Uses `react-docgen-typescript` to parse component sources and Custom Elements Manifests (CEM). Outputs `descriptions.json` and `component-apis.json`. Also attaches `subTypeDocs` (markdown for complex prop types) and `docUrl` (upstream doc links) from `component-config.ts`
3. **`bundle:docs`** — Copies MDX/MD documentation files from the monorepo into `docs/`. For JSON data sources (e.g. project templates), generates LLM-friendly markdown. Updates `localPath` fields in `documentation_sections.json`
4. **`compile`** — Compiles TypeScript, then `post-build.ts` copies JSON files from `src/` to `dist/` and makes the entry point executable

### Updating Component Data

When components are added or removed, update `src/utils/component-config.ts`:

- **Categories** — Add new components to their category. Uncategorized components trigger a warning during `npm run extract:descriptions`.
- **`SUB_TYPE_DOCS`** — Add markdown paths for complex prop types (e.g. AnalyticalTable column definitions)
- **`UPSTREAM_DOC_URLS`** — Add links for components with complex behavioral logic not captured in props (e.g. Form layout)

### Adding a New Tool

1. Create `src/tools/<tool_name>/<tool_name>.ts` following the existing pattern (name, title, annotations, description, inputSchema, handler)
2. Export it from `src/tools/index.ts` — it will be auto-registered by `index.ts`

### Local Development with Claude Code

Generate all data files (only needed once, or after version bumps):

```bash
npm run update
```

Then add the server to any project using the absolute path to the built entry point:

```bash
claude mcp add --scope project ui5-wcr -- node /path/to/ui5-webcomponents-react/packages/mcp-server/dist/index.js
```

After code changes, `npm run compile` is enough.
