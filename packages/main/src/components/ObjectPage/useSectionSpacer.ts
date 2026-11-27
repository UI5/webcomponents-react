import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { useEffect } from 'react';
import { ObjectPageMode } from '../../enums/ObjectPageMode.js';
import type { ObjectPageDomRef, ObjectPagePropTypes } from './types/index.js';

export interface TabSectionLayout {
  isTallEnough: boolean;
  dependsOnTitleHeight: boolean;
}

interface UseSectionSpacerProps {
  objectPageRef: RefObject<ObjectPageDomRef>;
  tabContainerContainerRef: RefObject<HTMLDivElement | null>;
  mode: ObjectPagePropTypes['mode'];
  isActiveSectionFitContent: boolean;
  topHeaderHeight: number;
  expandedTitleHeight: number | undefined;
  headerContentHeight: number;
  tabContainerHeaderHeight: number;
  headerPinned: boolean;
  headerCollapsed: boolean;
  currentTabModeSection: ReactNode;
  children: ReactNode;
  hasOnlySingleSection: boolean;
  setSectionSpacer: Dispatch<SetStateAction<number>>;
  setTabSectionLayout: Dispatch<SetStateAction<TabSectionLayout>>;
}

/**
 * Observes the last section and derives the spacer and active-tab layout from a single measurement pass:
 *
 * - `sectionSpacer`: bottom padding so the last section can scroll up under the sticky header.
 * - `isTallEnough`: whether a non-fit `IconTabBar` section can scroll the top spacer out of view (a shorter one can't, so its reserved `headerContentHeight` would stay on screen as dead space).
 * - `dependsOnTitleHeight`: whether shrinking the title could change that decision. Taller sections need no compensation.
 */
export const useSectionSpacer = ({
  objectPageRef,
  tabContainerContainerRef,
  mode,
  isActiveSectionFitContent,
  topHeaderHeight,
  expandedTitleHeight,
  headerContentHeight,
  tabContainerHeaderHeight,
  headerPinned,
  headerCollapsed,
  currentTabModeSection,
  children,
  hasOnlySingleSection,
  setSectionSpacer,
  setTabSectionLayout,
}: UseSectionSpacerProps) => {
  const isHeaderPinnedAndExpanded = headerPinned && !headerCollapsed;
  useEffect(() => {
    const objectPage = objectPageRef.current;
    const tabContainerContainer = tabContainerContainerRef.current;

    if (!objectPage || !tabContainerContainer) {
      return;
    }

    const footerElement = objectPage.querySelector<HTMLDivElement>('[data-component-name="ObjectPageFooter"]');
    const topHeaderElement = objectPage.querySelector('[data-component-name="ObjectPageTopHeader"]');

    const calculateSpacer = ([lastSectionNodeEntry]: ResizeObserverEntry[]) => {
      const lastSectionNode = lastSectionNodeEntry?.target;

      if (!lastSectionNode) {
        setSectionSpacer(0);
        return;
      }

      const subSections = lastSectionNode.querySelectorAll<HTMLDivElement>('[id^="ObjectPageSubSection"]');
      const lastSubSection = subSections[subSections.length - 1];
      const lastSubSectionOrSection = lastSubSection ?? lastSectionNode;

      // Only keep the top spacer when the non-fit section is tall enough to scroll it out of view; a shorter section
      // can't scroll, so the reserved headerContentHeight would stay on screen as dead space. During an automatic
      // collapse, retain the expanded title's reference height; the geometry hook compensates the actual title loss.
      if (mode === ObjectPageMode.IconTabBar && !isActiveSectionFitContent) {
        const footerHeight = footerElement?.offsetHeight ?? 0;
        const viewportWithoutTitle =
          objectPage.getBoundingClientRect().height - tabContainerHeaderHeight - footerHeight;
        const availableViewport = viewportWithoutTitle - (expandedTitleHeight ?? topHeaderHeight);
        const sectionHeight = (lastSectionNode as HTMLElement).getBoundingClientRect().height;
        const nextLayout = {
          isTallEnough: sectionHeight >= availableViewport,
          // A section this tall can keep the top spacer even if the title shrinks to zero. It needs no snapshot.
          dependsOnTitleHeight: sectionHeight < viewportWithoutTitle,
        };
        setTabSectionLayout((previous) =>
          previous.isTallEnough === nextLayout.isTallEnough &&
          previous.dependsOnTitleHeight === nextLayout.dependsOnTitleHeight
            ? previous
            : nextLayout,
        );
      }

      if ((currentTabModeSection && !lastSubSection) || (sectionNodes.length === 1 && !lastSubSection)) {
        setSectionSpacer(0);
        return;
      }

      // batching DOM-reads together minimizes reflow
      const footerHeight = footerElement?.offsetHeight ?? 0;
      const objectPageRect = objectPage.getBoundingClientRect();
      const tabContainerContainerRect = tabContainerContainer.getBoundingClientRect();
      const lastSubSectionOrSectionRect = lastSubSectionOrSection.getBoundingClientRect();

      let stickyHeaderBottom = 0;
      if (!isHeaderPinnedAndExpanded) {
        const topHeaderBottom = topHeaderElement?.getBoundingClientRect().bottom ?? 0;
        stickyHeaderBottom = topHeaderBottom + tabContainerContainerRect.height;
      } else {
        stickyHeaderBottom = tabContainerContainerRect.bottom;
      }

      const spacer = Math.ceil(
        objectPageRect.bottom - stickyHeaderBottom - lastSubSectionOrSectionRect.height - footerHeight, // section padding (8px) not included, so that the intersection observer is triggered correctly
      );
      setSectionSpacer(Math.max(spacer, 0));
    };

    const observer = new ResizeObserver(calculateSpacer);
    const sectionNodes = objectPage.querySelectorAll<HTMLDivElement>('[id^="ObjectPageSection"]');
    const lastSectionNode = sectionNodes[sectionNodes.length - 1];

    if (lastSectionNode) {
      observer.observe(lastSectionNode, { box: 'border-box' });
    }

    return () => {
      observer.disconnect();
    };
  }, [
    topHeaderHeight,
    expandedTitleHeight,
    headerContentHeight,
    currentTabModeSection,
    children,
    mode,
    isHeaderPinnedAndExpanded,
    hasOnlySingleSection,
    objectPageRef,
    isActiveSectionFitContent,
    tabContainerHeaderHeight,
    tabContainerContainerRef,
    setSectionSpacer,
    setTabSectionLayout,
  ]);
};
