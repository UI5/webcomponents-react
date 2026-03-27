/**
 * Fetch upstream skill documents from the UI5 Web Components repo.
 * Strips YAML frontmatter and adds a header note for React context.
 *
 * The consuming LLM agent resolves web component tag names and
 * kebab-case attributes to React equivalents via `get_component_api`.
 *
 * Usage:
 *   npm run fetch:skills
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOCS_DIR = join(__dirname, '../docs');

interface UpstreamSkill {
  url: string;
  outputFile: string;
}

const SKILLS: UpstreamSkill[] = [
  {
    url: 'https://raw.githubusercontent.com/UI5/webcomponents/main/skills/accessibility/SKILL.md',
    outputFile: 'upstream--accessibility.mdx',
  },
];

/** Strip YAML frontmatter (content between --- markers at start of file) */
function stripFrontmatter(content: string): string {
  const match = content.match(/^---\n[\s\S]*?\n---\n?/);
  return match ? content.slice(match[0].length) : content;
}

const HEADER = `> This document is adapted from the [UI5 Web Components Accessibility Skill](https://github.com/UI5/webcomponents/blob/main/skills/accessibility/SKILL.md).
> Code examples use HTML web component syntax (\`<ui5-button>\`, \`accessible-name\`).
> Use \`get_component_api\` to look up the corresponding React component names and camelCase props.

`;

async function fetchAndAdapt(skill: UpstreamSkill): Promise<void> {
  console.log(`Fetching: ${skill.url}`);

  const response = await fetch(skill.url);
  if (!response.ok) {
    throw new Error(`Failed to fetch upstream skill from ${skill.url}. HTTP status: ${response.status}`);
  }

  let content = await response.text();
  content = stripFrontmatter(content);
  content = HEADER + content;

  const outputPath = join(DOCS_DIR, skill.outputFile);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, content);

  console.log(`  → ${outputPath}`);
}

async function main() {
  console.log('Fetching upstream skills...\n');

  for (const skill of SKILLS) {
    await fetchAndAdapt(skill);
  }

  console.log('\nDone.');
}

main().catch((err: Error) => {
  console.error(err.message || err);
  process.exit(1);
});
