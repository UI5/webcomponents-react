/**
 * React-docgen-typescript extraction helpers.
 * Parses component files for props, methods, and type information.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as docgen from 'react-docgen-typescript';
import type { PropItem } from 'react-docgen-typescript';
import type { TypeInfo, CleanedProp, MethodInfo, MethodParam, ComponentApiData } from '../../src/types/index.js';
import { cleanJSDocDescription } from './text.js';

const parser = docgen.withDefaultConfig({
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
});

/**
 * Clean up type information to remove redundant fields.
 * Strips fullComment, tags from enum values to reduce file size.
 */
export function cleanTypeInfo(type: PropItem['type']): TypeInfo {
  if (!type) return { name: 'unknown' };

  const cleaned: TypeInfo = { name: type.name };

  if (type.raw) {
    cleaned.raw = type.raw;
  }

  if (type.value && Array.isArray(type.value)) {
    cleaned.value = type.value.map((val: any) => {
      if (typeof val === 'object' && val !== null) {
        const cleanedVal: any = { value: val.value };
        if (val.description) {
          cleanedVal.description = val.description;
        }
        return cleanedVal;
      }
      return val;
    });
  } else if (type.value) {
    cleaned.value = type.value;
  }

  return cleaned;
}

// todo: there are custom events that have the same name as commonprops, do not just filter them out
/**
 * Check if a prop comes from CommonProps/HTMLAttributes.
 * These are filtered out to reduce file size.
 */
export function isCommonProp(propName: string, propData: PropItem): boolean {
  const parentName = propData.parent?.name || '';
  if (
    parentName.includes('HTMLAttributes') ||
    parentName.includes('CommonProps') ||
    parentName.includes('DOMAttributes') ||
    parentName.includes('AriaAttributes')
  ) {
    return true;
  }

  const htmlAttributes = [
    'className',
    'style',
    'id',
    'title',
    'slot',
    'ref',
    'onClick',
    'onDoubleClick',
    'onMouseDown',
    'onMouseUp',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOver',
    'onMouseOut',
    'onKeyDown',
    'onKeyUp',
    'onKeyPress',
    'onFocus',
    'onBlur',
    'onChange',
    'onInput',
    'onSubmit',
    'onContextMenu',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
  ];

  if (htmlAttributes.includes(propName)) {
    const desc = propData.description || '';
    if (desc && !desc.includes('HTMLAttributes') && !desc.includes('DOMAttributes')) {
      return false;
    }
    return true;
  }

  if (propName.startsWith('aria-') || propName.startsWith('data-')) {
    return true;
  }

  return false;
}

/**
 * Extract methods from DomRef interface in .d.ts file.
 * Parses the DomRef interface to find method signatures.
 */
export function extractDomRefMethods(componentName: string, packagePath: string, scriptDir: string): MethodInfo[] {
  try {
    const typeDefPath = join(
      scriptDir,
      '../node_modules',
      packagePath,
      'dist/webComponents',
      componentName,
      'index.d.ts',
    );
    const content = readFileSync(typeDefPath, 'utf-8');

    const domRefInterfaceName = `${componentName}DomRef`;
    const interfaceStart = content.indexOf(`interface ${domRefInterfaceName}`);
    if (interfaceStart === -1) return [];

    const openBrace = content.indexOf('{', interfaceStart);
    if (openBrace === -1) return [];

    let braceCount = 1;
    let pos = openBrace + 1;
    while (pos < content.length && braceCount > 0) {
      if (content[pos] === '{') braceCount++;
      if (content[pos] === '}') braceCount--;
      pos++;
    }
    if (braceCount !== 0) return [];

    const interfaceBody = content.substring(openBrace + 1, pos - 1);
    const methods: MethodInfo[] = [];

    const methodRegex = /\/\*\*([\s\S]*?)\*\/\s*(\w+):\s*(\([^)]*\)\s*=>\s*[^;]+);/g;
    let methodMatch;

    while ((methodMatch = methodRegex.exec(interfaceBody)) !== null) {
      const jsdoc = methodMatch[1];
      const methodName = methodMatch[2];
      const signature = methodMatch[3];

      const descLines = jsdoc
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '').trim())
        .filter((line) => line && !line.startsWith('@'));
      const description = descLines.join(' ');

      const paramsMatch = signature.match(/\(([^)]*)\)/);
      const params: MethodParam[] = [];
      if (paramsMatch && paramsMatch[1].trim()) {
        for (const param of paramsMatch[1].split(',')) {
          const paramParts = param.trim().split(':');
          if (paramParts.length >= 2) {
            params.push({
              name: paramParts[0].trim(),
              type: { name: paramParts[1].trim() },
              description: '',
            });
          }
        }
      }

      const returnMatch = signature.match(/=>\s*(.+)$/);
      const returns = returnMatch ? { type: returnMatch[1].trim() } : null;

      methods.push({ name: methodName, description, params, returns });
    }

    return methods;
  } catch {
    return [];
  }
}

/**
 * Extract full component API data using react-docgen-typescript.
 * Returns complete props, methods, types, and JSDoc metadata.
 * Also returns the cleaned JSDoc description separately to avoid a second parse.
 */
export function extractFullComponentApi(
  filePath: string,
  packageName: string,
  componentName: string,
  scriptDir: string,
): { api: ComponentApiData; description: string | null } | null {
  try {
    const componentDocs = parser.parse(filePath);
    if (componentDocs.length === 0) return null;

    const doc = componentDocs[0];
    const description = doc.description ? cleanJSDocDescription(doc.description) : null;

    const cleanedProps: Record<string, CleanedProp> = {};
    if (doc.props) {
      for (const [propName, propData] of Object.entries(doc.props)) {
        if (isCommonProp(propName, propData)) continue;
        if (propName.includes('@') && propName.match(/@\d+/)) continue;

        const prop: CleanedProp = {
          type: cleanTypeInfo(propData.type),
          required: propData.required,
          description: propData.description || '',
        };

        if (
          propData.defaultValue !== null &&
          propData.defaultValue !== undefined &&
          propData.defaultValue.value !== 'undefined'
        ) {
          prop.defaultValue = propData.defaultValue;
        }

        cleanedProps[propName] = prop;
      }
    }

    let cleanedMethods = extractDomRefMethods(componentName, packageName, scriptDir);

    if (cleanedMethods.length === 0 && doc.methods) {
      cleanedMethods = doc.methods.map((method) => ({
        name: method.name,
        description: method.description || '',
        params: (method.params || []).map((param) => ({
          name: param.name,
          description: param.description || '',
          type: param.type,
        })),
        returns: method.returns || null,
      }));
    }

    const descriptionWithNote =
      (doc.description || '') +
      '\n\n**Note:** This component also accepts all standard HTML attributes (className, style, id, data-*, aria-*, event handlers like onClick, onMouseEnter, etc.) via `CommonProps`.';

    return {
      api: {
        package: packageName,
        description: descriptionWithNote,
        props: cleanedProps,
        methods: cleanedMethods,
      },
      description,
    };
  } catch {
    return null;
  }
}
