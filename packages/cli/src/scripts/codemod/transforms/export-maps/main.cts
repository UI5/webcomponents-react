import fs from 'fs';
import path from 'path';
import type { API, FileInfo, JSCodeshift, Collection } from 'jscodeshift';

const mainPackageName = '@ui5/webcomponents-react';
const basePackageName = '@ui5/webcomponents-react-base';
const chartsPackageName = '@ui5/webcomponents-react-charts';

const packageNames = [mainPackageName, basePackageName, chartsPackageName];

// Enums for main package
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

// Mapping functions
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
  if (directMap[importedName]) return directMap[importedName];
  if (importedName === 'default' || importedName === 'index') return basePackageName;
  return undefined;
}

function resolveChartsExport(importedName: string): string | undefined {
  const directMap: Record<string, string> = {
    TimelineChartAnnotation: `${chartsPackageName}/TimelineChartAnnotation`,
    BarChartPlaceholder: `${chartsPackageName}/BarChartPlaceholder`,
    BulletChartPlaceholder: `${chartsPackageName}/BulletChartPlaceholder`,
    ColumnChartPlaceholder: `${chartsPackageName}/ColumnChartPlaceholder`,
    ColumnChartWithTrendPlaceholder: `${chartsPackageName}/ColumnChartWithTrendPlaceholder`,
    ComposedChartPlaceholder: `${chartsPackageName}/ComposedChartPlaceholder`,
    LineChartPlaceholder: `${chartsPackageName}/LineChartPlaceholder`,
    PieChartPlaceholder: `${chartsPackageName}/PieChartPlaceholder`,
    ScatterChartPlaceholder: `${chartsPackageName}/ScatterChartPlaceholder`,
    TimelineChartPlaceholder: `${chartsPackageName}/TimelineChartPlaceholder`,
  };
  if (directMap[importedName]) return directMap[importedName];
  if (importedName === 'default' || importedName === 'index') return chartsPackageName;
  return undefined;
}

export default function transform(file: FileInfo, api: API): string | undefined {
  const j: JSCodeshift = api.jscodeshift;
  const root: Collection = j(file.source);

  let isDirty = false;

  packageNames.forEach((pkg) => {
    root.find(j.ImportDeclaration, { source: { value: pkg } }).forEach((importPath) => {
      const specifiers = importPath.node.specifiers || [];
      specifiers.forEach((spec) => {
        if (spec.type !== 'ImportSpecifier') return;
        const importedName = spec.imported.name as string;
        let componentName = importedName;
        if (importPath.node.importKind === 'type') {
          if (importedName.endsWith('PropTypes')) {
            componentName = importedName.replace(/PropTypes$/, '');
          } else if (importedName.endsWith('Props')) {
            componentName = importedName.replace(/Props$/, '');
          } else if (importedName.endsWith('DomRef')) {
            componentName = importedName.replace(/DomRef$/, '');
          }
        }

        let newSource: string;
        if (pkg === mainPackageName) {
          newSource =
            importPath.node.importKind === 'type'
              ? `${mainPackageName}/${componentName}`
              : enumNames.has(importedName)
                ? `${mainPackageName}/enums/${importedName}`
                : `${mainPackageName}/${importedName}`;
        } else if (pkg === basePackageName) {
          newSource = resolveBaseExport(importedName) || basePackageName;
        } else if (pkg === chartsPackageName) {
          newSource = resolveChartsExport(componentName) || `${chartsPackageName}/${componentName}`;
        } else {
          newSource = pkg;
        }

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

  return isDirty ? root.toSource({ quote: 'single' }) : undefined;
}
