import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  createClickTestComponent,
  createDataPointClickTestComponent,
  createHighlightColorTestComponent,
  createLegendConfigTestComponent,
  createSecondYAxisTestComponent,
} from '../../../test-utils/componentFactories.js';
import { ColumnChart } from '../index.js';

const dimensions = [{ accessor: 'name', interval: 0 }];

const measures = [
  { accessor: 'users', label: 'Users', formatter: (val: number) => val.toLocaleString('en') },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    formatter: (val: number) => `${val} sessions`,
    hideDataLabel: true,
  },
  { accessor: 'volume', label: 'Vol.' },
];

const baseProps = { dataset: complexDataSet, dimensions, measures };

export const ColumnChartClickTest = createClickTestComponent(ColumnChart, baseProps, {
  trackLegendValue: true,
});

export const ColumnChartLegendConfigTest = createLegendConfigTestComponent(ColumnChart, baseProps);

export const ColumnChartDataPointClickTest = createDataPointClickTestComponent(ColumnChart, baseProps);

export const ColumnChartHighlightColorTest = createHighlightColorTestComponent(ColumnChart, baseProps, [
  {
    accessor: 'users',
    label: 'Users',
    highlightColor: (value: number) => (value > 200 ? 'red' : 'green'),
  },
  { accessor: 'sessions', label: 'Active Sessions' },
  { accessor: 'volume', label: 'Vol.' },
]);

export const ColumnChartSecondYAxisTest = createSecondYAxisTestComponent(ColumnChart, baseProps, 'volume');
