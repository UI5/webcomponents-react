import { clsx } from 'clsx';
import type { MutableRefObject } from 'react';
import { forwardRef } from 'react';
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

export const VerticalScrollbar = forwardRef<HTMLDivElement, VerticalScrollbarProps>((props, ref) => {
  const { internalRowHeight, tableRef, tableBodyHeight, scrollContainerRef, classNames } = props;
  const hasHorizontalScrollbar = tableRef?.current?.offsetWidth !== tableRef?.current?.scrollWidth;
  const horizontalScrollbarSectionStyles = clsx(hasHorizontalScrollbar && classNames.bottomSection);

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
        ref={ref}
        style={{
          height: tableRef.current ? `${tableBodyHeight}px` : '0',
        }}
        className={clsx(classNames.scrollbar)}
        data-component-name="AnalyticalTableVerticalScrollbar"
        tabIndex={-1}
      >
        <div
          className={classNames.verticalScroller}
          style={{
            height: `${scrollContainerRef.current?.scrollHeight}px`,
          }}
        />
      </div>
      <div className={horizontalScrollbarSectionStyles} />
    </FlexBox>
  );
});

VerticalScrollbar.displayName = 'VerticalScrollbar';
