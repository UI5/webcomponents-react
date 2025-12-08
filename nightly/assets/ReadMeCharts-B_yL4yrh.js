import{r as i,j as t,T as l}from"./iframe-BYgl1e3t.js";import{useMDXComponents as p}from"./index-CQiAxnj4.js";import{M as u,a as h,m as f}from"./blocks-DJ2faYOs.js";import"./Tag-WgH8NYoz.js";import"./index-CTjTm5cU.js";import{F as d}from"./CommandsAndQueries-C7-dfPl9.js";import"./copy-IUlUEvra.js";import{T as b}from"./TableOfContent-Bv7gmaQ1.js";import{C}from"./index-BZVENN4Q.js";import{D}from"./BarChart.stories-BOU6jibX.js";import{D as y}from"./BulletChart.stories-D1CVIyBf.js";import{D as g}from"./ColumnChart.stories-BX6vHiT1.js";import{D as v}from"./ColumnChartWithTrend.stories-C1PXm0cY.js";import{D as x}from"./ComposedChart.stories-D9Y8U6TU.js";import{D as j}from"./DonutChart.stories-CiOGCUe9.js";import{D as w}from"./LineChart.stories-BbTLc7D-.js";import{D as R}from"./PieChart.stories-DslqnEgN.js";import{D as I}from"./RadarChart.stories-CY31Z63A.js";import{D as S}from"./RadialChart.stories-CIGxYW7G.js";import{D as T}from"./ScatterChart.stories-DM__O81Z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-QMEMgn.js";import"./sys-enter-2-Bd_kwfmJ.js";import"./alert-zegR4G--.js";import"./index-CoTJrZqp.js";import"./index-DOySy9e2.js";import"./index-BDYs8WoM.js";import"./Link-DcQGtcs6.js";import"./index-B_dT7zj1.js";import"./index-CgZTDeh6.js";import"./index-B7ISCohd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoRR59AB.js";import"./addCustomCSSWithScoping-_jk3dAup.js";import"./index-6Qy6VRAh.js";import"./Carousel-Cnfz8Lu8.js";import"./ScrollEnablement-CMlQv5Ns.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CqTE5JFk.js";import"./slim-arrow-left-_21RaR61.js";import"./DemoProps-BN9d9tv7.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-z5UmVT4-.js";import"./ChartContainer-C0JTn-kR.js";import"./index-CH5XfXng.js";import"./useCancelAnimationFallback-CcmulR4i.js";import"./YAxisTicks-Cqc4o7Ad.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dug28xcu.js";import"./ChartDataLabel-BFg3hffO.js";import"./useOnClickInternal-y1ad6TP1.js";import"./react-content-loader.es-B7nS5LJI.js";import"./useIsRTL-CWrTCVtk.js";import"./useLongestYAxisLabel-C7YuCzWd.js";import"./ComposedChart-CgzyzSI_.js";import"./Line-OKLpxTkc.js";import"./Scatter-cNQ7-VIb.js";import"./index-wCJbB4-w.js";import"./index-CZT1Jg6a.js";import"./Placeholder-jRqBx1Gt.js";import"./index-Dyj69Oqs.js";const $=`# @ui5/webcomponents-react-charts

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
