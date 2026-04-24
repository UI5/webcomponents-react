import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/internal/hooks';
import type { FocusEvent, FocusEventHandler, KeyboardEvent, KeyboardEventHandler, RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UsePieSectorFocusOptions {
  chartRef: RefObject<HTMLDivElement | null>;
  enabled: boolean;
  activeSegment?: number;
  dataLength: number;
  onSelect?: (index: number, event: KeyboardEvent<HTMLDivElement>) => void;
  getSectorLabel?: (index: number) => string;
  consumerOnBlur?: FocusEventHandler<HTMLDivElement>;
  consumerOnFocus?: FocusEventHandler<HTMLDivElement>;
  consumerOnKeyDownCapture?: KeyboardEventHandler<HTMLDivElement>;
}

/**
 * Manages keyboard navigation through pie/donut chart sectors. Only one sector is tabbable at a time; arrow keys move focus between sectors.
 *
 * Active when `chartConfig.accessibilityLayer` is enabled.
 */
export function usePieSectorFocus({
  chartRef,
  enabled,
  activeSegment,
  dataLength,
  onSelect,
  getSectorLabel,
  consumerOnBlur,
  consumerOnFocus,
  consumerOnKeyDownCapture,
}: UsePieSectorFocusOptions) {
  const sectorFocusRef = useRef(-1);
  const lastSectorRef = useRef(-1);
  const spaceHeldRef = useRef(false);
  const [inSectorMode, setInSectorMode] = useState(false);
  const getSectorLabelRef = useRef(getSectorLabel);
  // Keep ref in sync so focusSector always uses the latest callback without re-creating the memoized function.
  useEffect(() => {
    getSectorLabelRef.current = getSectorLabel;
  });

  // Reset keyboard state when dataset size changes to prevent stale sector indices.
  useEffect(() => {
    sectorFocusRef.current = -1;
    lastSectorRef.current = -1;
    // Dataset changed - exit sector mode so the container becomes tabbable (tabIndex=0) again.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInSectorMode(false);
  }, [dataLength]);

  const focusSector = useCallback(
    (index: number) => {
      const pieGroup = chartRef.current?.querySelector<SVGGElement>('.recharts-pie');
      if (!pieGroup) {
        return;
      }
      const sectors = pieGroup.querySelectorAll<SVGGElement>(':scope > .recharts-pie-sector');
      if (!sectors.length) {
        return;
      }
      // Recharts sectors have no identifying attributes, add them so they can be found after DOM reordering
      if (!sectors[0].hasAttribute('data-sector-index')) {
        sectors.forEach((s, i) => {
          s.setAttribute('data-sector-index', String(i));
          s.setAttribute('role', 'img');
          const label = getSectorLabelRef.current?.(i);
          if (label) {
            s.setAttribute('aria-label', label);
          }
        });
      }
      if (sectorFocusRef.current >= 0) {
        pieGroup
          .querySelector<SVGGElement>(`.recharts-pie-sector[data-sector-index="${sectorFocusRef.current}"]`)
          ?.removeAttribute('tabindex');
      }
      const target = pieGroup.querySelector<SVGGElement>(`.recharts-pie-sector[data-sector-index="${index}"]`);
      if (target) {
        // SVG paints in document order - move focused sector last so its focus outline isn't hidden.
        pieGroup.appendChild(target);
        target.tabIndex = 0;
        target.focus();
      }
      sectorFocusRef.current = index;
    },
    [chartRef],
  );

  const exitSectorMode = useCallback(() => {
    const pieGroup = chartRef.current?.querySelector<SVGGElement>('.recharts-pie');
    if (pieGroup) {
      pieGroup
        .querySelectorAll<SVGGElement>('.recharts-pie-sector[tabindex]')
        .forEach((s) => s.removeAttribute('tabindex'));
    }
    sectorFocusRef.current = -1;
    setInSectorMode(false);
  }, [chartRef]);

  // Recharts destroys and recreates all sector DOM elements on re-render, wiping imperative attributes.
  useIsomorphicLayoutEffect(() => {
    if (!enabled || sectorFocusRef.current < 0) {
      return;
    }
    focusSector(sectorFocusRef.current);
  }, [activeSegment, enabled, focusSector, inSectorMode]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!dataLength) {
        return;
      }
      const isContainerFocused = e.target === e.currentTarget;

      if (e.key === 'Tab') {
        if (isContainerFocused && !e.shiftKey) {
          const sectors = chartRef.current?.querySelectorAll<SVGGElement>('.recharts-pie-sector');
          if (!sectors?.length) {
            return;
          }
          e.preventDefault();
          sectorFocusRef.current = Math.min(activeSegment ?? 0, dataLength - 1);
          setInSectorMode(true);
          return;
        }

        if (!isContainerFocused) {
          if (e.shiftKey) {
            e.preventDefault();
            lastSectorRef.current = -1;
            exitSectorMode();
            (e.currentTarget as HTMLElement).focus();
          }
        }
        return;
      }

      if (isContainerFocused) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp': {
          e.preventDefault();
          e.stopPropagation();
          focusSector((sectorFocusRef.current + 1) % dataLength);
          break;
        }
        case 'ArrowLeft':
        case 'ArrowDown': {
          e.preventDefault();
          e.stopPropagation();
          focusSector((sectorFocusRef.current - 1 + dataLength) % dataLength);
          break;
        }
        case 'Enter': {
          e.preventDefault();
          if (sectorFocusRef.current >= 0) {
            onSelect?.(sectorFocusRef.current, e);
          }
          break;
        }
        case ' ': {
          // Space activates on keyup so users can hold it, arrow to another sector, then release.
          e.preventDefault();
          spaceHeldRef.current = true;
          break;
        }
      }
    },
    [dataLength, chartRef, activeSegment, exitSectorMode, focusSector, onSelect],
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLDivElement>) => {
      // Defer cleanup — blur fires before layout effects, so the new focus target may not be settled yet.
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
        const container = e.currentTarget as HTMLElement;
        requestAnimationFrame(() => {
          if (!container.contains(document.activeElement)) {
            lastSectorRef.current = sectorFocusRef.current;
            exitSectorMode();
          }
        });
      }
      if (typeof consumerOnBlur === 'function') {
        consumerOnBlur(e);
      }
    },
    [exitSectorMode, consumerOnBlur],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLDivElement>) => {
      // Re-enter sector mode when tabbing back — restore the last focused sector.
      if (e.target === e.currentTarget && lastSectorRef.current >= 0) {
        sectorFocusRef.current = lastSectorRef.current;
        lastSectorRef.current = -1;
        setInSectorMode(true);
      }
      if (typeof consumerOnFocus === 'function') {
        consumerOnFocus(e);
      }
    },
    [consumerOnFocus],
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

  const handleKeyUp = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ' && spaceHeldRef.current) {
        spaceHeldRef.current = false;
        if (sectorFocusRef.current >= 0) {
          onSelect?.(sectorFocusRef.current, e);
        }
      }
    },
    [onSelect],
  );

  const handleSectorClick = useCallback(
    (dataIndex: number) => {
      if (!enabled) {
        return;
      }
      if (inSectorMode) {
        focusSector(dataIndex);
      } else {
        sectorFocusRef.current = dataIndex;
        setInSectorMode(true);
      }
    },
    [enabled, inSectorMode, focusSector],
  );

  if (!enabled) {
    return {
      containerProps: {} as const,
      handleSectorClick: () => {},
    };
  }

  if (dataLength === 0) {
    return {
      containerProps: {
        tabIndex: 0,
        'aria-roledescription': 'chart',
      } as const,
      handleSectorClick: () => {},
    };
  }

  return {
    containerProps: {
      tabIndex: inSectorMode ? -1 : 0,
      role: 'application' as const,
      'aria-roledescription': 'chart',
      onKeyDownCapture: handleKeyDownCapture,
      onKeyUp: handleKeyUp,
      onBlur: handleBlur,
      onFocus: handleFocus,
    },
    handleSectorClick,
  };
}
