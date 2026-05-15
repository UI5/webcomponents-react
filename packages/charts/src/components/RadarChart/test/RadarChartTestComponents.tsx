import { complexDataSet } from '../../../resources/DemoProps.js';
import { createClickTestComponent, createLegendConfigTestComponent } from '../../../test-utils/componentFactories.js';
import { RadarChart } from '../index.js';

const dimensions = [{ accessor: 'name', interval: 0 }];

const measures = [
  { accessor: 'users', label: 'Users', formatter: (val: number) => val.toLocaleString('en') },
  { accessor: 'sessions', label: 'Active Sessions', formatter: (val) => `${val} sessions`, hideDataLabel: true },
  { accessor: 'volume', label: 'Vol.' },
];

const baseProps = { dataset: complexDataSet, dimensions, measures };

export const RadarChartClickTest = createClickTestComponent(RadarChart, baseProps, {
  trackPayload: false,
});

export const RadarChartLegendConfigTest = createLegendConfigTestComponent(RadarChart, baseProps);
