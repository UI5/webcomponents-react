/**
 * @fileOverview get_component_api tool
 * Get comprehensive API documentation for a UI5 Web Components React component
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';
import type { ApiDataStore, ComponentApiData } from '../../types/index.js';
import { handleToolError } from '../../utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type GetComponentApiPayload = {
  componentName: string;
};

// Load API data at module initialization
let API_DATA: ApiDataStore = { components: {}, webComponents: {}, charts: {}, ai: {} };

try {
  const apiDataPath = join(__dirname, 'component-apis.json');
  API_DATA = JSON.parse(readFileSync(apiDataPath, 'utf-8'));
} catch (error) {
  console.warn('Could not load component API data:', error);
}

/**
 * Find a component by name (case-insensitive search across all categories)
 */
function findComponent(name: string): { name: string; data: ComponentApiData; category: string } | null {
  const lowerName = name.toLowerCase();

  for (const category of ['components', 'webComponents', 'charts', 'ai'] as const) {
    const found = Object.entries(API_DATA[category]).find(([key]) => key.toLowerCase() === lowerName);
    if (found) {
      return {
        name: found[0],
        data: found[1],
        category,
      };
    }
  }

  return null;
}

// ============================================================================
// TOOL DEFINITION
// ============================================================================

export const getComponentApiTool = {
  name: 'get_component_api',
  title: 'Component API Reference',
  annotations: {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  description: `Get comprehensive API documentation for a UI5 Web Components React component including props, ref methods, types, event detail parameters, and CSS parts for shadow DOM styling.

WHEN TO USE: You need exact prop names, types, default values, method signatures, event detail fields, or CSS part selectors for a specific component.
DO NOT USE FOR: General guidance on styling, events, or architecture — use get_documentation instead. To discover component names — use list_components first.
WORKFLOW: Use list_components to find the correct component name, then this tool for full API details.
LIMITS: Returns data for one component per call. Returns all props and methods for that component.

EXAMPLE INPUT: { "componentName": "Dialog" }

**Output Format (JSON):**
\`\`\`typescript
{
  package: string,                    // NPM package name
  description: string,                 // Full JSDoc description with @tags, examples, notes
  props: {
    [propName: string]: {
      type: {
        name: string,                  // Type category (e.g., "string", "boolean", "enum")
        raw?: string,                  // Full TypeScript type string
        value?: Array<{                // For enums: possible values with descriptions
          value: string,
          description?: string
        }>
      },
      required: boolean,               // Whether prop is required
      defaultValue: any,               // Default value if specified
      description: string,             // Full prop description with notes
      eventDetail?: {                  // Present on event handler props (web components only)
        params: Array<{                // Fields available on e.detail
          name: string,                // e.g., "targetRef", "escPressed", "item"
          type: string,                // e.g., "HTMLElement", "boolean"
          description: string          // What this detail field contains
        }>,
        cancelable: boolean,           // true = e.preventDefault() prevents the action
        bubbles: boolean               // true = event bubbles through DOM
      }
    }
  },
  methods: Array<{                     // Imperative handle methods (access via ref.current.methodName())
    name: string,
    description: string,
    params: Array<{
      name: string,
      description: string,
      type: any
    }>,
    returns: any
  }>,
  cssParts?: Array<{                   // CSS ::part() selectors for shadow DOM styling (web components only)
    name: string,                      // Use as: componentSelector::part(name) { ... }
    description: string
  }>,
  subTypeDocs?: string                 // Markdown docs for complex prop types (e.g. column definition properties)
  docUrl?: string                      // Upstream docs link for complex behavioral concepts
}
\`\`\`

**Note:** Generic HTML attributes (className, style, onClick, etc.) are filtered out but available via CommonProps. Ref methods are accessed via \`componentRef.current.methodName()\`. Event detail fields (eventDetail.params) tell you what's on \`e.detail\` — access via \`e.detail.paramName\`.`,
  inputSchema: {
    componentName: z
      .string()
      .describe(
        'Component name (e.g., "Button", "AnalyticalTable"). Case-insensitive. Must match a component from @ui5/webcomponents-react, @ui5/webcomponents-react-charts, or @ui5/webcomponents-ai-react.',
      ),
  },
  outputSchema: {
    package: z.string().describe('NPM package name'),
    description: z.string().describe('Full component description'),
    props: z.record(z.string(), z.any()).describe('Component props with types, descriptions, and eventDetail'),
    methods: z.array(z.any()).describe('Imperative methods accessible via ref'),
    cssParts: z
      .array(z.object({ name: z.string(), description: z.string() }))
      .optional()
      .describe('CSS ::part() selectors for shadow DOM styling'),
    subTypeDocs: z
      .string()
      .optional()
      .describe('Additional documentation for complex prop types (e.g. AnalyticalTable column definition)'),
    docUrl: z
      .string()
      .optional()
      .describe('Link to upstream documentation for complex behavioral concepts (e.g. layout algorithms)'),
    _meta: z.object({
      apiVersion: z.string(),
      extractedAt: z.string().optional(),
    }),
    error: z.string().optional().describe('Error message if component not found'),
    errorType: z
      .enum(['not_found', 'invalid_input'])
      .optional()
      .describe('Semantic error type for programmatic handling'),
    availableComponents: z
      .array(z.string())
      .optional()
      .describe('List of all valid component names (only present on not_found errors)'),
  },
  handler: ({ componentName }: GetComponentApiPayload) => {
    try {
      const normalizedName = componentName.trim();
      const found = findComponent(normalizedName);

      if (!found) {
        const allComponents = [
          ...Object.keys(API_DATA.components),
          ...Object.keys(API_DATA.webComponents),
          ...Object.keys(API_DATA.charts),
          ...Object.keys(API_DATA.ai),
        ].sort();

        return {
          structuredContent: {
            error: `Component '${componentName}' not found.`,
            errorType: 'not_found' as const,
            availableComponents: allComponents,
          },
          content: [
            {
              type: 'text' as const,
              text: `Component '${componentName}' not found. Use list_components to discover available component names.`,
            },
          ],
        };
      }

      const response = {
        ...found.data,
        _meta: {
          apiVersion: API_DATA.metadata?.version ?? 'unknown',
          extractedAt: API_DATA.metadata?.extractedAt,
        },
      };

      return {
        structuredContent: response,
        content: [{ type: 'text' as const, text: JSON.stringify(response, null, 2) }],
      };
    } catch (error) {
      return handleToolError(error, `Error getting API for component '${componentName}'`);
    }
  },
};
