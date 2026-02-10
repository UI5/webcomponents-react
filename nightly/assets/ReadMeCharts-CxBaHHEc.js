import{r as i,j as t,O as l}from"./iframe-D3h_j2y4.js";import{useMDXComponents as p}from"./index-a9MBNRjP.js";import{M as u,a as h,n as f}from"./blocks-Cp97O8Me.js";import"./Tag-Be6y1yqM.js";import"./index-B9e5YBdN.js";import{F as d}from"./CommandsAndQueries-DkEtb3C9.js";import"./copy-Dke-3UUt.js";import{T as b}from"./TableOfContent-B8qKcdwY.js";import{C}from"./index-CkZeECf8.js";import{D}from"./BarChart.stories-BYJVBjW8.js";import{D as y}from"./BulletChart.stories-DMPbgPUM.js";import{D as g}from"./ColumnChart.stories-Bj_2CDyB.js";import{D as v}from"./ColumnChartWithTrend.stories-DD7msjW7.js";import{D as x}from"./ComposedChart.stories-DHnUp_Pq.js";import{D as j}from"./DonutChart.stories-CBVOesda.js";import{D as w}from"./LineChart.stories-DXGCpjE-.js";import{D as R}from"./PieChart.stories-ZRRxwpRl.js";import{D as I}from"./RadarChart.stories-C5FLPLsv.js";import{D as S}from"./RadialChart.stories-7djjKqr8.js";import{D as $}from"./ScatterChart.stories-C6ZnxCu-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Du_n-m1U.js";import"./sys-enter-2-_5l1H-Gx.js";import"./alert-DiqJ6xxp.js";import"./index-BY-U4HhI.js";import"./index-BOt5HncK.js";import"./index-BhBE3smf.js";import"./Link-Dali4gAe.js";import"./index-BQ-14eq3.js";import"./index-DX_7kgjZ.js";import"./index-DnWdQH32.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-llHj0RCs.js";import"./addCustomCSSWithScoping-uA_fHk2N.js";import"./index-CH7UrjOG.js";import"./Carousel-DV-GmbdZ.js";import"./ScrollEnablement-CU1q9bqi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DoYFPzVS.js";import"./slim-arrow-left-BZRfwCT0.js";import"./DemoProps-CYGC8c9J.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DpJA1AbV.js";import"./ChartContainer-CDPvne6B.js";import"./index-DTeZzsS7.js";import"./useCancelAnimationFallback-DBSCYZe9.js";import"./YAxisTicks-DxKAA2qs.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C6lFCKf0.js";import"./ChartDataLabel-72Hsumi7.js";import"./useOnClickInternal-BYRz5VZ0.js";import"./react-content-loader.es-DOoLeSjF.js";import"./useIsRTL-BlLZYc2i.js";import"./useLongestYAxisLabel-DzfvjmaB.js";import"./ComposedChart-DlsoAfXB.js";import"./Line-BoeUlRcx.js";import"./Scatter-C1DJMLoY.js";import"./index-AmezCdSI.js";import"./index-B6HASUdP.js";import"./Placeholder-lN1hgVLV.js";import"./index-BW1cFg8V.js";const E=`# @ui5/webcomponents-react-charts

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
