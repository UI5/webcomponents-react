import{r as i,j as t,O as l}from"./iframe-DVaoJynC.js";import{useMDXComponents as p}from"./index-D8trWAUj.js";import{M as u,a as h,n as f}from"./blocks-CrqJ-Z31.js";import"./Tag--1vn2ouf.js";import"./index-CpBbNRGM.js";import{F as d}from"./CommandsAndQueries-DmxPE0MZ.js";import"./copy-DE_2j5FQ.js";import{T as b}from"./TableOfContent-Dtb5vAem.js";import{C}from"./index-COz8s0eq.js";import{D}from"./BarChart.stories-Ijr_XokL.js";import{D as y}from"./BulletChart.stories-CJDaDR1Q.js";import{D as g}from"./ColumnChart.stories-AMR8FqpG.js";import{D as v}from"./ColumnChartWithTrend.stories-tXP0eyuU.js";import{D as x}from"./ComposedChart.stories-BXqfBgoQ.js";import{D as j}from"./DonutChart.stories-DcSE2CQb.js";import{D as w}from"./LineChart.stories-RJkA9beI.js";import{D as R}from"./PieChart.stories-0tADoFxg.js";import{D as I}from"./RadarChart.stories-Ww5MAOt1.js";import{D as S}from"./RadialChart.stories-BI2Zg1BE.js";import{D as $}from"./ScatterChart.stories-WsRo9zgI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BslaWIIc.js";import"./sys-enter-2-iJEMuBvO.js";import"./alert-DlPbm_nn.js";import"./index-CrdrDGzw.js";import"./index-xNxGNywP.js";import"./index-1ngZk4Q4.js";import"./Link-Q_Ld2CqF.js";import"./index-qrdXuh6V.js";import"./index-DDgoCywP.js";import"./index-dYIL-oMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-V3cCpaGB.js";import"./addCustomCSSWithScoping-CedcLW5T.js";import"./index-DW_Y2aM_.js";import"./Carousel-DYL6spuV.js";import"./ScrollEnablement-D-0-sBKz.js";import"./animate-JylhYHXj.js";import"./AnimationMode-a9xpxYHW.js";import"./slim-arrow-left-DhZ2Y6Nd.js";import"./DemoProps-DaMrl2cG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BJQTnk8z.js";import"./ChartContainer-Ugt9YSRS.js";import"./index-D0XhROSl.js";import"./useCancelAnimationFallback-Bcg4ggaI.js";import"./YAxisTicks-BlK71Ltw.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BWN7jRFo.js";import"./ChartDataLabel-J0LrenWa.js";import"./useOnClickInternal-D-SBzKBl.js";import"./react-content-loader.es-C9zMfIyB.js";import"./useIsRTL-BYo7ps0s.js";import"./useLongestYAxisLabel-DeNLPZYV.js";import"./ComposedChart-mM4fpSV6.js";import"./Line-U2Gt9VzO.js";import"./Scatter-DOUdJuuD.js";import"./index-B6Kn6w9j.js";import"./index-Cf7Tqqst.js";import"./Placeholder-BZMI_0sz.js";import"./index-DMT5cjQt.js";const E=`# @ui5/webcomponents-react-charts

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
