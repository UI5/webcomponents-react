import { useI18nBundle } from '@ui5/webcomponents-react-base';
import type { MutableRefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { DRAG_TO_RESIZE } from '../../i18n/i18n-defaults.js';
import type { ClassNames } from './types/index.js';

interface VerticalResizerProps {
  analyticalTableRef: MutableRefObject<any>;
  dispatch: (e: { type: string; payload?: any }) => void;
  extensionsHeight: number;
  hasPopInColumns: boolean;
  popInRowHeight: number;
  rowsLength: number;
  visibleRows: number;
  handleOnLoadMore: (e: Event) => void;
  classNames: ClassNames;
}

interface VerticalResizerPosition {
  left: number;
  top: number;
  width: number;
}

const isTouchEvent = (e, touchEvent) => {
  if (e.type === touchEvent) {
    return !(e.touches && e.touches.length > 1);
  }
  return false;
};

export const VerticalResizer = (props: VerticalResizerProps) => {
  const {
    analyticalTableRef,
    dispatch,
    extensionsHeight,
    hasPopInColumns,
    popInRowHeight,
    rowsLength,
    visibleRows,
    handleOnLoadMore,
    classNames,
  } = props;

  const startY = useRef(null);
  const verticalResizerRef = useRef(null);
  const [resizerPosition, setResizerPosition] = useState<undefined | VerticalResizerPosition>(undefined);
  const [isDragging, setIsDragging] = useState(false);
  const [mountTouchEvents, setMountTouchEvents] = useState(false);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const handleResizeStart = useCallback((e) => {
    e.preventDefault();
    const touchEvent = isTouchEvent(e, 'touchstart');
    startY.current = touchEvent ? Math.round(e.touches[0].pageY) : e.pageY;
    setMountTouchEvents(touchEvent);
    setIsDragging(true);
  }, []);

  const handleMove = useCallback(
    (e: TouchEvent | MouseEvent) => {
      setResizerPosition((prev) => ({
        ...prev,
        top: isTouchEvent(e, 'touchmove') ? Math.round((e as TouchEvent).touches[0].pageY) : (e as MouseEvent).pageY,
      }));
    },
    [setResizerPosition],
  );
  const handleResizeEnd = useCallback(
    (e: TouchEvent | MouseEvent) => {
      setIsDragging(false);
      const rowCount = Math.floor(
        (analyticalTableRef.current.clientHeight +
          (isTouchEvent(e, 'touchend')
            ? Math.round((e as TouchEvent).changedTouches[0].pageY)
            : (e as MouseEvent).pageY) -
          startY.current -
          extensionsHeight -
          5) /*resizer height*/ /
          popInRowHeight,
      );
      if (hasPopInColumns) {
        dispatch({ type: 'INTERACTIVE_ROWS_HAVE_POPIN', payload: true });
      }
      dispatch({
        type: 'VISIBLE_ROWS',
        payload: { visibleRows: rowCount },
      });
    },
    [analyticalTableRef, dispatch, extensionsHeight, hasPopInColumns, popInRowHeight],
  );

  useEffect(() => {
    const removeEventListeners = () => {
      if (mountTouchEvents) {
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleResizeEnd);
      } else {
        document.removeEventListener('mouseup', handleResizeEnd);
        document.removeEventListener('mousemove', handleMove);
      }
    };
    if (isDragging) {
      if (mountTouchEvents) {
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleResizeEnd);
      } else {
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleResizeEnd);
      }
    } else {
      removeEventListeners();
    }
    return () => {
      removeEventListeners();
    };
  }, [handleMove, handleResizeEnd, isDragging, mountTouchEvents]);

  useEffect(() => {
    const resizerPosTop = verticalResizerRef.current?.getBoundingClientRect()?.top + window.scrollY;
    const resizerPosLeft = verticalResizerRef.current?.getBoundingClientRect()?.left + window.scrollX;
    const resizerPosWidth = verticalResizerRef.current?.getBoundingClientRect()?.width;
    if (!isDragging && resizerPosTop > 0) {
      requestAnimationFrame(() => {
        setResizerPosition({ left: resizerPosLeft, top: resizerPosTop, width: resizerPosWidth });
      });
    }
  }, [isDragging]);

  const isInitial = useRef(true);
  useEffect(() => {
    if (!isInitial.current && rowsLength <= visibleRows) {
      handleOnLoadMore({ type: 'tableGrow' } as Event);
    }
    isInitial.current = false;
  }, [handleOnLoadMore, rowsLength, visibleRows]);

  return (
    <div
      aria-hidden="true"
      className={classNames.verticalResizerContainer}
      ref={verticalResizerRef}
      onMouseDown={handleResizeStart}
      onTouchStart={handleResizeStart}
      role="separator"
      title={i18nBundle.getText(DRAG_TO_RESIZE)}
    >
      {resizerPosition &&
        isDragging &&
        createPortal(
          <div
            className={classNames.verticalResizer}
            style={{ top: resizerPosition.top, left: resizerPosition.left, width: resizerPosition.width }}
          />,
          document.body,
        )}
    </div>
  );
};

VerticalResizer.displayName = 'VerticalResizer';
