import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  createClickTestComponent,
  createDataPointClickTestComponent,
  createHighlightColorTestComponent,
  createLegendConfigTestComponent,
  createSecondYAxisTestComponent,
} from '../../../test-utils/componentFactories.js';
import { BarChart } from '../index.js';

const dimensions = [{ accessor: 'name', interval: 0 }];

const measures = [
  {
    accessor: (data: Record<string, number>) => data.users,
    label: 'Users',
    formatter: (val: number) => val.toLocaleString('en'),
  },
  {
    accessor: (data: Record<string, number>) => data.sessions,
    label: 'Active Sessions',
    formatter: (val: number) => `${val} sessions`,
    hideDataLabel: true,
  },
  { accessor: 'volume', label: 'Vol.' },
];

const baseProps = { dataset: complexDataSet, dimensions, measures };

export const BarChartClickTest = createClickTestComponent(BarChart, baseProps, {
  trackLegendValue: true,
});

export const BarChartLegendConfigTest = createLegendConfigTestComponent(BarChart, baseProps);

export const BarChartDataPointClickTest = createDataPointClickTestComponent(BarChart, baseProps);

export const BarChartHighlightColorTest = createHighlightColorTestComponent(BarChart, baseProps, [
  {
    accessor: 'users',
    label: 'Users',
    highlightColor: (value: number) => (value > 200 ? 'red' : 'green'),
  },
  { accessor: 'sessions', label: 'Active Sessions' },
  { accessor: 'volume', label: 'Vol.' },
]);

export const BarChartSecondYAxisTest = createSecondYAxisTestComponent(BarChart, baseProps, 'volume');
