# Skills

This directory contains agent skills for working with this repository.

## Available Skills

Currently, only **internal skills** for maintainers of this repository are offered.

### Installing Internal Skills

Since these skills are marked as internal, `npx skills` does not list them by default. To discover and install them, set the `INSTALL_INTERNAL_SKILLS` environment variable:

```bash
INSTALL_INTERNAL_SKILLS=1 npx skills add SAP/ui5-webcomponents-react --list
```

Alternatively, install from a local checkout:

```bash
INSTALL_INTERNAL_SKILLS=1 npx skills add ./skills --skill ui5wc-upgrade
```

## Requesting New Skills

If you use Claude Code with UI5 Web Components for React and feel a skill would improve your workflow — whether for component usage, migration, styling, testing, or anything else — we'd love to hear about it.

Additionally to the [`@ui5/webcomponents-react-mcp` MCP server](../packages/mcp-server/README.md), skills can provide guided multi-step workflows, bundled scripts, and domain-specific knowledge that go beyond what an MCP server offers.

Open an issue describing your use case and we'll evaluate whether a public skill would be a good fit.
