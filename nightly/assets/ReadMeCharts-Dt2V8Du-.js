import{r as i,j as t,T as l}from"./iframe-CDMw3QW7.js";import{useMDXComponents as p}from"./index-B1OHiQPx.js";import{M as u,a as h,m as f}from"./blocks-CUd96uRM.js";import"./Tag-CRCkHgPM.js";import"./index-BFHtg5w_.js";import{F as d}from"./CommandsAndQueries-DKYp_Jx5.js";import"./copy-4Dlt6M0w.js";import{T as b}from"./TableOfContent-BIYALOwi.js";import{C}from"./index-Dt6W1TtA.js";import{D}from"./BarChart.stories-BJTC-bFj.js";import{D as y}from"./BulletChart.stories-DGyZIXwx.js";import{D as g}from"./ColumnChart.stories-BfCYUgZx.js";import{D as v}from"./ColumnChartWithTrend.stories-DpfQm6Hg.js";import{D as x}from"./ComposedChart.stories-DvDcbyM5.js";import{D as j}from"./DonutChart.stories-CeGlpAxn.js";import{D as w}from"./LineChart.stories-Dbf400Tq.js";import{D as R}from"./PieChart.stories-pj7p_xS2.js";import{D as I}from"./RadarChart.stories-A88sg3AU.js";import{D as S}from"./RadialChart.stories-UlAdr3ZV.js";import{D as T}from"./ScatterChart.stories-oBC6FTQj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DcnFOD7I.js";import"./sys-enter-2-Bq9738ZR.js";import"./alert-DgZ_z3Yp.js";import"./index-CjzhAhn4.js";import"./index-QTO9fIyh.js";import"./index-y4pjeQFW.js";import"./Link-fH9wonJ-.js";import"./index-CFg6tGep.js";import"./index-zPaFBXP5.js";import"./index-NVXyFLUS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzgD7Za_.js";import"./addCustomCSSWithScoping-DWGH2XNZ.js";import"./index-CEKogKIQ.js";import"./Carousel-B2BaBxST.js";import"./ScrollEnablement-CTahNy0C.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D6Uc6wJg.js";import"./slim-arrow-left-C9IghQI0.js";import"./DemoProps-BuKf1njl.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DFvxrH85.js";import"./ChartContainer-ZouZiUQ6.js";import"./index-DU7qbp-g.js";import"./useCancelAnimationFallback-Bm_gZixv.js";import"./YAxisTicks-CGI46dh-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B3j8pCml.js";import"./ChartDataLabel-CJTl-7Ld.js";import"./useOnClickInternal-wFSSvYip.js";import"./react-content-loader.es-DBhR2oeE.js";import"./useIsRTL-Dg3vz_6v.js";import"./useLongestYAxisLabel-YgS4JBhA.js";import"./ComposedChart-CF2HEC2B.js";import"./Line-BHFSdQ7Q.js";import"./Scatter-BJcmV9fu.js";import"./index-8U7FdYSw.js";import"./index-DCyLaqID.js";import"./Placeholder-BZeeJ0b6.js";import"./index-lNmqsIFf.js";const $=`# @ui5/webcomponents-react-charts

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
