import{r as i,j as t,T as l}from"./iframe-f3iLPpTx.js";import{useMDXComponents as p}from"./index-Cg-5LGOy.js";import{M as u,a as h,n as f}from"./blocks-DoSJn-9n.js";import"./Tag-HMKYn_gR.js";import"./index-C4t1_KXY.js";import{F as d}from"./CommandsAndQueries-ANshK3xd.js";import"./copy-BPmTOQZZ.js";import{T as b}from"./TableOfContent-D-qzXXkG.js";import{C}from"./index-D6m-juAZ.js";import{D}from"./BarChart.stories-DNh-iIWJ.js";import{D as y}from"./BulletChart.stories-BHxnXnaB.js";import{D as g}from"./ColumnChart.stories-BYqaXK5W.js";import{D as v}from"./ColumnChartWithTrend.stories-BqMCRnJt.js";import{D as x}from"./ComposedChart.stories-OkNCL6xV.js";import{D as j}from"./DonutChart.stories-CZtKSrFj.js";import{D as w}from"./LineChart.stories-qjxDIPB0.js";import{D as R}from"./PieChart.stories-BeOc4rRz.js";import{D as I}from"./RadarChart.stories-CSKjf0vj.js";import{D as S}from"./RadialChart.stories-BFy-5W9H.js";import{D as T}from"./ScatterChart.stories-BbarpYE9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9tZEGE7.js";import"./sys-enter-2-DE9YD12B.js";import"./alert-BBZcuL-v.js";import"./index-TWvX3fxG.js";import"./index-oCC-c3oA.js";import"./index-DzXajydQ.js";import"./Link-EHnjrAaJ.js";import"./index-Dq8bnboK.js";import"./index-C3jxOnm0.js";import"./index-DY8Z5oY2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ce84hNWi.js";import"./addCustomCSSWithScoping-FBci05L8.js";import"./index-C81LpEbs.js";import"./Carousel-WCdoFIVN.js";import"./ScrollEnablement-BgAU8fOn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CuKV99lg.js";import"./slim-arrow-left-BWLEmoNV.js";import"./DemoProps-CTy-JRXY.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DTmvEg_E.js";import"./ChartContainer-DNEEzaUU.js";import"./index-x-l5-c_J.js";import"./useCancelAnimationFallback-v24VSbIg.js";import"./YAxisTicks-Dx3py5bR.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-lAFf67yu.js";import"./ChartDataLabel-Dip7cJk3.js";import"./useOnClickInternal-Cc6I8rce.js";import"./react-content-loader.es-CVktNC3a.js";import"./useIsRTL-DzIFx5-R.js";import"./useLongestYAxisLabel-C8gT8TbN.js";import"./ComposedChart-Bcp5dBMw.js";import"./Line-CO6NHtOu.js";import"./Scatter-BW9y6eqJ.js";import"./index-BqyVqEAw.js";import"./index-on-hkiyj.js";import"./Placeholder-DFHmap98.js";import"./index-CuwpwiDT.js";const $=`# @ui5/webcomponents-react-charts

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
