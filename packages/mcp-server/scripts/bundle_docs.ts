#!/usr/bin/env tsx

/**
 * Bundle documentation files from the monorepo into the MCP server package.
 * Copies MDX/MD/TS files referenced in documentation_sections.json to docs/.
 *
 * For entries with a companion `data_source` (JSON), generates LLM-friendly
 * markdown instead of copying raw MDX (which may contain JSX components).
 *
 * Usage:
 *   npm run bundle:docs
 *
 * TODO: Re-evaluate adding "UXC Integration" to documentation_sections.json
 * once the UXC docs page has bundleable content (currently metadata-only,
 * removed because fetchContent would return "not available locally").
 */

import type { DocumentationData } from '../src/types/index.js';

import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MONOREPO_ROOT = join(__dirname, '../../..');
const DOCS_DIR = join(__dirname, '../docs');
const SECTIONS_PATH = join(__dirname, '../src/tools/get_documentation/documentation_sections.json');

const REPO_BASE = 'https://github.com/UI5/webcomponents-react/tree/main/';

/**
 * Generate a flat, safe filename for the docs/ directory.
 * e.g., "docs/knowledge-base/FAQ.mdx" → "docs--knowledge-base--FAQ.mdx"
 */
function toLocalFilename(relativePath: string): string {
  return relativePath.replace(/\//g, '--');
}

interface ProjectTemplate {
  name: string;
  variant?: string;
  framework: string;
  type: 'template' | 'example';
  path: string;
  typescript?: boolean;
  stackBlitz?: string;
  features?: string[];
}

/**
 * Generate LLM-friendly markdown from project-templates.json
 */
function generateTemplateMarkdown(dataSourcePath: string): string {
  const fullPath = join(MONOREPO_ROOT, dataSourcePath);
  if (!existsSync(fullPath)) {
    console.warn(`  Data source not found: ${dataSourcePath}`);
    return '';
  }

  const templates: ProjectTemplate[] = JSON.parse(readFileSync(fullPath, 'utf-8'));
  const templateEntries = templates.filter((t) => t.type === 'template');
  const exampleEntries = templates.filter((t) => t.type === 'example');

  let md = '# Project Templates & Examples\n\n';
  md += 'Official project templates and examples for UI5 Web Components for React.\n';
  md += 'When creating a new application, use these templates instead of scaffolding from scratch.\n\n';

  md += '## Templates (use for new projects)\n\n';
  for (const t of templateEntries) {
    const label = t.variant ? `${t.name} (${t.variant})` : t.name;
    md += `### ${label}\n`;
    md += `- **GitHub**: ${REPO_BASE}${t.path}\n`;
    if (t.stackBlitz) {
      md += `- **StackBlitz**: ${t.stackBlitz}\n`;
    }
    if (t.typescript) {
      md += `- **Language**: TypeScript\n`;
    }
    md += '\n';
  }

  md += '## Examples (use as reference)\n\n';
  for (const t of exampleEntries) {
    const label = t.variant ? `${t.name} (${t.variant})` : t.name;
    md += `### ${label}\n`;
    md += `- **GitHub**: ${REPO_BASE}${t.path}\n`;
    if (t.stackBlitz) {
      md += `- **StackBlitz**: ${t.stackBlitz}\n`;
    }
    if (t.typescript) {
      md += `- **Language**: TypeScript\n`;
    }
    if (t.features?.length) {
      md += `- **Features**:\n`;
      for (const f of t.features) {
        md += `  - ${f}\n`;
      }
    }
    md += '\n';
  }

  return md;
}

function main() {
  console.log('Bundling documentation files...\n');

  mkdirSync(DOCS_DIR, { recursive: true });

  const docsData: DocumentationData = JSON.parse(readFileSync(SECTIONS_PATH, 'utf-8'));

  let copied = 0;
  let generated = 0;
  let skipped = 0;

  function processEntry(entry: { sourcePath?: string; dataSource?: string; localPath?: string }) {
    // If a dataSource is provided, generate LLM-friendly markdown from it
    if (entry.dataSource) {
      const localFilename = toLocalFilename(entry.dataSource).replace(/\.json$/, '.md');
      const destPath = join(DOCS_DIR, localFilename);
      const content = generateTemplateMarkdown(entry.dataSource);
      if (content) {
        writeFileSync(destPath, content);
        entry.localPath = localFilename;
        generated++;
        console.log(`  ${entry.dataSource} -> docs/${localFilename} (generated)`);
      }
      return;
    }

    if (!entry.sourcePath) return;

    const sourcePath = join(MONOREPO_ROOT, entry.sourcePath);
    const localFilename = toLocalFilename(entry.sourcePath);
    const destPath = join(DOCS_DIR, localFilename);

    try {
      cpSync(sourcePath, destPath);
      entry.localPath = localFilename;
      copied++;
      console.log(`  ${entry.sourcePath} -> docs/${localFilename}`);
    } catch (error) {
      console.warn(`  Failed to copy ${entry.sourcePath}: ${(error as Error).message}`);
      skipped++;
    }
  }

  for (const section of docsData.sections) {
    processEntry(section);

    if (section.subsections) {
      for (const subsection of section.subsections) {
        processEntry(subsection);
      }
    }
  }

  writeFileSync(SECTIONS_PATH, JSON.stringify(docsData, null, 2) + '\n');

  console.log(`\nBundled ${copied} documentation files to docs/`);
  if (generated > 0) {
    console.log(`Generated ${generated} files from data sources`);
  }
  if (skipped > 0) {
    console.log(`Skipped ${skipped} files`);
  }
  console.log(`Updated ${SECTIONS_PATH}`);
}

main();
