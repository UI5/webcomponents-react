import{q as i,j as t,Q as l}from"./iframe-DJaejRN_.js";import{useMDXComponents as p}from"./index-BkjBMRMv.js";import{M as u,a as h,n as f}from"./blocks-B8-Y-Ni6.js";import"./Tag-zqqHRvHY.js";import"./index-CK92YQRu.js";import"./CommandsAndQueries-83bvSdoV.js";import"./copy-tix8vrrW.js";import{T as d}from"./TableOfContent-CyZtivcR.js";import{F as b}from"./Footer-XAiTUg9G.js";import"./PageNotFound-DWPqXbgo.js";import{C}from"./index-Bwg1fjWu.js";import{D}from"./BarChart.stories-hQVzRs1R.js";import{D as y}from"./BulletChart.stories-DAiQ6SPz.js";import{D as g}from"./ColumnChart.stories-QY1RTmXm.js";import{D as v}from"./ColumnChartWithTrend.stories-DZ_p4vNW.js";import{D as x}from"./ComposedChart.stories-BWBBCRG1.js";import{D as j}from"./DonutChart.stories-Fo3ixLy2.js";import{D as w}from"./LineChart.stories-DQawNF9A.js";import{D as R}from"./PieChart.stories-1HGqV_mM.js";import{D as I}from"./RadarChart.stories-CVf4w1e1.js";import{D as S}from"./RadialChart.stories-C8v0d14o.js";import{D as $}from"./ScatterChart.stories-BV21BD77.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BX0fOOvt.js";import"./sys-enter-2-1CYV1NDA.js";import"./alert-BrdS4drn.js";import"./Link-DT5pBXPw.js";import"./index-I-NngIql.js";import"./index-Bal_B_tE.js";import"./index-BVWvlifs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HTE3RcD3.js";import"./addCustomCSSWithScoping-BTx9ebqV.js";import"./index-MWuEJcIb.js";import"./index-D5l-jmF5.js";import"./index-B75X8BI3.js";import"./index-DyG0juUn.js";import"./Illustrations-Ba3wQCeI.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-_nksUZx9.js";import"./ScrollEnablement-BJkBQfQ1.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CZPUpFja.js";import"./slim-arrow-left-YBFkKX4c.js";import"./DemoProps-BDNwYEk_.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BvrQHe-C.js";import"./ChartContainer-xRjSMWOC.js";import"./index-BNdX0xO5.js";import"./useCancelAnimationFallback-Ba2OgUTn.js";import"./YAxisTicks-CO3lFC6m.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DV48MAm0.js";import"./ChartDataLabel-CFBxNUws.js";import"./useOnClickInternal-fBP_2yim.js";import"./react-content-loader.es-RBzwq4EX.js";import"./useIsRTL-CiD1d4mj.js";import"./useLongestYAxisLabel-CVdfL6eO.js";import"./ComposedChart-zupNHHKQ.js";import"./Line-Ca1k3toC.js";import"./Scatter-Du7R_Wdh.js";import"./index-w2Xvse2u.js";import"./index-Cy75LNNO.js";import"./Placeholder-Cy-RF_aA.js";import"./index-BeQRvrcG.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
