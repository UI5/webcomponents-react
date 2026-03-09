import { useMemo } from 'react';

function getAccessorReactKey(accessorObj: Record<string, any>) {
  let reactKey = accessorObj.accessor;
  if (typeof accessorObj.accessor === 'function') {
    reactKey = JSON.stringify(accessorObj);
  }
  return reactKey;
}

const emptyStackGroups: Record<string, string[]> = {};
const emptyLastInStack = new Set<string>();

export const usePrepareDimensionsAndMeasures = <DimensionConfig = any, MeasureConfig = any>(
  rawDimensions,
  rawMeasures,
  dimensionDefaults = {},
  measureDefaults = {},
  showStackAggregateTotals = false,
) => {
  const dimensions: DimensionConfig = useMemo(
    () =>
      rawDimensions.map((dimension) => {
        return {
          ...dimensionDefaults,
          ...dimension,
          reactKey: getAccessorReactKey(dimension),
        };
      }),
    [rawDimensions, dimensionDefaults],
  );

  const { measures, stackGroups, lastInStack } = useMemo(() => {
    const groups: Record<string, string[]> = {};
    const preparedMeasures = rawMeasures.map((measure) => {
      const prepared = {
        ...measureDefaults,
        ...measure,
        reactKey: getAccessorReactKey(measure),
      };
      if (showStackAggregateTotals && prepared.stackId && typeof prepared.accessor === 'string') {
        if (!groups[prepared.stackId]) {
          groups[prepared.stackId] = [];
        }
        groups[prepared.stackId].push(prepared.accessor);
      }
      return prepared;
    });

    if (!showStackAggregateTotals) {
      return {
        measures: preparedMeasures as MeasureConfig,
        stackGroups: emptyStackGroups,
        lastInStack: emptyLastInStack,
      };
    }

    const last = new Set<string>();
    Object.values(groups).forEach((accessors) => {
      last.add(accessors[accessors.length - 1]);
    });

    return { measures: preparedMeasures as MeasureConfig, stackGroups: groups, lastInStack: last };
  }, [rawMeasures, measureDefaults, showStackAggregateTotals]);

  return { dimensions, measures, stackGroups, lastInStack };
};
