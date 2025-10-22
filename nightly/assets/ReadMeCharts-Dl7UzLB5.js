import{r as i,j as t,T as l}from"./iframe-CWbL8jxG.js";import{useMDXComponents as p}from"./index-B1hucxFe.js";import{M as u,a as h,k as f}from"./blocks-DWgVki-D.js";import"./Tag-BqrM3bJU.js";import"./index-Ln4MrNxF.js";import{F as d}from"./CommandsAndQueries-DC5-wnNc.js";import"./copy-DC7dXRiF.js";import{T as b}from"./TableOfContent-BS_4sZOQ.js";import{C}from"./index-DMG02a6I.js";import{D}from"./BarChart.stories-Bixxk7Ec.js";import{D as y}from"./BulletChart.stories-DAXNLoNN.js";import{D as g}from"./ColumnChart.stories-CcvyC4E8.js";import{D as v}from"./ColumnChartWithTrend.stories-BHBeTPFM.js";import{D as x}from"./ComposedChart.stories-ks0V71Y8.js";import{D as j}from"./DonutChart.stories-DFI06eey.js";import{D as w}from"./LineChart.stories-DxkdVx_3.js";import{D as R}from"./PieChart.stories-4b18OH77.js";import{D as I}from"./RadarChart.stories-CR1-jKTI.js";import{D as S}from"./RadialChart.stories-DzXFR2j5.js";import{D as T}from"./ScatterChart.stories-Bc8i6Cdm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CisMKXtU.js";import"./sys-enter-2-IsKQM1OD.js";import"./alert-Dh20kvYK.js";import"./index-DTMyNJf2.js";import"./index-BEEAqopd.js";import"./index-B-_ynEAX.js";import"./Link-DUwsGKC7.js";import"./index-BMKWfM9S.js";import"./index-DFy0GYik.js";import"./index-Bs8RptuV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtpdWs35.js";import"./addCustomCSSWithScoping-DZNikY8L.js";import"./index-DX9sPfcP.js";import"./Carousel-DiPNlRxd.js";import"./ScrollEnablement-q8IAhmkU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BRBPKxS7.js";import"./slim-arrow-left-CV77wiJi.js";import"./DemoProps-BvUFo2fe.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CXdRsAlu.js";import"./ChartContainer-CsJXfPJm.js";import"./index-BgtkjQtp.js";import"./useCancelAnimationFallback-CHKAhnbA.js";import"./YAxisTicks-BY9SoNg2.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CnPKakWr.js";import"./ChartDataLabel-CX2CbHkj.js";import"./useOnClickInternal-cR7JgGlI.js";import"./react-content-loader.es-X-RJf_QU.js";import"./useIsRTL-nDtVDEC_.js";import"./useLongestYAxisLabel-CMDDhNV2.js";import"./ComposedChart-BkG-Hkfj.js";import"./Line-BMAI4Y_S.js";import"./Scatter-BKAGtTrG.js";import"./index-C3IKrmTt.js";import"./index-BIiW6sPX.js";import"./Placeholder-C6uhBsyK.js";import"./index-DS3xVarw.js";const $=`# @ui5/webcomponents-react-charts

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
