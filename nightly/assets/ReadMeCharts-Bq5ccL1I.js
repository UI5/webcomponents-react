import{r as i,j as t,T as l}from"./iframe-CCKRZdbF.js";import{useMDXComponents as p}from"./index-BW1v5Z1e.js";import{M as u,a as h,k as f}from"./blocks-DizR4yrp.js";import"./Tag-D_1GVpYe.js";import"./index-BXous6Vg.js";import{F as d}from"./CommandsAndQueries-D1vMTwJ_.js";import"./copy-DCYvEQ2A.js";import{T as b}from"./TableOfContent-DhuQYpKP.js";import{C}from"./index-DExlith4.js";import{D}from"./BarChart.stories-DI29kwNW.js";import{D as y}from"./BulletChart.stories-CIHHi3eQ.js";import{D as g}from"./ColumnChart.stories-C3vFhMWC.js";import{D as v}from"./ColumnChartWithTrend.stories-2-IIl2kB.js";import{D as x}from"./ComposedChart.stories-ghNbmV_I.js";import{D as j}from"./DonutChart.stories-Z72QzbMz.js";import{D as w}from"./LineChart.stories-VqT1O2rk.js";import{D as R}from"./PieChart.stories-CQUMI9SO.js";import{D as I}from"./RadarChart.stories-9K80wyKQ.js";import{D as S}from"./RadialChart.stories-CdaQqQce.js";import{D as T}from"./ScatterChart.stories-Cnm2_ld0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXZj2K0P.js";import"./sys-enter-2-_UoM3OrC.js";import"./alert-BYsKIWrN.js";import"./index-ppkYs0Pw.js";import"./index-TT9wAavy.js";import"./index-C4ynR4jc.js";import"./Link-DVIX6xLA.js";import"./index-Xy0A6wMV.js";import"./index-BMpz4bfD.js";import"./index-byvg7TJC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di3RALWU.js";import"./addCustomCSSWithScoping-BCWPiCrh.js";import"./index-DgC4fDU8.js";import"./Carousel-C8eliGof.js";import"./ScrollEnablement-BBtwJSnx.js";import"./animate-JylhYHXj.js";import"./AnimationMode-TCGQJFBN.js";import"./slim-arrow-left-PO29y6My.js";import"./DemoProps-CEKk-XTo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-COvTFIwZ.js";import"./ChartContainer-B8oM0tWH.js";import"./index-DYCg0rFm.js";import"./useCancelAnimationFallback-BfYYXiHi.js";import"./YAxisTicks-CGm1uf9b.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BzbTHqSd.js";import"./ChartDataLabel-DPUPQTP4.js";import"./useOnClickInternal-BW87ewWm.js";import"./react-content-loader.es-AJERphec.js";import"./useIsRTL-Dajtv9JX.js";import"./useLongestYAxisLabel-0L-KXRtK.js";import"./ComposedChart-m7JMogCB.js";import"./Line-BECo4eab.js";import"./Scatter-BSx7oWPT.js";import"./index-BRvzPppT.js";import"./index-CyqwQI0V.js";import"./Placeholder-D_p2oMuw.js";import"./index-BiKj_KO-.js";const $=`# @ui5/webcomponents-react-charts

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
