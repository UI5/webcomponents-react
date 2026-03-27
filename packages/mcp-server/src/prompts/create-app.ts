/**
 * @fileoverview create-app MCP prompt
 * Scaffolds a new UI5 Web Components for React application from an official template.
 */

import { readFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

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

// Load templates at module init — filters for type: "template" only
let templates: ProjectTemplate[] = [];
try {
  const templatesPath = join(__dirname, '..', 'docs', 'project-templates.json');
  const all: ProjectTemplate[] = JSON.parse(readFileSync(templatesPath, 'utf-8'));
  templates = all.filter((t) => t.type === 'template');
} catch {
  // Bundled JSON not available — prompt will report no templates
}

/** Derive a short ID from the template path, e.g. "templates/nextjs-app" → "nextjs-app" */
function templateId(t: ProjectTemplate): string {
  return basename(t.path);
}

function templateLabel(t: ProjectTemplate): string {
  return t.variant ? `${t.name} (${t.variant})` : t.name;
}

const availableIds = templates.map(templateId);
const availableList = templates.map((t) => `- \`${templateId(t)}\` — ${templateLabel(t)}`).join('\n');

export const createAppPrompt = {
  name: 'create-app',
  config: {
    title: 'Create App',
    description:
      'Scaffold a new UI5 Web Components for React application from an official template using degit.\n\n' +
      `Available templates:\n${availableList}`,
    argsSchema: {
      template: z.string().describe(`Template to use. Available: ${availableIds.join(', ')}`),
      appName: z.string().describe('Name for the new application directory'),
    },
  },
  callback: ({ template, appName }: { template: string; appName: string }) => {
    const entry = templates.find((t) => templateId(t) === template);

    if (!entry) {
      return {
        messages: [
          {
            role: 'user' as const,
            content: {
              type: 'text' as const,
              text: `Unknown template "${template}".\n\n` + `Available templates:\n${availableList}`,
            },
          },
        ],
      };
    }

    const label = templateLabel(entry);
    const degitCmd = `npx degit ${REPO}/${entry.path}#main ${appName}`;

    const text = [
      `Scaffold a new **${label}** application called \`${appName}\`.`,
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

    return {
      messages: [
        {
          role: 'user' as const,
          content: { type: 'text' as const, text },
        },
      ],
    };
  },
};
