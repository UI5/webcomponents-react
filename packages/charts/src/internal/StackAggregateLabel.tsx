import { ThemingParameters } from '@ui5/webcomponents-react-base';
import type { ReactElement } from 'react';
import { Label } from 'recharts';
import type { LabelProps } from 'recharts';

interface StackAggregateLabelProps {
  stackAccessors: string[];
  dataset: Record<string, unknown>[];
  // recharts LabelList props
  viewBox?: { x: number; y: number; width: number; height: number };
  index?: number;
  offset?: number;
  position?: LabelProps['position'];
}

export const StackAggregateLabel = (props: StackAggregateLabelProps): ReactElement | null => {
  const { stackAccessors, dataset, viewBox, index, offset, position } = props;

  if (index == null || !viewBox || !dataset?.[index]) {
    return null;
  }

  const dataEntry = dataset[index];
  const total = stackAccessors.reduce((sum, accessor) => {
    return sum + (Number(dataEntry[accessor]) || 0);
  }, 0);

  return (
    <Label
      viewBox={viewBox}
      position={position}
      offset={offset}
      fill={ThemingParameters.sapTextColor}
      stroke="none"
      value={total}
    />
  );
};
