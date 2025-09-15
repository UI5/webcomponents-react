/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call */

import fs from 'fs';
import path from 'path';
import type { API, FileInfo, JSCodeshift, Collection } from 'jscodeshift';

const mainPackageName = '@ui5/webcomponents-react';
const basePackageName = '@ui5/webcomponents-react-base';
const chartsPackageName = '@ui5/webcomponents-react-charts';

const componentPackageNames = [mainPackageName, chartsPackageName];

// main enums
const libraryPath = require.resolve('@ui5/webcomponents-react/package.json');
const enumsDir = path.join(path.dirname(libraryPath), 'dist', 'enums');
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
} catch (e) {
  console.warn(`⚠️ Could not read enums directory at ${enumsDir}. Skipping enum detection.`, e);
}

// exports-map base
function resolveBaseExport(importedName: string): string | undefined {
  const directMap: Record<string, string> = {
    Device: `${basePackageName}/Device`,
    hooks: `${basePackageName}/hooks`,
    VersionInfo: `${basePackageName}/VersionInfo`,
    I18nStore: `${basePackageName}/I18nStore`,
    StyleStore: `${basePackageName}/StyleStore`,
    CssSizeVariables: `${basePackageName}/CssSizeVariables`,
    ThemingParameters: `${basePackageName}/ThemingParameters`,
    withWebComponent: `${basePackageName}/withWebComponent`,
    utils: `${basePackageName}/utils`,
    addCustomCSSWithScoping: `${basePackageName}/internal/addCustomCSSWithScoping.js`,
  };
  if (directMap[importedName]) {
    return directMap[importedName];
  }
  // fallback
  if (importedName === 'default' || importedName === 'index') {
    return basePackageName;
  }
  return undefined;
}

export default function transform(file: FileInfo, api: API): string | undefined {
  const j: JSCodeshift = api.jscodeshift;
  const root: Collection = j(file.source);

  let isDirty = false;

  // main & charts pkg
  componentPackageNames.forEach((packageName) => {
    root.find(j.ImportDeclaration, { source: { value: packageName } }).forEach((importPath) => {
      const specifiers = importPath.node.specifiers || [];
      specifiers.forEach((spec) => {
        if (spec.type !== 'ImportSpecifier') return;
        const importedName = spec.imported.name as string;
        let componentName = importedName;
        if (importPath.node.importKind === 'type') {
          if (importedName.endsWith('PropTypes')) {
            componentName = importedName.replace(/PropTypes$/, '');
            // charts props
          } else if (importedName.endsWith('Props')) {
            componentName = importedName.replace(/Props$/, '');
          } else if (importedName.endsWith('DomRef')) {
            componentName = importedName.replace(/DomRef$/, '');
          }
        }
        const newSource =
          importPath.node.importKind === 'type'
            ? `${packageName}/${componentName}`
            : enumNames.has(importedName)
              ? `${packageName}/enums/${importedName}`
              : `${packageName}/${importedName}`;
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
  });

  // base pkg
  root.find(j.ImportDeclaration, { source: { value: basePackageName } }).forEach((importPath) => {
    const specifiers = importPath.node.specifiers || [];
    specifiers.forEach((spec) => {
      if (spec.type !== 'ImportSpecifier') return;
      const importedName = spec.imported.name as string;
      const newSource = resolveBaseExport(importedName) || basePackageName;
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
