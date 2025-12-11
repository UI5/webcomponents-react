import{r as i,j as t,T as l}from"./iframe-DM9V3iUD.js";import{useMDXComponents as p}from"./index-BQ6e0XMP.js";import{M as u,a as h,m as f}from"./blocks-DPjpReUC.js";import"./Tag-CDZyEpMs.js";import"./index-BrIfMidb.js";import{F as d}from"./CommandsAndQueries-DLgIXMfv.js";import"./copy-QNTFDBhh.js";import{T as b}from"./TableOfContent-BCMbnTpd.js";import{C}from"./index-CkuGUb4Y.js";import{D}from"./BarChart.stories-DxK3fdC9.js";import{D as y}from"./BulletChart.stories-D-r_mKvv.js";import{D as g}from"./ColumnChart.stories-B7yt8fd-.js";import{D as v}from"./ColumnChartWithTrend.stories-CJgiMtNM.js";import{D as x}from"./ComposedChart.stories-BAD1MzWV.js";import{D as j}from"./DonutChart.stories-CiAvZeF1.js";import{D as w}from"./LineChart.stories-Dr1_uerK.js";import{D as R}from"./PieChart.stories-BR42VelN.js";import{D as I}from"./RadarChart.stories-CTsvRg3a.js";import{D as S}from"./RadialChart.stories-Bdfx1D5I.js";import{D as T}from"./ScatterChart.stories-CtyQtVv7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CYZk7_Tc.js";import"./sys-enter-2-CIB1w1Kt.js";import"./alert-bTHWJErv.js";import"./index-C_fRRkTw.js";import"./index-CG9Hqh1R.js";import"./index-3ho0Fy_x.js";import"./Link-CqfS--3L.js";import"./index-D-UVDN6M.js";import"./index-DQbG0AXp.js";import"./index-Crs5q-DX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CWqaDePq.js";import"./addCustomCSSWithScoping-UQbkgHWD.js";import"./index-HLIjrNCW.js";import"./Carousel-bnWdD7QJ.js";import"./ScrollEnablement-CIbJNOf2.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BEOhSkaM.js";import"./slim-arrow-left-1H9vPHNN.js";import"./DemoProps-BiX0F2g4.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DJ8Ao3n-.js";import"./ChartContainer-CAlEjyyQ.js";import"./index-D-Nv2l8Z.js";import"./useCancelAnimationFallback-C_e_T4eV.js";import"./YAxisTicks-CRlwChuq.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BjKuzLeY.js";import"./ChartDataLabel-CSpCaVSr.js";import"./useOnClickInternal-UexHgsGE.js";import"./react-content-loader.es-DLDKAG8B.js";import"./useIsRTL-CElufDLj.js";import"./useLongestYAxisLabel-V0yPM4pf.js";import"./ComposedChart-D74djsGy.js";import"./Line-DWhqEqtp.js";import"./Scatter-BB73iZU9.js";import"./index-US5cABbS.js";import"./index-DivfCBTK.js";import"./Placeholder-BNefXliu.js";import"./index-DrZxW3or.js";const $=`# @ui5/webcomponents-react-charts

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
