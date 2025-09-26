import{r as i,j as t,T as l}from"./iframe-lqcNyI1T.js";import{useMDXComponents as p}from"./index-B0DX3imF.js";import{M as u,a as h,k as f}from"./blocks-BpHyZEcb.js";import"./Tag-gBw-lmpH.js";import"./index-CZPzb4BW.js";import{F as d}from"./CommandsAndQueries-DzJmAZem.js";import"./copy-CC4Y44ID.js";import{T as b}from"./TableOfContent-BqOuSc1s.js";import{C}from"./index-YOEwVpbN.js";import{D}from"./BarChart.stories-BwGYebW-.js";import{D as y}from"./BulletChart.stories-HEfzMqn1.js";import{D as g}from"./ColumnChart.stories-DLb-am4w.js";import{D as v}from"./ColumnChartWithTrend.stories-B6OIrKw8.js";import{D as x}from"./ComposedChart.stories-ByWiuB03.js";import{D as j}from"./DonutChart.stories-BuZGRb7N.js";import{D as w}from"./LineChart.stories-BLnwCCTJ.js";import{D as R}from"./PieChart.stories-_jgzvqQf.js";import{D as I}from"./RadarChart.stories-CXqIb41_.js";import{D as S}from"./RadialChart.stories-MIOrAyTU.js";import{D as T}from"./ScatterChart.stories-C30Y5CpE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-04kgllMP.js";import"./sys-enter-2-DUAlyrLn.js";import"./alert-BKOHJXpG.js";import"./index-Dd_PfWwN.js";import"./index-DgG0lX0j.js";import"./index-D-4WJNaw.js";import"./Link-1aRA3aDD.js";import"./index-DHQLUBCy.js";import"./index-B4-GBSDE.js";import"./index-CiJkSLrj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D20vcD6H.js";import"./addCustomCSSWithScoping-CSRUaJeQ.js";import"./index-BwE7J1MZ.js";import"./Carousel-0MKbC0pN.js";import"./ScrollEnablement-BXvjXYp4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cf1y39dc.js";import"./slim-arrow-left-CkJL-ApT.js";import"./DemoProps-C0kUCQPm.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CVzJa_CL.js";import"./ChartContainer-Dl9eENCC.js";import"./index-CAnVov9v.js";import"./useCancelAnimationFallback-j1BWtxSs.js";import"./YAxisTicks-BNtKkx2z.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BN73ZGSw.js";import"./ChartDataLabel-COUqKU1-.js";import"./useOnClickInternal-BEX0HGlo.js";import"./react-content-loader.es-CpuDgexu.js";import"./useIsRTL-Cjl42E3c.js";import"./useLongestYAxisLabel-DqbrC0In.js";import"./ComposedChart-BatwbkME.js";import"./Line-qJ7qWuu5.js";import"./Scatter-CzbX4tpE.js";import"./index-BoKTwoHe.js";import"./index-D_UNpzeh.js";import"./Placeholder-eUYQdav-.js";import"./index-DNs6B-jh.js";const $=`# @ui5/webcomponents-react-charts

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
