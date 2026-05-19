import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  createClickTestComponent,
  createDataPointClickTestComponent,
  createLegendConfigTestComponent,
  createSecondYAxisTestComponent,
  createVerticalLayoutTestComponent,
} from '../../../test-utils/componentFactories.js';
import { ComposedChart } from '../index.js';

const dimensions = [{ accessor: 'name', interval: 0 }];

const measures = [
  { accessor: 'users', label: 'Users', formatter: (val: number) => val.toLocaleString('en'), type: 'line' },
  { accessor: 'sessions', label: 'Active Sessions', formatter: (val: number) => `${val} sessions`, type: 'bar' },
  { accessor: 'volume', label: 'Vol.', type: 'area' },
];

const baseProps = { dataset: complexDataSet, dimensions, measures };

export const ComposedChartClickTest = createClickTestComponent(ComposedChart, baseProps);

export const ComposedChartLegendConfigTest = createLegendConfigTestComponent(ComposedChart, baseProps);

export const ComposedChartVerticalLayoutTest = createVerticalLayoutTestComponent(ComposedChart, baseProps);

export const ComposedChartDataPointClickTest = createDataPointClickTestComponent(ComposedChart, baseProps);

export const ComposedChartSecondYAxisTest = createSecondYAxisTestComponent(ComposedChart, baseProps, 'volume');
