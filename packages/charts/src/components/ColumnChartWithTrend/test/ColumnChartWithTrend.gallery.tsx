import { useState } from 'react';
import { complexDataSet } from '../../../resources/DemoProps.js';
import { createLegendConfigTestComponent } from '../../../test-utils/componentFactories.js';
import { ColumnChartWithTrend } from '../index.js';

const dimensions = [{ accessor: 'name', interval: 0 }];

const measures = [
  {
    accessor: 'users',
    label: 'Users',
    formatter: (val: number) => val.toLocaleString('en'),
    type: 'line' as const,
  },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    formatter: (val: number) => `${val} sessions`,
    type: 'bar' as const,
  },
];

const baseProps = { dataset: complexDataSet, dimensions, measures };

export function ColumnChartWithTrendClickTest() {
  const [clickCount, setClickCount] = useState(0);
  const [lastPayload, setLastPayload] = useState('');
  const [legendClickCount, setLegendClickCount] = useState(0);
  const [lastLegendDataKey, setLastLegendDataKey] = useState('');

  return (
    <>
      <span data-testid="click-count">{clickCount}</span>
      <span data-testid="last-payload">{lastPayload}</span>
      <span data-testid="legend-click-count">{legendClickCount}</span>
      <span data-testid="last-legend-datakey">{lastLegendDataKey}</span>
      <ColumnChartWithTrend
        {...baseProps}
        noAnimation
        onClick={(e: any) => {
          setClickCount((c) => c + 1);
          if (e.detail?.payload) {
            setLastPayload(JSON.stringify(e.detail.payload));
          }
        }}
        onLegendClick={(e: any) => {
          setLegendClickCount((c) => c + 1);
          setLastLegendDataKey(e.detail?.dataKey || '');
        }}
      />
    </>
  );
}

export function ColumnChartWithTrendGridTest() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '500px',
        gridTemplateRows: '500px',
      }}
    >
      <ColumnChartWithTrend {...baseProps} style={{ height: '100%' }} data-testid="ccwt" />
    </div>
  );
}

export const ColumnChartWithTrendLegendConfigTest = createLegendConfigTestComponent(ColumnChartWithTrend, baseProps);
