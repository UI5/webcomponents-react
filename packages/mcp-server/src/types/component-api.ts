/**
 * Component API types.
 * Shared between extract_component_descriptions.ts (script) and get_component_api.ts (runtime).
 */

export interface TypeInfo {
  name: string;
  raw?: string;
  value?: unknown;
}

export interface EventDetailParam {
  name: string;
  type: string;
  description: string;
}

export interface EventDetail {
  params: EventDetailParam[];
  cancelable: boolean;
  bubbles: boolean;
}

export interface CleanedProp {
  type: TypeInfo;
  required: boolean;
  description: string;
  defaultValue?: {
    value: string;
  };
  eventDetail?: EventDetail;
}

export interface MethodParam {
  name: string;
  type: { name: string };
  description: string;
}

export interface MethodInfo {
  name: string;
  description: string;
  params: MethodParam[];
  returns: {
    type: string;
  } | null;
}

export interface CssPart {
  name: string;
  description: string;
}

export interface ComponentApiData {
  package: string;
  description: string;
  props: Record<string, CleanedProp>;
  methods: MethodInfo[];
  cssParts?: CssPart[];
  /** Additional documentation for complex prop types (e.g. column definition shape). */
  subTypeDocs?: string;
}

export interface ComponentDescription {
  description: string;
  package: string;
}

export interface ApiMetadata {
  version: string;
  extractedAt: string;
  componentsCount: number;
  webComponentsCount: number;
  chartsCount: number;
  aiCount: number;
}

export interface DescriptionsStore {
  components: Record<string, ComponentDescription>;
  webComponents: Record<string, ComponentDescription>;
  charts: Record<string, ComponentDescription>;
  ai: Record<string, ComponentDescription>;
  metadata?: ApiMetadata;
}

export interface ApiDataStore {
  components: Record<string, ComponentApiData>;
  webComponents: Record<string, ComponentApiData>;
  charts: Record<string, ComponentApiData>;
  ai: Record<string, ComponentApiData>;
  metadata?: ApiMetadata;
}
