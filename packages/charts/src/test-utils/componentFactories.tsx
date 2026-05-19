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
          noAnimation={noAnimation || undefined}
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
 * Factory for onDataPointClick test component.
 * Tracks: click count, dataKey, value, dataIndex, payload.
 */
export function createDataPointClickTestComponent(
  Chart: ComponentType<any>,
  baseProps: Record<string, any>,
  options?: { noAnimation?: boolean },
) {
  const { noAnimation = true } = options || {};

  return function DataPointClickTestComponent() {
    const [clickCount, setClickCount] = useState(0);
    const [lastDataKey, setLastDataKey] = useState('');
    const [lastValue, setLastValue] = useState('');
    const [lastDataIndex, setLastDataIndex] = useState(-1);
    const [lastPayload, setLastPayload] = useState('');

    return (
      <>
        <span data-testid="dp-click-count">{clickCount}</span>
        <span data-testid="dp-last-datakey">{lastDataKey}</span>
        <span data-testid="dp-last-value">{lastValue}</span>
        <span data-testid="dp-last-data-index">{lastDataIndex}</span>
        <span data-testid="dp-last-payload">{lastPayload}</span>
        <Chart
          {...baseProps}
          noAnimation={noAnimation || undefined}
          onDataPointClick={(e: any) => {
            setClickCount((c) => c + 1);
            setLastDataKey(e.detail?.dataKey || '');
            setLastValue(String(e.detail?.value ?? ''));
            setLastDataIndex(e.detail?.dataIndex ?? -1);
            setLastPayload(JSON.stringify(e.detail?.payload));
          }}
        />
      </>
    );
  };
}

/**
 * Factory for highlightColor test component.
 */
export function createHighlightColorTestComponent(
  Chart: ComponentType<any>,
  baseProps: Record<string, any>,
  highlightMeasures: any[],
) {
  return function HighlightColorTestComponent() {
    return <Chart {...baseProps} measures={highlightMeasures} noAnimation />;
  };
}

/**
 * Factory for secondYAxis test component.
 */
export function createSecondYAxisTestComponent(
  Chart: ComponentType<any>,
  baseProps: Record<string, any>,
  secondYAxisDataKey: string,
) {
  return function SecondYAxisTestComponent() {
    return <Chart {...baseProps} chartConfig={{ secondYAxis: { dataKey: secondYAxisDataKey } }} />;
  };
}

/**
 * Factory for vertical layout test component.
 */
export function createVerticalLayoutTestComponent(Chart: ComponentType<any>, baseProps: Record<string, any>) {
  return function VerticalLayoutTestComponent() {
    return <Chart {...baseProps} layout="vertical" />;
  };
}
