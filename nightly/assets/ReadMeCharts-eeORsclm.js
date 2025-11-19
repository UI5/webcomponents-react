import{r as i,j as t,T as l}from"./iframe-DDMtxVo3.js";import{useMDXComponents as p}from"./index-DJVQNbCr.js";import{M as u,a as h,m as f}from"./blocks-CloLtOA5.js";import"./Tag-YMrSkp2O.js";import"./index-DsF6G_NH.js";import{F as d}from"./CommandsAndQueries-GL7iyaCL.js";import"./copy-BTGdlJRd.js";import{T as b}from"./TableOfContent-C7oul5sD.js";import{C}from"./index-8f2Yuj0I.js";import{D}from"./BarChart.stories-C1h1R_8B.js";import{D as y}from"./BulletChart.stories-CArxSpYq.js";import{D as g}from"./ColumnChart.stories-DfDfnJSp.js";import{D as v}from"./ColumnChartWithTrend.stories-DdNalnWF.js";import{D as x}from"./ComposedChart.stories-U2fx3863.js";import{D as j}from"./DonutChart.stories-C5S7bU3X.js";import{D as w}from"./LineChart.stories-BJavA3eU.js";import{D as R}from"./PieChart.stories-CfsBr2ek.js";import{D as I}from"./RadarChart.stories-BfRlHsju.js";import{D as S}from"./RadialChart.stories-BcJHZhwb.js";import{D as T}from"./ScatterChart.stories-BHFvuaeo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CyNj2j11.js";import"./sys-enter-2-Go-dkBfP.js";import"./alert-jQ4OjDPb.js";import"./index-rp8XBFdR.js";import"./index-BHqqB-9b.js";import"./index-ayjT0mLt.js";import"./Link-D3MGth0a.js";import"./index-BbSpKNs2.js";import"./index-DIh6sAKH.js";import"./index-BeupWmR_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IIlbXN7B.js";import"./addCustomCSSWithScoping-CwVVs2bm.js";import"./index-DtIsK-ZK.js";import"./Carousel-LX2NBuc9.js";import"./ScrollEnablement-CHq8jwQp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-TdBQNL2B.js";import"./slim-arrow-left-DvBKUesF.js";import"./DemoProps-BEe4tgbg.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BQbopjg7.js";import"./ChartContainer-D9NUaSWf.js";import"./index-DkqGVu91.js";import"./useCancelAnimationFallback-Cn2LI5QU.js";import"./YAxisTicks-x6qkZ0h9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-qS6LVQaB.js";import"./ChartDataLabel--SOfYlSO.js";import"./useOnClickInternal-BubGOqxM.js";import"./react-content-loader.es-CjluIe3d.js";import"./useIsRTL-DfGZzaea.js";import"./useLongestYAxisLabel-BN0U0JLQ.js";import"./ComposedChart-F9jq_lJ_.js";import"./Line-DgG8Synx.js";import"./Scatter-CnrbN03g.js";import"./index-BUzHLuvf.js";import"./index-BS60qZ_r.js";import"./Placeholder-DDGcXa7h.js";import"./index-q4lM6_uM.js";const $=`# @ui5/webcomponents-react-charts

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
