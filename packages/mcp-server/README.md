# UI5 Web Components for React MCP Server

Model Context Protocol (MCP) server providing development assistance and API documentation for developers using `@ui5/webcomponents-react`.

## What is this?

This MCP server gives AI assistants direct access to UI5 Web Components for React documentation, component APIs, and utility information. It helps developers get accurate, up-to-date information about the library without leaving their IDE.

## Features

### Available Tools

1. **`list_components`** - Browse all available components
   - Filter by category (Data Display, Layouts & Floorplans, Inputs, Modals & Popovers, User Feedback, Charts, AI Components, Web Components)
   - Filter by package (`@ui5/webcomponents-react`, `@ui5/webcomponents-react-charts`, `@ui5/webcomponents-ai-react`)
   - Shows component types (React vs WebComponent)
   - Includes detailed descriptions extracted from JSDoc
   - Provides import examples for each component

2. **`get_component_api`** - Full component API documentation
   - Props with TypeScript types, descriptions, and defaults
   - Ref methods and return types
   - Case-insensitive component name matching

3. **`get_documentation`** - Comprehensive documentation sections
   - Getting Started guide
   - Migration guide (v1 → v2)
   - Knowledge Base (styling, i18n, SSR, testing, slots, FAQ)
   - Cypress Testing guides
   - Patterns and best practices
   - Optionally fetches full markdown content from GitHub

## Setup

### Prerequisites

- Node.js 20.17+ or 22.9+

### Configuration

Add the server to your MCP client configuration. No installation needed — `npx` downloads it on demand.

#### Claude Desktop / Generic MCP Client

```json
{
  "mcpServers": {
    "@ui5/webcomponents-react-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@ui5/webcomponents-react-mcp"]
    }
  }
}
```

#### Windows (Non-WSL)

```json
{
  "mcpServers": {
    "@ui5/webcomponents-react-mcp": {
      "type": "stdio",
      "command": "cmd",
      "args": ["/c", "npx -y @ui5/webcomponents-react-mcp"]
    }
  }
}
```

#### VS Code

```bash
code --add-mcp '{"name":"@ui5/webcomponents-react-mcp","type":"stdio","command":"npx","args":["-y","@ui5/webcomponents-react-mcp"]}'
```

#### Claude Code

```bash
claude mcp add --transport stdio --scope user ui5-wcr-mcp -- npx -y @ui5/webcomponents-react-mcp
```

#### Codex

```bash
codex mcp add --transport stdio ui5-wcr-mcp -- npx -y @ui5/webcomponents-react-mcp
```

## Usage

Once configured, your AI assistant will have access to the tools. You can ask questions like:

**Documentation:**

- "Show me the FAQ"
- "How do I get started with UI5 Web Components for React?"
- "How do I style components?"
- "How do I migrate from v1 to v2?"

**Components:**

- "List all available components"
- "Show me chart components"
- "What layout components are available?"
- "Show me the API for AnalyticalTable"
- "How do I use the Button component?"

## Development

### Scripts

```bash
npm run build             # Build TypeScript + copy JSON assets
npm run dev               # Build and run locally
npm run inspector         # Debug with MCP Inspector (opens web UI)
npm run type-check        # Type-check without emitting
npm run extract:descriptions  # Regenerate component metadata from monorepo sources
npm run update            # Extract descriptions + rebuild
```

### Updating Component Metadata

When `@ui5/webcomponents-react` packages are updated, regenerate the component metadata:

```bash
npm run update
```

This will:

1. Extract component descriptions from JSDoc and TypeScript definitions
2. Update component API metadata (`component-apis.json`)
3. Update component descriptions (`descriptions.json`)
4. Rebuild the MCP server

### Debug Logging

Enable debug logging by setting the `DEBUG` environment variable:

```bash
DEBUG=true npm run dev
```

### Testing with MCP Inspector

The MCP Inspector provides a web-based UI for testing your MCP server:

```bash
npm run inspector
```

## How It Works

This MCP server uses pre-processed metadata extracted from the `@ui5/webcomponents-react` packages. Component metadata is bundled with the server, while documentation content can optionally be fetched from GitHub at runtime.

### Data Sources

**`list_components` & `get_component_api`**

- Extracted using `react-docgen-typescript` from TypeScript definitions in the monorepo
- Component descriptions, categories, and package info → `descriptions.json`
- Full component APIs including props, methods, types, defaults → `component-apis.json`

**`get_documentation`**

- Metadata pre-stored in `documentation_sections.json`
- Actual content fetched at runtime via GitHub raw URLs when `fetchContent: true`
