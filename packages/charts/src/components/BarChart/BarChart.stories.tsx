import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { DefaultTooltipContent } from 'recharts';
import {
  complexDataSet,
  legendConfig,
  secondaryDimensionDataSet,
  simpleDataSet,
  stackedNormalizedConfig,
  tooltipConfig,
} from '../../resources/DemoProps.js';
import { BarChart } from './index.js';

const meta = {
  title: 'BarChart',
  component: BarChart,
  tags: ['package:@ui5/webcomponents-react-charts'],
  argTypes: {
    dataset: {
      control: { disable: true },
    },
    children: {
      control: { disable: true },
    },
  },
  args: {
    dataset: complexDataSet,
    dimensions: [
      {
        accessor: 'name',
      },
    ],
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
        opacity: 0.6,
      },
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        formatter: (val) => `${val} sessions`,
        hideDataLabel: true,
      },
      {
        accessor: 'volume',
        label: 'Vol.',
      },
    ],
  },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    measures: [{ accessor: 'users', color: 'red' }],
    dataset: simpleDataSet,
  },
};

export const WithSecondaryDimension: Story = {
  args: {
    dimensions: [{ accessor: 'name' }, { accessor: 'dimension' }],
    measures: [{ accessor: 'users', color: 'red' }],
    dataset: secondaryDimensionDataSet,
  },
};

export const WithDataLabels: Story = {
  args: {
    measures: [
      {
        accessor: 'users',
      },
      {
        accessor: 'sessions',
      },
      {
        accessor: 'volume',
      },
    ],
  },
};

export const WithFormatter: Story = {
  args: {
    dimensions: [{ accessor: 'name', formatter: (element) => element.slice(0, 3) }],
    measures: [
      {
        accessor: 'users',
        formatter: (element) => `${element / 10}`,
        label: 'number of users',
      },
      {
        accessor: 'sessions',
      },
      {
        accessor: 'volume',
      },
    ],
    chartConfig: {
      zoomingTool: true,
    },
  },
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: [],
  },
};

export const WithReferenceLine: Story = {
  args: {
    measures: [
      {
        accessor: 'users',
        stackId: 'A',
      },
      {
        accessor: 'sessions',
        stackId: 'A',
      },
      {
        accessor: 'volume',
      },
    ],
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650,
      },
    },
  },
};

export const WithHighlightedMeasure: Story = {
  args: {
    measures: [
      {
        accessor: 'users',
        stackId: 'A',
      },
      {
        accessor: 'sessions',
        stackId: 'A',
      },
      {
        accessor: 'volume',
        highlightColor: (value, measure, data) => {
          if (data.name === 'February') {
            return 'red';
          }
        },
      },
    ],
  },
};

export const WithNormalizedStacks: Story = {
  args: stackedNormalizedConfig,
};

export const WithStackAggregateTotalsAndTooltip: Story = {
  args: {
    dataset: complexDataSet.slice(0, 3),
    measures: [
      {
        accessor: 'users',
        stackId: 'A',
        label: 'Users',
      },
      {
        accessor: 'sessions',
        stackId: 'A',
        label: 'Active Sessions',
      },
    ],
    chartConfig: {
      showStackAggregateTotals: true,
    },
  },
};

const stackedAccessors = new Set(['users', 'sessions']);

const CustomTooltipContent = (props) => {
  const { payload, ...rest } = props;
  if (!payload?.length) {
    return <DefaultTooltipContent {...rest} payload={payload} />;
  }
  const stackedEntries = payload.filter((entry) => stackedAccessors.has(entry.dataKey));
  if (!stackedEntries.length) {
    return <DefaultTooltipContent {...rest} payload={payload} />;
  }
  const total = stackedEntries.reduce((sum, entry) => sum + (Number(entry.value) || 0), 0);
  const augmentedPayload = [
    ...payload,
    {
      name: `Total (${stackedEntries.map((entry) => entry.name).join(' + ')})`,
      value: total,
      color: ThemingParameters.sapTextColor,
    },
  ];
  return <DefaultTooltipContent {...rest} payload={augmentedPayload} />;
};

export const WithCustomTooltipTotal: Story = {
  args: {
    dataset: complexDataSet.slice(0, 5),
    measures: [
      {
        accessor: 'users',
        stackId: 'A',
        label: 'Users',
      },
      {
        accessor: 'sessions',
        stackId: 'A',
        label: 'Active Sessions',
      },
      {
        accessor: 'volume',
        label: 'Vol.',
      },
    ],
    chartConfig: {
      showStackAggregateTotals: true,
    },
    tooltipConfig: {
      content: <CustomTooltipContent />,
    },
  },
};

export const WithCustomTooltipConfig: Story = {
  args: tooltipConfig,
};

export const WithCustomLegendConfig: Story = {
  args: legendConfig,
};
