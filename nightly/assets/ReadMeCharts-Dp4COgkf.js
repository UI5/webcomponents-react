import{r as i,j as t,T as l}from"./iframe-BY1BFtoq.js";import{useMDXComponents as p}from"./index-BJX8o_PY.js";import{M as u,a as h,m as f}from"./blocks-Bfc9ghDe.js";import"./Tag-DpT3Xyfk.js";import"./index-DoP9OXws.js";import{F as d}from"./CommandsAndQueries-LexJCY9y.js";import"./copy-BobpDbK0.js";import{T as b}from"./TableOfContent-CP77nt2G.js";import{C}from"./index-X-ijHw6K.js";import{D}from"./BarChart.stories-BdzA5hmt.js";import{D as y}from"./BulletChart.stories-CsUZtPUN.js";import{D as g}from"./ColumnChart.stories-pED_-wtI.js";import{D as v}from"./ColumnChartWithTrend.stories-CYFTAQVY.js";import{D as x}from"./ComposedChart.stories-D2DIeAG-.js";import{D as j}from"./DonutChart.stories-toTUJ-9S.js";import{D as w}from"./LineChart.stories-0dDVPimw.js";import{D as R}from"./PieChart.stories-BwWtRQsZ.js";import{D as I}from"./RadarChart.stories-BpyvnjNV.js";import{D as S}from"./RadialChart.stories-CCmhJEx5.js";import{D as T}from"./ScatterChart.stories-Ohg-Og3e.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B4R2spf7.js";import"./sys-enter-2-HrsNxE-9.js";import"./alert-Dq9SF84g.js";import"./index-Cb7WjzHE.js";import"./index-odRykF4_.js";import"./index-CRXctDPP.js";import"./Link-CaG5MpgS.js";import"./index-B41LOkRR.js";import"./index-DSc6dsYM.js";import"./index-Dk5-ak7N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKdRFMC3.js";import"./addCustomCSSWithScoping-BhZcrUID.js";import"./index-7DiuorJD.js";import"./Carousel-BLjHFuOb.js";import"./ScrollEnablement-B_wAj3Qd.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CXD81FfC.js";import"./slim-arrow-left-CriUvvHj.js";import"./DemoProps-BZ6whqg3.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CIG5_zJj.js";import"./ChartContainer-BbbSZWlZ.js";import"./index-BS9ow689.js";import"./useCancelAnimationFallback-CFz57LPP.js";import"./YAxisTicks-6dz8My15.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BX_s_cvf.js";import"./ChartDataLabel-C6174daw.js";import"./useOnClickInternal-Bpq9q60h.js";import"./react-content-loader.es-B5ZX6feW.js";import"./useIsRTL-DsxCqakm.js";import"./useLongestYAxisLabel-CofR52I2.js";import"./ComposedChart-Cy0tkSH4.js";import"./Line-8NDaS4Bh.js";import"./Scatter-CS-uNNNW.js";import"./index-CjGtVUWu.js";import"./index-B4cqP8vZ.js";import"./Placeholder-hWVD7XvM.js";import"./index-D4ZqrvKd.js";const $=`# @ui5/webcomponents-react-charts

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
