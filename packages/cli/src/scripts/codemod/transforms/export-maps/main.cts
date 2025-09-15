/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call */

import fs from 'fs';
import path from 'path';
import type { API, FileInfo, JSCodeshift, Collection } from 'jscodeshift';

const packageName = '@ui5/webcomponents-react';
const libraryPath = require.resolve('@ui5/webcomponents-react/package.json');
const enumsDir = path.join(path.dirname(libraryPath), 'dist', 'enums');

// build enum names dynamically from dist/enums filenames
let enumNames: Set<string> = new Set();

try {
  enumNames = new Set(
    fs
      .readdirSync(enumsDir)
      .filter(
        (file) =>
          (file.endsWith('.js') || file.endsWith('.ts')) && !file.endsWith('.d.ts') && !file.startsWith('index'),
      )
      .map((file) => path.basename(file, path.extname(file))),
  );
  // console.log('Loaded enums:', Array.from(enumNames));
} catch (e) {
  console.warn(`⚠️ Could not read enums directory at ${enumsDir}. Skipping enum detection.`, e);
}

export default function transform(file: FileInfo, api: API): string | undefined {
  const j: JSCodeshift = api.jscodeshift;
  const root: Collection = j(file.source);

  let isDirty = false;

  root.find(j.ImportDeclaration, { source: { value: packageName } }).forEach((importPath) => {
    const specifiers = importPath.node.specifiers || [];

    specifiers.forEach((spec) => {
      if (spec.type !== 'ImportSpecifier') return;

      const importedName = spec.imported.name as string;

      // target component
      let componentName = importedName;
      if (importPath.node.importKind === 'type') {
        if (importedName.endsWith('PropTypes')) {
          componentName = importedName.replace(/PropTypes$/, '');
        } else if (importedName.endsWith('DomRef')) {
          componentName = importedName.replace(/DomRef$/, '');
        }
      }

      // import path
      const newSource =
        importPath.node.importKind === 'type'
          ? `${packageName}/${componentName}` // type imports
          : enumNames.has(importedName)
            ? `${packageName}/enums/${importedName}` // enums
            : `${packageName}/${importedName}`; // regular component

      const newImport = j.importDeclaration(
        [
          j.importSpecifier(
            j.identifier(importedName),
            j.identifier(spec.local && typeof spec.local.name === 'string' ? spec.local.name : importedName),
          ),
        ],
        j.literal(newSource),
      );

      newImport.importKind = importPath.node.importKind;

      j(importPath).insertBefore(newImport);
      isDirty = true;
    });

    j(importPath).remove();
  });

  return isDirty ? root.toSource({ quote: 'single' }) : undefined;
}
