import{r as i,j as t,T as l}from"./iframe-D5yYeuyx.js";import{useMDXComponents as p}from"./index-OOr887th.js";import{M as u,a as h,m as f}from"./blocks-BwZUgw5J.js";import"./Tag-BZtJl-N7.js";import"./index-DJODyOkI.js";import{F as d}from"./CommandsAndQueries-CJKRIq4o.js";import"./copy-BbBddowJ.js";import{T as b}from"./TableOfContent-CQ1XpZMC.js";import{C}from"./index-C2hgMn51.js";import{D}from"./BarChart.stories-D5INlgCo.js";import{D as y}from"./BulletChart.stories-CXjBcuVJ.js";import{D as g}from"./ColumnChart.stories-DHRSiyPx.js";import{D as v}from"./ColumnChartWithTrend.stories-DhVk3vV-.js";import{D as x}from"./ComposedChart.stories-BNSyN7k_.js";import{D as j}from"./DonutChart.stories-CL9U3FaK.js";import{D as w}from"./LineChart.stories-BFEe_6Bb.js";import{D as R}from"./PieChart.stories-CtKMJ2sx.js";import{D as I}from"./RadarChart.stories-B7MjuETZ.js";import{D as S}from"./RadialChart.stories-DCDHRE67.js";import{D as T}from"./ScatterChart.stories-BaB5aUI2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";import"./index-pGOyFusy.js";import"./Carousel-B3lmM8Km.js";import"./ScrollEnablement-9NyzND_c.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B4TNvx5y.js";import"./slim-arrow-left-BoVC2IXx.js";import"./DemoProps-DAcjXNdp.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-m_nw1-yq.js";import"./ChartContainer-BzWJxvRh.js";import"./index-6QK4Io4Q.js";import"./useCancelAnimationFallback-rY9V26Sa.js";import"./YAxisTicks-Dfu428I7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-tDp9aq4C.js";import"./ChartDataLabel-D3uo1JU0.js";import"./useOnClickInternal-N2M3ukbE.js";import"./react-content-loader.es-rCoMfEdo.js";import"./useIsRTL-D0KPyHmS.js";import"./useLongestYAxisLabel-CwcrZOe2.js";import"./ComposedChart-Cd8AxZDb.js";import"./Line-CvHna22e.js";import"./Scatter-BUFqu7Tp.js";import"./index-CbrheyJ5.js";import"./index-dfPIkCkY.js";import"./Placeholder-D17AYskK.js";import"./index-CeaFhK6b.js";const $=`# @ui5/webcomponents-react-charts

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
