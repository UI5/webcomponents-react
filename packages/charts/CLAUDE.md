# @ui5/webcomponents-react-charts

Chart components for data visualization built on [Recharts](https://recharts.org/). Provides SAP Fiori-styled chart components with automatic theming.

> **Important:** Charts are custom-built **without** defined design specifications! They use the Fiori color palette, but functionality and especially **accessibility may not meet standard app requirements**.

## Installation

```bash
npm install @ui5/webcomponents-react-charts
```

## Setup

For SSR/Next.js, import the styles and set `staticCssInjected` on ThemeProvider:

```tsx
import '@ui5/webcomponents-react/styles.css';
import '@ui5/webcomponents-react-charts/styles.css';

<ThemeProvider staticCssInjected>
  <App />
</ThemeProvider>;
```

## Import Pattern

Subpath imports are recommended for tree-shaking:

```tsx
// ✅ Recommended - tree-shakeable
import { BarChart } from '@ui5/webcomponents-react-charts/BarChart';
import { LineChart } from '@ui5/webcomponents-react-charts/LineChart';
import { PieChart } from '@ui5/webcomponents-react-charts/PieChart';

// Also works - root import
import { BarChart, LineChart, PieChart } from '@ui5/webcomponents-react-charts';
```

## Available Charts

| Component              | Use Case                                             |
| ---------------------- | ---------------------------------------------------- |
| `BarChart`             | Horizontal bar comparison                            |
| `ColumnChart`          | Vertical column comparison                           |
| `ColumnChartWithTrend` | Column chart with trend line                         |
| `LineChart`            | Trends over time                                     |
| `PieChart`             | Part-to-whole ratios                                 |
| `DonutChart`           | Part-to-whole with center space                      |
| `ComposedChart`        | Mix bars, lines, areas                               |
| `BulletChart`          | Compare actual vs target                             |
| `RadarChart`           | Multi-dimensional comparison                         |
| `RadialChart`          | Radial visualization                                 |
| `ScatterChart`         | X/Y/Z point relationships (different data structure) |

Each chart has a corresponding `<ChartName>Placeholder` component for loading states.

**Deprecated:**

- `TimelineChart` - Will be removed in v3 without replacement

## Core Data Structure

Charts use a **dimensions + measures** data model:

```tsx
import { BarChart } from '@ui5/webcomponents-react-charts/BarChart';

const dataset = [
  { month: 'Jan', revenue: 4000, profit: 2400 },
  { month: 'Feb', revenue: 3000, profit: 1398 },
  { month: 'Mar', revenue: 5000, profit: 3200 },
];

<BarChart
  dataset={dataset}
  dimensions={[{ accessor: 'month' }]}
  measures={[
    { accessor: 'revenue', label: 'Revenue' },
    { accessor: 'profit', label: 'Profit' },
  ]}
/>;
```

### ScatterChart - Different Data Structure

ScatterChart uses a nested data structure with multiple datasets:

```tsx
import { ScatterChart } from '@ui5/webcomponents-react-charts/ScatterChart';

const dataset = [
  {
    label: 'America',
    color: 'var(--sapChart_OrderedColor_1)',
    opacity: 0.7,
    data: [
      { users: 120, sessions: 200, volume: 302 },
      { users: 20, sessions: 230, volume: 392 },
    ],
  },
  {
    label: 'Europe',
    data: [{ users: 50, sessions: 100, volume: 200 }],
  },
];

<ScatterChart
  dataset={dataset}
  measures={[
    { accessor: 'users', axis: 'x' },
    { accessor: 'sessions', axis: 'y' },
    { accessor: 'volume', axis: 'z' },
  ]}
/>;
```

## Colors

Charts use SAP theming by default (`--sapChart_OrderedColor_1` through `--sapChart_OrderedColor_12`):

```tsx
// Custom colors
measures={[
  { accessor: 'revenue', color: 'var(--sapPositiveColor)' },
  { accessor: 'profit', color: '#FF6B6B' }
]}

// Conditional highlighting (BarChart, ColumnChart, BulletChart)
measures={[{
  accessor: 'revenue',
  highlightColor: (value, measure, dataElement) => {
    if (value > 5000) return 'var(--sapPositiveColor)';
    if (value < 2000) return 'var(--sapNegativeColor)';
    return measure.color;
  }
}]}
```

## Event Handling

```tsx
<BarChart
  onClick={(e) => {
    console.log(e.detail.payload);
    console.log(e.detail.activePayloads);
  }}
  onDataPointClick={(e) => {
    const { value, dataKey, payload, dataIndex } = e.detail;
  }}
  onLegendClick={(e) => {
    console.log(e.detail.dataKey);
  }}
/>
```

## ComposedChart - Mixed Chart Types

Use ComposedChart to combine bars, lines, and areas:

```tsx
import { ComposedChart } from '@ui5/webcomponents-react-charts/ComposedChart';

<ComposedChart
  dataset={data}
  dimensions={[{ accessor: 'month' }]}
  measures={[
    { accessor: 'revenue', type: 'bar', label: 'Revenue' },
    { accessor: 'trend', type: 'line', label: 'Trend', width: 2 },
    { accessor: 'range', type: 'area', label: 'Range', opacity: 0.3 },
  ]}
/>;
```

## Stacked Charts

```tsx
measures={[
  { accessor: 'revenue', stackId: 'stack1' },
  { accessor: 'profit', stackId: 'stack1' }
]}
```

## Loading States

```tsx
import { BarChart } from '@ui5/webcomponents-react-charts/BarChart';
import { BarChartPlaceholder } from '@ui5/webcomponents-react-charts/BarChartPlaceholder';

<BarChart loading={isLoading} loadingDelay={500} ChartPlaceholder={BarChartPlaceholder} {...props} />;
```

## Responsive Behavior

Charts default to `width: 100%` and `height: 400px`, so they render out of the box without container configuration.

**Important:** If you override chart dimensions with relative values (e.g., `height: '100%'`), the container must have fixed dimensions. Charts won't render correctly in containers that derive size from their children:

```tsx
// ❌ Won't work - chart uses 100% height but parent has no fixed height
<div style={{ display: 'flex' }}>
  <BarChart style={{ height: '100%' }} {...props} />
</div>

// ✅ Works - container has fixed height for percentage-based chart
<div style={{ height: '400px' }}>
  <BarChart style={{ height: '100%' }} {...props} />
</div>

// ✅ Works - using default dimensions (no container height needed)
<div>
  <BarChart {...props} />
</div>
```

## Limitations

**Critical:**

- Charts are **custom-built without defined design specifications** - they use the Fiori color palette, but functionality and especially **accessibility may not meet standard app requirements**
- `accessibilityLayer` is **experimental** and only supports categorical/horizontal charts with tooltips
- `legendPosition: "middle"` is **not supported** for: ColumnChartWithTrend, DonutChart, PieChart

**Data:**

- Measure values must be **numbers** (not strings)
- ScatterChart uses a different dataset format (nested `data` array per series)

**Sizing:**

- When using relative dimensions (e.g., `height: '100%'`), containers must have fixed dimensions
- Default: `width: 100%`, `height: 400px`

**Styling:**

- 12-color palette cycles after 12 measures

**Deprecated:**

- `legendHorizontalAlign` - use `legendConfig.align` instead
- `TimelineChart` - will be removed in v3 without replacement
