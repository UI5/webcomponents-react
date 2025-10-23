import{r as i,j as t,T as l}from"./iframe-Caxtdkba.js";import{useMDXComponents as p}from"./index-DHHkTN_-.js";import{M as u,a as h,k as f}from"./blocks-DEPL7JMW.js";import"./Tag-Dd11nsEW.js";import"./index-DhW1lu1C.js";import{F as d}from"./CommandsAndQueries-BOspo6oR.js";import"./copy-Cm-UF3e8.js";import{T as b}from"./TableOfContent-COyFmIK8.js";import{C}from"./index-DI9BSDut.js";import{D}from"./BarChart.stories-DA9G36Pu.js";import{D as y}from"./BulletChart.stories-BRadkTlL.js";import{D as g}from"./ColumnChart.stories-CbUyUPcI.js";import{D as v}from"./ColumnChartWithTrend.stories-Dnmzz1ot.js";import{D as x}from"./ComposedChart.stories-BEM0a2fa.js";import{D as j}from"./DonutChart.stories-BniBWDZG.js";import{D as w}from"./LineChart.stories-CUTPkkJt.js";import{D as R}from"./PieChart.stories-Ce3RmVUu.js";import{D as I}from"./RadarChart.stories-DkB1uoRL.js";import{D as S}from"./RadialChart.stories-CItFrWQG.js";import{D as T}from"./ScatterChart.stories-CjMODtWB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DxEPh37b.js";import"./sys-enter-2-DZWaIs6H.js";import"./alert-CkjRTT5V.js";import"./index-CKnt97hC.js";import"./index-BxIjhTnW.js";import"./index-Cqh1dpEf.js";import"./Link-Chm6Epcv.js";import"./index-tXGb4skN.js";import"./index-IuLzHbpC.js";import"./index-BgaBDTu4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-n5f_MbqF.js";import"./addCustomCSSWithScoping-kZmGLgIL.js";import"./index-BqfFpMrh.js";import"./Carousel-C5kkxF8v.js";import"./ScrollEnablement-C_o7x22r.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CK0mp43B.js";import"./slim-arrow-left-c3Zwq_qK.js";import"./DemoProps-BlYeY_6N.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BNlZz-B8.js";import"./ChartContainer-C1Nmp07M.js";import"./index-DulQB3X1.js";import"./useCancelAnimationFallback-y3xF3JkZ.js";import"./YAxisTicks-CGCqVAmc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CHjj0cKX.js";import"./ChartDataLabel-Cy5tKeDZ.js";import"./useOnClickInternal-cv7Cp3To.js";import"./react-content-loader.es-ksDS_8wW.js";import"./useIsRTL-BZ4Bq_Ho.js";import"./useLongestYAxisLabel-Il96Z-cY.js";import"./ComposedChart-CMkxC-8L.js";import"./Line--nKdaC6S.js";import"./Scatter-BAheMsqA.js";import"./index-C3sRMNo0.js";import"./index-D019QSot.js";import"./Placeholder-BWvrBtN4.js";import"./index-D587U6mC.js";const $=`# @ui5/webcomponents-react-charts

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
