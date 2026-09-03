import { useState } from 'react';
import { complexDataSet, simpleDataSet } from '../../../resources/DemoProps.js';
import { DonutChart } from '../index.js';

const dimension = { accessor: 'name' };
const measure = { accessor: 'users' };

export function DonutChartClickTest() {
  const [clickCount, setClickCount] = useState(0);
  const [lastPayload, setLastPayload] = useState<string>('');
  const [legendClickCount, setLegendClickCount] = useState(0);
  const [lastLegendDataKey, setLastLegendDataKey] = useState('');

  return (
    <>
      <span data-testid="click-count">{clickCount}</span>
      <span data-testid="last-payload">{lastPayload}</span>
      <span data-testid="legend-click-count">{legendClickCount}</span>
      <span data-testid="last-legend-datakey">{lastLegendDataKey}</span>
      <DonutChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={measure}
        noAnimation
        onDataPointClick={(e) => {
          setClickCount((c) => c + 1);
          setLastPayload(JSON.stringify(e.detail?.payload?.payload ?? e.detail?.payload));
        }}
        onLegendClick={(e) => {
          setLegendClickCount((c) => c + 1);
          setLastLegendDataKey(e.detail?.dataKey || '');
        }}
      />
    </>
  );
}

export function DonutChartLegendConfigTest() {
  return (
    <DonutChart
      dataset={complexDataSet}
      dimension={dimension}
      measure={measure}
      chartConfig={{
        legendConfig: {
          formatter: (value) => <span data-testid="catval">{value}</span>,
        },
      }}
    />
  );
}

export function DonutChartSectorFocusTest() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickIndex, setLastClickIndex] = useState(-1);

  return (
    <>
      <button>before</button>
      <span data-testid="sector-click-count">{clickCount}</span>
      <span data-testid="sector-last-index">{lastClickIndex}</span>
      <DonutChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true }}
        onDataPointClick={(e) => {
          setClickCount((c) => c + 1);
          setLastClickIndex(e.detail?.dataIndex ?? -1);
        }}
        noAnimation
      />
    </>
  );
}

export function DonutChartSectorFocusActiveTest() {
  const [activeSegment, setActiveSegment] = useState(2);

  return (
    <>
      <button>before</button>
      <span data-testid="active-segment">{activeSegment}</span>
      <DonutChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true, activeSegment }}
        onDataPointClick={(e) => {
          setActiveSegment(e.detail?.dataIndex ?? 0);
        }}
        noAnimation
      />
    </>
  );
}

export function DonutChartSectorFocusOutOfBoundsTest() {
  return (
    <>
      <button>before</button>
      <DonutChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true, activeSegment: 999 }}
        noAnimation
      />
    </>
  );
}

export function DonutChartSectorFocusDatasetShrinkTest() {
  const [ds, setDs] = useState(simpleDataSet);

  return (
    <>
      <button>before</button>
      <button onClick={() => setDs(simpleDataSet.slice(0, 3))}>shrink</button>
      <DonutChart
        dataset={ds}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true }}
        noAnimation
      />
    </>
  );
}

export function DonutChartSectorFocusEmptyTest() {
  return (
    <>
      <button>before</button>
      <DonutChart
        dataset={[]}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true }}
        noAnimation
      />
    </>
  );
}

export function DonutChartSectorFocusHandlersTest() {
  const [blurCount, setBlurCount] = useState(0);
  const [focusCount, setFocusCount] = useState(0);
  const [keyDownCaptureCount, setKeyDownCaptureCount] = useState(0);

  return (
    <>
      <button>before</button>
      <span data-testid="blur-count">{blurCount}</span>
      <span data-testid="focus-count">{focusCount}</span>
      <span data-testid="keydown-capture-count">{keyDownCaptureCount}</span>
      <button>after</button>
      <DonutChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true }}
        onBlur={() => setBlurCount((c) => c + 1)}
        onFocus={() => setFocusCount((c) => c + 1)}
        onKeyDownCapture={() => setKeyDownCaptureCount((c) => c + 1)}
        noAnimation
      />
    </>
  );
}
