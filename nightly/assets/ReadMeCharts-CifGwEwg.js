import{r as i,j as t,T as l}from"./iframe-D1Ed_P25.js";import{useMDXComponents as p}from"./index-BFLewEmr.js";import{M as u,a as h,k as f}from"./blocks-D0qmmV7H.js";import"./Tag-c5FmtIVB.js";import"./index-CUd6ir2B.js";import{F as d}from"./CommandsAndQueries-DkK8PXt_.js";import"./copy-D1Lui3xc.js";import{T as b}from"./TableOfContent-uQiaXp0O.js";import{C}from"./index-DesAzbgr.js";import{D}from"./BarChart.stories-BP0a5uD8.js";import{D as y}from"./BulletChart.stories-DzYzD6ol.js";import{D as g}from"./ColumnChart.stories-JM_2917x.js";import{D as v}from"./ColumnChartWithTrend.stories-CqbYomTE.js";import{D as x}from"./ComposedChart.stories-or7m61g9.js";import{D as j}from"./DonutChart.stories-B4HFmMqL.js";import{D as w}from"./LineChart.stories-D4ppMwMy.js";import{D as R}from"./PieChart.stories-BF7SGHd3.js";import{D as I}from"./RadarChart.stories-Cqoux2LK.js";import{D as S}from"./RadialChart.stories-CY-BzNbn.js";import{D as T}from"./ScatterChart.stories-BB5KmaWI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CLHcsZFK.js";import"./sys-enter-2-uCDsFGT8.js";import"./alert-DcriM5I3.js";import"./index-DyMezxCx.js";import"./index-BiMr4Loi.js";import"./index-BiKUdEyp.js";import"./Link-Bd6EkD5P.js";import"./index-F4shrftk.js";import"./index-RNnJdIaH.js";import"./index-ClmEJuF6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJfOjK1K.js";import"./addCustomCSSWithScoping-DIxW6xjd.js";import"./index-RMrg5o5S.js";import"./Carousel-CfLVGeFK.js";import"./ScrollEnablement-DPfv31gz.js";import"./animate-JylhYHXj.js";import"./AnimationMode-xlHDtcWl.js";import"./slim-arrow-left-xU1UPH-E.js";import"./DemoProps-DcP-xHuh.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BySwctZA.js";import"./ChartContainer-By1ePAbW.js";import"./index-Df7H6xNj.js";import"./useCancelAnimationFallback-DezA8zUx.js";import"./YAxisTicks-CkVcZGjG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-99KmhDUL.js";import"./ChartDataLabel-CyG-Yh4d.js";import"./useOnClickInternal-BmlMU34h.js";import"./react-content-loader.es-Du3XHc1Q.js";import"./useIsRTL-DSdrd2Bt.js";import"./useLongestYAxisLabel-DjIKMCvr.js";import"./ComposedChart-D8GyO_-v.js";import"./Line-Dk1ExahA.js";import"./Scatter-DFH3MZc8.js";import"./index-D1iE4X7r.js";import"./index-Da1mM17v.js";import"./Placeholder-B_DmqkSu.js";import"./index-Bttb1Q6d.js";const $=`# @ui5/webcomponents-react-charts

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
