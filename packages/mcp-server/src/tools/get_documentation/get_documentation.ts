/**
 * @fileOverview get_documentation tool
 * Provides access to UI5 Web Components for React documentation, FAQ, guides, and patterns
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';
import type { DocumentationData } from '../../types/index.js';
import { createTextResponse, handleToolError } from '../../utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type GetDocumentationPayload = {
  section?: string;
  query?: string;
  fetchContent?: boolean;
  startLine?: number;
  endLine?: number;
};

// Load documentation metadata at module initialization
let DOCS_DATA: DocumentationData = { sections: [] };

try {
  const docsDataPath = join(__dirname, 'documentation_sections.json');
  DOCS_DATA = JSON.parse(readFileSync(docsDataPath, 'utf-8'));
} catch (error) {
  console.warn('Could not load documentation metadata:', error);
}

/**
 * Get all available section names with descriptions
 */
function getAllSectionNames(): Array<{ name: string; description: string }> {
  const sections: Array<{ name: string; description: string }> = [];

  for (const section of DOCS_DATA.sections) {
    if (section.link) {
      sections.push({
        name: section.name,
        description: section.description,
      });
    }

    if (section.subsections) {
      for (const subsection of section.subsections) {
        sections.push({
          name: `${section.name} > ${subsection.name}`,
          description: subsection.description,
        });
      }
    }
  }

  return sections;
}

/**
 * Get documentation by section name (human-readable)
 */
function getDocumentationBySection(sectionName: string): Array<{
  section: string;
  subsection?: string;
  description: string;
  link: string;
  localPath?: string;
  content: string[];
  tags: string[];
}> {
  for (const section of DOCS_DATA.sections) {
    // Check if it's a direct section match
    if (section.link && section.name === sectionName) {
      return [
        {
          section: section.name,
          description: section.description,
          link: section.link,
          localPath: section.localPath,
          content: section.content || [],
          tags: section.tags || [],
        },
      ];
    }

    // Check subsections (format: "Section > Subsection")
    if (section.subsections) {
      for (const subsection of section.subsections) {
        const fullName = `${section.name} > ${subsection.name}`;
        if (fullName === sectionName) {
          return [
            {
              section: section.name,
              subsection: subsection.name,
              description: subsection.description,
              link: subsection.link,
              localPath: subsection.localPath,
              content: subsection.content,
              tags: subsection.tags,
            },
          ];
        }
      }
    }
  }

  return [];
}

/**
 * Search for documentation sections matching a query
 */
function searchDocumentation(query: string): Array<{
  section: string;
  subsection?: string;
  description: string;
  link: string;
  localPath?: string;
  content: string[];
  tags: string[];
  matchReason: string;
}> {
  const results: Array<{
    section: string;
    subsection?: string;
    description: string;
    link: string;
    localPath?: string;
    content: string[];
    tags: string[];
    matchReason: string;
  }> = [];

  const lowerQuery = query.toLowerCase();

  for (const section of DOCS_DATA.sections) {
    // Check if section matches
    const sectionNameMatch = section.name.toLowerCase().includes(lowerQuery);
    const sectionDescMatch = section.description.toLowerCase().includes(lowerQuery);
    const sectionTagMatch = section.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery));

    if (sectionNameMatch || sectionDescMatch || sectionTagMatch) {
      if (section.link) {
        // Section has direct content
        results.push({
          section: section.name,
          description: section.description,
          link: section.link,
          localPath: section.localPath,
          content: section.content || [],
          tags: section.tags || [],
          matchReason: sectionNameMatch ? 'name' : sectionDescMatch ? 'description' : 'tag',
        });
      }
    }

    // Check subsections
    if (section.subsections) {
      for (const subsection of section.subsections) {
        const subNameMatch = subsection.name.toLowerCase().includes(lowerQuery);
        const subDescMatch = subsection.description.toLowerCase().includes(lowerQuery);
        const subTagMatch = subsection.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
        const subContentMatch = subsection.content.some((item) => item.toLowerCase().includes(lowerQuery));

        if (subNameMatch || subDescMatch || subTagMatch || subContentMatch) {
          results.push({
            section: section.name,
            subsection: subsection.name,
            description: subsection.description,
            link: subsection.link,
            localPath: subsection.localPath,
            content: subsection.content,
            tags: subsection.tags,
            matchReason: subNameMatch ? 'name' : subDescMatch ? 'description' : subTagMatch ? 'tag' : 'content',
          });
        }
      }
    }
  }

  return results;
}

// Path to bundled documentation files
const DOCS_DIR = join(__dirname, '..', '..', '..', 'docs');

/**
 * Read documentation content from bundled local file.
 * Optionally extracts a specific line range.
 */
function readDocContent(localPath?: string, startLine?: number, endLine?: number): string {
  let fullContent: string | null = null;

  if (localPath) {
    try {
      fullContent = readFileSync(join(DOCS_DIR, localPath), 'utf-8');
    } catch {
      // File not found
    }
  }

  if (!fullContent) {
    return 'Documentation content not available locally. The bundled docs may need to be regenerated with `npm run bundle:docs`.';
  }

  // Apply line range if specified
  if (startLine || endLine) {
    const lines = fullContent.split('\n');
    const start = Math.max(1, startLine || 1) - 1; // Convert to 0-indexed
    const end = Math.min(lines.length, endLine || lines.length);
    const sliced = lines.slice(start, end);
    return `[Lines ${start + 1}-${end} of ${lines.length}]\n\n${sliced.join('\n')}`;
  }

  return fullContent;
}

/**
 * Format search results as markdown
 */
function formatResults(
  results: Array<{
    section: string;
    subsection?: string;
    description: string;
    link: string;
    localPath?: string;
    content: string[];
    tags: string[];
  }>,
  fetchedContent?: Map<string, string>,
): string {
  if (results.length === 0) {
    return '# No Documentation Found\n\nNo documentation sections matched your query.';
  }

  let output = `# Documentation Results\n\nFound ${results.length} matching documentation ${results.length === 1 ? 'section' : 'sections'}:\n\n`;

  for (const result of results) {
    const title = result.subsection ? `${result.section} > ${result.subsection}` : result.section;

    output += `## ${title}\n\n`;
    output += `${result.description}\n\n`;
    output += `**Link:** ${result.link}\n\n`;

    if (result.content.length > 0) {
      output += `**Topics Covered:**\n`;
      for (const item of result.content) {
        output += `- ${item}\n`;
      }
      output += '\n';
    }

    if (result.tags.length > 0) {
      output += `**Tags:** ${result.tags.join(', ')}\n\n`;
    }

    // Include fetched content if available
    if (fetchedContent && fetchedContent.has(result.link)) {
      const content = fetchedContent.get(result.link);
      if (content) {
        output += `**Documentation Content:**\n\n${content}\n\n`;
      }
    }

    output += '---\n\n';
  }

  return output;
}

/**
 * List all available documentation sections
 */
function listAllDocumentation(): string {
  let output = `# UI5 Web Components for React Documentation\n\n`;
  output += `Complete documentation catalog with ${DOCS_DATA.sections.length} main sections and 19 total pages.\n\n`;

  for (const section of DOCS_DATA.sections) {
    output += `## ${section.name}\n\n`;
    output += `${section.description}\n\n`;

    if (section.link) {
      output += `**Link:** ${section.link}\n\n`;
    }

    if (section.tags && section.tags.length > 0) {
      output += `**Tags:** ${section.tags.join(', ')}\n\n`;
    }

    if (section.subsections) {
      output += `**Subsections:**\n\n`;
      for (const subsection of section.subsections) {
        output += `### ${subsection.name}\n\n`;
        output += `${subsection.description}\n\n`;
        output += `**Link:** ${subsection.link}\n\n`;
        if (subsection.tags.length > 0) {
          output += `**Tags:** ${subsection.tags.join(', ')}\n\n`;
        }
      }
    }

    output += '---\n\n';
  }

  output += `\n## How to Use\n\n`;
  output += `### Direct Access (by section name)\n\n`;
  output += `Use the \`section\` parameter with the exact section name:\n\n`;
  output += `**Examples:**\n`;
  output += `- \`get_documentation({ section: "Getting Started" })\`\n`;
  output += `- \`get_documentation({ section: "Knowledge Base > Styling" })\`\n\n`;

  output += `### Flexible Search (by query)\n\n`;
  output += `Use the \`query\` parameter to search across all documentation:\n\n`;
  output += `**Examples:**\n`;
  output += `- \`get_documentation({ query: "styling" })\` - Find all styling-related docs\n`;
  output += `- \`get_documentation({ query: "i18n" })\` - Find internationalization docs\n\n`;

  output += `### Fetch Full Content\n\n`;
  output += `Add \`fetchContent: true\` to retrieve the full documentation markdown content:\n\n`;
  output += `- \`get_documentation({ section: "Knowledge Base > FAQ", fetchContent: true })\`\n`;
  output += `- \`get_documentation({ query: "styling", fetchContent: true })\`\n\n`;

  output += `### Line Range (for large documents)\n\n`;
  output += `Use \`startLine\` and \`endLine\` to read specific portions:\n\n`;
  output += `- \`get_documentation({ section: "Getting Started", fetchContent: true, startLine: 1, endLine: 50 })\`\n`;

  return output;
}

// ============================================================================
// TOOL DEFINITION
// ============================================================================

export const getDocumentationTool = {
  name: 'get_documentation',
  title: 'Documentation & Guides',
  annotations: {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  description:
    'Retrieve UI5 Web Components for React documentation, guides, and knowledge base articles. ' +
    'Documentation is bundled locally for instant offline access.\n\n' +
    'WHEN TO USE: You need guidance on how to use the library — setup, styling, event handling, SSR, slots, i18n.\n' +
    'DO NOT USE FOR: Looking up specific component props or methods — use get_component_api instead. For public utilities/hooks from @ui5/webcomponents-react-base — use get_public_utils.\n' +
    'WORKFLOW: Call without parameters to see all available sections. Use section parameter for direct access, query for search.\n' +
    'LIMITS: When fetchContent is true, full content is returned for at most 3 matching sections to control output size.\n\n' +
    'EXAMPLE INPUT: { "section": "Knowledge Base > Styling", "fetchContent": true }\n' +
    'EXAMPLE INPUT: { "query": "i18n", "fetchContent": true }\n' +
    'EXAMPLE INPUT: {} (returns catalog of all documentation sections)',
  inputSchema: {
    section: z
      .enum([
        'Getting Started',
        'Project Templates & Examples',
        'Knowledge Base > Bring Your Own Web Components',
        'Knowledge Base > Common CSS',
        'Knowledge Base > FAQ',
        'Knowledge Base > Handling Slots',
        'Knowledge Base > IDs via dataset',
        'Knowledge Base > Internationalization',
        'Knowledge Base > Public Utils',
        'Knowledge Base > Server Side Rendering',
        'Knowledge Base > Styling',
        'Knowledge Base > Accessibility',
        'Patterns > Docs',
        'Patterns > SelectionAssistant (Exp)',
      ])
      .optional()
      .describe(
        'Specific documentation section to retrieve by exact name. ' +
          'Use this for direct access when you know which section you need. ' +
          'Examples: "Getting Started", "Migration Guide", "Knowledge Base > Styling", ' +
          '"Knowledge Base > Internationalization". ' +
          'Mutually exclusive with query parameter.',
      ),
    query: z
      .string()
      .optional()
      .describe(
        'Free-form search query to find relevant documentation. ' +
          'Searches across section names, descriptions, tags, and content topics. ' +
          'Examples: "styling", "migration", "i18n", "ssr", "slots", "forms". ' +
          "Use this for exploratory search when you're not sure which section you need. " +
          'Mutually exclusive with section parameter.',
      ),
    fetchContent: z
      .boolean()
      .optional()
      .default(false)
      .describe(
        'Whether to include the full documentation markdown content. ' +
          'Set to true to retrieve full documentation text in addition to metadata. ' +
          'Content is read from bundled local files (no network required). ' +
          'Useful when you need detailed information beyond the summary.',
      ),
    startLine: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'Start line number (1-based, inclusive) for reading a portion of the documentation. ' +
          'Requires fetchContent: true. Useful for large documents like the Change Log or Migration Guide.',
      ),
    endLine: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'End line number (1-based, inclusive) for reading a portion of the documentation. ' +
          'Requires fetchContent: true. If omitted with startLine, reads to end of file.',
      ),
  },
  handler: ({ section, query, fetchContent = false, startLine, endLine }: GetDocumentationPayload) => {
    try {
      // Validate line range parameters
      if ((startLine || endLine) && !fetchContent) {
        return createTextResponse('Error: startLine/endLine require fetchContent: true.');
      }
      if (startLine && endLine && startLine > endLine) {
        return createTextResponse('Error: startLine must be less than or equal to endLine.');
      }

      // Validate that only one search method is used
      if (section && query) {
        return createTextResponse(
          'Error: Please provide either "section" OR "query", not both.\n\n' +
            '- Use "section" for direct access to a specific documentation page\n' +
            '- Use "query" for flexible search across all documentation\n' +
            '- Omit both to see all available sections',
        );
      }

      // If no parameters, return all documentation overview
      if (!section && !query) {
        return createTextResponse(listAllDocumentation());
      }

      // Get results based on section or query
      let results: Array<{
        section: string;
        subsection?: string;
        description: string;
        link: string;
        localPath?: string;
        content: string[];
        tags: string[];
      }> = [];

      if (section) {
        // Direct section access
        results = getDocumentationBySection(section);
        if (results.length === 0) {
          const availableSections = getAllSectionNames();
          return createTextResponse(
            `Section "${section}" not found.\n\n` +
              `Available sections:\n${availableSections.map((s) => `- ${s.name}`).join('\n')}`,
          );
        }
      } else if (query) {
        // Flexible search
        results = searchDocumentation(query);
      }

      // Optionally read documentation content from bundled local files
      let fetchedContent: Map<string, string> | undefined;
      if (fetchContent && results.length > 0) {
        fetchedContent = new Map();

        // Limit to first 3 results to avoid excessive output
        const resultsToFetch = results.slice(0, 3);

        for (const result of resultsToFetch) {
          const content = readDocContent(result.localPath, startLine, endLine);
          if (content) {
            fetchedContent.set(result.link, content);
          }
        }
      }

      return createTextResponse(formatResults(results, fetchedContent));
    } catch (error) {
      return handleToolError(
        error,
        `Error retrieving documentation${section ? ` for section: ${section}` : query ? ` for query: ${query}` : ''}`,
      );
    }
  },
};
