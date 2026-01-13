import{r as i,j as t,T as l}from"./iframe-BiIJdVyr.js";import{useMDXComponents as p}from"./index--rLY9036.js";import{M as u,a as h,n as f}from"./blocks-BFHpLm1y.js";import"./Tag-Bq1oXArm.js";import"./index-e3YpZRrx.js";import{F as d}from"./CommandsAndQueries-D08-AnOE.js";import"./copy-BPqkJYr8.js";import{T as b}from"./TableOfContent-X_zRrbOZ.js";import{C}from"./index-DFKcjcXq.js";import{D}from"./BarChart.stories-BVrRQe8S.js";import{D as y}from"./BulletChart.stories-CBYQHq4A.js";import{D as g}from"./ColumnChart.stories-C4KrM5Qm.js";import{D as v}from"./ColumnChartWithTrend.stories-DBGoyKJK.js";import{D as x}from"./ComposedChart.stories-o82GJXTs.js";import{D as j}from"./DonutChart.stories-D4e933gr.js";import{D as w}from"./LineChart.stories-hVYcyaHB.js";import{D as R}from"./PieChart.stories-hAN7ODeH.js";import{D as I}from"./RadarChart.stories-DVXwtRXF.js";import{D as S}from"./RadialChart.stories-C8fZO2lp.js";import{D as T}from"./ScatterChart.stories-BaARUy1M.js";import"./preload-helper-PPVm8Dsz.js";import"./information-SSL8fTlY.js";import"./sys-enter-2-DpynL0zo.js";import"./alert-Cg_jUYoP.js";import"./index-5WE_OvnW.js";import"./index-D-2Xy6-7.js";import"./index-DvsRYyu2.js";import"./Link-Bm6hDi5n.js";import"./index-CjEEWo15.js";import"./index-NQDiuZnO.js";import"./index-D5j3aFdB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSKVbp8f.js";import"./addCustomCSSWithScoping-syEQKqx0.js";import"./index-Dh7QOf24.js";import"./Carousel-BS27L1dm.js";import"./ScrollEnablement-elkrwhQK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cv6BZ0P2.js";import"./slim-arrow-left-B1qZjiic.js";import"./DemoProps-C9Y2DzpB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DMsWCyNQ.js";import"./ChartContainer-DxVD-LC7.js";import"./index-BzF6Y4F3.js";import"./useCancelAnimationFallback-BH5iE3c9.js";import"./YAxisTicks-DYMDTjfc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B4oVbliz.js";import"./ChartDataLabel-nSjVJvwy.js";import"./useOnClickInternal-Dh2Y-UuR.js";import"./react-content-loader.es-Cb2dZdKQ.js";import"./useIsRTL-J8i0PIKg.js";import"./useLongestYAxisLabel-B0TChpwG.js";import"./ComposedChart-DlcGAh2T.js";import"./Line-DWT_QDeO.js";import"./Scatter-DCyehV65.js";import"./index-kxIXDu13.js";import"./index-eMCLHJtZ.js";import"./Placeholder-CB1yuxZ1.js";import"./index-7jYBB9Lq.js";const $=`# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-charts
\`\`\`

## Accessibility

Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application.

## React 19 support

To use this library with React 19 you have to override your \`react-is\` version to match your React version!

- **npm:**

  \`\`\`json
    "overrides": {
      "react-is": "19.1.0"
    },
  \`\`\`

- **yarn**

  \`\`\`json
    "resolutions": {
      "react-is": "19.1.0"
    },
  \`\`\`

## Static CSS

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://ui5.github.io/webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/UI5/webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/UI5/webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
