import{r as i,j as t,T as l}from"./iframe-FqLIb5aJ.js";import{useMDXComponents as p}from"./index-BMlaAUsm.js";import{M as u,a as h,k as f}from"./blocks-2y9I1Ee8.js";import"./Tag-8E3ttw9X.js";import"./index-B7xi-wqa.js";import{F as d}from"./CommandsAndQueries-C8KzZZ_g.js";import"./copy-DHQOADmz.js";import{T as b}from"./TableOfContent-Bn39sA4u.js";import{C}from"./index-BLKxnbUg.js";import{D}from"./BarChart.stories-DKiem963.js";import{D as y}from"./BulletChart.stories-Bq8J26Cr.js";import{D as g}from"./ColumnChart.stories-TASfUPDG.js";import{D as v}from"./ColumnChartWithTrend.stories-C7ZWWUQT.js";import{D as x}from"./ComposedChart.stories-Dyib2vpi.js";import{D as j}from"./DonutChart.stories-Bn_6IjL4.js";import{D as w}from"./LineChart.stories-B7b3OMiK.js";import{D as R}from"./PieChart.stories-DOPaZhyI.js";import{D as I}from"./RadarChart.stories-DJldC4rj.js";import{D as S}from"./RadialChart.stories-B3NxTZff.js";import{D as T}from"./ScatterChart.stories-BHLF-g8d.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWEUh2Nv.js";import"./sys-enter-2-D8dKPdhT.js";import"./alert-Dzhc-2EW.js";import"./index-DrxJ3_v0.js";import"./index-CJCUd_sD.js";import"./index-CunGGXs0.js";import"./Link-D_zVjdUt.js";import"./index-ByRLHl7W.js";import"./index-DHR1LOgw.js";import"./index-DfAJ7eEY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlZw9a5e.js";import"./addCustomCSSWithScoping-BziWOAoD.js";import"./index-PGt_tfZb.js";import"./Carousel-BPYoXimr.js";import"./ScrollEnablement-Bzckwnc4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-wdWzxKm_.js";import"./slim-arrow-left-BOjX9LRv.js";import"./DemoProps-DcCQIQkh.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-zqmzCmrC.js";import"./ChartContainer-CggHNfz_.js";import"./index-MwCWU3y-.js";import"./useCancelAnimationFallback-DuPAZRiH.js";import"./YAxisTicks-5ZvVi6xj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-5hs-yYxf.js";import"./ChartDataLabel-DRJvhu3R.js";import"./useOnClickInternal-CmyU2rYa.js";import"./react-content-loader.es-C7KOh8Vm.js";import"./useIsRTL-BBKH6PEs.js";import"./useLongestYAxisLabel-CCkdarZw.js";import"./ComposedChart-CO6JnkQs.js";import"./Line-gWzce_H1.js";import"./Scatter-DXv6GZFe.js";import"./index-u4xw7ODf.js";import"./index-9ajiB9eQ.js";import"./Placeholder-D76BZg3V.js";import"./index-2gxIJzUu.js";const $=`# @ui5/webcomponents-react-charts

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
