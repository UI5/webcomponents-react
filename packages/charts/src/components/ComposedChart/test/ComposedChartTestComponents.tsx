import { complexDataSet } from '../../../resources/DemoProps.js';
import {
  createClickTestComponent,
  createLegendConfigTestComponent,
  createStackTotalsTestComponents,
  createZoomingTestComponents,
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

export const {
  ZoomingEnabled: ComposedChartZoomingEnabledTest,
  ZoomingDisabled: ComposedChartZoomingDisabledTest,
  ZoomingCustom: ComposedChartZoomingCustomTest,
} = createZoomingTestComponents(ComposedChart, baseProps);

export const {
  StackTotalsEnabled: ComposedChartStackTotalsEnabledTest,
  StackTotalsDisabled: ComposedChartStackTotalsDisabledTest,
} = createStackTotalsTestComponents(ComposedChart, { dataset: complexDataSet.slice(0, 3), dimensions }, [
  { accessor: 'users', stackId: 'A', label: 'Users', type: 'bar' as const },
  { accessor: 'sessions', stackId: 'A', label: 'Active Sessions', type: 'bar' as const },
]);
