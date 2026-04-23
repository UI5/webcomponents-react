import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/internal/hooks';
import type { FocusEvent, KeyboardEvent, RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UsePieSectorFocusOptions {
  chartRef: RefObject<HTMLDivElement | null>;
  enabled: boolean;
  activeSegment?: number;
  dataLength: number;
  onSelect?: (index: number, event: KeyboardEvent) => void;
  getSectorLabel?: (index: number) => string;
}

export function usePieSectorFocus({
  chartRef,
  enabled,
  activeSegment,
  dataLength,
  onSelect,
  getSectorLabel,
}: UsePieSectorFocusOptions) {
  const sectorFocusRef = useRef(-1);
  const lastSectorRef = useRef(-1);
  const [inSectorMode, setInSectorMode] = useState(false);
  const getSectorLabelRef = useRef(getSectorLabel);
  useEffect(() => {
    getSectorLabelRef.current = getSectorLabel;
  });

  const focusSector = useCallback(
    (index: number) => {
      const pieGroup = chartRef.current?.querySelector<SVGGElement>('.recharts-pie');
      if (!pieGroup) return;
      const sectors = pieGroup.querySelectorAll<SVGGElement>(':scope > .recharts-pie-sector');
      if (!sectors.length) return;
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

  useIsomorphicLayoutEffect(() => {
    if (!enabled || sectorFocusRef.current < 0) return;
    focusSector(sectorFocusRef.current);
  }, [activeSegment, enabled, focusSector, inSectorMode]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!dataLength) return;
      const isContainerFocused = e.target === e.currentTarget;

      if (e.key === 'Tab') {
        if (isContainerFocused && !e.shiftKey) {
          const sectors = chartRef.current?.querySelectorAll<SVGGElement>('.recharts-pie-sector');
          if (!sectors?.length) return;
          e.preventDefault();
          sectorFocusRef.current = activeSegment ?? 0;
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

      if (isContainerFocused) return;

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
        case 'Enter':
        case ' ': {
          e.preventDefault();
          if (sectorFocusRef.current >= 0) {
            onSelect?.(sectorFocusRef.current, e);
          }
          break;
        }
      }
    },
    [dataLength, chartRef, activeSegment, exitSectorMode, focusSector, onSelect],
  );

  const handleBlur = useCallback(
    (e: FocusEvent) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
        const container = e.currentTarget as HTMLElement;
        requestAnimationFrame(() => {
          if (!container.contains(document.activeElement)) {
            lastSectorRef.current = sectorFocusRef.current;
            exitSectorMode();
          }
        });
      }
    },
    [exitSectorMode],
  );

  const handleFocus = useCallback((e: FocusEvent) => {
    if (e.target === e.currentTarget && lastSectorRef.current >= 0) {
      sectorFocusRef.current = lastSectorRef.current;
      lastSectorRef.current = -1;
      setInSectorMode(true);
    }
  }, []);

  const handleSectorClick = useCallback(
    (dataIndex: number) => {
      if (!enabled) return;
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

  return {
    containerProps: {
      tabIndex: inSectorMode ? -1 : 0,
      role: 'application' as const,
      'aria-roledescription': 'chart',
      onKeyDownCapture: handleKeyDown,
      onBlur: handleBlur,
      onFocus: handleFocus,
    },
    handleSectorClick,
  };
}
