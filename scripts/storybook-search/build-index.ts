import { readFileSync, existsSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { parseArgs } from 'node:util';
import { glob } from 'glob';
import * as pagefind from 'pagefind';
import { extractComponentJSDoc, resolveComponentSource } from './extract-comp-description.ts';

interface StoryIndexEntry {
  id: string;
  type: string;
  name: string;
  title?: string;
  importPath?: string;
  tags?: string[];
}

// --- CLI args ---

const { values } = parseArgs({
  options: {
    directory: { type: 'string', short: 'd' },
  },
});

if (typeof values.directory !== 'string') {
  throw new Error('Expected --directory to be a string (e.g. --directory .out)');
}

const outDir = resolve(process.cwd(), values.directory);
const indexJsonPath = resolve(outDir, 'index.json');

if (!existsSync(indexJsonPath)) {
  throw new Error(`index.json not found at ${indexJsonPath}. Did you run "storybook build" first?`);
}

// --- Read Storybook index.json ---

const storiesJson = JSON.parse(readFileSync(indexJsonPath, 'utf-8'));
const entries: StoryIndexEntry[] = Object.values(storiesJson.entries);

const importPathToEntry = new Map<string, StoryIndexEntry>();
for (const entry of entries) {
  if (entry.type === 'docs' && entry.importPath?.endsWith('.mdx')) {
    importPathToEntry.set(entry.importPath, entry);
  }
}

console.log(`Found ${importPathToEntry.size} docs entries in index.json`);

const mdxFiles = await glob('**/*.mdx', {
  cwd: process.cwd(),
  ignore: ['node_modules/**', '.out/**', '**/node_modules/**'],
});

console.log(`Found ${mdxFiles.length} MDX files on disk`);

function extractTextFromMdx(source: string): string {
  const lines = source.split('\n');
  const textParts: string[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trimStart().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    if (/^\s*import\s/.test(line)) continue;
    if (/^\s*export\s/.test(line)) continue;

    // Skip JSX-only lines (tags with no text content)
    if (/^\s*<[A-Z][\w.]*[\s/>]/.test(line) && !/>([^<]+)</.test(line)) continue;
    if (/^\s*<\/[A-Z]/.test(line)) continue;
    if (/^\s*<Meta\s/.test(line)) continue;

    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      textParts.push(headingMatch[2].trim());
      continue;
    }

    const cleaned = line
      .replace(/<[^>]+>/g, '')
      .replace(/\{`([^`]*)`\}/g, '$1')
      .replace(/\{['"]([^'"]*)['"]\}/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
      .trim();

    if (cleaned.length > 0) {
      textParts.push(cleaned);
    }
  }

  return textParts.join(' ');
}

// --- Extract component descriptions from JSDoc ---

const componentDescriptions = new Map<string, string>();
for (const entry of entries) {
  if (entry.type !== 'docs' || !entry.importPath?.endsWith('.mdx')) continue;
  if (!entry.tags?.includes('attached-mdx')) continue;

  const sourceFile = resolveComponentSource(entry.importPath);
  if (!sourceFile) continue;

  const description = extractComponentJSDoc(sourceFile);
  if (description) {
    componentDescriptions.set(entry.importPath, description);
  }
}

console.log(`Extracted ${componentDescriptions.size} component descriptions from JSDoc`);

// --- Build Pagefind index ---

const { index } = await pagefind.createIndex();
if (!index) {
  throw new Error('Failed to create Pagefind index');
}

let indexed = 0;
let skipped = 0;

for (const mdxFile of mdxFiles) {
  const importPath = './' + mdxFile;
  const entry = importPathToEntry.get(importPath);

  if (!entry) {
    skipped++;
    continue;
  }

  const source = readFileSync(mdxFile, 'utf-8');
  const mdxText = extractTextFromMdx(source);

  const description = componentDescriptions.get(importPath);
  const text = description ? `${description} ${mdxText}` : mdxText;

  if (text.length < 10) {
    skipped++;
    continue;
  }

  const url = `?path=/docs/${entry.id}`;

  const category = entry.title?.split(' / ')[0] || 'Docs';
  const title = entry.title?.split(' / ').pop() || entry.name;

  const { errors } = await index.addCustomRecord({
    url,
    content: text,
    language: 'en',
    meta: {
      title: entry.title || title,
      category,
    },
  });

  if (errors?.length) {
    console.warn(`  Warning indexing ${mdxFile}:`, errors);
  } else {
    indexed++;
  }
}

console.log(`Indexed ${indexed} docs, skipped ${skipped} files (no matching entry or too short)`);

// --- Write index ---

const pagefindDir = resolve(outDir, 'pagefind');
const { errors: writeErrors } = await index.writeFiles({ outputPath: pagefindDir });

if (writeErrors?.length) {
  console.error('Errors writing Pagefind index:', writeErrors);
  process.exit(1);
}

console.log(`Pagefind index written to ${relative(process.cwd(), pagefindDir)}/`);

await pagefind.close();
