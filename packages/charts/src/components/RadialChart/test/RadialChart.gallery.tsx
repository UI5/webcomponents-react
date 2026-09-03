import { useState } from 'react';
import { RadialChart } from '../index.js';

export function RadialChartClickTest() {
  const [clickCount, setClickCount] = useState(0);
  const [lastPayloadValue, setLastPayloadValue] = useState<number | null>(null);

  return (
    <>
      <span data-testid="click-count">{clickCount}</span>
      <span data-testid="last-payload-value">{lastPayloadValue ?? ''}</span>
      <RadialChart
        value={67}
        displayValue={'67%'}
        noAnimation
        onDataPointClick={(e) => {
          setClickCount((c) => c + 1);
          setLastPayloadValue(e.detail?.payload?.value ?? null);
        }}
      />
    </>
  );
}
