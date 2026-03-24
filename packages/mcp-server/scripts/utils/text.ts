/**
 * Text cleaning and naming utilities for component extraction.
 */

/**
 * Convert ui5-kebab-case component names to PascalCase.
 * e.g., "ui5-multi-combobox" → "MultiComboBox", "ui5-ai-button" → "Button"
 */
export function toPascalCase(kebabStr: string): string {
  const withoutPrefix = kebabStr.replace(/^ui5-(?:ai-)?/, '');
  return withoutPrefix
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Clean up a JSDoc description to a concise first-sentence summary.
 */
export function cleanJSDocDescription(description: string): string | null {
  if (!description) return null;

  const lines = description
    .split('\n')
    .map((line) => line.trim())
    .filter(
      (line) =>
        line &&
        !line.startsWith('@') &&
        !line.startsWith('__Note:__') &&
        !line.startsWith('###') &&
        !line.includes('UI5 Web Component!') &&
        !line.includes('Repository'),
    );

  let cleanDescription = '';
  for (const line of lines) {
    if (line.startsWith('##') || line.startsWith('*') || line.startsWith('|')) break;
    if (line) {
      cleanDescription += (cleanDescription ? ' ' : '') + line;
    }
  }

  if (!cleanDescription) return null;

  const sentenceEnd = cleanDescription.match(/\.\s/);
  if (sentenceEnd && sentenceEnd.index && sentenceEnd.index < 300) {
    return cleanDescription.substring(0, sentenceEnd.index + 1).trim();
  } else if (cleanDescription.length > 200) {
    const truncated = cleanDescription.substring(0, 200);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 150) {
      return truncated.substring(0, lastSpace) + '...';
    }
  }

  return cleanDescription;
}

/**
 * Find the category for a component in a categories map.
 */
export function findComponentCategory(componentName: string, categories: Record<string, string[]>): string | null {
  for (const [category, components] of Object.entries(categories)) {
    if (components.includes(componentName)) {
      return category;
    }
  }
  return null;
}
