import type { FocusEvent, FocusEventHandler, KeyboardEvent, KeyboardEventHandler, RefObject } from 'react';
import { useCallback, useEffect, useId, useMemo, useRef } from 'react';

interface MeasureInfo {
  accessor: string | ((entry: Record<string, unknown>) => unknown);
  label?: string;
  formatter?: (value: unknown) => string;
  axis: 'x' | 'y' | 'z';
}

interface ScatterDataset {
  label?: string;
  data?: Record<string, unknown>[];
  color?: string;
  opacity?: number;
}

interface FlatPoint {
  datasetIndex: number;
  pointIndex: number;
  datasetLabel: string;
  raw: Record<string, unknown>;
}

interface UseScatterPointFocusOptions {
  chartRef: RefObject<HTMLDivElement | null>;
  enabled: boolean;
  dataset: ScatterDataset[];
  measures: MeasureInfo[];
  onSelect?: (point: FlatPoint, event: KeyboardEvent<HTMLDivElement>) => void;
  consumerOnBlur?: FocusEventHandler<HTMLDivElement>;
  consumerOnFocus?: FocusEventHandler<HTMLDivElement>;
  consumerOnKeyDownCapture?: KeyboardEventHandler<HTMLDivElement>;
}

// Resolves an accessor (string key or getter function) to the value from a data entry.
function getAccessorValue(
  entry: Record<string, unknown>,
  accessor: string | ((e: Record<string, unknown>) => unknown),
) {
  if (typeof accessor === 'function') {
    return accessor(entry);
  }
  return entry[accessor];
}

// Builds the aria-label string for a point: "DatasetLabel, MeasureLabel: value, ..."
function getPointLabel(point: FlatPoint, measures: MeasureInfo[]) {
  const parts: string[] = [];
  if (point.datasetLabel) {
    parts.push(point.datasetLabel);
  }
  for (const m of measures) {
    const value = getAccessorValue(point.raw, m.accessor);
    const formatted = m.formatter ? m.formatter(value) : String((value as string) ?? '');
    const label = m.label || (typeof m.accessor === 'string' ? m.accessor : m.axis);
    parts.push(`${label}: ${formatted}`);
  }
  return parts.join(', ');
}

/**
 * Manages keyboard navigation through scatter chart data points using aria-activedescendant.
 *
 * Single tab stop: focusing the chart immediately activates the first (or last-visited) point.
 * Arrow keys navigate between points sorted by X value. Tab/Shift+Tab leave the chart naturally.
 *
 * Static attributes (id, role, aria-label) are applied to all symbols via effect.
 * Only `data-point-focused` and `aria-activedescendant` change during navigation.
 *
 * Active when `chartConfig.accessibilityLayer` is enabled.
 */
export function useScatterPointFocus({
  chartRef,
  enabled,
  dataset,
  measures,
  onSelect,
  consumerOnBlur,
  consumerOnFocus,
  consumerOnKeyDownCapture,
}: UseScatterPointFocusOptions) {
  const pointFocusRef = useRef(-1);
  const spaceHeldRef = useRef(false);
  const baseId = useId();

  const xMeasure = measures.find((m) => m.axis === 'x');

  // flatten dataset and sort by x-axis value for arrow key nav
  const flatPoints: FlatPoint[] = useMemo(() => {
    if (!dataset?.length || !xMeasure) {
      return [];
    }
    const points: FlatPoint[] = [];
    dataset.forEach((ds, dsIndex) => {
      ds.data?.forEach((entry, ptIndex) => {
        points.push({
          datasetIndex: dsIndex,
          pointIndex: ptIndex,
          datasetLabel: ds.label ?? '',
          raw: entry,
        });
      });
    });
    points.sort((a, b) => {
      const ax = Number(getAccessorValue(a.raw, xMeasure.accessor)) || 0;
      const bx = Number(getAccessorValue(b.raw, xMeasure.accessor)) || 0;
      if (ax !== bx) {
        return ax - bx;
      }
      return a.datasetIndex - b.datasetIndex;
    });
    return points;
  }, [dataset, xMeasure]);

  // mutable ref for event handler data (reset when data changes)
  const flatPointsRef = useRef(flatPoints);
  useEffect(() => {
    flatPointsRef.current = flatPoints;
    pointFocusRef.current = -1;
  }, [flatPoints]);

  // Recharts recreates DOM elements on rerender -> must set attributes again after each update
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const container = chartRef.current;
    if (!container) {
      return;
    }

    const allSymbols: SVGGElement[][] = [];
    container.querySelectorAll<SVGGElement>('.recharts-scatter').forEach((group) => {
      allSymbols.push(Array.from(group.querySelectorAll<SVGGElement>(':scope .recharts-scatter-symbol')));
    });
    if (allSymbols.length === 0) {
      return;
    }

    // Set a11y attributes on each scatter symbol.
    for (let idx = 0; idx < flatPoints.length; idx++) {
      const point = flatPoints[idx];
      const el = allSymbols[point.datasetIndex]?.[point.pointIndex];
      if (!el) {
        continue;
      }
      el.setAttribute('id', `${baseId}-point-${idx}`);
      el.setAttribute('role', 'img');
      el.setAttribute('aria-label', getPointLabel(point, measures));
    }

    // Reapply attributes when chart is updated if it still has focus.
    const activeIdx = pointFocusRef.current;
    if (activeIdx >= 0 && container.contains(document.activeElement)) {
      const el = container.querySelector<SVGGElement>(`#${CSS.escape(baseId)}-point-${activeIdx}`);
      if (el) {
        el.setAttribute('data-point-focused', '');
        container.setAttribute('aria-activedescendant', `${baseId}-point-${activeIdx}`);
      }
    }
  });

  const activatePoint = useCallback(
    (index: number) => {
      const container = chartRef.current;
      if (!container) {
        return;
      }

      container
        .querySelector<SVGGElement>('.recharts-scatter-symbol[data-point-focused]')
        ?.removeAttribute('data-point-focused');

      pointFocusRef.current = index;

      const el = container.querySelector<SVGGElement>(`#${CSS.escape(baseId)}-point-${index}`);
      if (!el) {
        return;
      }

      el.setAttribute('data-point-focused', '');
      container.setAttribute('aria-activedescendant', `${baseId}-point-${index}`);
    },
    [baseId, chartRef],
  );

  const clearActivePoint = useCallback(() => {
    const container = chartRef.current;
    if (!container) {
      return;
    }
    container
      .querySelector<SVGGElement>('.recharts-scatter-symbol[data-point-focused]')
      ?.removeAttribute('data-point-focused');
    container.removeAttribute('aria-activedescendant');
  }, [chartRef]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const points = flatPointsRef.current;
      if (!points.length) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown': {
          e.preventDefault();
          const next = Math.min(pointFocusRef.current + 1, points.length - 1);
          activatePoint(next);
          break;
        }
        case 'ArrowLeft':
        case 'ArrowUp': {
          e.preventDefault();
          const prev = Math.max(pointFocusRef.current - 1, 0);
          activatePoint(prev);
          break;
        }
        case 'Enter': {
          e.preventDefault();
          if (pointFocusRef.current >= 0 && typeof onSelect === 'function') {
            onSelect(points[pointFocusRef.current], e);
          }
          break;
        }
        case ' ': {
          // Space fires selection on keyup.
          e.preventDefault();
          spaceHeldRef.current = true;
          break;
        }
      }
    },
    [activatePoint, onSelect],
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ' && spaceHeldRef.current) {
        spaceHeldRef.current = false;
        const points = flatPointsRef.current;
        if (pointFocusRef.current >= 0 && typeof onSelect === 'function') {
          onSelect(points[pointFocusRef.current], e);
        }
      }
    },
    [onSelect],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        const index = pointFocusRef.current >= 0 ? pointFocusRef.current : 0;
        activatePoint(index);
      }
      if (typeof consumerOnFocus === 'function') {
        consumerOnFocus(e);
      }
    },
    [activatePoint, consumerOnFocus],
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        clearActivePoint();
        spaceHeldRef.current = false;
      }
      if (typeof consumerOnBlur === 'function') {
        consumerOnBlur(e);
      }
    },
    [clearActivePoint, consumerOnBlur],
  );

  const handleKeyDownCapture = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      handleKeyDown(e);
      if (typeof consumerOnKeyDownCapture === 'function') {
        consumerOnKeyDownCapture(e);
      }
    },
    [handleKeyDown, consumerOnKeyDownCapture],
  );

  const handlePointClick = useCallback(
    (datasetIndex: number, pointIndex: number) => {
      const points = flatPointsRef.current;
      const idx = points.findIndex((p) => p.datasetIndex === datasetIndex && p.pointIndex === pointIndex);
      if (idx >= 0) {
        activatePoint(idx);
      }
    },
    [activatePoint],
  );

  if (!enabled) {
    return { containerProps: {} as const, handlePointClick: undefined };
  }

  if (flatPoints.length === 0) {
    return {
      containerProps: {
        tabIndex: 0,
        'aria-roledescription': 'chart',
      } as const,
      handlePointClick: undefined,
    };
  }

  return {
    containerProps: {
      tabIndex: 0,
      role: 'application' as const,
      'aria-roledescription': 'chart',
      onKeyDownCapture: handleKeyDownCapture,
      onKeyUp: handleKeyUp,
      onBlur: handleBlur,
      onFocus: handleFocus,
    },
    handlePointClick,
  };
}
