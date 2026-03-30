/**
 * @fileOverview create_app tool
 * Scaffolds a new UI5 Web Components for React application from an official template.
 */

import { readFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';
import { createTextResponse, handleToolError } from '../../utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const REPO = 'UI5/webcomponents-react';

interface ProjectTemplate {
  name: string;
  variant?: string;
  framework: string;
  type: 'template' | 'example';
  path: string;
  typescript?: boolean;
  stackBlitz?: string;
}

let templates: ProjectTemplate[] = [];
try {
  const templatesPath = join(__dirname, '../../../docs/project-templates.json');
  const all: ProjectTemplate[] = JSON.parse(readFileSync(templatesPath, 'utf-8'));
  templates = all.filter((t) => t.type === 'template');
} catch {
  // Bundled JSON not available
}

function templateId(t: ProjectTemplate): string {
  return basename(t.path);
}

function templateLabel(t: ProjectTemplate): string {
  return t.variant ? `${t.name} (${t.variant})` : t.name;
}

const availableIds = templates.map(templateId);
const availableList = templates.map((t) => `- \`${templateId(t)}\` — ${templateLabel(t)}`).join('\n');

type CreateAppPayload = {
  template: string;
  appName: string;
};

export const createAppTool = {
  name: 'create_app',
  title: 'Create App',
  annotations: {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  description:
    'Get scaffolding instructions for a new UI5 Web Components for React application from an official template.\n\n' +
    'WHEN TO USE: The user wants to create a new app, project, or starter using UI5 Web Components for React.\n' +
    'WORKFLOW: Call this tool to get the template setup instructions, then execute them.\n\n' +
    `Available templates:\n${availableList}\n\n` +
    'EXAMPLE INPUT: { "template": "vite-ts", "appName": "my-app" }\n' +
    'EXAMPLE INPUT: { "template": "nextjs-app", "appName": "my-dashboard" }',
  inputSchema: {
    template: z
      .enum(availableIds as [string, ...string[]])
      .describe(`Template to use. Available: ${availableIds.join(', ')}`),
    appName: z.string().describe('Name for the new application directory'),
  },
  handler: ({ template, appName }: CreateAppPayload) => {
    try {
      const entry = templates.find((t) => templateId(t) === template);

      if (!entry) {
        return createTextResponse(`Unknown template "${template}".\n\nAvailable templates:\n${availableList}`);
      }

      const label = templateLabel(entry);
      const degitCmd = `npx degit ${REPO}/${entry.path}#main ${appName}`;

      const text = [
        `# Scaffold: ${label} — \`${appName}\``,
        '',
        '## Steps',
        '',
        `1. Run: \`${degitCmd}\``,
        `2. \`cd ${appName}\``,
        `3. Update the \`name\` field in \`package.json\` to \`"${appName}"\``,
        '4. Run: `npm install`',
        '5. Start the dev server: `npm run dev`',
        '',
        '## Template Details',
        '',
        `- **Framework**: ${entry.name}${entry.variant ? ` (${entry.variant})` : ''}`,
        `- **Language**: ${entry.typescript ? 'TypeScript' : 'JavaScript'}`,
        `- **GitHub**: https://github.com/${REPO}/tree/main/${entry.path}`,
        entry.stackBlitz ? `- **StackBlitz**: ${entry.stackBlitz}` : '',
        '',
        '## Post-Setup',
        '',
        '- ThemeProvider from `@ui5/webcomponents-react` is already configured in the template',
        "- Import components: `import { Button, Input, Card } from '@ui5/webcomponents-react'`",
        '- Use `get_component_api` to look up component props, events, and methods',
        '- Use `get_documentation` for guides on styling, i18n, SSR, and more',
      ]
        .filter(Boolean)
        .join('\n');

      return createTextResponse(text);
    } catch (error) {
      return handleToolError(error, 'Error creating app scaffold');
    }
  },
};
