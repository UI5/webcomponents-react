import fs from 'fs';
import path from 'path';
import type { API, FileInfo, JSCodeshift, Collection } from 'jscodeshift';

const mainPackageName = '@ui5/webcomponents-react';
const basePackageName = '@ui5/webcomponents-react-base';
const chartsPackageName = '@ui5/webcomponents-react-charts';
const aiPackageName = '@ui5/webcomponents-ai-react';
const compatPackageName = '@ui5/webcomponents-react-compat';
const packageNames = [mainPackageName, basePackageName, chartsPackageName, aiPackageName, compatPackageName];

const mainPackageReExports = [
  'CommonProps',
  'Ui5CustomEvent',
  'Ui5DomRef',
  'UI5WCSlotsNode',
  'withWebComponent',
  'WithWebComponentPropTypes',
];

function getFileNames(dir: string) {
  let fileNames: string[] = [];
  try {
    fileNames = fs
      .readdirSync(dir)
      .filter(
        (file) =>
          (file.endsWith('.js') || file.endsWith('.ts')) && !file.endsWith('.d.ts') && !file.startsWith('index'),
      )
      .map((file) => path.basename(file, path.extname(file)));
  } catch (e) {
    console.warn(`⚠️ Could not read directory at ${dir}.`, e);
  }

  return fileNames;
}

function getExportNames(indexPath: string) {
  let exportNames: string[] = [];
  try {
    const indexSource = fs.readFileSync(indexPath, 'utf-8');
    const exportRegex = /export\s+(?:const|function|class|type|interface|{[^}]+})\s+([a-zA-Z0-9_]+)/g;
    let match;
    while ((match = exportRegex.exec(indexSource)) !== null) {
      exportNames.push(match[1]);
    }
    exportNames = Array.from(new Set(exportNames)); // Remove duplicates
  } catch (e) {
    console.warn(`⚠️ Could not read index at ${indexPath}.`, e);
  }

  return exportNames;
}

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
const hookNames = getFileNames(hooksDir);

const internalHooksDir = path.join(
  path.dirname(require.resolve('@ui5/webcomponents-react-base/package.json')),
  'dist',
  'internal',
  'hooks',
);
const internalHookNames = getFileNames(internalHooksDir);

const internalUtilsDir = path.join(
  path.dirname(require.resolve('@ui5/webcomponents-react-base/package.json')),
  'dist',
  'internal',
  'utils',
);
const internalUtilNames: string[] = getFileNames(internalUtilsDir);
const utilsIndexPath = path.join(internalUtilsDir, 'index.js');
internalUtilNames.push(...getExportNames(utilsIndexPath));

const internalTypeDir = path.join(
  path.dirname(require.resolve('@ui5/webcomponents-react-base/package.json')),
  'dist',
  'internal',
  'types',
);
const internalTypeNames: string[] = getFileNames(internalTypeDir);
const internalTypesIndexPath = path.join(internalTypeDir, 'index.js');
internalTypeNames.push(...getExportNames(internalTypesIndexPath));

// Mapping functions
function resolveBaseExport(importedName: string): string | undefined {
  const directMap: Record<string, string> = {
    VersionInfo: `${basePackageName}/VersionInfo`,
    I18nStore: `${basePackageName}/internal/stores/I18nStore`,
    StyleStore: `${basePackageName}/internal/stores/StyleStore`,
    CssSizeVariables: `${basePackageName}/internal/styling/CssSizeVariables`,
    ThemingParameters: `${basePackageName}/ThemingParameters`,
    withWebComponent: `${basePackageName}/internal/wrapper/withWebComponent`,
    utils: `${basePackageName}/internal/utils`,
    addCustomCSSWithScoping: `${basePackageName}/internal/utils`,
    UI5WCSlotsNode: `${basePackageName}/types`,
  };

  if (directMap[importedName]) {
    return directMap[importedName];
  }
  if (hookNames.includes(importedName)) {
    return `${basePackageName}/hooks`;
  }
  if (internalHookNames.includes(importedName)) {
    return `${basePackageName}/internal/hooks`;
  }
  if (internalUtilNames.includes(importedName)) {
    return `${basePackageName}/internal/utils`;
  }
  if (internalTypeNames.includes(importedName)) {
    return `${basePackageName}/internal/types`;
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
      specifiers.forEach((spec) => {
        if (spec.type !== 'ImportSpecifier') {
          return;
        }
        const importedName = spec.imported.name as string;
        let componentName = importedName;
        if (importedName.endsWith('PropTypes')) {
          componentName = importedName.replace(/PropTypes$/, '');
        } else if (importedName.endsWith('Props') && !mainPackageReExports.includes(importedName)) {
          componentName = componentName.replace(/Props$/, '');
        } else if (importedName.endsWith('DomRef')) {
          componentName = componentName.replace(/DomRef$/, '');
        }

        let newSource: string;
        if (pkg === mainPackageName) {
          if (mainPackageReExports.includes(importedName)) {
            if (importedName.toLowerCase().startsWith('withwebcomponent')) {
              newSource = `${basePackageName}/withWebComponent`;
            } else {
              newSource = `${basePackageName}/internal/types`;
            }
          } else {
            newSource =
              componentName !== importedName
                ? `${mainPackageName}/${componentName}`
                : enumNames.has(importedName)
                  ? `${mainPackageName}/enums/${importedName}`
                  : `${mainPackageName}/${importedName}`;
          }
        } else if (pkg === basePackageName && importedName !== 'Device' && importedName !== 'hooks') {
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

        // Delta: Namespace imports
        if (pkg === basePackageName && ['Device', 'hooks'].includes(importedName)) {
          const newImport = j.importDeclaration(
            [j.importNamespaceSpecifier(j.identifier((spec.local?.name as string) || importedName))],
            j.literal(`${basePackageName}/${importedName}`),
          );
          j(importPath).insertBefore(newImport);
          isDirty = true;
          return;
        }

        if (('importKind' in spec && spec.importKind === 'type') || importPath.node.importKind === 'type') {
          newImport.importKind = 'type';
        }

        j(importPath).insertBefore(newImport);
        isDirty = true;
      });
      j(importPath).remove();
    });
  });

  return isDirty ? root.toSource() : undefined;
}
