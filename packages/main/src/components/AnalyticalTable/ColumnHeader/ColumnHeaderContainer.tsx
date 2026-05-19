import type { Virtualizer } from '@tanstack/react-virtual';
import { forwardRef, useMemo } from 'react';
import type { ClassNames, DivWithCustomScrollProp } from '../types/index.js';
import { RenderColumnTypes } from '../types/index.js';
import { ColumnHeader } from './index.js';

interface ColumnHeaderContainerProps {
  classNames: ClassNames;
  headerProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerGroup: Record<string, any>;
  resizeInfo: Record<string, unknown>;
  isRtl: boolean;
  columnVirtualizer: Virtualizer<DivWithCustomScrollProp, Element>;
  uniqueId: string;
  showVerticalEndBorder: boolean;
  stickyStartIndices: number[];
}

export const ColumnHeaderContainer = forwardRef<HTMLDivElement, ColumnHeaderContainerProps>((props, ref) => {
  const {
    headerProps,
    headerGroup,
    resizeInfo,
    isRtl,
    columnVirtualizer,
    uniqueId,
    showVerticalEndBorder,
    classNames,
    stickyStartIndices,
  } = props;
  const { key, ...reactTableHeaderProps } = headerProps;

  const stickyStartSet = useMemo(() => new Set(stickyStartIndices), [stickyStartIndices]);
  const totalSize = columnVirtualizer.getTotalSize();

  return (
    <div
      key={key}
      {...reactTableHeaderProps}
      style={{ width: `${totalSize}px` }}
      ref={ref}
      data-component-name="AnalyticalTableHeaderRow"
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn, index) => {
        const column = headerGroup.headers[virtualColumn.index];
        if (!column) {
          return null;
        }
        const isStickyStart = stickyStartSet.has(virtualColumn.index);

        const { key, ...rest } = column.getHeaderProps();
        return (
          <ColumnHeader
            key={key}
            {...rest}
            showVerticalEndBorder={showVerticalEndBorder}
            id={`${uniqueId}${rest?.id ?? ''}`}
            columnId={rest.id}
            visibleColumnIndex={index}
            headerTooltip={column.headerTooltip}
            isDraggable={!column.disableDragAndDrop && !resizeInfo.isResizingColumn}
            virtualColumn={virtualColumn}
            columnVirtualizer={columnVirtualizer}
            isRtl={isRtl}
            classNames={classNames}
            isStickyStart={isStickyStart}
            isLastStickyStart={isStickyStart && !stickyStartSet.has(virtualColumn.index + 1)}
          >
            {column.render(RenderColumnTypes.Header)}
          </ColumnHeader>
        );
      })}
      {/* Resizers live in a separate absolute layer so they don't take up flex space.
          Sticky columns get `position: sticky` (pinned at column right edge during scroll);
          non-sticky columns get `position: absolute` (scroll naturally with content). */}
      <div className={classNames.resizerLayer} style={{ width: `${totalSize}px` }} aria-hidden="true">
        {columnVirtualizer.getVirtualItems().map((virtualColumn) => {
          const column = headerGroup.headers[virtualColumn.index];
          if (!column || !column.canResize || !column.getResizerProps) {
            return null;
          }
          const isStickyStart = stickyStartSet.has(virtualColumn.index);
          const isLastColumn = !column.disableResizing && virtualColumn.index + 1 === headerGroup.headers.length;
          const resizerEdgeOffset = virtualColumn.start + virtualColumn.size - (isLastColumn ? 3 : 0);
          const resizerPositionStyle = isStickyStart
            ? {
                position: 'sticky' as const,
                insetInlineStart: `${resizerEdgeOffset}px`,
                transform: isRtl ? 'translateX(50%)' : 'translateX(-50%)',
              }
            : isRtl
              ? {
                  position: 'absolute' as const,
                  right: `${resizerEdgeOffset}px`,
                  transform: 'translateX(50%)',
                }
              : {
                  position: 'absolute' as const,
                  left: `${resizerEdgeOffset}px`,
                  transform: 'translateX(-50%)',
                };
          const { key: resizerKey, ...resizerProps } = column.getResizerProps();
          return (
            <div
              key={resizerKey}
              {...resizerProps}
              data-resizer
              data-component-name="AnalyticalTableResizer"
              className={classNames.resizer}
              style={resizerPositionStyle}
            />
          );
        })}
      </div>
    </div>
  );
});

ColumnHeaderContainer.displayName = 'ColumnHeaderContainer';
