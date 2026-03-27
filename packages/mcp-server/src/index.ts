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
import { logger } from './logger.js';
import { createAppPrompt } from './prompts/create-app.js';
import * as tools from './tools/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read version from package.json
const pkg = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf-8'));

const server = new McpServer({
  name: 'ui5-webcomponents-react',
  version: pkg.version,
});

// Register all tools
logger.info('Registering tools...');
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

logger.info(`Registered ${toolList.length} tools`);

// Register llms.txt resource
const llmsTxtPath = join(__dirname, '..', 'resources', 'llms.txt');
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
logger.info('Registered llms.txt resource');

// Register prompts
server.registerPrompt(createAppPrompt.name, createAppPrompt.config, createAppPrompt.callback);
logger.info('Registered create-app prompt');

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logger.info('UI5 Web Components for React MCP Server running on stdio');
}

main().catch((error) => {
  logger.error('Fatal error in main():', error);
  process.exit(1);
});
