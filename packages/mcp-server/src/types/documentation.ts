/**
 * Documentation section types.
 * Shared between bundle_docs.ts (script) and get_documentation.ts (runtime).
 */

export interface DocumentationSubsection {
  name: string;
  description: string;
  link: string;
  /** Monorepo-relative path to the source file (e.g., "docs/knowledge-base/Styling.mdx"). Used by bundle_docs.ts at build time. */
  sourcePath?: string;
  /** Monorepo-relative path to a JSON data source. When set, bundle_docs.ts generates LLM-friendly markdown from the data instead of copying the raw source file. */
  dataSource?: string;
  /** Flat filename in the bundled docs/ directory (e.g., "docs--knowledge-base--Styling.mdx"). Set by bundle_docs.ts, used at runtime. */
  localPath?: string;
  content: string[];
  tags: string[];
}

export interface DocumentationSection {
  name: string;
  description: string;
  link?: string;
  /** Monorepo-relative path to the source file. Used by bundle_docs.ts at build time. */
  sourcePath?: string;
  /** Monorepo-relative path to a JSON data source. When set, bundle_docs.ts generates LLM-friendly markdown from the data instead of copying the raw source file. */
  dataSource?: string;
  /** Flat filename in the bundled docs/ directory. Set by bundle_docs.ts, used at runtime. */
  localPath?: string;
  content?: string[];
  tags?: string[];
  subsections?: DocumentationSubsection[];
}

export interface DocumentationData {
  sections: DocumentationSection[];
}
