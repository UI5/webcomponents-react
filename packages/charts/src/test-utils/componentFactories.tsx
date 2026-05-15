import type { ComponentType } from 'react';
import { useState } from 'react';

/**
 * Factory that creates a click-tracking test component for charts that use onClick + onLegendClick.
 *
 * Options:
 * - noAnimation: pass `noAnimation` prop to the chart
 * - trackLegendValue: include a `last-legend-value` span tracking `e.detail?.value`
 * - trackPayload: include a `last-payload` span tracking `e.detail?.payload` (default: true)
 */
export function createClickTestComponent(
  Chart: ComponentType<any>,
  baseProps: Record<string, any>,
  options?: { noAnimation?: boolean; trackLegendValue?: boolean; trackPayload?: boolean },
) {
  const { noAnimation = false, trackLegendValue = false, trackPayload = true } = options || {};

  return function ClickTestComponent() {
    const [clickCount, setClickCount] = useState(0);
    const [lastPayload, setLastPayload] = useState<string>('');
    const [legendClickCount, setLegendClickCount] = useState(0);
    const [lastLegendValue, setLastLegendValue] = useState('');
    const [lastLegendDataKey, setLastLegendDataKey] = useState('');

    return (
      <>
        <span data-testid="click-count">{clickCount}</span>
        {trackPayload && <span data-testid="last-payload">{lastPayload}</span>}
        <span data-testid="legend-click-count">{legendClickCount}</span>
        {trackLegendValue && <span data-testid="last-legend-value">{lastLegendValue}</span>}
        <span data-testid="last-legend-datakey">{lastLegendDataKey}</span>
        <Chart
          {...baseProps}
          {...(noAnimation ? { noAnimation: true } : {})}
          onClick={(e: any) => {
            setClickCount((c) => c + 1);
            if (trackPayload) {
              setLastPayload(JSON.stringify(e.detail?.payload));
            }
          }}
          onLegendClick={(e: any) => {
            setLegendClickCount((c) => c + 1);
            if (trackLegendValue) {
              setLastLegendValue(e.detail?.value || '');
            }
            setLastLegendDataKey(e.detail?.dataKey || '');
          }}
        />
      </>
    );
  };
}

/**
 * Factory for legend config test component.
 */
export function createLegendConfigTestComponent(Chart: ComponentType<any>, baseProps: Record<string, any>) {
  return function LegendConfigTestComponent() {
    return (
      <Chart
        {...baseProps}
        chartConfig={{
          legendConfig: {
            formatter: (value: string) => <span data-testid="catval">{value}🐱</span>,
          },
        }}
      />
    );
  };
}

/**
 * Factory for zooming tool test components. Returns { ZoomingEnabled, ZoomingDisabled, ZoomingCustom }.
 */
export function createZoomingTestComponents(Chart: ComponentType<any>, baseProps: Record<string, any>) {
  const ZoomingEnabled = () => <Chart {...baseProps} chartConfig={{ zoomingTool: true }} />;
  const ZoomingDisabled = () => <Chart {...baseProps} chartConfig={{ zoomingTool: false }} />;
  const ZoomingCustom = () => <Chart {...baseProps} chartConfig={{ zoomingTool: { stroke: 'red' } }} />;
  return { ZoomingEnabled, ZoomingDisabled, ZoomingCustom };
}

/**
 * Factory for stack aggregate totals test components. Returns { StackTotalsEnabled, StackTotalsDisabled }.
 */
export function createStackTotalsTestComponents(
  Chart: ComponentType<any>,
  baseProps: Record<string, any>,
  stackMeasures: any[],
) {
  const StackTotalsEnabled = () => (
    <Chart {...baseProps} measures={stackMeasures} chartConfig={{ showStackAggregateTotals: true }} />
  );
  const StackTotalsDisabled = () => (
    <Chart {...baseProps} measures={stackMeasures} chartConfig={{ showStackAggregateTotals: false }} />
  );
  return { StackTotalsEnabled, StackTotalsDisabled };
}
