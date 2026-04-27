import { AnalyticalTableScaleWidthMode } from '../../../enums/AnalyticalTableScaleWidthMode.js';
import type {
  AnalyticalTableColumnDefinition,
  ColumnType,
  ReactTableHooks,
  TableInstance,
  RowType,
} from '../types/index.js';
import { getSelectionColumnWidth } from '../util/index.js';

interface IColumnMeta {
  contentPxAvg: number;
  headerPx: number;
  headerDefinesWidth?: boolean;
  maxWidth?: number | undefined;
  width?: number | undefined;
}

interface ComputedCSSValues {
  bodyFontFamily: string;
  bodyFontSize: string;
  headerFontFamily: string;
  rootFontSize: number;
}

interface RawColumnSizing {
  width: number | undefined;
  minWidth: number | undefined;
  maxWidth: number | undefined;
}

const FALLBACK_FONT_SIZE = 14;
const ROW_SAMPLE_SIZE = 20;
const MAX_WIDTH = 700;
export const CELL_PADDING_PX = 18; /* padding left and right 0.5rem each (16px) + borders (1px) + buffer (1px) */

let measurementCanvas: HTMLCanvasElement | null = null;
let measurementContext: CanvasRenderingContext2D | null = null;

function getComputedCSSVarValue(variableName: string, fallback: string): string {
  if (typeof document === 'undefined') {
    return fallback;
  }
  const value = getComputedStyle(document.documentElement).getPropertyValue(variableName);
  return value.trim() || fallback;
}

/**
 * Convert fontSize string to number. Only handles `rem` and `px` values as `em` is not by design.
 */
function toPx(fontSize: string, rootFontSize: number): number {
  if (fontSize.endsWith('rem')) {
    const rem = parseFloat(fontSize);
    return rem * rootFontSize;
  }
  if (fontSize.endsWith('px')) {
    return parseFloat(fontSize);
  }

  if (fontSize.endsWith('em')) {
    return FALLBACK_FONT_SIZE;
  }
  return parseFloat(fontSize) || FALLBACK_FONT_SIZE;
}

function stringToPx(dataPoint: string, isHeader = false, computedCSSValues: ComputedCSSValues): number {
  if (!measurementCanvas) {
    measurementCanvas = document.createElement('canvas');
    measurementContext = measurementCanvas.getContext('2d');
  }
  if (!measurementContext) {
    return FALLBACK_FONT_SIZE * (isHeader ? 0.55 : 0.5) * dataPoint.length;
  }

  const { bodyFontFamily, bodyFontSize, headerFontFamily, rootFontSize } = computedCSSValues;
  const fontFamily = isHeader ? headerFontFamily : bodyFontFamily;
  const fontSizePx = toPx(bodyFontSize, rootFontSize);

  measurementContext.font = `${fontSizePx}px ${fontFamily}`;
  return Math.ceil(measurementContext.measureText(dataPoint).width);
}

function getContentPxLongest(rowSample: RowType[], columnIdOrAccessor: string, computedCSSValues: ComputedCSSValues) {
  return rowSample.reduce((max, item) => {
    const dataPoint = item.values?.[columnIdOrAccessor];
    if (dataPoint) {
      const val = stringToPx(dataPoint, false, computedCSSValues) + CELL_PADDING_PX;
      return Math.max(max, val);
    }
    return max;
  }, 0);
}

function getContentPxAvg(rowSample: RowType[], columnIdOrAccessor: string, computedCSSValues: ComputedCSSValues) {
  return (
    rowSample.reduce((acc, item) => {
      const dataPoint = item.values?.[columnIdOrAccessor];

      let val = 0;
      if (dataPoint) {
        val = stringToPx(dataPoint, false, computedCSSValues) + CELL_PADDING_PX;
      }
      return acc + val;
    }, 0) / (rowSample.length || 1)
  );
}

function calculateDefaultColumnWidths(tableWidth: number, columns: AnalyticalTableColumnDefinition[]) {
  // Columns w/ external width property
  const fixed = [];
  // Columns w/o external width property
  const dynamic = [];
  let fixedTotal = 0;

  // Separate fixed and dynamic columns
  for (const col of columns) {
    const minSize = col.minWidth ?? 0;
    const maxSize = col.maxWidth ?? Infinity;

    // External `width` defined
    if (col.width !== undefined) {
      let width = col.width;
      if (width < minSize) {
        width = minSize;
      }
      if (width > maxSize) {
        width = maxSize;
      }
      fixedTotal += width;
      fixed.push({ col, width });
    } else {
      dynamic.push({ col, width: 0 });
    }
  }

  // Determine remaining width for dynamic columns
  const remaining = tableWidth - fixedTotal;

  // Calc total min-width required by dynamic columns
  let totalFlexibleMin = 0;
  for (const { col } of dynamic) {
    totalFlexibleMin += col.minWidth ?? 0;
  }

  if (remaining < totalFlexibleMin) {
    // Not enough space - assign each dynamic column its `minSize`
    for (const dc of dynamic) {
      dc.width = dc.col.minWidth ?? 0;
    }
  } else if (dynamic.length) {
    // Grant same space for each dynamic column
    const initialShare = remaining / dynamic.length;
    for (const dc of dynamic) {
      const minSize = dc.col.minWidth ?? 0;
      const maxSize = dc.col.maxWidth ?? Infinity;
      let width = initialShare;
      if (width < minSize) {
        width = minSize;
      }
      if (width > maxSize) {
        width = maxSize;
      }
      dc.width = width;
    }

    // Calc assigned width and remaining space
    let assigned = 0;
    for (const { width } of dynamic) {
      assigned += width ?? 0;
    }

    /**
     * - negative: table overflows
     * - positive: table has white-space between last column and borderInlineEnd
     */
    let remainingSpace = remaining - assigned;

    // Grow or shrink columns that are still dynamic

    // Grow columns
    while (remainingSpace > 0) {
      let expandableCount = 0;
      for (const { col, width } of dynamic) {
        if (width < (col.maxWidth ?? Infinity)) {
          expandableCount++;
        }
      }
      if (expandableCount === 0) {
        break;
      }
      const extra = remainingSpace / expandableCount;
      let used = 0;
      for (const dc of dynamic) {
        const maxWidth = dc.col.maxWidth ?? Infinity;
        if (dc.width < maxWidth) {
          const potential = dc.width + extra;
          if (potential > maxWidth) {
            used += maxWidth - dc.width;
            dc.width = maxWidth;
          } else {
            dc.width = potential;
            used += extra;
          }
        }
      }
      remainingSpace -= used;
      if (used === 0) {
        break;
      }
    }

    // Shrink columns
    while (remainingSpace < 0) {
      let shrinkableCount = 0;
      for (const { col, width } of dynamic) {
        const min = col.minWidth ?? 0;
        if (width > min) {
          shrinkableCount++;
        }
      }
      if (shrinkableCount === 0) {
        break;
      }
      const reduction = Math.abs(remainingSpace) / shrinkableCount;
      let used = 0;
      for (const dc of dynamic) {
        const min = dc.col.minWidth ?? 0;
        if (dc.width > min) {
          const potential = dc.width - reduction;
          if (potential < min) {
            used += dc.width - min;
            dc.width = min;
          } else {
            dc.width = potential;
            used += reduction;
          }
        }
      }
      remainingSpace += used;
      if (used === 0) {
        break;
      }
    }
  }

  const result = {};
  for (const { col, width } of [...fixed, ...dynamic]) {
    const key = col.id ?? col.accessor;
    result[key] = width;
  }
  return result;
}

const calculateSmartAndGrowColumns = (
  columns: AnalyticalTableColumnDefinition[],
  instance: TableInstance,
  hiddenColumns: ColumnType,
  computedCSSValues: ComputedCSSValues,
  isGrow = false,
) => {
  const { rows, state } = instance;
  const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);
  const { tableClientWidth: totalWidth } = state;

  const visibleColumns = columns.filter(
    (column) => (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor),
  );

  const columnMeta: Record<string, IColumnMeta> = visibleColumns.reduce(
    (metadata: Record<string, IColumnMeta>, column) => {
      const columnIdOrAccessor = (column.id ?? column.accessor) as string;
      if (
        column.id === '__ui5wcr__internal_selection_column' ||
        column.id === '__ui5wcr__internal_highlight_column' ||
        column.id === '__ui5wcr__internal_navigation_column'
      ) {
        metadata[columnIdOrAccessor] = {
          headerPx: column.width || column.minWidth || 60,
          contentPxAvg: 0,
        };
        return metadata;
      }

      let headerPx: number, contentPxLength: number;

      if (column.scaleWidthModeOptions?.cellString) {
        contentPxLength =
          stringToPx(column.scaleWidthModeOptions.cellString, false, computedCSSValues) + CELL_PADDING_PX;
      } else {
        contentPxLength = isGrow
          ? getContentPxLongest(rowSample, columnIdOrAccessor, computedCSSValues)
          : getContentPxAvg(rowSample, columnIdOrAccessor, computedCSSValues);
      }

      if (column.scaleWidthModeOptions?.headerString) {
        headerPx = Math.max(
          stringToPx(column.scaleWidthModeOptions.headerString, true, computedCSSValues) + CELL_PADDING_PX,
          60,
        );
      } else {
        headerPx =
          typeof column.Header === 'string'
            ? Math.max(stringToPx(column.Header, true, computedCSSValues) + CELL_PADDING_PX, 60)
            : 60;
      }

      metadata[columnIdOrAccessor] = {
        headerPx,
        contentPxAvg: contentPxLength,
        // When Grow mode is active, static max width should be applied
        maxWidth: column.maxWidth ?? (isGrow ? MAX_WIDTH : undefined),
        width: column.width,
      };
      return metadata;
    },
    {},
  );

  let totalContentPxAvgPrio1 = 0;
  let totalNumberColPrio2 = 0;

  /**
   * Width reserved by predefined widths or columns defined by header
   * Grow: full content width or header width (if wider) if not restricted by maxWidth
   */
  const reservedWidth: number = visibleColumns.reduce((acc, column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const { contentPxAvg, headerPx } = columnMeta[columnIdOrAccessor];
    if (isGrow) {
      totalContentPxAvgPrio1 += columnMeta[columnIdOrAccessor].contentPxAvg;
      const targetWidth = Math.min(
        Math.max(column.minWidth ?? 0, column.width ?? Math.max(contentPxAvg, headerPx)),
        column.maxWidth ?? MAX_WIDTH,
      );

      if (targetWidth !== column.maxWidth) {
        totalNumberColPrio2++;
      }
      return acc + targetWidth;
    }

    if (contentPxAvg > headerPx) {
      if (!column.minWidth && !column.width) {
        totalContentPxAvgPrio1 += columnMeta[columnIdOrAccessor].contentPxAvg;
        totalNumberColPrio2++;
        return acc;
      } else {
        return acc + Math.max(column.minWidth || 0, column.width || 0);
      }
    } else {
      if (!column.minWidth && !column.width) {
        totalNumberColPrio2++;
      }
      const max = Math.max(column.minWidth || 0, column.width ?? headerPx);
      columnMeta[columnIdOrAccessor].headerDefinesWidth = true;
      return acc + max;
    }
  }, 0);

  const availableWidthPrio1 = totalWidth - reservedWidth;
  let availableWidthPrio2 = availableWidthPrio1;

  /**
   * Step 1: Give columns defined by content more space (priority 1)
   * Grow: Give all columns the required space necessary to display the full content (up to the maxWidth)
   */
  const visibleColumnsAdaptedPrio1 = visibleColumns.map((column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const meta = columnMeta[columnIdOrAccessor];
    if (meta && !column.minWidth && !column.width && !meta.headerDefinesWidth) {
      let targetWidth: number;
      const { contentPxAvg, headerPx } = meta;

      if (isGrow) {
        targetWidth = Math.min(Math.max(contentPxAvg, headerPx), meta.maxWidth);
      } else if (availableWidthPrio1 > 0) {
        const factor = contentPxAvg / totalContentPxAvgPrio1;
        targetWidth = Math.max(Math.min(availableWidthPrio1 * factor, contentPxAvg), headerPx);
        availableWidthPrio2 -= targetWidth;
      }

      return {
        ...column,
        nextWidth: targetWidth || headerPx,
        maxWidth: isGrow ? (column?.maxWidth ?? MAX_WIDTH) : Infinity,
      };
    }
    return column;
  });

  let fullWidthOfAllColumns = 0;
  let lessThanMaxWidthCount = 0;

  /**
   * Step 2: Give all columns more space (priority 2)
   */
  const visibleColumnsAdaptedPrio2 = visibleColumnsAdaptedPrio1.map((column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const meta = columnMeta[columnIdOrAccessor];
    const { headerPx } = meta;

    if (meta && !column.minWidth && !column.width) {
      let targetWidth = column.nextWidth || headerPx;
      if (availableWidthPrio2 > 0) {
        targetWidth = Math.min(
          targetWidth + availableWidthPrio2 * (1 / totalNumberColPrio2),
          column.maxWidth ?? Infinity,
        );
        if (targetWidth < (column.maxWidth ?? Infinity)) {
          lessThanMaxWidthCount++;
        }
      }
      fullWidthOfAllColumns += targetWidth;
      return {
        ...column,
        width: targetWidth,
      };
    } else {
      const targetWidth = Math.max(column.width > 0 ? column.width : headerPx, column.minWidth ?? 0);
      if (targetWidth < (column.maxWidth ?? Infinity) && !meta.width) {
        lessThanMaxWidthCount++;
      }
      fullWidthOfAllColumns += targetWidth;
      return {
        ...column,
        width: targetWidth,
      };
    }
  });

  // Step 3: Distribute remaining width to all columns that are not at their maxWidth
  let remainingWidth = totalWidth - fullWidthOfAllColumns;
  if (remainingWidth > 0) {
    return visibleColumnsAdaptedPrio2.map((column) => {
      const columnIdOrAccessor = (column.id ?? column.accessor) as string;
      const meta = columnMeta[columnIdOrAccessor];
      if (column.width !== column.maxWidth && !meta.width) {
        const proportionalRemainingWidth = remainingWidth / (lessThanMaxWidthCount || 1);
        let proportionalWidth = column.width + proportionalRemainingWidth;
        // if maxWidth is reached, distribute the remaining width to the other columns
        if (proportionalWidth > column.maxWidth) {
          proportionalWidth = column.maxWidth;
          remainingWidth -= proportionalWidth - column.width;
          if (lessThanMaxWidthCount >= 2) {
            lessThanMaxWidthCount -= 1;
          }
        }

        return { ...column, width: proportionalWidth };
      }
      return column;
    });
  }
  return visibleColumnsAdaptedPrio2;
};

/**
 * `hooks.columns` handler that captures original (pre-decorateColumn) column sizing.
 *
 * react-table mutates column objects in place, setting i.a. width properties with `defaultColumn` values.
 * This function runs before decoration, saving the original values on the instance, so adjustColumnWidths can use them.
 */
function captureRawColumnWidths(columns: AnalyticalTableColumnDefinition[], { instance }: { instance: TableInstance }) {
  const rawSizing = new Map<string, RawColumnSizing>();
  for (const col of columns) {
    const key = col.id ?? (col.accessor as string);
    if (key) {
      rawSizing.set(key, {
        // normalize null to undefined in case tableRef isn't ready yet
        width: col.width ?? undefined,
        minWidth: col.minWidth ?? undefined,
        maxWidth: col.maxWidth ?? undefined,
      });
    }
  }
  instance.rawColumnSizing = rawSizing;
  return columns;
}

/**
 * `useInstanceBeforeDimensions` hook that mutates header widths in-place.
 *
 * This function follows `react-table`'s own `useResizeColumns` pattern: mutate `header.width` directly, to prevent cascading updates and rerenders.
 */
const adjustColumnWidths = (instance: TableInstance) => {
  const { flatHeaders, state, rows, data, webComponentsReactProperties } = instance;
  const { scaleWidthMode, loading, fontsReady } = webComponentsReactProperties;
  const { hiddenColumns, tableClientWidth: totalWidth, tableColResized, columnResizing } = state;

  if (
    !state ||
    !rows ||
    flatHeaders.length === 0 ||
    !totalWidth ||
    !AnalyticalTableScaleWidthMode[scaleWidthMode] ||
    !fontsReady ||
    tableColResized ||
    columnResizing?.isResizingColumn ||
    // After user resize, `columnResizing.columnWidths` stores the resized column widths. To preserve the user's resize skip recalculation.
    // The values are cleared by `TABLE_RESIZE` action (`retainColumnWidth` is `false` or `undefined`), or when columns change (`resetResize` action)
    Object.keys(columnResizing?.columnWidths ?? {}).length > 0
  ) {
    return;
  }

  // raw column sizes - default or defined in column definitions
  const rawSizing = instance.rawColumnSizing;

  const { tableRef } = webComponentsReactProperties;
  const selectionColumnWidth =
    rawSizing?.get('__ui5wcr__internal_selection_column')?.width === undefined
      ? getSelectionColumnWidth(tableRef)
      : undefined;

  // Restore original width properties from rawSizing (dynamic - no defined width, fixed - defined width in column definitions),
  // since `decorateColumn` has overwritten them
  const visibleColDefs = flatHeaders.map((header) => {
    const raw = rawSizing?.get(header.id);
    let width = raw?.width;
    let minWidth = raw?.minWidth;
    let maxWidth = raw?.maxWidth;

    // `rawSizing` captured undefined for the selection column (tableRef wasn't ready). Resolve from CSS variable.
    if (header.id === '__ui5wcr__internal_selection_column' && width === undefined && selectionColumnWidth) {
      width = selectionColumnWidth;
      minWidth = selectionColumnWidth;
      maxWidth = selectionColumnWidth;
    }
    return {
      ...header,
      width,
      minWidth,
      maxWidth,
    };
  });

  const hasData = data.length > 0;

  if (scaleWidthMode === AnalyticalTableScaleWidthMode.Default || (!hasData && loading)) {
    const calculatedWidths = calculateDefaultColumnWidths(totalWidth, visibleColDefs);
    for (const header of flatHeaders) {
      const calculatedWidth = calculatedWidths[header.id];
      if (typeof calculatedWidth !== 'number') {
        if (visibleColDefs.length === flatHeaders.length) {
          console.warn('Could not determine column width!');
        }
        continue;
      }
      header.width = calculatedWidth;
      // `useColumnResizing` falls back to `originalWidth` — keep it in sync to prevent reverting to 150.
      header.originalWidth = calculatedWidth;
      // patch columns whose raw minWidth/maxWidth was null
      const raw = rawSizing?.get(header.id);
      if (raw && raw.minWidth === undefined && header.minWidth == null) {
        header.minWidth = calculatedWidth;
      }
      if (raw && raw.maxWidth === undefined && header.maxWidth == null) {
        header.maxWidth = calculatedWidth;
      }
    }
  } else if (
    scaleWidthMode === AnalyticalTableScaleWidthMode.Smart ||
    scaleWidthMode === AnalyticalTableScaleWidthMode.Grow
  ) {
    const computedCSSValues = {
      bodyFontFamily: getComputedCSSVarValue('--sapFontFamily', 'Arial, Helvetica, sans-serif'),
      bodyFontSize: getComputedCSSVarValue('--sapFontSize', '0.875rem'),
      headerFontFamily: getComputedCSSVarValue(
        '--_ui5wcr-AnalyticalTable-HeaderFontFamily',
        getComputedCSSVarValue('--sapFontFamily', 'Arial, Helvetica, sans-serif'),
      ),
      rootFontSize: parseFloat(getComputedStyle(document.documentElement).fontSize) || FALLBACK_FONT_SIZE,
    };

    const isGrow = scaleWidthMode === AnalyticalTableScaleWidthMode.Grow;
    const result = calculateSmartAndGrowColumns(visibleColDefs, instance, hiddenColumns, computedCSSValues, isGrow);

    // apply calculated widths to headers by mutation
    for (const calculated of result) {
      const id = (calculated.id ?? calculated.accessor) as string;
      const header = flatHeaders.find((h) => h.id === id);
      if (!header) {
        console.warn('Could not determine column width!');
        continue;
      }
      if (typeof calculated.width === 'number') {
        header.width = calculated.width;
        header.originalWidth = calculated.width;
      }
      if (isGrow && typeof calculated.maxWidth === 'number') {
        header.maxWidth = calculated.maxWidth;
      }
      const raw = rawSizing?.get(id);
      if (raw && raw.minWidth === undefined && header.minWidth == null) {
        header.minWidth = calculated.width ?? 0;
      }
      if (raw && raw.maxWidth === undefined && header.maxWidth == null) {
        header.maxWidth = calculated.maxWidth ?? calculated.width ?? Number.MAX_SAFE_INTEGER;
      }
    }
  }
};

export const useDynamicColumnWidths = (hooks: ReactTableHooks) => {
  hooks.columns.push(captureRawColumnWidths);
  hooks.useInstanceBeforeDimensions.push(adjustColumnWidths);
};
