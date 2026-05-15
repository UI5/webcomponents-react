import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  createClickTestComponent,
  createLegendConfigTestComponent,
  createStackTotalsTestComponents,
  createZoomingTestComponents,
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

export const {
  ZoomingEnabled: ColumnChartZoomingEnabledTest,
  ZoomingDisabled: ColumnChartZoomingDisabledTest,
  ZoomingCustom: ColumnChartZoomingCustomTest,
} = createZoomingTestComponents(ColumnChart, baseProps);

export const {
  StackTotalsEnabled: ColumnChartStackTotalsEnabledTest,
  StackTotalsDisabled: ColumnChartStackTotalsDisabledTest,
} = createStackTotalsTestComponents(ColumnChart, { dataset: complexDataSet.slice(0, 3), dimensions }, [
  { accessor: 'users', stackId: 'A', label: 'Users' },
  { accessor: 'sessions', stackId: 'A', label: 'Active Sessions' },
]);
