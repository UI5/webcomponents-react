import{r as i,j as t,T as l}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as p}from"./index-B20WHrxF.js";import{M as u,a as h,m as f}from"./blocks-BHc609zj.js";import"./Tag-BlFr4TrL.js";import"./index-4o5lIxTZ.js";import{F as d}from"./CommandsAndQueries-B8G4x6Z0.js";import"./copy-CTtd4S6z.js";import{T as b}from"./TableOfContent-BrPxZHd0.js";import{C}from"./index-D2fNj_Zs.js";import{D}from"./BarChart.stories-BnZ_ugXq.js";import{D as y}from"./BulletChart.stories-CkrYwzGs.js";import{D as g}from"./ColumnChart.stories-lCQwldZV.js";import{D as v}from"./ColumnChartWithTrend.stories-BtvxI-ob.js";import{D as x}from"./ComposedChart.stories-BcD3s5QC.js";import{D as j}from"./DonutChart.stories-DyVanRih.js";import{D as w}from"./LineChart.stories-4k0ZbxS3.js";import{D as R}from"./PieChart.stories-C_tOSNTs.js";import{D as I}from"./RadarChart.stories-_QTCRRwg.js";import{D as S}from"./RadialChart.stories-CWy07q6U.js";import{D as T}from"./ScatterChart.stories-8sVK0sY_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./index-BTxuEF3n.js";import"./Carousel-BUGinQCG.js";import"./ScrollEnablement-CiA5ZjlZ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Pyt7j9al.js";import"./slim-arrow-left-Vfmtv-BG.js";import"./DemoProps-DyrKWB1H.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CMBoLcd9.js";import"./ChartContainer-zLLTGogP.js";import"./index-BBLdtj_k.js";import"./useCancelAnimationFallback-BB8xES4R.js";import"./YAxisTicks-C5GoAIZD.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C4c66h3P.js";import"./ChartDataLabel-DbFZxuV_.js";import"./useOnClickInternal-D7_mWWyn.js";import"./react-content-loader.es-BPToLHR_.js";import"./useIsRTL-CtE2suF5.js";import"./useLongestYAxisLabel-Ba2BEzGP.js";import"./ComposedChart-CFsnrEtF.js";import"./Line-CbFna1tb.js";import"./Scatter-4jQEoFa8.js";import"./index-Cbx5eOP2.js";import"./index-CueLl0vB.js";import"./Placeholder-gJ9cQnPf.js";import"./index-BsxWvhZz.js";const $=`# @ui5/webcomponents-react-charts

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
