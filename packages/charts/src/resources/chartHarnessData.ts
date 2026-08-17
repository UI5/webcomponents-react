/**
 * @fileoverview Per-chart prop sets consumed by the shared chart gallery harness.
 *
 * Add an entry here for every chart whose spec uses the shared tests in `chartGalleryTests.tsx`:
 * `baseProps` (populated chart), `emptyProps` (placeholder path), and `stack` (only for charts
 * whose spec calls `testStackAggregateTotals`). Keep values plain and serializable — no React,
 * no functions — so both the browser harness and the Node-side test helpers can import this.
 */

import { complexDataSet, scatterComplexDataSet, simpleDataSet } from '../resources/DemoProps.js';

// Serializable chart prop sets for the gallery harness + the Node-side shared tests.
// Plain data only, so both the browser harness and `chartGalleryTests.tsx` can import it.
export interface ChartHarnessEntry {
  baseProps: Record<string, unknown>;
  emptyProps: Record<string, unknown>;
  stack?: {
    baseProps: Record<string, unknown>;
    measures: Array<{ accessor: string; stackId?: string; label?: string; type?: string }>;
  };
}

const catDimensions = [{ accessor: 'name', interval: 0 }];
const catMeasures = [
  { accessor: 'users', label: 'Users' },
  { accessor: 'sessions', label: 'Active Sessions' },
  { accessor: 'volume', label: 'Vol.' },
];
const stackMeasures = [
  { accessor: 'users', stackId: 'A', label: 'Users' },
  { accessor: 'sessions', stackId: 'A', label: 'Active Sessions' },
];
const stackBaseProps = { dataset: complexDataSet.slice(0, 3), dimensions: catDimensions };

// dimension/measure (singular) charts
const singularDimension = { accessor: 'name' };
const singularMeasure = { accessor: 'users' };

// scatter measures
const scatterMeasures = [
  { accessor: 'users', label: 'Number', axis: 'x' as const },
  { accessor: 'sessions', label: 'Sessions', axis: 'y' as const },
  { accessor: 'volume', axis: 'z' as const },
];

export const chartHarnessData: Record<string, ChartHarnessEntry> = {
  BarChart: {
    baseProps: { dataset: complexDataSet, dimensions: catDimensions, measures: catMeasures },
    emptyProps: { dimensions: [], measures: [] },
    stack: { baseProps: stackBaseProps, measures: stackMeasures },
  },
  ColumnChart: {
    baseProps: { dataset: complexDataSet, dimensions: catDimensions, measures: catMeasures },
    emptyProps: { dimensions: [], measures: [] },
    stack: { baseProps: stackBaseProps, measures: stackMeasures },
  },
  ComposedChart: {
    baseProps: {
      dataset: complexDataSet,
      dimensions: catDimensions,
      measures: [
        { accessor: 'users', label: 'Users', type: 'line' as const },
        { accessor: 'sessions', label: 'Active Sessions', type: 'bar' as const },
        { accessor: 'volume', label: 'Vol.', type: 'area' as const },
      ],
    },
    emptyProps: { dimensions: [], measures: [] },
    stack: {
      baseProps: stackBaseProps,
      measures: [
        { accessor: 'users', stackId: 'A', label: 'Users', type: 'bar' as const },
        { accessor: 'sessions', stackId: 'A', label: 'Active Sessions', type: 'bar' as const },
      ],
    },
  },
  BulletChart: {
    baseProps: {
      dataset: complexDataSet,
      dimensions: catDimensions,
      measures: [
        { accessor: 'users', label: 'Users', type: 'primary' as const },
        { accessor: 'sessions', label: 'Active Sessions', type: 'comparison' as const },
        { accessor: 'volume', label: 'Vol.', type: 'additional' as const },
      ],
    },
    emptyProps: { dimensions: [], measures: [] },
  },
  ColumnChartWithTrend: {
    baseProps: {
      dataset: complexDataSet,
      dimensions: catDimensions,
      measures: [
        { accessor: 'users', label: 'Users', type: 'line' as const },
        { accessor: 'sessions', label: 'Active Sessions', type: 'bar' as const },
      ],
    },
    emptyProps: { dimensions: [], measures: [] },
  },
  LineChart: {
    baseProps: { dataset: complexDataSet, dimensions: catDimensions, measures: catMeasures },
    emptyProps: { dimensions: [], measures: [] },
  },
  RadarChart: {
    baseProps: { dataset: complexDataSet, dimensions: catDimensions, measures: catMeasures },
    emptyProps: { dimensions: [], measures: [] },
  },
  DonutChart: {
    baseProps: { dataset: simpleDataSet, dimension: singularDimension, measure: singularMeasure },
    emptyProps: { dimension: {}, measure: {} },
  },
  PieChart: {
    baseProps: { dataset: simpleDataSet, dimension: singularDimension, measure: singularMeasure },
    emptyProps: { dimension: {}, measure: {} },
  },
  RadialChart: {
    baseProps: { value: 67, displayValue: '67%' },
    emptyProps: {},
  },
  ScatterChart: {
    baseProps: { dataset: scatterComplexDataSet, measures: scatterMeasures },
    emptyProps: { measures: [] },
  },
};
