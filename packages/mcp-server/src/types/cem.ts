/**
 * Custom Elements Manifest (CEM) types.
 * Used by extract_component_descriptions.ts to enrich component API data
 * with event details and CSS parts from the UI5 Web Components manifests.
 *
 * TODO: The CLI package (`@ui5/webcomponents-react-cli`) uses CEM types from
 * the external `@ui5/webcomponents-tools` package. Consider sharing by either:
 * - Adding a subpath export to the CLI package for its CEM utilities
 * - Creating a shared internal package for CEM types and helpers
 * See also: packages/cli/src/util/cem-reader.ts, packages/cli/src/util/formatters.ts
 */

export interface CemEventParam {
  name: string;
  type: { text: string };
  description: string;
  _ui5privacy?: string;
}

export interface CemEvent {
  name: string;
  description: string;
  _ui5privacy?: string;
  _ui5Cancelable?: boolean;
  _ui5allowPreventDefault?: boolean;
  _ui5Bubbles?: boolean;
  _ui5parameters?: CemEventParam[];
}

export interface CemCssPart {
  name: string;
  description: string;
}

export interface CemDeclaration {
  name?: string;
  tagName?: string;
  description?: string;
  events?: CemEvent[];
  cssParts?: CemCssPart[];
  members?: unknown[];
  slots?: unknown[];
  superclass?: { name: string; package: string; module: string } | null;
}

export interface CemModule {
  declarations?: CemDeclaration[];
}

export interface CemManifest {
  modules?: CemModule[];
}
