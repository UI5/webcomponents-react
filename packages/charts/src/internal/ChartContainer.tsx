import { useStylesheet } from '@ui5/webcomponents-react-base/internal/hooks';
import type { CommonProps } from '@ui5/webcomponents-react-base/internal/types';
import { clsx } from 'clsx';
import type { ComponentType, ReactElement, ReactNode } from 'react';
import { Component, forwardRef } from 'react';
import { ResponsiveContainer } from 'recharts';
import { ChartBusyIndicator } from './ChartBusyIndicator.js';
import { classNames, styleData } from './ChartContainer.module.css.js';

export interface ContainerProps extends CommonProps {
  children: ReactElement;
  Placeholder: ComponentType;
  dataset: unknown[];
  loading: boolean;
  loadingDelay: number;
  resizeDebounce: number;
}

class ErrorBoundary extends Component<{ children: ReactNode }, { errorCount: number }> {
  state = {
    errorCount: 0,
  };

  componentDidCatch() {
    if (this.state.errorCount < 3) {
      this.setState((old) => ({ ...old, errorCount: old.errorCount + 1 }));
    }
  }

  render() {
    if (this.state.errorCount >= 3) {
      return <span className={classNames.errorMessage}>Sorry, something went wrong while rendering this chart!</span>;
    }
    return this.props.children;
  }
}

const ChartContainer = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const {
    Placeholder,
    loading = false,
    dataset,
    className,
    slot,
    children,
    resizeDebounce,
    loadingDelay = 1000,
    ...rest
  } = props;

  useStylesheet(styleData, ChartContainer.displayName);

  return (
    <div ref={ref} className={clsx(classNames.container, className)} slot={slot} {...rest}>
      {dataset?.length > 0 ? (
        <>
          {loading && <ChartBusyIndicator delay={loadingDelay} className={classNames.busyIndicator} />}
          <ErrorBoundary>
            <ResponsiveContainer debounce={resizeDebounce}>{children}</ResponsiveContainer>
          </ErrorBoundary>
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
});

ChartContainer.displayName = 'ChartContainer';

export { ChartContainer };
