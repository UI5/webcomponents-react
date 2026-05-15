import { useLabelFormatter } from '../useLabelFormatter.js';
import { usePrepareDimensionsAndMeasures } from '../usePrepareDimensionsAndMeasures.js';
import { useTooltipFormatter } from '../useTooltipFormatter.js';

// --- useLabelFormatter test components ---

export function LabelFormatterNull() {
  const val = useLabelFormatter(null as any);
  return <span>{val(100, undefined)}</span>;
}

export function LabelFormatterInvalid() {
  const val = useLabelFormatter('abc' as any);
  return <span>{val(100, undefined)}</span>;
}

export function LabelFormatterValid() {
  const val = useLabelFormatter(((v: number) => v / 10) as any);
  return <span>{val(100, undefined)}</span>;
}

// --- usePrepareDimensionsAndMeasures test components ---

const dimensions = [{ accessor: 'a' }];
const measures = [{ accessor: 'b' }];

function serializeResult(result: ReturnType<typeof usePrepareDimensionsAndMeasures>) {
  return JSON.stringify({
    ...result,
    lastInStack: [...result.lastInStack],
  });
}

export function PrepareDimensionsDefault() {
  const result = usePrepareDimensionsAndMeasures(dimensions, measures);
  return <pre data-testid="result">{serializeResult(result)}</pre>;
}

export function PrepareDimensionsWithDefaults() {
  const result = usePrepareDimensionsAndMeasures(
    dimensions,
    measures,
    { dimensionDefault: true },
    { measureDefault: true },
  );
  return <pre data-testid="result">{serializeResult(result)}</pre>;
}

export function PrepareDimensionsNoOverwrite() {
  const result = usePrepareDimensionsAndMeasures(
    dimensions,
    measures,
    { dimensionDefault: true, accessor: 'I should not be in the result' },
    { measureDefault: true, accessor: 'I should not be in the result' },
  );
  return <pre data-testid="result">{serializeResult(result)}</pre>;
}

// --- useTooltipFormatter test components ---

export function TooltipFormatterNoFormatter() {
  const val = useTooltipFormatter([{ accessor: 'test' }]);
  return <span>{val(100, 'value', { dataKey: 'test' })}</span>;
}

export function TooltipFormatterInvalid() {
  const val = useTooltipFormatter([{ accessor: 'test', formatter: 'abc' }]);
  return <span>{val(100, 'value', { dataKey: 'test' })}</span>;
}

export function TooltipFormatterValid() {
  const val = useTooltipFormatter([{ accessor: 'test', formatter: (v: number) => v / 10 }]);
  return <span>{val(100, 'value', { dataKey: 'test' })}</span>;
}
