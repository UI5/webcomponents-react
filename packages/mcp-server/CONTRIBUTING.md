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

**Prerequisite:** The monorepo packages must be compiled first (`yarn build` from the repo root) so that `.d.ts` files exist in `packages/main/dist/`. Without them, DomRef method extraction will silently produce empty results.

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

To test the HTTP transport, start the server first (`node dist/index.js --http`), then run `npx @modelcontextprotocol/inspector`, choose **Streamable HTTP**, and connect to `http://localhost:7427/mcp`.

## Architecture

### Overview

The MCP server is a Node.js process that communicates with AI clients via the [Model Context Protocol](https://modelcontextprotocol.io/). It runs over **stdio** by default, or over **Streamable HTTP** with the `--http` flag (see [Transports](#transports)). All data is pre-processed at build time and bundled with the server — no network access is required at runtime.

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
│ Runtime (stdio default / HTTP via --http)                           │
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

### Transports

The transport is selected in `index.ts` from CLI flags / env:

- **stdio** (default) — no flags. The client spawns the process and communicates over stdin/stdout. Used by all [Setup](README.md#setup) configurations.
- **Streamable HTTP** — enabled with `--http` (or `MCP_TRANSPORT=http`), implemented in `src/http.ts`.

```bash
node dist/index.js --http                 # http://127.0.0.1:7427/mcp (default port)
node dist/index.js --http --port 7500     # custom port (or PORT=7500)
```

HTTP mode is **stateless** (a fresh server + transport per request, `sessionIdGenerator: undefined`) and binds to `127.0.0.1` only, with DNS-rebinding protection scoped to the bound host/port. The endpoint is served at `POST /mcp`; `GET` and other methods return `405`, unknown paths `404`. The default port `7427` is defined by `DEFAULT_HTTP_PORT` in `index.ts` — keep it in sync with `server.json`.

### Build Pipeline

`npm run update` runs these steps:

1. **In parallel:** `fetch:skills`, `extract:descriptions`, `bundle:docs`
   - **`fetch:skills`** — Downloads upstream skill documents (e.g. accessibility) from GitHub, adapts HTML examples to React JSX, writes to `docs/`
   - **`extract:descriptions`** — Uses `react-docgen-typescript` to parse component sources and Custom Elements Manifests (CEM). Outputs `descriptions.json` and `component-apis.json`. Also attaches `subTypeDocs` (markdown for complex prop types) and `docUrl` (upstream doc links) from `component-config.ts`
   - **`bundle:docs`** — Copies MDX/MD documentation files from the monorepo into `docs/`. For JSON data sources (e.g. project templates), generates LLM-friendly markdown. Updates `localPath` fields in `documentation_sections.json`
2. **`compile`** — Compiles TypeScript, then `post-build.ts` copies JSON files from `src/` to `dist/` and makes the entry point executable

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
yarn build          # from repo root — produces .d.ts files needed for method extraction
npm run update      # from packages/mcp-server
```

Then add the server to any project using the absolute path to the built entry point:

```bash
claude mcp add --scope project ui5-wcr -- node /path/to/ui5-webcomponents-react/packages/mcp-server/dist/index.js
```

Or over HTTP — start the server first (`node dist/index.js --http`), then register the URL:

```bash
claude mcp add --scope project --transport http ui5-wcr http://localhost:7427/mcp
```

After code changes, `npm run compile` is enough.
