import{r as i,j as t,T as l}from"./iframe-C2wpKNYo.js";import{useMDXComponents as p}from"./index-C3bwhSaM.js";import{M as u,a as h,k as f}from"./blocks-CsqgEIu9.js";import"./Tag-BJVPlcpU.js";import"./index-6FDQ4ka_.js";import{F as d}from"./CommandsAndQueries-BUx2QFuH.js";import"./copy-Mn7zeVlB.js";import{T as b}from"./TableOfContent-DAwDlNWz.js";import{C}from"./index-Jrql-yXD.js";import{D}from"./BarChart.stories-B-UJPM_b.js";import{D as y}from"./BulletChart.stories-DKFxAUJT.js";import{D as g}from"./ColumnChart.stories-oYz7cLUX.js";import{D as v}from"./ColumnChartWithTrend.stories-Dad97Egp.js";import{D as x}from"./ComposedChart.stories-DIcDds4s.js";import{D as j}from"./DonutChart.stories-srWfBe9n.js";import{D as w}from"./LineChart.stories-CTJx43XS.js";import{D as R}from"./PieChart.stories-mQqWv0yI.js";import{D as I}from"./RadarChart.stories-eCFd1i4l.js";import{D as S}from"./RadialChart.stories-Ch3FVWIX.js";import{D as T}from"./ScatterChart.stories-Dbij24y7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BdwahN0R.js";import"./sys-enter-2-DhtxU3CZ.js";import"./alert-DqDZXgnZ.js";import"./index-BPkycJ7d.js";import"./index-CTKi5gtL.js";import"./index-DK30OokX.js";import"./Link-BDqeBkDX.js";import"./index-Dsgid9kS.js";import"./index-uvW3ZjCI.js";import"./index-Cg_u4Ogr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN7qutFD.js";import"./addCustomCSSWithScoping-BIscafeh.js";import"./index-Cg3QTQNO.js";import"./Carousel-BQJje3k_.js";import"./ScrollEnablement-C0IR7RhZ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-5RaG3Cn6.js";import"./slim-arrow-left-CCca4i8u.js";import"./DemoProps-i4nJYT4i.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ChIpJOx8.js";import"./ChartContainer-CLob6iJc.js";import"./index-BUSyf8XI.js";import"./useCancelAnimationFallback-CuTuquHF.js";import"./YAxisTicks-CjGlmTbN.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CwRNhqFf.js";import"./ChartDataLabel-B32a6Si2.js";import"./useOnClickInternal-dOz193c3.js";import"./react-content-loader.es-CaMyQ4Zj.js";import"./useIsRTL-awnJ-YFR.js";import"./useLongestYAxisLabel-DwAjwkaC.js";import"./ComposedChart-CsbrQghA.js";import"./Line-Dm9y2KdA.js";import"./Scatter-CSSf1DC_.js";import"./index-DMULmae-.js";import"./index-IZIN7xNN.js";import"./Placeholder-BPJZ8ZQn.js";import"./index-ClOZdrUs.js";const $=`# @ui5/webcomponents-react-charts

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
