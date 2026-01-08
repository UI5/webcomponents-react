import{r as i,j as t,T as l}from"./iframe-DKMkKoYy.js";import{useMDXComponents as p}from"./index-DwgZfgb7.js";import{M as u,a as h,n as f}from"./blocks-Bv7S8SwX.js";import"./Tag-D068unQp.js";import"./index-CzUGd6JN.js";import{F as d}from"./CommandsAndQueries-BeeR2K5X.js";import"./copy-CVTfErei.js";import{T as b}from"./TableOfContent-B2JNBj1D.js";import{C}from"./index-niGC0ps7.js";import{D}from"./BarChart.stories-DCTzHNgj.js";import{D as y}from"./BulletChart.stories-BpFDHTQN.js";import{D as g}from"./ColumnChart.stories-Bxgsnz2g.js";import{D as v}from"./ColumnChartWithTrend.stories-HiDYxtgN.js";import{D as x}from"./ComposedChart.stories-n8LZ7Y9k.js";import{D as j}from"./DonutChart.stories-BV7JYfDp.js";import{D as w}from"./LineChart.stories-DApJanv9.js";import{D as R}from"./PieChart.stories-DtK-gJN3.js";import{D as I}from"./RadarChart.stories-J_0syIEG.js";import{D as S}from"./RadialChart.stories-t4QjoLOX.js";import{D as T}from"./ScatterChart.stories-DBNloya0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B0KiP948.js";import"./sys-enter-2-CDGYtOhu.js";import"./alert-5Abv9bcB.js";import"./index-DcV3QYUz.js";import"./index-CqkyVNU6.js";import"./index-CRYo79rH.js";import"./Link-CIhe5KM_.js";import"./index-PDOaMfc0.js";import"./index-BPsR0vSK.js";import"./index-L49eAF_T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pWZ_QRmh.js";import"./addCustomCSSWithScoping-C2Y6K5ED.js";import"./index-D_8I6ySQ.js";import"./Carousel-DDSLnnt9.js";import"./ScrollEnablement-BA4gKr9W.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DgNeu1XE.js";import"./slim-arrow-left-B7rFYBCe.js";import"./DemoProps-CsBPrRUH.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-q1-NmRk8.js";import"./ChartContainer-B3IAeBJS.js";import"./index-Cuh8Cott.js";import"./useCancelAnimationFallback-KX4WVWCS.js";import"./YAxisTicks-BKfSDqri.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B5h9WfMp.js";import"./ChartDataLabel-A4-6fg6_.js";import"./useOnClickInternal-BTKQqbMU.js";import"./react-content-loader.es-DFaOKOL9.js";import"./useIsRTL-CE4g7ZKT.js";import"./useLongestYAxisLabel-7hgsH8--.js";import"./ComposedChart-DoZD7qcT.js";import"./Line-7knbx1Bi.js";import"./Scatter-Cdhk05an.js";import"./index-BNiFzg3w.js";import"./index-S1d5ry_Q.js";import"./Placeholder-6Lv918Q0.js";import"./index-C-Ng1nHA.js";const $=`# @ui5/webcomponents-react-charts

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
