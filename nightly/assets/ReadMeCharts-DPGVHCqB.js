import{r as i,j as t,T as l}from"./iframe-B3T0Oj7B.js";import{useMDXComponents as p}from"./index-D3UxDze4.js";import{M as u,a as h,n as f}from"./blocks-CyPgi3fl.js";import"./Tag-BebiXErc.js";import"./index-dJAxIfZY.js";import{F as d}from"./CommandsAndQueries-DvsDK9ZB.js";import"./copy-_Qj_KEfj.js";import{T as b}from"./TableOfContent-zwMPdMlr.js";import{C}from"./index-C1tGQJN6.js";import{D}from"./BarChart.stories-C-Uj4vXf.js";import{D as y}from"./BulletChart.stories-DKt5cA9_.js";import{D as g}from"./ColumnChart.stories-C-uSJsGw.js";import{D as v}from"./ColumnChartWithTrend.stories-B7RJ4qGh.js";import{D as x}from"./ComposedChart.stories-CkMDkCRW.js";import{D as j}from"./DonutChart.stories-MjIyQviT.js";import{D as w}from"./LineChart.stories-BXbDWYGc.js";import{D as R}from"./PieChart.stories-BjJyvD-x.js";import{D as I}from"./RadarChart.stories-D1V085I7.js";import{D as S}from"./RadialChart.stories-C91GDgiJ.js";import{D as T}from"./ScatterChart.stories-BqubCOm0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CDiFrRjk.js";import"./sys-enter-2-CspjHMoa.js";import"./alert-BsEVUmBp.js";import"./index-D37akpKi.js";import"./index-B8hvCU9O.js";import"./index-BctJwJOg.js";import"./Link-Bk4EX_BP.js";import"./index-Bik-cKeX.js";import"./index-D_qT_Ogl.js";import"./index-CpVd5OAx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVuzLNiB.js";import"./addCustomCSSWithScoping-BR9GACjU.js";import"./index-BywqBC1y.js";import"./Carousel-BMDs91fu.js";import"./ScrollEnablement-CfYd06M2.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DtjI1yUN.js";import"./slim-arrow-left-95__r814.js";import"./DemoProps-Bfx-4ei2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps--b5gejPN.js";import"./ChartContainer-DevNOGjl.js";import"./index-4zbN5094.js";import"./useCancelAnimationFallback-D6z7a9Db.js";import"./YAxisTicks-BHcP-fyT.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CrqqmaG8.js";import"./ChartDataLabel-CU5aBMwD.js";import"./useOnClickInternal-D7XIVJA0.js";import"./react-content-loader.es-Bfs_XO5c.js";import"./useIsRTL-BlmVpLoY.js";import"./useLongestYAxisLabel-BKOTmpH2.js";import"./ComposedChart-DuepwSM3.js";import"./Line-CYLhi5a5.js";import"./Scatter-DWc7obdV.js";import"./index-DuOadf66.js";import"./index-goZFbbxp.js";import"./Placeholder-C02KonL1.js";import"./index-DIlEcuLZ.js";const $=`# @ui5/webcomponents-react-charts

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
