import { useState } from 'react';
import { Text as RechartsText } from 'recharts';
import { complexDataSet, simpleDataSet } from '../../../resources/DemoProps.js';
import { PieChart } from '../index.js';

const dimension = { accessor: 'name' };
const measure = { accessor: 'users' };

export function PieChartClickTest() {
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
      <PieChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={measure}
        onDataPointClick={(e) => {
          setClickCount((c) => c + 1);
          setLastPayload(JSON.stringify(e.detail?.payload?.payload ?? e.detail?.payload));
        }}
        onLegendClick={(e) => {
          setLegendClickCount((c) => c + 1);
          setLastLegendDataKey(e.detail?.dataKey || '');
        }}
        noAnimation
      />
    </>
  );
}

export function PieChartLegendConfigTest() {
  return (
    <PieChart
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

const CustomDataLabel = (props: any) => <RechartsText {...props}>CustomLabel</RechartsText>;

export function PieChartCustomLabelTest() {
  return (
    <PieChart
      dataset={simpleDataSet}
      dimension={dimension}
      measure={{ accessor: 'users', DataLabel: <CustomDataLabel /> }}
    />
  );
}

export function PieChartSectorFocusTest() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickIndex, setLastClickIndex] = useState(-1);

  return (
    <>
      <button>before</button>
      <span data-testid="sector-click-count">{clickCount}</span>
      <span data-testid="sector-last-index">{lastClickIndex}</span>
      <PieChart
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

export function PieChartSectorFocusActiveTest() {
  const [activeSegment, setActiveSegment] = useState(2);

  return (
    <>
      <button>before</button>
      <span data-testid="active-segment">{activeSegment}</span>
      <PieChart
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

export function PieChartSectorFocusOutOfBoundsTest() {
  return (
    <>
      <button>before</button>
      <PieChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true, activeSegment: 999 }}
        noAnimation
      />
    </>
  );
}

export function PieChartSectorFocusDatasetShrinkTest() {
  const [ds, setDs] = useState(simpleDataSet);

  return (
    <>
      <button>before</button>
      <button onClick={() => setDs(simpleDataSet.slice(0, 3))}>shrink</button>
      <PieChart
        dataset={ds}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true }}
        noAnimation
      />
    </>
  );
}

export function PieChartSectorFocusEmptyTest() {
  return (
    <>
      <button>before</button>
      <PieChart
        dataset={[]}
        dimension={dimension}
        measure={measure}
        chartConfig={{ accessibilityLayer: true }}
        noAnimation
      />
    </>
  );
}

export function PieChartSectorFocusHandlersTest() {
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
      <PieChart
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
