/**
 * Extract component descriptions and API data from the monorepo.
 * Reads component source files, parses JSDoc/props via react-docgen-typescript,
 * and enriches web component data with Custom Elements Manifest (CEM) info.
 *
 * Outputs:
 *   - src/tools/list_components/descriptions.json
 *   - src/tools/get_component_api/component-apis.json
 *
 * Usage:
 *   npm run extract:descriptions
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import type { DescriptionsStore, ApiDataStore } from '../src/types/index.js';
import {
  REACT_COMPONENT_CATEGORIES,
  WEB_COMPONENT_CATEGORIES,
  CHART_CATEGORIES,
  AI_CATEGORIES,
} from '../src/utils/categories.js';
import { findComponentCategory } from './utils/text.js';
import { extractFullComponentApi } from './utils/docgen.js';
import { loadCemData, enrichWithCem } from './utils/cem.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const UI5_WCR_PATH = join(__dirname, '../../..');

async function main() {
  console.log('Extracting component descriptions and API data...\n');

  const descriptions: DescriptionsStore = { components: {}, webComponents: {}, charts: {}, ai: {} };
  const componentApis: ApiDataStore = { components: {}, webComponents: {}, charts: {}, ai: {} };
  const missingComponents: string[] = [];

  // Glob all component directories in parallel
  const [componentFiles, wcFiles, chartFiles, aiFiles] = await Promise.all([
    glob('packages/main/src/components/*/index.{ts,tsx}', { cwd: UI5_WCR_PATH, absolute: true }).then((f) => f.sort()),
    glob('packages/main/src/webComponents/*/index.tsx', { cwd: UI5_WCR_PATH, absolute: true }).then((f) => f.sort()),
    glob('packages/charts/src/components/*/index.tsx', { cwd: UI5_WCR_PATH, absolute: true }).then((f) => f.sort()),
    glob('packages/ai/src/components/*/index.tsx', { cwd: UI5_WCR_PATH, absolute: true }).then((f) => f.sort()),
  ]);

  // --- React components ---
  console.log(`Found ${componentFiles.length} React components`);
  for (const file of componentFiles) {
    const name = file.split('/').slice(-2, -1)[0];
    if (!findComponentCategory(name, REACT_COMPONENT_CATEGORIES)) {
      missingComponents.push(name);
    }
    const result = extractFullComponentApi(file, '@ui5/webcomponents-react', name, __dirname);
    if (result) {
      if (result.description) {
        descriptions.components[name] = { description: result.description, package: '@ui5/webcomponents-react' };
      }
      componentApis.components[name] = result.api;
    }
  }

  // --- Web Components ---
  console.log('Loading custom-elements manifests...');
  const { lookup: cemLookup, wcDescriptions, aiDescriptions } = loadCemData(UI5_WCR_PATH);

  console.log(`Found ${wcFiles.length} Web Components`);
  for (const file of wcFiles) {
    const name = file.split('/').slice(-2, -1)[0];
    if (!findComponentCategory(name, WEB_COMPONENT_CATEGORIES)) {
      missingComponents.push(name);
    }
    descriptions.webComponents[name] = {
      description: wcDescriptions[name] || 'UI5 Web Component wrapper',
      package: '@ui5/webcomponents-react',
    };
    const result = extractFullComponentApi(file, '@ui5/webcomponents-react', name, __dirname);
    if (result) {
      const cemEntry = cemLookup.get(name);
      if (cemEntry) enrichWithCem(result.api, cemEntry.decl);
      componentApis.webComponents[name] = result.api;
    }
  }

  // --- Charts ---
  console.log(`Found ${chartFiles.length} Chart components`);
  for (const file of chartFiles) {
    const name = file.split('/').slice(-2, -1)[0];
    if (!findComponentCategory(name, CHART_CATEGORIES)) {
      missingComponents.push(name);
    }
    const result = extractFullComponentApi(file, '@ui5/webcomponents-react-charts', name, __dirname);
    if (result) {
      if (result.description) {
        descriptions.charts[name] = { description: result.description, package: '@ui5/webcomponents-react-charts' };
      }
      componentApis.charts[name] = result.api;
    }
  }

  // --- AI components ---
  console.log(`Found ${aiFiles.length} AI components`);
  for (const file of aiFiles) {
    const name = file.split('/').slice(-2, -1)[0];
    if (!findComponentCategory(name, AI_CATEGORIES)) {
      missingComponents.push(name);
    }
    const result = extractFullComponentApi(file, '@ui5/webcomponents-ai-react', name, __dirname);
    descriptions.ai[name] = {
      description: aiDescriptions[name] || result?.description || 'AI-enhanced component',
      package: '@ui5/webcomponents-ai-react',
    };
    if (result) {
      const cemEntry = cemLookup.get(name);
      if (cemEntry) enrichWithCem(result.api, cemEntry.decl);
      componentApis.ai[name] = result.api;
    }
  }

  // --- Sub-type documentation (complex prop types) ---
  const subTypeDocsMap: Record<string, string> = {
    AnalyticalTable: join(UI5_WCR_PATH, 'packages/main/src/components/AnalyticalTable/docs/ColumnProperties.md'),
  };
  for (const [componentName, mdPath] of Object.entries(subTypeDocsMap)) {
    if (!existsSync(mdPath)) {
      console.warn(`  subTypeDocs not found: ${mdPath}`);
      continue;
    }
    // Find the component in any category
    for (const category of ['components', 'webComponents', 'charts', 'ai'] as const) {
      if (componentApis[category][componentName]) {
        componentApis[category][componentName].subTypeDocs = readFileSync(mdPath, 'utf-8');
        console.log(`Attached subTypeDocs for ${componentName}`);
        break;
      }
    }
  }

  // --- Metadata ---
  try {
    const wcrPkg = JSON.parse(readFileSync(join(UI5_WCR_PATH, 'packages/main/package.json'), 'utf-8'));
    const metadata = {
      version: wcrPkg.version,
      extractedAt: new Date().toISOString(),
      componentsCount: Object.keys(descriptions.components).length,
      webComponentsCount: Object.keys(descriptions.webComponents).length,
      chartsCount: Object.keys(descriptions.charts).length,
      aiCount: Object.keys(descriptions.ai).length,
    };
    descriptions.metadata = metadata;
    componentApis.metadata = metadata;
  } catch (error) {
    console.warn('Could not extract version info:', (error as Error).message);
  }

  // --- Write outputs ---
  const descPath = join(__dirname, '../src/tools/list_components/descriptions.json');
  writeFileSync(descPath, JSON.stringify(descriptions, null, 2));

  const apiPath = join(__dirname, '../src/tools/get_component_api/component-apis.json');
  writeFileSync(apiPath, JSON.stringify(componentApis, null, 2));

  // --- Summary ---
  console.log(`\nExtracted descriptions:`);
  console.log(`- React components: ${Object.keys(descriptions.components).length}`);
  console.log(`- Web Components: ${Object.keys(descriptions.webComponents).length}`);
  console.log(`- Charts: ${Object.keys(descriptions.charts).length}`);
  console.log(`- AI: ${Object.keys(descriptions.ai).length}`);

  console.log(`\nExtracted API data:`);
  console.log(`- React components: ${Object.keys(componentApis.components).length}`);
  console.log(`- Web Components: ${Object.keys(componentApis.webComponents).length}`);
  console.log(`- Charts: ${Object.keys(componentApis.charts).length}`);
  console.log(`- AI: ${Object.keys(componentApis.ai).length}`);

  if (descriptions.metadata) {
    console.log(`\nVersion: ${descriptions.metadata.version}`);
  }
  console.log(`CEM lookup: ${cemLookup.size} web component declarations loaded`);
  console.log(`\nSaved descriptions to: ${descPath}`);
  console.log(`Saved API data to: ${apiPath}`);

  if (missingComponents.length > 0) {
    console.error(`\nERROR: The following components are missing category definitions:`);
    missingComponents.forEach((name) => console.error(`   - ${name}`));
  }
}

main().catch(console.error);
