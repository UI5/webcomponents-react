/**
 * @fileOverview list_components tool
 * Lists all available UI5 Web Components for React components by category and package
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';
import {
  REACT_COMPONENT_CATEGORIES,
  WEB_COMPONENT_CATEGORIES,
  CHART_CATEGORIES,
  AI_CATEGORIES,
} from '../../utils/categories.js';
import { createTextResponse, handleToolError } from '../../utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Type for component metadata
type ComponentMetadata = {
  description: string;
  package?: string;
};

// Load extracted descriptions
let DESCRIPTIONS: {
  components: Record<string, string | ComponentMetadata>;
  webComponents: Record<string, string | ComponentMetadata>;
  charts: Record<string, string | ComponentMetadata>;
  ai: Record<string, string | ComponentMetadata>;
} = { components: {}, webComponents: {}, charts: {}, ai: {} };
try {
  const descriptionsPath = join(__dirname, 'descriptions.json');
  DESCRIPTIONS = JSON.parse(readFileSync(descriptionsPath, 'utf-8'));
} catch (error) {
  console.warn('Could not load component descriptions:', error);
}

type ListComponentsPayload = {
  category?: string;
  package?: string;
};

const CHART_COMPONENTS = CHART_CATEGORIES.Charts;
const AI_COMPONENTS = AI_CATEGORIES['AI Components'];

// Web Components are the rest from the descriptions.webComponents object
const WEB_COMPONENTS_CATEGORY = 'Web Components (Wrapped)';

function formatComponentList(categoryFilter?: string, packageFilter?: string): string {
  let output = '# UI5 Web Components for React - Component List\n\n';

  const includeMain = !packageFilter || packageFilter === '@ui5/webcomponents-react';
  const includeCharts = !packageFilter || packageFilter === '@ui5/webcomponents-react-charts';
  const includeAI = !packageFilter || packageFilter === '@ui5/webcomponents-ai-react';

  // React Components and Web Components from main package
  if (includeMain) {
    output += '## @ui5/webcomponents-react\n\n';

    // Combine React and Web Component categories
    const allCategories = ['Data Display', 'Layouts & Floorplans', 'Inputs', 'Modals & Popovers', 'User Feedback'];

    for (const category of allCategories) {
      if (categoryFilter && categoryFilter !== category && categoryFilter !== WEB_COMPONENTS_CATEGORY) continue;

      // Check if we have any components in this category
      const reactComponents = REACT_COMPONENT_CATEGORIES[category as keyof typeof REACT_COMPONENT_CATEGORIES] || [];
      const webComponents = WEB_COMPONENT_CATEGORIES[category as keyof typeof WEB_COMPONENT_CATEGORIES] || [];

      if (reactComponents.length === 0 && webComponents.length === 0) continue;

      output += `### ${category}\n\n`;

      // Show React components first
      for (const name of reactComponents) {
        const compData = DESCRIPTIONS.components[name];
        const description = compData
          ? typeof compData === 'string'
            ? compData
            : compData.description
          : 'React component';
        output += `- **${name}** _(React)_ - ${description}\n`;
        output += `  \`\`\`tsx\n  import { ${name} } from '@ui5/webcomponents-react';\n  \`\`\`\n\n`;
      }

      // Then show Web Components in same category
      if (!categoryFilter || categoryFilter === category || categoryFilter === WEB_COMPONENTS_CATEGORY) {
        for (const name of webComponents) {
          const wcData = DESCRIPTIONS.webComponents[name];
          if (!wcData) continue;
          const description = typeof wcData === 'string' ? wcData : wcData.description;
          output += `- **${name}** _(Web Component)_ - ${description}\n`;
          output += `  \`\`\`tsx\n  import { ${name} } from '@ui5/webcomponents-react';\n  \`\`\`\n\n`;
        }
      }
    }

    // Keep "Web Components (Wrapped)" category for full list
    if (!categoryFilter || categoryFilter === WEB_COMPONENTS_CATEGORY) {
      output += `### ${WEB_COMPONENTS_CATEGORY}\n\n`;
      output += `All wrapped UI5 Web Components. Import from '@ui5/webcomponents-react'.\n\n`;

      const wcNames = Object.keys(DESCRIPTIONS.webComponents).sort();
      for (const name of wcNames) {
        const wcData = DESCRIPTIONS.webComponents[name];
        const description = typeof wcData === 'string' ? wcData : wcData.description;
        output += `- **${name}** - ${description}\n`;
      }
      output += `\n**Total**: ${wcNames.length} Web Components\n\n`;
    }
  }

  // Charts
  if (includeCharts && (!categoryFilter || categoryFilter === 'Charts')) {
    output += '## @ui5/webcomponents-react-charts\n\n';
    output += '### Charts\n\n';
    for (const name of CHART_COMPONENTS) {
      const chartData = DESCRIPTIONS.charts[name];
      const description = chartData
        ? typeof chartData === 'string'
          ? chartData
          : chartData.description
        : 'Chart component for data visualization';
      output += `- **${name}** - ${description}\n`;
      output += `  \`\`\`tsx\n  import { ${name} } from '@ui5/webcomponents-react-charts';\n  \`\`\`\n\n`;
    }
  }

  // AI Components
  if (includeAI && (!categoryFilter || categoryFilter === 'AI Components')) {
    output += '## @ui5/webcomponents-ai-react\n\n';
    output += '### AI Components\n\n';
    for (const name of AI_COMPONENTS) {
      const aiData = DESCRIPTIONS.ai[name];
      const description = aiData ? (typeof aiData === 'string' ? aiData : aiData.description) : 'AI-enhanced component';
      output += `- **${name}** - ${description}\n`;
      output += `  \`\`\`tsx\n  import { ${name} } from '@ui5/webcomponents-ai-react';\n  \`\`\`\n\n`;
    }
  }

  return output;
}

// ============================================================================
// TOOL DEFINITION
// ============================================================================

export const listComponentsTool = {
  name: 'list_components',
  title: 'Browse Components',
  annotations: {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  description:
    'Browse all 203 available UI5 Web Components for React components across 4 packages with descriptions, categories, and import statements.\n\n' +
    'WHEN TO USE: You need to discover which components exist, find the right component for a use case, or verify a component name before calling get_component_api.\n' +
    'DO NOT USE FOR: Getting detailed props or methods — use get_component_api after finding the component name here.\n' +
    'LIMITS: Returns all matching components at once (up to 203). Filter by category or package to reduce output size.\n\n' +
    'EXAMPLE INPUT: { "category": "Inputs" }\n' +
    'EXAMPLE INPUT: { "package": "@ui5/webcomponents-react-charts" }\n' +
    'EXAMPLE INPUT: {} (returns all components)',
  inputSchema: {
    category: z
      .enum([
        'Data Display',
        'Layouts & Floorplans',
        'Inputs',
        'Modals & Popovers',
        'User Feedback',
        'Charts',
        'AI Components',
        'Web Components (Wrapped)',
      ])
      .optional()
      .describe('Filter components by category. Omit to show all categories.'),
    package: z
      .enum(['@ui5/webcomponents-react', '@ui5/webcomponents-react-charts', '@ui5/webcomponents-ai-react'])
      .optional()
      .describe('Filter components by npm package name. Omit to show all packages.'),
  },
  handler: ({ category, package: pkg }: ListComponentsPayload) => {
    try {
      const result = formatComponentList(category, pkg);
      return createTextResponse(result);
    } catch (error) {
      return handleToolError(error, 'Error listing components');
    }
  },
};
