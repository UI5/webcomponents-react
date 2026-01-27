import{r as i,j as t,O as l}from"./iframe-BCLHYJgX.js";import{useMDXComponents as p}from"./index-6uEU24p4.js";import{M as u,a as h,n as f}from"./blocks-Bs_XR2wS.js";import"./Tag-CyCEbX-5.js";import"./index-BaEPddIL.js";import{F as d}from"./CommandsAndQueries-CO5L47ah.js";import"./copy-C8KGHNvK.js";import{T as b}from"./TableOfContent-C5WsUPZq.js";import{C}from"./index-B7qNq_iM.js";import{D}from"./BarChart.stories-DglJ2s_p.js";import{D as y}from"./BulletChart.stories-BTfep1XW.js";import{D as g}from"./ColumnChart.stories-D3KIsb99.js";import{D as v}from"./ColumnChartWithTrend.stories-Bef9akX0.js";import{D as x}from"./ComposedChart.stories-D3mhlaCG.js";import{D as j}from"./DonutChart.stories-BYkK9NZ5.js";import{D as w}from"./LineChart.stories-BKXSkOUr.js";import{D as R}from"./PieChart.stories-19LKN2oE.js";import{D as I}from"./RadarChart.stories-3KDIO28L.js";import{D as S}from"./RadialChart.stories-QATXOY3J.js";import{D as $}from"./ScatterChart.stories-O0CqqY6A.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./index-ryNQsvjz.js";import"./Carousel-ysqCDcir.js";import"./ScrollEnablement-C_6ell_9.js";import"./animate-JylhYHXj.js";import"./AnimationMode-jprqlZay.js";import"./slim-arrow-left-DBybB8g5.js";import"./DemoProps-BOxmUUu4.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-MzMOnMrI.js";import"./ChartContainer-eR8U-tyQ.js";import"./index-P_S_jhxH.js";import"./useCancelAnimationFallback-BCSm9s1f.js";import"./YAxisTicks-FeVVtHpB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-5Zwyi4cd.js";import"./ChartDataLabel-DkY491hm.js";import"./useOnClickInternal-BZ67poiC.js";import"./react-content-loader.es-Dbx7dEL9.js";import"./useIsRTL-ByUnN_uG.js";import"./useLongestYAxisLabel-BCusTxgI.js";import"./ComposedChart-Zxkzkjq-.js";import"./Line-CWxBh8AY.js";import"./Scatter-CcoDh2Ko.js";import"./index-OxiLbkn8.js";import"./index-BRsrQXmy.js";import"./Placeholder-B6G7RkdZ.js";import"./index-C_6kHI37.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
