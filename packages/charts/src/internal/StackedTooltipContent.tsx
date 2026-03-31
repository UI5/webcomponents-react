import { ThemingParameters } from '@ui5/webcomponents-react-base';
import type { ReactElement } from 'react';
import { DefaultTooltipContent } from 'recharts';
import classNames from './StackedTooltipContent.module.css';

interface StackedTooltipContentProps {
  stackAccessors: string[];
  totalFormatter?: (value: number) => string | number;
  // recharts tooltip
  payload?: Array<{
    dataKey?: string;
    value?: number;
    name?: string;
    color?: string;
    payload?: Record<string, unknown>;
  }>;
  [key: string]: unknown;
}

export const StackedTooltipContent = (props: StackedTooltipContentProps): ReactElement => {
  const { stackAccessors, totalFormatter, payload, ...tooltipProps } = props;

  if (!payload?.length) {
    return <DefaultTooltipContent {...tooltipProps} payload={payload} />;
  }

  const firstEntry = payload[0]?.payload;
  if (!firstEntry) {
    return <DefaultTooltipContent {...tooltipProps} payload={payload} />;
  }

  const total = stackAccessors.reduce((sum, accessor) => {
    return sum + (Number(firstEntry[accessor]) || 0);
  }, 0);

  const formattedTotal = totalFormatter ? totalFormatter(total) : total;

  const augmentedPayload = [
    ...payload,
    {
      name: 'Total',
      value: formattedTotal,
      color: ThemingParameters.sapTextColor,
      dataKey: '__stackTotal__',
    },
  ];

  return <DefaultTooltipContent {...tooltipProps} payload={augmentedPayload} wrapperClassName={classNames.withTotal} />;
};
