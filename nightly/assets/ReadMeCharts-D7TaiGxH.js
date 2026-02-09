import{r as i,j as t,O as l}from"./iframe-gZNO6M5z.js";import{useMDXComponents as p}from"./index-C9S1zRdY.js";import{M as u,a as h,n as f}from"./blocks-bGe4ZsEp.js";import"./Tag-B4G2Y0SL.js";import"./index-27nnQHPg.js";import{F as d}from"./CommandsAndQueries-B3SYrvAS.js";import"./copy-BVrBwFXj.js";import{T as b}from"./TableOfContent-5--z1odT.js";import{C}from"./index-BiYpfKPa.js";import{D}from"./BarChart.stories-BGysZvlY.js";import{D as y}from"./BulletChart.stories-XoejdODJ.js";import{D as g}from"./ColumnChart.stories-BCv-A2rj.js";import{D as v}from"./ColumnChartWithTrend.stories-Yk9Qe0hj.js";import{D as x}from"./ComposedChart.stories-BURZo45r.js";import{D as j}from"./DonutChart.stories-Cplt_Y6y.js";import{D as w}from"./LineChart.stories-B9nRQ9bg.js";import{D as R}from"./PieChart.stories-CXZuA95k.js";import{D as I}from"./RadarChart.stories-DVxb0dzs.js";import{D as S}from"./RadialChart.stories-BNSe0P08.js";import{D as $}from"./ScatterChart.stories-Dij6GRWi.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DLCOf7nz.js";import"./sys-enter-2-BCk8zcst.js";import"./alert-Dzej_rV2.js";import"./index-BF59Vd9o.js";import"./index-B0r-mBm2.js";import"./index-CaC9RK_F.js";import"./Link-Vq1QqGjH.js";import"./index-DGMrxJej.js";import"./index-Cp6HJT54.js";import"./index-BefwTBAQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CU06ey2h.js";import"./addCustomCSSWithScoping-BZ00kVb8.js";import"./index-CDlXZiAa.js";import"./Carousel-1yC2LHT4.js";import"./ScrollEnablement-BpD4fQsi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DuruKjMM.js";import"./slim-arrow-left-C652zVsp.js";import"./DemoProps-jqBx4uJO.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D2sWHYcv.js";import"./ChartContainer-DCgx64HL.js";import"./index-EBcPMq50.js";import"./useCancelAnimationFallback-DpxKlJZm.js";import"./YAxisTicks-DHLa8k8R.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-fJ7w6181.js";import"./ChartDataLabel-GzvMBUNd.js";import"./useOnClickInternal-gzvEZeyH.js";import"./react-content-loader.es-BuZNr_8L.js";import"./useIsRTL-B5FXU3B0.js";import"./useLongestYAxisLabel-tiLFZ_lL.js";import"./ComposedChart-CquaeTog.js";import"./Line-Ub3ppyHy.js";import"./Scatter-CaExnoKB.js";import"./index-B-_JInhT.js";import"./index-q7GUj4NY.js";import"./Placeholder-BuxBWRR9.js";import"./index-CfqZ2-d3.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
