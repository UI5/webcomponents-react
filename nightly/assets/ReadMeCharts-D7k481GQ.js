import{r as i,j as t,T as l}from"./iframe-DEgT_E8s.js";import{useMDXComponents as p}from"./index-BZRAiVGZ.js";import{M as u,a as h,m as f}from"./blocks-B_KstB4C.js";import"./Tag-DE605aSS.js";import"./index-YPzE27b5.js";import{F as d}from"./CommandsAndQueries-BnsxTdlD.js";import"./copy-CnDYhLIP.js";import{T as b}from"./TableOfContent-BYZd9K0G.js";import{C}from"./index-CyyzRRSz.js";import{D}from"./BarChart.stories-DuK_b12U.js";import{D as y}from"./BulletChart.stories-Dq60kara.js";import{D as g}from"./ColumnChart.stories-BCu97lD3.js";import{D as v}from"./ColumnChartWithTrend.stories-npSYlk2N.js";import{D as x}from"./ComposedChart.stories-BsA_Bwpl.js";import{D as j}from"./DonutChart.stories-CPepeJW4.js";import{D as w}from"./LineChart.stories-BvgsSMG4.js";import{D as R}from"./PieChart.stories-DmlDbtaz.js";import{D as I}from"./RadarChart.stories-CVVI3V5H.js";import{D as S}from"./RadialChart.stories-DElNBU-6.js";import{D as T}from"./ScatterChart.stories-DnlbgXI8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-r8cEHEup.js";import"./sys-enter-2-ChDTDdJ5.js";import"./alert-Dx6xYju9.js";import"./index-q4TahdKC.js";import"./index-DdLyBjYX.js";import"./index-Dzkg0-9t.js";import"./Link-z1epMX3F.js";import"./index-DuT1R6mu.js";import"./index-5Z9enrbF.js";import"./index-C1jXIPsp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1yrXOFa.js";import"./addCustomCSSWithScoping-CGm4Cfs5.js";import"./index-BBLpbuxz.js";import"./Carousel-Cl2Cfil3.js";import"./ScrollEnablement-8BMeJMa0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DcLOQBhc.js";import"./slim-arrow-left-Kmkh0Y_H.js";import"./DemoProps-WT8Zuebt.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CATUhuSl.js";import"./ChartContainer-Ds6BmCMI.js";import"./index-PbfneB6M.js";import"./useCancelAnimationFallback-D53WdHUr.js";import"./YAxisTicks-CgrIrYVw.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CV9HxD7d.js";import"./ChartDataLabel-S8ceNq_Y.js";import"./useOnClickInternal-CsA7qZUB.js";import"./react-content-loader.es-B3URS1Zi.js";import"./useIsRTL-CnhilVJw.js";import"./useLongestYAxisLabel-CpeuabwM.js";import"./ComposedChart-D2ERXKF2.js";import"./Line-ACt3v--m.js";import"./Scatter-yJbb7s96.js";import"./index-Bt61ZCE5.js";import"./index-B3JbJdGy.js";import"./Placeholder-sOdAaSW2.js";import"./index-CEDgASGs.js";const $=`# @ui5/webcomponents-react-charts

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
