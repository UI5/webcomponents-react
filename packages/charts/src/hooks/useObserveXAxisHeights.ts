import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/internal/hooks';
import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

// recharts default axis height -> is changed when labels are rotated
const defaultAxisHeight = 30;

/**
 * Measure x-axis height(s) - defaults to `defaultAxisHeight`
 */
function measure(container: Element | null, axisCount: number, prevHeightsRef: RefObject<number[]>) {
  const heights = Array(axisCount).fill(defaultAxisHeight);
  container?.querySelectorAll<SVGGraphicsElement>('.xAxis').forEach((xAxis, index) => {
    const height = xAxis?.getBBox()?.height;
    if (height > defaultAxisHeight) {
      heights[index] = height;
    }
  });

  const prevHeights = prevHeightsRef.current;
  const same = prevHeights.length === heights.length && prevHeights.every((value, index) => value === heights[index]);
  if (!same) {
    prevHeightsRef.current = heights;
    return heights;
  }
  // no change
  return null;
}

export const useObserveXAxisHeights = (chartRef: RefObject<SVGElement>, axisCount) => {
  const [xAxisHeights, setXAxisHeights] = useState(Array(axisCount).fill(defaultAxisHeight));
  const prevHeightsRef = useRef(xAxisHeights);

  // check on every render if height changed
  useIsomorphicLayoutEffect(() => {
    const result = measure(chartRef.current, axisCount, prevHeightsRef);
    if (result) {
      setXAxisHeights(result);
    }
  });

  // check on every component DOM subtree change (catches internal rerender)
  useEffect(() => {
    const container = chartRef.current;
    if (!container) {
      return;
    }

    const observer = new MutationObserver(() => {
      const result = measure(container, axisCount, prevHeightsRef);
      if (result) {
        setXAxisHeights(result);
      }
    });
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [chartRef, axisCount]);

  return xAxisHeights;
};
