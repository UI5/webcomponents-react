import{r as i,j as t,O as l}from"./iframe-CqFnJp-S.js";import{useMDXComponents as p}from"./index-CynYu3xa.js";import{M as u,a as h,n as f}from"./blocks-AhMBMxUR.js";import"./Tag-Cwi_n_M2.js";import"./index-DezDvmls.js";import{F as d}from"./CommandsAndQueries-D_WKy8dN.js";import"./copy-B3ylxRux.js";import{T as b}from"./TableOfContent-CMB21LG_.js";import{C}from"./index-BAr-EU1K.js";import{D}from"./BarChart.stories-DXG-yfpi.js";import{D as y}from"./BulletChart.stories-BiXyegwK.js";import{D as g}from"./ColumnChart.stories-BiHKtOz6.js";import{D as v}from"./ColumnChartWithTrend.stories-Bo8RyC32.js";import{D as x}from"./ComposedChart.stories-CdflkDy8.js";import{D as j}from"./DonutChart.stories-DCSz_R0k.js";import{D as w}from"./LineChart.stories-DCHwnXRg.js";import{D as R}from"./PieChart.stories-WX0i-jNJ.js";import{D as I}from"./RadarChart.stories-BZArAbgP.js";import{D as S}from"./RadialChart.stories-C3JnuP6y.js";import{D as $}from"./ScatterChart.stories-B4nnKErH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-60cadcf1.js";import"./sys-enter-2-seBR9LV9.js";import"./alert-vPdDlciv.js";import"./index-BARlfa70.js";import"./index-lhl517Nj.js";import"./index-CR3t_8EC.js";import"./Link-18Y5h9Ta.js";import"./index-B8Ys29Cw.js";import"./index-CaJgjkX1.js";import"./index-B_RIKuGc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6mfgC9Q.js";import"./addCustomCSSWithScoping-Dl0yXOSQ.js";import"./index-CA0UVsfH.js";import"./Carousel-C0J6zUDW.js";import"./ScrollEnablement-BUHldyEa.js";import"./animate-JylhYHXj.js";import"./AnimationMode-gsNofXIo.js";import"./slim-arrow-left-CuHYWEIA.js";import"./DemoProps-QBbbHPEF.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BGaycylp.js";import"./ChartContainer-DDN4iKFY.js";import"./index-Bau1_Q7b.js";import"./useCancelAnimationFallback-CMUeeq1F.js";import"./YAxisTicks-Ch7Zl_fU.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BtPJi-cr.js";import"./ChartDataLabel-CdUis7Xi.js";import"./useOnClickInternal-f9Zif7sc.js";import"./react-content-loader.es-CQUHB54t.js";import"./useIsRTL-ChZZThs6.js";import"./useLongestYAxisLabel-7nq4aHKN.js";import"./ComposedChart-Bv13ZQnD.js";import"./Line-BQHqmGHw.js";import"./Scatter-DaALiZqb.js";import"./index-CakkbJd8.js";import"./index-BmR6g3sJ.js";import"./Placeholder-DalQMwiq.js";import"./index-Bk4UPln2.js";const E=`# @ui5/webcomponents-react-charts

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
