import{r as i,j as t,T as l}from"./iframe-DYduXZhN.js";import{useMDXComponents as p}from"./index-Ci2-DdjO.js";import{M as u,a as h,n as f}from"./blocks-D9jMBEgy.js";import"./Tag-DIRdIcZz.js";import"./index-BOwVehE_.js";import{F as d}from"./CommandsAndQueries-B9zetcQ0.js";import"./copy-CkIF2sdc.js";import{T as b}from"./TableOfContent-DYx4HAfY.js";import{C}from"./index-B1dubw_b.js";import{D}from"./BarChart.stories-DQB9yCB-.js";import{D as y}from"./BulletChart.stories-DhI78plj.js";import{D as g}from"./ColumnChart.stories-C5Fb-mI8.js";import{D as v}from"./ColumnChartWithTrend.stories-6q-uiGQ-.js";import{D as x}from"./ComposedChart.stories-A1tm6TqC.js";import{D as j}from"./DonutChart.stories-C1bjHsSH.js";import{D as w}from"./LineChart.stories-Da1HoQQr.js";import{D as R}from"./PieChart.stories-BwLAZvp5.js";import{D as I}from"./RadarChart.stories-CpY5bySF.js";import{D as S}from"./RadialChart.stories-BFsrv7Ih.js";import{D as T}from"./ScatterChart.stories-DjipzASQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B4rZhRQI.js";import"./sys-enter-2-DdBtSqFS.js";import"./alert-Cbu3hZ-F.js";import"./index-Cz134k4C.js";import"./index-9BFlmr8a.js";import"./index-C__H6VdM.js";import"./Link-BLFGRSbE.js";import"./index-BEkPqhUo.js";import"./index-BT55sXhr.js";import"./index-CrQhdGHw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tYCFSQM4.js";import"./addCustomCSSWithScoping-BvPW-C09.js";import"./index-DKd7eJ-2.js";import"./Carousel-CnpnNdzQ.js";import"./ScrollEnablement-D2gDebhQ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-HA0vICgM.js";import"./slim-arrow-left-DplfUvW_.js";import"./DemoProps-Dk6lHVkb.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cax3wO5I.js";import"./ChartContainer-9_10j9j6.js";import"./index-CbCDMDkJ.js";import"./useCancelAnimationFallback-hUiw5xgO.js";import"./YAxisTicks-BPdV-Qz0.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DPBzRX8z.js";import"./ChartDataLabel-D4gbC_SM.js";import"./useOnClickInternal-D-Whbjbz.js";import"./react-content-loader.es-CcO14vG6.js";import"./useIsRTL-CRb5-qWs.js";import"./useLongestYAxisLabel-Qxcit7FI.js";import"./ComposedChart-C2cZljVz.js";import"./Line-Dveio0N3.js";import"./Scatter-BKvou-Aw.js";import"./index-BV00ICDC.js";import"./index-DxJIKqJd.js";import"./Placeholder-CgJdASo6.js";import"./index-B_N48h_q.js";const $=`# @ui5/webcomponents-react-charts

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
