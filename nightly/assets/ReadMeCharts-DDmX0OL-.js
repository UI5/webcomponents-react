import{r as i,j as t,T as l}from"./iframe-CXQAdbiu.js";import{useMDXComponents as p}from"./index-B53u5pzW.js";import{M as u,a as h,k as f}from"./blocks-CqzuTWcZ.js";import"./Tag-BVaaDNuO.js";import"./index-B7B2Licm.js";import{F as d}from"./CommandsAndQueries-aoDJK_rZ.js";import"./copy-DcVZp789.js";import{T as b}from"./TableOfContent-Cd8MlPFk.js";import{C}from"./index-pnO--gMV.js";import{D}from"./BarChart.stories-C1scMToO.js";import{D as y}from"./BulletChart.stories-D1Ve0-e6.js";import{D as g}from"./ColumnChart.stories-CXQFAd2K.js";import{D as v}from"./ColumnChartWithTrend.stories-DcGv8agh.js";import{D as x}from"./ComposedChart.stories-3YCPuB3-.js";import{D as j}from"./DonutChart.stories-udPf8c-V.js";import{D as w}from"./LineChart.stories-Cd4qbWmQ.js";import{D as R}from"./PieChart.stories-B4SPixmX.js";import{D as I}from"./RadarChart.stories-CHs3zk0G.js";import{D as S}from"./RadialChart.stories-Bq8Nm7ID.js";import{D as T}from"./ScatterChart.stories-CxAKz_31.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ATIM8RIH.js";import"./sys-enter-2-4FUXKSMu.js";import"./alert-DgUa0xxC.js";import"./index-529wBAr6.js";import"./index-f6kmMniG.js";import"./index-ULIsdIj2.js";import"./Link-BM2g4e1S.js";import"./index-BdQ3exsp.js";import"./index-DaUVwWua.js";import"./index-BjLlWCaV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cah1_bVk.js";import"./addCustomCSSWithScoping-CF9FJk9W.js";import"./index-t0QN6j1g.js";import"./Carousel-DrRISzXX.js";import"./ScrollEnablement-CJADfPLf.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ClFJcSXm.js";import"./slim-arrow-left-CoRxGbIM.js";import"./DemoProps-D_13kgSe.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B1vGYWBR.js";import"./ChartContainer-Cg0bKLBS.js";import"./index-C7FokFlZ.js";import"./useCancelAnimationFallback-B1kOOiIZ.js";import"./YAxisTicks-B51F8zlc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C8VGBp6A.js";import"./ChartDataLabel-IyGiZL2I.js";import"./useOnClickInternal-Cav9IjZz.js";import"./react-content-loader.es-D933hLcr.js";import"./useIsRTL-FsmN4cF6.js";import"./useLongestYAxisLabel-BmvGZK-u.js";import"./ComposedChart-D6I98Oa3.js";import"./Line-BqMbqvtA.js";import"./Scatter-J27grOXV.js";import"./index-DeO5OG2m.js";import"./index-DtQ9LAqd.js";import"./Placeholder-D1t5ZmOJ.js";import"./index-Bgdp8ztR.js";const $=`# @ui5/webcomponents-react-charts

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
