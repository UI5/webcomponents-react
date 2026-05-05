import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/internal/hooks';
import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

const defaultAxisHeight = 30;

function measure(container: Element | null, axisCount: number, prevHeightsRef: React.RefObject<number[]>) {
  const heights = Array(axisCount).fill(defaultAxisHeight);
  container?.querySelectorAll<SVGGraphicsElement>('.xAxis').forEach((xAxis, index) => {
    const height = xAxis?.getBBox()?.height;
    if (height > defaultAxisHeight) {
      heights[index] = height;
    }
  });

  const prev = prevHeightsRef.current;
  const same = prev.length === heights.length && prev.every((v, i) => v === heights[i]);
  if (!same) {
    prevHeightsRef.current = heights;
    return heights;
  }
  return null;
}

export const useObserveXAxisHeights = (chartRef: RefObject<SVGElement>, axisCount) => {
  const [xAxisHeights, setXAxisHeights] = useState(Array(axisCount).fill(defaultAxisHeight));
  const prevHeightsRef = useRef(xAxisHeights);

  // Synchronous measurement after each of our own commits.
  useIsomorphicLayoutEffect(() => {
    const result = measure(chartRef.current, axisCount, prevHeightsRef);
    if (result) {
      setXAxisHeights(result);
    }
  });

  // MutationObserver to catch chart content appearing from ResponsiveContainer's
  // internal re-render and CartesianAxis's componentDidMount re-render.
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
