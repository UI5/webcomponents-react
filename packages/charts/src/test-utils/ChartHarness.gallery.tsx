/**
 * @fileoverview Browser-side gallery story shared by every chart's parametric tests.
 *
 * Exposes one story (`Chart`) that renders a chart resolved by string key — the mount boundary
 * only carries serializable data, so specs pass the chart name, not the component. When adding a
 * chart to the shared tests, register its component in `chartRegistry` here and its prop sets in
 * `chartHarnessData.ts`. Keep this file limited to resolution + rendering; per-chart data and the
 * test logic live in `chartHarnessData.ts` and `chartGalleryTests.tsx` respectively.
 */

import type { ComponentType } from 'react';
import { BarChart } from '../components/BarChart/index.js';
import { BulletChart } from '../components/BulletChart/index.js';
import { ColumnChart } from '../components/ColumnChart/index.js';
import { ColumnChartWithTrend } from '../components/ColumnChartWithTrend/index.js';
import { ComposedChart } from '../components/ComposedChart/index.js';
import { DonutChart } from '../components/DonutChart/index.js';
import { LineChart } from '../components/LineChart/index.js';
import { PieChart } from '../components/PieChart/index.js';
import { RadarChart } from '../components/RadarChart/index.js';
import { RadialChart } from '../components/RadialChart/index.js';
import { ScatterChart } from '../components/ScatterChart/index.js';
import { chartHarnessData } from '../resources/chartHarnessData.js';

// Shared gallery story for the parametric chart tests. Specs pass a chart's string key
// (components can't cross the mount boundary); it resolves the component + prop set here.
const chartRegistry: Record<string, ComponentType<any>> = {
  BarChart,
  BulletChart,
  ColumnChart,
  ColumnChartWithTrend,
  ComposedChart,
  DonutChart,
  LineChart,
  PieChart,
  RadarChart,
  RadialChart,
  ScatterChart,
};

type HarnessProps = {
  chart: string;
  variant?: 'base' | 'empty' | 'stack';
  overrides?: Record<string, unknown>;
};

function resolve(chart: string) {
  const Component = chartRegistry[chart];
  const data = chartHarnessData[chart];
  if (!Component || !data) {
    throw new Error(
      `ChartHarness: unknown chart "${chart}". Register it in ChartHarness.gallery.tsx + chartHarnessData.ts.`,
    );
  }
  return { Component, data };
}

export const Chart = ({ chart, variant = 'base', overrides = {} }: HarnessProps) => {
  const { Component, data } = resolve(chart);
  let props: Record<string, unknown>;
  if (variant === 'empty') {
    props = data.emptyProps;
  } else if (variant === 'stack') {
    props = { ...data.stack.baseProps, measures: data.stack.measures };
  } else {
    props = data.baseProps;
  }
  return <Component {...props} {...overrides} />;
};
