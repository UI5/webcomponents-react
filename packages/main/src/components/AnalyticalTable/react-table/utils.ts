import type { ColumnType, RowType } from '../types/index.js';
import { defaultColumn, emptyRenderer } from './publicUtils.js';

// Find the depth of the columns
export function findMaxDepth(columns: ColumnType[], depth = 0): number {
  return columns.reduce((prev: number, curr: ColumnType) => {
    if (curr.columns) {
      return Math.max(prev, findMaxDepth(curr.columns, depth + 1));
    }
    return depth;
  }, 0);
}

// Build the visible columns, headers and flat column list
export function linkColumnStructure(columns: ColumnType[], parent?: ColumnType, depth = 0): ColumnType[] {
  return columns.map((column) => {
    column = {
      ...column,
      parent,
      depth,
    };

    assignColumnAccessor(column);

    if (column.columns) {
      column.columns = linkColumnStructure(column.columns, column, depth + 1);
    }
    return column;
  });
}

export function flattenColumns(columns: ColumnType[]): ColumnType[] {
  return flattenBy(columns, 'columns');
}

export function assignColumnAccessor(column: ColumnType): ColumnType {
  // First check for string accessor
  let { id, accessor } = column;
  const { Header } = column;

  if (typeof accessor === 'string') {
    id = id || accessor;
    const accessorPath = accessor.split('.');
    accessor = (row: any) => getBy(row, accessorPath);
  }

  if (!id && typeof Header === 'string' && Header) {
    id = Header;
  }

  if (!id && column.columns) {
    console.error(column);
    throw new Error('A column ID (or unique "Header" value) is required!');
  }

  if (!id) {
    console.error(column);
    throw new Error('A column ID (or string accessor) is required!');
  }

  Object.assign(column, {
    id,
    accessor,
  });

  return column;
}

export function decorateColumn(column: ColumnType, userDefaultColumn: Record<string, unknown>): ColumnType {
  if (!userDefaultColumn) {
    throw new Error();
  }
  Object.assign(column, {
    // Make sure there is a fallback header, just in case
    Header: emptyRenderer,
    Footer: emptyRenderer,
    ...defaultColumn,
    ...userDefaultColumn,
    ...column,
  });

  Object.assign(column, {
    originalWidth: column.width,
  });

  return column;
}

// Build the header groups from the bottom up
export function makeHeaderGroups(
  allColumns: ColumnType[],
  defaultColumn: Record<string, unknown>,
  additionalHeaderProperties: (column: ColumnType) => Record<string, any> = () => ({}),
): any[] {
  const headerGroups: any[] = [];

  let scanColumns = allColumns;

  let uid = 0;
  const getUID = () => uid++;

  while (scanColumns.length) {
    // The header group we are creating
    const headerGroup: any = {
      headers: [],
    };

    // The parent columns we're going to scan next
    const parentColumns: any[] = [];

    const hasParents = scanColumns.some((d: ColumnType) => d.parent);

    // Scan each column for parents
    scanColumns.forEach((column: ColumnType) => {
      // What is the latest (last) parent column?
      const latestParentColumn = [...parentColumns].reverse()[0];

      let newParent;

      if (hasParents) {
        // If the column has a parent, add it if necessary
        if (column.parent) {
          newParent = {
            ...column.parent,
            originalId: column.parent.id,
            id: `${column.parent.id}_${getUID()}`,
            headers: [column],
            ...additionalHeaderProperties(column),
          };
        } else {
          // If other columns have parents, we'll need to add a place holder if necessary
          const originalId = `${column.id}_placeholder`;
          newParent = decorateColumn(
            {
              originalId,
              id: `${column.id}_placeholder_${getUID()}`,
              placeholderOf: column,
              headers: [column],
              ...additionalHeaderProperties(column),
            },
            defaultColumn,
          );
        }

        // If the resulting parent columns are the same, just add
        // the column and increment the header span
        if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
          latestParentColumn.headers.push(column);
        } else {
          parentColumns.push(newParent);
        }
      }

      headerGroup.headers.push(column);
    });

    headerGroups.push(headerGroup);

    // Start scanning the parent columns
    scanColumns = parentColumns;
  }

  return headerGroups.reverse();
}

const pathObjCache = new Map<string, string[]>();

export function getBy(obj: any, path: string | string[], def?: any): any {
  if (!path) {
    return obj;
  }
  const cacheKey: string = typeof path === 'function' ? path : JSON.stringify(path);

  const pathObj =
    pathObjCache.get(cacheKey) ||
    (() => {
      const pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    })();

  let val;

  try {
    val = pathObj.reduce((cursor: any, pathPart: string) => cursor[pathPart], obj);
  } catch (_e) {
    // continue regardless of error
  }
  return typeof val !== 'undefined' ? val : def;
}

export function getFirstDefined(...args: any[]): any {
  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] !== 'undefined') {
      return args[i];
    }
  }
}

export function getElementDimensions(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle(element);
  const margins = {
    left: parseInt(style.marginLeft),
    right: parseInt(style.marginRight),
  };
  const padding = {
    left: parseInt(style.paddingLeft),
    right: parseInt(style.paddingRight),
  };
  return {
    left: Math.ceil(rect.left),
    width: Math.ceil(rect.width),
    outerWidth: Math.ceil(rect.width + margins.left + margins.right + padding.left + padding.right),
    marginLeft: margins.left,
    marginRight: margins.right,
    paddingLeft: padding.left,
    paddingRight: padding.right,
    scrollWidth: element.scrollWidth,
  };
}

export function isFunction(a: any): ((...args: any[]) => any) | undefined {
  if (typeof a === 'function') {
    return a;
  }
}

export function flattenBy<T extends Record<string, any>>(arr: T[], key: string): T[] {
  const flat: T[] = [];

  const recurse = (arr: T[]) => {
    arr.forEach((d) => {
      if (!d[key]) {
        flat.push(d);
      } else {
        recurse(d[key]);
      }
    });
  };

  recurse(arr);

  return flat;
}

export function expandRows(
  rows: RowType[],
  {
    manualExpandedKey,
    expanded,
    expandSubRows = true,
  }: { manualExpandedKey: string; expanded: Record<string, any>; expandSubRows?: boolean },
): RowType[] {
  const expandedRows: RowType[] = [];

  const handleRow = (row: RowType, addToExpandedRows = true) => {
    row.isExpanded = (row.original && row.original[manualExpandedKey]) || expanded[row.id];

    row.canExpand = row.subRows && !!row.subRows.length;

    if (addToExpandedRows) {
      expandedRows.push(row);
    }

    if (row.subRows && row.subRows.length && row.isExpanded) {
      row.subRows.forEach((row: RowType) => handleRow(row, expandSubRows));
    }
  };

  rows.forEach((row) => handleRow(row));

  return expandedRows;
}

export function getFilterMethod(
  filter: any,
  userFilterTypes: Record<string, any>,
  filterTypes: Record<string, any>,
): any {
  return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
}

export function shouldAutoRemoveFilter(
  autoRemove: ((value: any, column?: ColumnType) => boolean) | undefined,
  value: any,
  column?: ColumnType,
): boolean {
  return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
}

export function unpreparedAccessWarning(): never {
  throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
}

let passiveSupported: boolean | null = null;
export function passiveEventSupported(): boolean {
  // memoize support to avoid adding multiple test events
  if (typeof passiveSupported === 'boolean') return passiveSupported;

  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      },
    };

    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options as EventListenerOptions);
  } catch (_err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}

//

const reOpenBracket = /\[/g;
const reCloseBracket = /\]/g;

function makePathArray(obj: any): string[] {
  return (
    flattenDeep(obj)
      // remove all periods in parts
      .map((d: any) => String(d).replace('.', '_'))
      // join parts using period
      .join('.')
      // replace brackets with periods
      .replace(reOpenBracket, '.')
      .replace(reCloseBracket, '')
      // split it back out on periods
      .split('.')
  );
}

function flattenDeep(arr: any, newArr: any[] = []): any[] {
  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}
