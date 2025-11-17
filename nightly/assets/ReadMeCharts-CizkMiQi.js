import{r as i,j as t,T as l}from"./iframe-dY_MtB0H.js";import{useMDXComponents as p}from"./index-lTaYTAxK.js";import{M as u,a as h,m as f}from"./blocks-Cb83AQYu.js";import"./Tag-CxsGqX-Z.js";import"./index-Bn3aq9YQ.js";import{F as d}from"./CommandsAndQueries-BmTyHFa7.js";import"./copy-D63JhW9h.js";import{T as b}from"./TableOfContent-cH5UKuOL.js";import{C}from"./index-Bbth1s8s.js";import{D}from"./BarChart.stories-BSJ8ulpL.js";import{D as y}from"./BulletChart.stories-VrCN3uiP.js";import{D as g}from"./ColumnChart.stories-Bire9Oj0.js";import{D as v}from"./ColumnChartWithTrend.stories-C3LOdzSb.js";import{D as x}from"./ComposedChart.stories-28TFMImq.js";import{D as j}from"./DonutChart.stories-B2EqXAFw.js";import{D as w}from"./LineChart.stories-DAbjZzDZ.js";import{D as R}from"./PieChart.stories-MA48H3Pj.js";import{D as I}from"./RadarChart.stories-Doc6Aubm.js";import{D as S}from"./RadialChart.stories-PZUNfLUp.js";import{D as T}from"./ScatterChart.stories-CKafyYbv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D5v06NEv.js";import"./sys-enter-2-Db0ak0Nd.js";import"./alert-BFAYnF-v.js";import"./index-D3rLokAO.js";import"./index-SPIujRFM.js";import"./index-CvfG5erE.js";import"./Link-CVqB5eeU.js";import"./index-B-7UltV5.js";import"./index-DLNzTjP4.js";import"./index-Bzi9OmH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xawsFKB1.js";import"./addCustomCSSWithScoping-Dwp_g_5J.js";import"./index-C_5JPwqD.js";import"./Carousel-bX-JogYf.js";import"./ScrollEnablement-D1kjFpjc.js";import"./animate-JylhYHXj.js";import"./AnimationMode-MDon-kQp.js";import"./slim-arrow-left-Djk8CBCR.js";import"./DemoProps-CVBMA6oT.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CCS6SByh.js";import"./ChartContainer-Cq2DMCT7.js";import"./index-CfFSy1iK.js";import"./useCancelAnimationFallback-Djd7h4kz.js";import"./YAxisTicks-ClX1cr-x.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dr3NqEZB.js";import"./ChartDataLabel-Do2YvQaQ.js";import"./useOnClickInternal-Bryo71Gs.js";import"./react-content-loader.es-D_FlwLGN.js";import"./useIsRTL-D5nyE8Ez.js";import"./useLongestYAxisLabel-Dg883DHR.js";import"./ComposedChart-C3lXU3f8.js";import"./Line-BCFlnmJz.js";import"./Scatter-nogoVdj4.js";import"./index-DAJzxhSO.js";import"./index-BopNyZk8.js";import"./Placeholder-QbYZxoat.js";import"./index-CYuomIif.js";const $=`# @ui5/webcomponents-react-charts

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
