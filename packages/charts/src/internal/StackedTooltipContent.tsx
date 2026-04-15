import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';
import { useStylesheet } from '@ui5/webcomponents-react-base/internal/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';
import type { ReactElement } from 'react';
import { DefaultTooltipContent } from 'recharts';
import { classNames, styleData } from './StackedTooltipContent.module.css.js';

const TOTAL = { key: 'TOTAL', defaultText: 'Total' };

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

  useStylesheet(styleData, StackedTooltipContent.displayName);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

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
      name: i18nBundle.getText(TOTAL),
      value: formattedTotal,
      color: ThemingParameters.sapTextColor,
      dataKey: '__stackTotal__',
    },
  ];

  return <DefaultTooltipContent {...tooltipProps} payload={augmentedPayload} wrapperClassName={classNames.withTotal} />;
};

StackedTooltipContent.displayName = 'StackedTooltipContent';
