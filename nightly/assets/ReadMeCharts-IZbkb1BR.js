import{r as i,j as t,T as l}from"./iframe-gC-jGD3g.js";import{useMDXComponents as p}from"./index-CnyMSsHR.js";import{M as u,a as h,m as f}from"./blocks-BnpMKK8i.js";import"./Tag-DMQgfedw.js";import"./index-vAW-FU28.js";import{F as d}from"./CommandsAndQueries-ChGbNwju.js";import"./copy-BSllcJzf.js";import{T as b}from"./TableOfContent-DmK_pd3J.js";import{C}from"./index-Dgts5qmK.js";import{D}from"./BarChart.stories-VP7Wti-i.js";import{D as y}from"./BulletChart.stories-DGR-r9jf.js";import{D as g}from"./ColumnChart.stories-SKpji6TI.js";import{D as v}from"./ColumnChartWithTrend.stories-Cel-Yhys.js";import{D as x}from"./ComposedChart.stories-CN5sUgJZ.js";import{D as j}from"./DonutChart.stories-C1dTxQ0u.js";import{D as w}from"./LineChart.stories-DEv4-475.js";import{D as R}from"./PieChart.stories-BHD1c_Z6.js";import{D as I}from"./RadarChart.stories-Jo8ei0Ii.js";import{D as S}from"./RadialChart.stories-DTVtW7Fa.js";import{D as T}from"./ScatterChart.stories-C9cNhjbW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DRo1yGzG.js";import"./sys-enter-2-DufMiZ6b.js";import"./alert-U-kxkHRC.js";import"./index-Cgw7_UVl.js";import"./index-Dyh78V3l.js";import"./index-ttP0_XR3.js";import"./Link-Cdfcmbjx.js";import"./index-DlQFiyPN.js";import"./index-BDDT0PTl.js";import"./index-DsCn_0k2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP7KFobN.js";import"./addCustomCSSWithScoping-Cg-GrC5q.js";import"./index-CHNkjAWB.js";import"./Carousel-CRwUixXg.js";import"./ScrollEnablement-FtAWAuH9.js";import"./animate-JylhYHXj.js";import"./AnimationMode-hMdtg1GI.js";import"./slim-arrow-left-C0XyKP9L.js";import"./DemoProps-Dz3YTIbD.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CsLcppwi.js";import"./ChartContainer-CJsSrn9m.js";import"./index-DoCANgze.js";import"./useCancelAnimationFallback-Bc5nO6zh.js";import"./YAxisTicks-DdbLnqsa.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C-IyAPIa.js";import"./ChartDataLabel-BiUH_3RX.js";import"./useOnClickInternal-jsJhVjKm.js";import"./react-content-loader.es-Bfm2l2ko.js";import"./useIsRTL-CPypzMSE.js";import"./useLongestYAxisLabel-Cgz9gTAw.js";import"./ComposedChart-Dcl1c7x4.js";import"./Line-DAVJ4T8t.js";import"./Scatter-BqGIzvPg.js";import"./index-COY5Q-JI.js";import"./index-CaCU7O4D.js";import"./Placeholder-D6uyDEXz.js";import"./index-BO3btEPt.js";const $=`# @ui5/webcomponents-react-charts

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
