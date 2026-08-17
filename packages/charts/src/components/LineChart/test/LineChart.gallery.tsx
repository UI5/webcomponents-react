import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  createClickTestComponent,
  createDataPointClickTestComponent,
  createLegendConfigTestComponent,
} from '../../../test-utils/componentFactories.js';
import { LineChart } from '../index.js';

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

export const LineChartClickTest = createClickTestComponent(LineChart, baseProps, {
  noAnimation: true,
});

export const LineChartLegendConfigTest = createLegendConfigTestComponent(LineChart, baseProps);

export const LineChartDataPointClickTest = createDataPointClickTestComponent(LineChart, baseProps);
