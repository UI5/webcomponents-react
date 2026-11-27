import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/internal/hooks';
import type { MutableRefObject, RefObject, SetStateAction } from 'react';
import { useCallback, useRef, useState } from 'react';
import type { ObjectPageDomRef } from './types/index.js';

const compensationProperty = '--_ui5wcr_ObjectPage_title_compensation';

interface CollapseGeometry {
  sectionId: string;
  expandedTitleHeight: number;
  titleWidth: number;
  sectionSpacer: number;
}

interface CollapseState {
  headerCollapsed: boolean | undefined;
  geometry: CollapseGeometry | null;
}

// Own the collapse state together with its optional geometry, so both always commit as one transition.
export const useScrollCollapseGeometry = ({
  objectPageRef,
  topHeaderRef,
  previousScrollTopRef,
  enabled,
  selectedSectionId,
  isActiveTabSectionTallEnough,
  sectionSpacer,
}: {
  objectPageRef: RefObject<ObjectPageDomRef>;
  topHeaderRef: RefObject<HTMLDivElement>;
  previousScrollTopRef: MutableRefObject<number>;
  enabled: boolean;
  selectedSectionId: string;
  isActiveTabSectionTallEnough: boolean;
  sectionSpacer: number;
}) => {
  const [{ headerCollapsed, geometry }, setCollapseState] = useState<CollapseState>({
    headerCollapsed: undefined,
    geometry: null,
  });
  const compensation = useRef(0);
  const activeGeometry = enabled && headerCollapsed && geometry?.sectionId === selectedSectionId ? geometry : null;

  // A snapshot belongs to one automatic collapse. Invalidate it during render when its scope changes, so a later
  // return to the same tab cannot resurrect an old measurement. No prop-to-state synchronization effect is needed.
  if (geometry && !activeGeometry) {
    setCollapseState({ headerCollapsed, geometry: null });
  }

  const setHeaderCollapsed = useCallback((value: SetStateAction<boolean | undefined>) => {
    setCollapseState((previous) => {
      const headerCollapsed = typeof value === 'function' ? value(previous.headerCollapsed) : value;
      if (headerCollapsed === previous.headerCollapsed && !previous.geometry) {
        return previous;
      }
      return { headerCollapsed, geometry: null };
    });
  }, []);

  const collapseOnScroll = useCallback(() => {
    let geometry: CollapseGeometry | null = null;
    if (enabled && isActiveTabSectionTallEnough) {
      const title = topHeaderRef.current.getBoundingClientRect();
      geometry = {
        sectionId: selectedSectionId,
        expandedTitleHeight: title.height,
        titleWidth: title.width,
        sectionSpacer,
      };
    }
    // Keep the snapshot and the collapse in one update. Native scroll listeners are not automatically batched
    // in React 18 legacy roots, so separate updates could discard the snapshot before the header collapses.
    setCollapseState({ headerCollapsed: true, geometry });
  }, [enabled, isActiveTabSectionTallEnough, selectedSectionId, sectionSpacer, topHeaderRef]);

  const resetScrollCollapse = useCallback(() => {
    setCollapseState((previous) => (previous.geometry ? { ...previous, geometry: null } : previous));
  }, []);

  const reconcileScrollGeometry = useCallback(() => {
    const page = objectPageRef.current;
    if (!page) {
      return;
    }
    let nextCompensation = 0;
    if (activeGeometry) {
      const title = topHeaderRef.current.getBoundingClientRect();
      if (title.width !== activeGeometry.titleWidth) {
        // Responsive layout establishes a new geometry; the old expanded measurement is no longer applicable.
        resetScrollCollapse();
      } else {
        nextCompensation = Math.max(
          0,
          activeGeometry.expandedTitleHeight - title.height - Math.max(0, sectionSpacer - activeGeometry.sectionSpacer),
        );
      }
    }
    let wasScrollClamped = false;
    if (nextCompensation > compensation.current) {
      // Measure before adding compensation: a clamp leaves scrollTop at the reduced maximum.
      // A position below that boundary is an upward scroll and must be preserved.
      const maxScrollTop = page.scrollHeight - page.clientHeight;
      const scrollTop = page.scrollTop;
      wasScrollClamped =
        previousScrollTopRef.current > maxScrollTop &&
        scrollTop < previousScrollTopRef.current &&
        // scrollTop can be fractional, while scrollHeight and clientHeight are rounded.
        Math.abs(scrollTop - maxScrollTop) <= 1;
    }
    if (nextCompensation !== compensation.current) {
      if (nextCompensation) {
        page.style.setProperty(compensationProperty, `${nextCompensation}px`);
      } else {
        page.style.removeProperty(compensationProperty);
      }
    }
    if (wasScrollClamped) {
      // Layout may already have clamped scrollTop before ResizeObserver runs. Restore it before paint and before
      // the scroll handler can mistake that clamp for the user's request to expand the header.
      page.scrollTo({ top: previousScrollTopRef.current, behavior: 'instant' });
    }
    compensation.current = nextCompensation;
  }, [activeGeometry, sectionSpacer, objectPageRef, topHeaderRef, previousScrollTopRef, resetScrollCollapse]);

  useIsomorphicLayoutEffect(() => {
    reconcileScrollGeometry();
  }, [reconcileScrollGeometry]);

  return {
    headerCollapsed,
    setHeaderCollapsed,
    expandedTitleHeight: activeGeometry?.expandedTitleHeight,
    collapseOnScroll,
    resetScrollCollapse,
    reconcileScrollGeometry: activeGeometry ? reconcileScrollGeometry : undefined,
  };
};
