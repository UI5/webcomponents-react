import { useState } from 'react';
import { scatterComplexDataSet, complexDataSet } from '../../../resources/DemoProps.js';
import { ScatterChart } from '../index.js';

const measures = [
  { accessor: 'users', label: 'Number', axis: 'x' as const },
  { accessor: 'sessions', label: 'Sessions', axis: 'y' as const },
  { accessor: 'volume', axis: 'z' as const },
];

const scatterAccessibilitySingleDataset = [
  {
    label: 'Series A',
    data: [
      { users: 100, sessions: 200, volume: 300 },
      { users: 50, sessions: 150, volume: 250 },
      { users: 200, sessions: 400, volume: 500 },
    ],
  },
];

export function ScatterChartClickTest() {
  const [clickCount, setClickCount] = useState(0);
  const [lastPayload, setLastPayload] = useState<string>('');
  const [legendClickCount, setLegendClickCount] = useState(0);
  const [lastLegendValue, setLastLegendValue] = useState('');

  return (
    <>
      <span data-testid="click-count">{clickCount}</span>
      <span data-testid="last-payload">{lastPayload}</span>
      <span data-testid="legend-click-count">{legendClickCount}</span>
      <span data-testid="last-legend-value">{lastLegendValue}</span>
      <ScatterChart
        dataset={scatterComplexDataSet}
        measures={measures}
        noAnimation
        onDataPointClick={(e) => {
          setClickCount((c) => c + 1);
          setLastPayload(JSON.stringify(e.detail?.payload));
        }}
        onLegendClick={(e) => {
          setLegendClickCount((c) => c + 1);
          setLastLegendValue(e.detail?.value || '');
        }}
      />
    </>
  );
}

export function ScatterChartAccessibilityTest() {
  const [clickCount, setClickCount] = useState(0);
  const [lastPayload, setLastPayload] = useState<string>('');
  const [blurCount, setBlurCount] = useState(0);
  const [focusCount, setFocusCount] = useState(0);
  const [keyDownCount, setKeyDownCount] = useState(0);

  return (
    <>
      <button>before</button>
      <span data-testid="click-count">{clickCount}</span>
      <span data-testid="last-payload">{lastPayload}</span>
      <span data-testid="blur-count">{blurCount}</span>
      <span data-testid="focus-count">{focusCount}</span>
      <span data-testid="keydown-count">{keyDownCount}</span>
      <ScatterChart
        dataset={scatterAccessibilitySingleDataset}
        measures={measures}
        chartConfig={{ accessibilityLayer: true }}
        onDataPointClick={(e) => {
          setClickCount((c) => c + 1);
          setLastPayload(JSON.stringify(e.detail?.payload));
        }}
        onBlur={() => {
          setBlurCount((c) => c + 1);
        }}
        onFocus={() => {
          setFocusCount((c) => c + 1);
        }}
        onKeyDownCapture={() => {
          setKeyDownCount((c) => c + 1);
        }}
      />
      <button>after</button>
    </>
  );
}

export function ScatterChartMultiDatasetAccessibilityTest() {
  const multiDataset = [
    {
      label: 'Alpha',
      data: [{ users: 30, sessions: 100, volume: 200 }],
    },
    {
      label: 'Beta',
      data: [
        { users: 30, sessions: 150, volume: 250 },
        { users: 60, sessions: 300, volume: 400 },
      ],
    },
  ];

  return (
    <>
      <button>before</button>
      <ScatterChart dataset={multiDataset} measures={measures} chartConfig={{ accessibilityLayer: true }} />
    </>
  );
}

export function ScatterChartMultipleChartsTest() {
  const singleDataset = [
    {
      label: 'Series A',
      data: [
        { users: 100, sessions: 200, volume: 300 },
        { users: 50, sessions: 150, volume: 250 },
      ],
    },
  ];

  return (
    <>
      <button>before</button>
      <ScatterChart
        dataset={singleDataset}
        measures={measures}
        chartConfig={{ accessibilityLayer: true }}
        aria-roledescription="chart1"
      />
      <ScatterChart
        dataset={singleDataset}
        measures={measures}
        chartConfig={{ accessibilityLayer: true }}
        aria-roledescription="chart2"
      />
      <button>after</button>
    </>
  );
}

export function ScatterChartEmptyTest() {
  return <ScatterChart dataset={[]} measures={measures} />;
}

export function ScatterChartEmptyAccessibilityTest() {
  return <ScatterChart dataset={[]} measures={measures} chartConfig={{ accessibilityLayer: true }} />;
}

export function ScatterChartLegendConfigTest() {
  return (
    <ScatterChart
      dataset={complexDataSet}
      measures={measures}
      chartConfig={{
        legendConfig: {
          formatter: (value) => <span data-testid="catval">{value}🐱</span>,
        },
      }}
    />
  );
}
