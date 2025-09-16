import fs from 'fs';
import path from 'path';
import type { API, FileInfo, JSCodeshift, Collection } from 'jscodeshift';

const mainPackageName = '@ui5/webcomponents-react';
const basePackageName = '@ui5/webcomponents-react-base';
const chartsPackageName = '@ui5/webcomponents-react-charts';
const aiPackageName = '@ui5/webcomponents-ai-react';
const compatPackageName = '@ui5/webcomponents-react-compat';

const packageNames = [mainPackageName, basePackageName, chartsPackageName, aiPackageName, compatPackageName];

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

const hooksDir = path.join(
  path.dirname(require.resolve('@ui5/webcomponents-react-base/package.json')),
  'dist',
  'hooks',
);
let hookNames: string[] = [];
try {
  hookNames = fs
    .readdirSync(hooksDir)
    .filter(
      (file) => (file.endsWith('.js') || file.endsWith('.ts')) && !file.endsWith('.d.ts') && !file.startsWith('index'),
    )
    .map((file) => path.basename(file, path.extname(file)));
} catch (e) {
  console.warn(`⚠️ Could not read hooks directory at ${hooksDir}.`, e);
}

const utilsDir = path.join(
  path.dirname(require.resolve('@ui5/webcomponents-react-base/package.json')),
  'dist',
  'utils',
);
let utilNames: string[] = [];
try {
  utilNames = fs
    .readdirSync(utilsDir)
    .filter(
      (file) => (file.endsWith('.js') || file.endsWith('.ts')) && !file.endsWith('.d.ts') && !file.startsWith('index'),
    )
    .map((file) => path.basename(file, path.extname(file)));
} catch (e) {
  console.warn(`⚠️ Could not read utils directory at ${utilsDir}.`, e);
}

const utilsIndexPath = path.join(utilsDir, 'index.js');

try {
  const indexSource = fs.readFileSync(utilsIndexPath, 'utf-8');
  const exportRegex = /export\s+(?:const|function|class|type|interface|{[^}]+})\s+([a-zA-Z0-9_]+)/g;
  let match;
  while ((match = exportRegex.exec(indexSource)) !== null) {
    utilNames.push(match[1]);
  }
  utilNames = Array.from(new Set(utilNames)); // Remove duplicates
} catch (e) {
  console.warn(`⚠️ Could not read utils index at ${utilsIndexPath}.`, e);
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

  if (directMap[importedName]) {
    return directMap[importedName];
  }
  if (hookNames.includes(importedName)) {
    return `${basePackageName}/hooks`;
  }
  if (utilNames.includes(importedName)) {
    return `${basePackageName}/utils`;
  }
  if (importedName === 'default' || importedName === 'index') {
    return basePackageName;
  }
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
  if (directMap[importedName]) {
    return directMap[importedName];
  }
  if (importedName === 'default' || importedName === 'index') {
    return chartsPackageName;
  }
  return undefined;
}

export default function transform(file: FileInfo, api: API): string | undefined {
  const j: JSCodeshift = api.jscodeshift;
  const root: Collection = j(file.source);

  if (file.path.includes('node_modules')) {
    return undefined;
  }

  let isDirty = false;

  packageNames.forEach((pkg) => {
    root.find(j.ImportDeclaration, { source: { value: pkg } }).forEach((importPath) => {
      const specifiers = importPath.node.specifiers || [];
      specifiers.forEach((spec: any) => {
        if (spec.type !== 'ImportSpecifier') return;
        const importedName = spec.imported.name as string;
        let componentName = importedName;
        if (importedName.endsWith('PropTypes')) {
          componentName = importedName.replace(/PropTypes$/, '');
        } else if (importedName.endsWith('Props')) {
          componentName = componentName.replace(/Props$/, '');
        } else if (importedName.endsWith('DomRef')) {
          componentName = componentName.replace(/DomRef$/, '');
        }

        let newSource: string;
        if (pkg === mainPackageName) {
          newSource =
            componentName !== importedName
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
        if ('importKind' in spec && spec.importKind === 'type') {
          newImport.importKind = 'type';
        }
        j(importPath).insertBefore(newImport);
        isDirty = true;
      });
      j(importPath).remove();
    });
  });

  //todo: 'use client' and other string expressions will receive two semicolons. This can be fixed by running prettier - is there a better option?
  return isDirty ? root.toSource() : undefined;
}
