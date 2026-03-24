/**
 * Custom Elements Manifest (CEM) loading and enrichment.
 * Reads CEM files from node_modules and builds lookup maps for
 * enriching component API data with event details and CSS parts.
 *
 * TODO: The CLI package has similar utilities (cem-reader.ts, formatters.ts)
 * but doesn't export them. If the CLI adds subpath exports, consider
 * reusing getCEM() and snakeCaseToCamelCase() from there instead.
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import type { CemManifest, CemDeclaration, ComponentApiData } from '../../src/types/index.js';
import { toPascalCase } from './text.js';

/**
 * Convert CEM event name (kebab-case) to React event handler prop name.
 * e.g., "before-close" → "onBeforeClose", "click" → "onClick"
 */
export function cemEventToReactProp(eventName: string): string {
  const camel = eventName.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
  return 'on' + camel.charAt(0).toUpperCase() + camel.slice(1);
}

/**
 * Load all CEM files and build a lookup map from component name → CEM declaration.
 * Also extracts short descriptions for the descriptions.json output.
 */
export function loadCemData(monorepoRoot: string): {
  lookup: Map<string, { decl: CemDeclaration; isAi: boolean }>;
  wcDescriptions: Record<string, string>;
  aiDescriptions: Record<string, string>;
} {
  const lookup = new Map<string, { decl: CemDeclaration; isAi: boolean }>();
  const wcDescriptions: Record<string, string> = {};
  const aiDescriptions: Record<string, string> = {};

  const manifestPaths = [
    { path: 'node_modules/@ui5/webcomponents/dist/custom-elements-internal.json', isAi: false },
    { path: 'node_modules/@ui5/webcomponents-fiori/dist/custom-elements-internal.json', isAi: false },
    { path: 'node_modules/@ui5/webcomponents-ai/dist/custom-elements-internal.json', isAi: true },
  ];

  for (const { path: manifestPath, isAi } of manifestPaths) {
    try {
      const fullPath = join(monorepoRoot, manifestPath);
      const manifest: CemManifest = JSON.parse(readFileSync(fullPath, 'utf-8'));

      for (const module of manifest.modules || []) {
        for (const decl of module.declarations || []) {
          if (!decl.name) continue;

          if (decl.tagName) {
            lookup.set(decl.name, { decl, isAi });
          }

          if (decl.description) {
            let desc = decl.description
              .replace(/###\s+Overview\s*/i, '')
              .split('\n\n')[0]
              .replace(/\n/g, ' ')
              .trim();

            // Replace ui5-component-name with PascalCase
            desc = desc.replace(/`ui5-(?:ai-)?[\w-]+`/g, (match) => {
              const componentName = match.slice(1, -1);
              return `\`${toPascalCase(componentName)}\``;
            });
            desc = desc.replace(/ui5-(?:ai-)?([\w-]+)/g, (match) => {
              return toPascalCase(match);
            });

            // Get first sentence
            const sentenceEnd = desc.match(/\.\s/);
            const cleanDesc =
              sentenceEnd && sentenceEnd.index! < 300
                ? desc.substring(0, sentenceEnd.index! + 1)
                : desc.substring(0, 200) + '...';

            if (isAi) {
              aiDescriptions[decl.name] = cleanDesc;
            } else {
              wcDescriptions[decl.name] = cleanDesc;
            }
          }
        }
      }
    } catch (error) {
      console.warn(`Could not load ${manifestPath}:`, (error as Error).message);
    }
  }

  return { lookup, wcDescriptions, aiDescriptions };
}

/**
 * Enrich component API data with CEM information:
 * - eventDetail (params, cancelable, bubbles) on event handler props
 * - cssParts on component root
 */
export function enrichWithCem(apiData: ComponentApiData, cemDecl: CemDeclaration): void {
  if (cemDecl.events) {
    for (const event of cemDecl.events) {
      if (event._ui5privacy && event._ui5privacy !== 'public') continue;

      const reactPropName = cemEventToReactProp(event.name);
      const prop = apiData.props[reactPropName];
      if (!prop) continue;

      const hasParams = event._ui5parameters && event._ui5parameters.length > 0;
      const cancelable = event._ui5Cancelable ?? false;
      const bubbles = event._ui5Bubbles ?? false;

      if (hasParams || cancelable || bubbles) {
        prop.eventDetail = {
          params: (event._ui5parameters || [])
            .filter((p) => !p._ui5privacy || p._ui5privacy === 'public')
            .map((p) => ({
              name: p.name,
              type: p.type.text,
              description: p.description,
            })),
          cancelable,
          bubbles,
        };
      }
    }
  }

  if (cemDecl.cssParts && cemDecl.cssParts.length > 0) {
    apiData.cssParts = cemDecl.cssParts.map((p) => ({
      name: p.name,
      description: p.description,
    }));
  }
}
