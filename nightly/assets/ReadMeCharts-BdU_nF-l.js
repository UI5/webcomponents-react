import{r as i,j as t,T as l}from"./iframe-hWo-wO7u.js";import{useMDXComponents as p}from"./index-B2u3atBN.js";import{M as u,a as h,m as f}from"./blocks-D665FCej.js";import"./Tag-DiHaMBCj.js";import"./index-D5mqC0e8.js";import{F as d}from"./CommandsAndQueries-BtJ9G9OP.js";import"./copy-BPT19kup.js";import{T as b}from"./TableOfContent-gKRQ1rDy.js";import{C}from"./index-CwKMYnQK.js";import{D}from"./BarChart.stories-k0LeCk4z.js";import{D as y}from"./BulletChart.stories-yAZIJ1Eh.js";import{D as g}from"./ColumnChart.stories-Bpw_u8V6.js";import{D as v}from"./ColumnChartWithTrend.stories-C7ytyU11.js";import{D as x}from"./ComposedChart.stories-BwB56rSu.js";import{D as j}from"./DonutChart.stories-DKy6ts1r.js";import{D as w}from"./LineChart.stories-CJXzAgVd.js";import{D as R}from"./PieChart.stories-CHMS47Fw.js";import{D as I}from"./RadarChart.stories-BveSzqSv.js";import{D as S}from"./RadialChart.stories-PXEvkt9_.js";import{D as T}from"./ScatterChart.stories-CYJ-Atk4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8DEl_tH.js";import"./sys-enter-2-LL0qt2nK.js";import"./alert-DeTqeiYU.js";import"./index-Wfnu6Ku2.js";import"./index-D7ZeaZZe.js";import"./index-BDgRL0Nh.js";import"./Link-BA7dioNH.js";import"./index-CSzf7Z-Y.js";import"./index-DISMqvl7.js";import"./index-C_OvF3EV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfqGlQv7.js";import"./addCustomCSSWithScoping-wCTK5FK_.js";import"./index-qccq9h_o.js";import"./Carousel-oDGowHtM.js";import"./ScrollEnablement-BHTzoQIK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cahw3KlC.js";import"./slim-arrow-left-Bj8Jml0P.js";import"./DemoProps-BGrijF2G.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BfwJclxq.js";import"./ChartContainer-CesiP8fJ.js";import"./index-DiMvuXX8.js";import"./useCancelAnimationFallback-DQDTwkto.js";import"./YAxisTicks-Hn7mdJtn.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CHAwCi2b.js";import"./ChartDataLabel-qAuQAbmg.js";import"./useOnClickInternal-CaPv72xN.js";import"./react-content-loader.es-9ju2XxyS.js";import"./useIsRTL-DAQms381.js";import"./useLongestYAxisLabel-C0mehZVL.js";import"./ComposedChart-CxwLE18v.js";import"./Line-CpUV5nv8.js";import"./Scatter-CERqamxw.js";import"./index-DSaIc0_Q.js";import"./index-qhopVnEe.js";import"./Placeholder-DFAm_Mxw.js";import"./index-OhUAW5l1.js";const $=`# @ui5/webcomponents-react-charts

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
