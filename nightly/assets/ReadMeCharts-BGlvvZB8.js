import{r as i,j as t,T as l}from"./iframe-DvHwewhR.js";import{useMDXComponents as p}from"./index-CLaogw5S.js";import{M as u,a as h,n as f}from"./blocks-CB2I7-76.js";import"./Tag-CbT4PDaW.js";import"./index-Bt09l3yh.js";import{F as d}from"./CommandsAndQueries-BNdncSiU.js";import"./copy-CCEG4Gow.js";import{T as b}from"./TableOfContent-CqehIVhz.js";import{C}from"./index-SD2x9Mkg.js";import{D}from"./BarChart.stories-BwYs8yvm.js";import{D as y}from"./BulletChart.stories-PIM_TdzB.js";import{D as g}from"./ColumnChart.stories-C5XgJgiI.js";import{D as v}from"./ColumnChartWithTrend.stories-BtsXxHzF.js";import{D as x}from"./ComposedChart.stories-CJMUnP7b.js";import{D as j}from"./DonutChart.stories-YBFV3khi.js";import{D as w}from"./LineChart.stories-yFH34Rbc.js";import{D as R}from"./PieChart.stories-BX8sDsCP.js";import{D as I}from"./RadarChart.stories-C2ChZKQR.js";import{D as S}from"./RadialChart.stories-DkENWPAQ.js";import{D as T}from"./ScatterChart.stories-DxiN3KSp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./index-Dxi3lBUy.js";import"./Carousel-qn4RVyns.js";import"./ScrollEnablement-BGx-icSx.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BjhVrwhL.js";import"./slim-arrow-left-D2qOzph7.js";import"./DemoProps-Am6KRRZi.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B13ImMeo.js";import"./ChartContainer-B_4HzNqO.js";import"./index-BtAgcYwE.js";import"./useCancelAnimationFallback-DCiEJVhK.js";import"./YAxisTicks-DY4Ld3i-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DEK2Tr4p.js";import"./ChartDataLabel-ChPMeOi3.js";import"./useOnClickInternal-CckG_OQY.js";import"./react-content-loader.es-B7YrAqNF.js";import"./useIsRTL-C4H1iq0n.js";import"./useLongestYAxisLabel-CxN_EVCF.js";import"./ComposedChart-B8-iOfRe.js";import"./Line-BwnaNe5G.js";import"./Scatter-DlSpKzp0.js";import"./index-vFxAMIjv.js";import"./index-BNDpmZ2T.js";import"./Placeholder-DdD4Q1d1.js";import"./index-D6kLmZ7W.js";const $=`# @ui5/webcomponents-react-charts

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
