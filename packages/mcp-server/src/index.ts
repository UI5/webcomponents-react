#!/usr/bin/env node

/**
 * @fileoverview UI5 Web Components for React MCP Server
 * Provides development assistance and API documentation for developers using @ui5/webcomponents-react
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { startHttpServer } from './http.js';
import { logger } from './logger.js';
import * as tools from './tools/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read version from package.json
const pkg = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf-8'));

const llmsTxtPath = join(__dirname, '..', 'resources', 'llms.txt');

/**
 * Builds a fully configured MCP server instance with all tools and resources registered.
 * A fresh instance is created per stdio process and per HTTP request (stateless transport).
 */
export function createServer(): McpServer {
  const server = new McpServer({
    name: 'ui5-webcomponents-react',
    version: pkg.version,
  });

  // Register all tools
  logger.debug('Registering tools...');
  const toolList = Object.values(tools);
  toolList.forEach((tool) => {
    logger.debug(`Registering tool: ${tool.name}`);
    server.registerTool(
      tool.name,
      {
        title: tool.title,
        description: tool.description,
        inputSchema: tool.inputSchema,
        outputSchema: 'outputSchema' in tool ? tool.outputSchema : undefined,
        annotations: tool.annotations,
      },
      tool.handler,
    );
  });
  logger.debug(`Registered ${toolList.length} tools`);

  // Register llms.txt resource
  server.registerResource(
    'llms-txt',
    'file:///llms.txt',
    {
      description: 'LLM-friendly documentation index for UI5 Web Components for React',
      mimeType: 'text/plain',
    },
    () => ({
      contents: [
        {
          uri: 'file:///llms.txt',
          mimeType: 'text/plain',
          text: readFileSync(llmsTxtPath, 'utf-8'),
        },
      ],
    }),
  );
  logger.debug('Registered llms.txt resource');

  return server;
}

const DEFAULT_HTTP_PORT = 7427;

function parseArgs(argv: string[]): { http: boolean; port: number } {
  const http = argv.includes('--http') || process.env.MCP_TRANSPORT === 'http';

  let port = Number(process.env.PORT ?? DEFAULT_HTTP_PORT);
  const portFlagIndex = argv.findIndex((arg) => arg === '--port' || arg.startsWith('--port='));
  if (portFlagIndex !== -1) {
    const flag = argv[portFlagIndex];
    const raw = flag.includes('=') ? flag.slice(flag.indexOf('=') + 1) : argv[portFlagIndex + 1];
    const parsed = Number(raw);
    if (!Number.isInteger(parsed) || parsed < 0 || parsed > 65535) {
      throw new Error(`Invalid --port value: ${raw}`);
    }
    port = parsed;
  }

  return { http, port };
}

async function main() {
  const { http, port } = parseArgs(process.argv.slice(2));

  if (http) {
    await startHttpServer(createServer, port);
    return;
  }

  const transport = new StdioServerTransport();
  await createServer().connect(transport);
  logger.info('UI5 Web Components for React MCP Server running on stdio');
}

main().catch((error) => {
  logger.error('Fatal error in main():', error);
  process.exit(1);
});
