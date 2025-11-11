import { isChrome as isChromeFn } from '@ui5/webcomponents-react-base/Device';
import { useSyncRef } from '@ui5/webcomponents-react-base/internal/hooks';
import { debounce } from '@ui5/webcomponents-react-base/internal/utils/debounce';
import { clsx } from 'clsx';
import type { MutableRefObject } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { FlexBoxDirection } from '../../../enums/FlexBoxDirection.js';
import { FlexBox } from '../../FlexBox/index.js';
import type { ClassNames } from '../types/index.js';

interface VerticalScrollbarProps {
  internalRowHeight: number;
  tableRef: MutableRefObject<HTMLDivElement>;
  tableBodyHeight: number;
  scrollContainerRef: MutableRefObject<HTMLDivElement>;
  classNames: ClassNames;
}

const isChrome = isChromeFn();

export const VerticalScrollbar = forwardRef<HTMLDivElement, VerticalScrollbarProps>((props, ref) => {
  const { internalRowHeight, tableRef, tableBodyHeight, scrollContainerRef, classNames } = props;
  const [hasHorizontalScrollbar, setHasHorizontalScrollbar] = useState(false);
  const [componentRef, scrollbarRef] = useSyncRef<HTMLDivElement>(ref);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tableElement = tableRef?.current;
    if (!tableElement) return;

    const debouncedCheckScrollbar = debounce(() => {
      requestAnimationFrame(() => {
        const hasScrollbar = tableElement.offsetWidth !== tableElement.scrollWidth;
        setHasHorizontalScrollbar(hasScrollbar);
      });
    }, 100);

    const resizeObserver = new ResizeObserver(debouncedCheckScrollbar);
    resizeObserver.observe(tableElement);
    debouncedCheckScrollbar();

    return () => {
      debouncedCheckScrollbar.cancel();
      resizeObserver.disconnect();
    };
  }, [tableRef]);

  // Force style recalculation to fix Chrome scrollbar-color bug (track height not updating correctly)
  useEffect(() => {
    if (!isChrome) {
      return;
    }

    if (scrollbarRef.current && contentRef.current) {
      const scrollbarElement = scrollbarRef.current;

      const forceScrollbarUpdate = () => {
        const originalHeight = scrollbarElement.style.height;
        scrollbarElement.style.height = `${tableBodyHeight + 1}px`;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        scrollbarElement.offsetHeight; // Force reflow
        scrollbarElement.style.height = originalHeight ?? `${tableBodyHeight}px`;
      };

      requestAnimationFrame(forceScrollbarUpdate);
    }
  }, [tableBodyHeight, scrollContainerRef, scrollbarRef]);

  return (
    <FlexBox
      direction={FlexBoxDirection.Column}
      className={classNames.verticalScrollbarContainer}
      data-component-name="AnalyticalTableVerticalScrollbarContainer"
    >
      <div
        style={{
          height: `${internalRowHeight}px`,
        }}
        className={classNames.headerSection}
      />
      <div
        ref={componentRef}
        style={{
          height: `${tableBodyHeight}px`,
        }}
        className={clsx(classNames.scrollbar)}
        data-component-name="AnalyticalTableVerticalScrollbar"
        tabIndex={-1}
      >
        <div
          ref={(node) => {
            contentRef.current = node;
            if (node && scrollContainerRef.current?.scrollHeight) {
              node.style.height = `${scrollContainerRef.current?.scrollHeight}px`;
            }
          }}
          className={classNames.verticalScroller}
        />
      </div>
      <div className={clsx(hasHorizontalScrollbar && classNames.bottomSection)} />
    </FlexBox>
  );
});

VerticalScrollbar.displayName = 'VerticalScrollbar';
