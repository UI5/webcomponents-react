import{r as i,j as t,O as l}from"./iframe-gbBUxptC.js";import{useMDXComponents as p}from"./index-BaGM4qgt.js";import{M as u,a as h,n as f}from"./blocks-BtAmmb_9.js";import"./Tag-DXmb03WA.js";import"./index-a6vq6nFR.js";import{F as d}from"./CommandsAndQueries-BmjJVETk.js";import"./copy-CmUJgJe8.js";import{T as b}from"./TableOfContent-CTFQyASA.js";import{C}from"./index-DZHiYL4u.js";import{D}from"./BarChart.stories-DcLKhn1r.js";import{D as y}from"./BulletChart.stories-cO8x0V7F.js";import{D as g}from"./ColumnChart.stories-DlThKGdY.js";import{D as v}from"./ColumnChartWithTrend.stories-BCJCPJ03.js";import{D as x}from"./ComposedChart.stories-sgmypUMa.js";import{D as j}from"./DonutChart.stories-CAzafEAT.js";import{D as w}from"./LineChart.stories-BuCfeykH.js";import{D as R}from"./PieChart.stories-BHbauiMc.js";import{D as I}from"./RadarChart.stories-oe08AIm-.js";import{D as S}from"./RadialChart.stories-gemDTlUJ.js";import{D as $}from"./ScatterChart.stories-B131HLCe.js";import"./preload-helper-PPVm8Dsz.js";import"./information-RQmI2RmD.js";import"./sys-enter-2-BfzFGSW6.js";import"./alert-BAR71iQk.js";import"./index-CAL1VzDv.js";import"./index-C5e2Rf9k.js";import"./index-FjtRLsYm.js";import"./Link-BqgTlNng.js";import"./index-ClLX1AfH.js";import"./index-n6dTxbQI.js";import"./index-CHg7n_fg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cfhz7n7-.js";import"./addCustomCSSWithScoping-BVowAJ0u.js";import"./index-DTWmKJf_.js";import"./Carousel-DHK57tKF.js";import"./ScrollEnablement-Bwz9Nt66.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Chm4t45x.js";import"./slim-arrow-left-BdY0Hc7b.js";import"./DemoProps-BdaMqRZq.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DSQM8iHs.js";import"./ChartContainer-p4OtLlfs.js";import"./index-CT_MWQmw.js";import"./useCancelAnimationFallback-B4IIKt4W.js";import"./YAxisTicks-B4eQiZfy.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BSMA1AAV.js";import"./ChartDataLabel-hZWuDv63.js";import"./useOnClickInternal-CqjUVsVW.js";import"./react-content-loader.es-Ctqkg3pd.js";import"./useIsRTL-D6wyqJl0.js";import"./useLongestYAxisLabel-B_SbyeIw.js";import"./ComposedChart-CFxAsirQ.js";import"./Line-Cd2rEPWe.js";import"./Scatter-CJGZVx2o.js";import"./index-DdYyt76o.js";import"./index-_k5Fy6VL.js";import"./Placeholder-DjrxaVqf.js";import"./index-BFap9Kgo.js";const E=`# @ui5/webcomponents-react-charts

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
