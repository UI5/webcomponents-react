import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  createClickTestComponent,
  createDataPointClickTestComponent,
  createLegendConfigTestComponent,
  createVerticalLayoutTestComponent,
} from '../../../test-utils/componentFactories.js';
import { BulletChart } from '../index.js';

const dimensions = [{ accessor: 'name', interval: 0 }];

const measures = [
  { accessor: 'users', label: 'Users', formatter: (val: number) => val.toLocaleString('en'), type: 'primary' as const },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    formatter: (val: number) => `${val} sessions`,
    hideDataLabel: true,
    type: 'comparison' as const,
  },
  { accessor: 'volume', label: 'Vol.', type: 'additional' as const },
];

const baseProps = { dataset: complexDataSet, dimensions, measures };

export const BulletChartClickTest = createClickTestComponent(BulletChart, baseProps, {
  noAnimation: true,
  trackLegendValue: true,
});

export const BulletChartLegendConfigTest = createLegendConfigTestComponent(BulletChart, baseProps);

export const BulletChartDataPointClickTest = createDataPointClickTestComponent(BulletChart, baseProps);

export const BulletChartVerticalLayoutTest = createVerticalLayoutTestComponent(BulletChart, baseProps);
