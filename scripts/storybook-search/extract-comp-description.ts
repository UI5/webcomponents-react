import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

// Finds the last `/** ... */ const Name =` in a component file and extracts
// the description text, stripping JSDoc markers, @tags, tables, and boilerplate.
export function extractComponentJSDoc(filePath: string): string | null {
  if (!existsSync(filePath)) return null;

  const source = readFileSync(filePath, 'utf-8');

  // Locate `*/ const Name =` then walk backwards to find the opening `/**`
  const constPattern = /\*\/\s*\n\s*(?:export\s+)?const\s+\w+\s*=/g;
  let constMatch: RegExpExecArray | null;
  let lastJSDoc: string | null = null;

  while ((constMatch = constPattern.exec(source)) !== null) {
    const closeIndex = constMatch.index;
    const before = source.substring(0, closeIndex);
    const openIndex = before.lastIndexOf('/**');
    if (openIndex === -1) continue;
    lastJSDoc = source.substring(openIndex + 3, closeIndex);
  }
  if (!lastJSDoc) return null;

  const lines = lastJSDoc.split('\n').map((line) => line.replace(/^\s*\*\s?/, '').trim());

  const textParts: string[] = [];
  for (const line of lines) {
    if (line.startsWith('@')) continue;
    if (line.startsWith('__Note:__') || line.startsWith('__Note__:')) continue;
    if (line.startsWith('|') || line.startsWith('---')) continue;
    if (line.includes('UI5 Web Component!') || line.includes('Repository')) continue;
    if (line.startsWith('##')) continue;

    const cleaned = line
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim();

    if (cleaned) textParts.push(cleaned);
  }

  return textParts.length > 0 ? textParts.join(' ') : null;
}

// Resolves MDX importPath to the component's index.tsx.
// Handles docs/ subdirectories (e.g. components/AnalyticalTable/docs/AnalyticalTable.mdx).
export function resolveComponentSource(mdxImportPath: string): string | null {
  const mdxPath = mdxImportPath.replace(/^\.\//, '');
  const mdxDir = dirname(mdxPath);

  const componentDir = mdxDir.endsWith('/docs') ? dirname(mdxDir) : mdxDir;

  for (const ext of ['index.tsx', 'index.ts']) {
    const candidate = resolve(componentDir, ext);
    if (existsSync(candidate)) return candidate;
  }

  return null;
}
