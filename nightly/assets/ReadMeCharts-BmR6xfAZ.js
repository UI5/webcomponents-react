import{r as i,j as t,O as l}from"./iframe-Btp5V8Z0.js";import{useMDXComponents as p}from"./index-BiuvjkCM.js";import{M as u,a as h,n as f}from"./blocks-3iq6MjE7.js";import"./Tag-BV9BFAPZ.js";import"./index-CP5vX4Iw.js";import{F as d}from"./CommandsAndQueries-ytOuH94-.js";import"./copy-BjvlOXfT.js";import{T as b}from"./TableOfContent-Q8v-GGeS.js";import{C}from"./index-DSNxC84j.js";import{D}from"./BarChart.stories-CIkZlJsg.js";import{D as y}from"./BulletChart.stories-Dtd_KjKL.js";import{D as g}from"./ColumnChart.stories-CkWYgq5y.js";import{D as v}from"./ColumnChartWithTrend.stories-CXewyEyG.js";import{D as x}from"./ComposedChart.stories-Ckb4oVwo.js";import{D as j}from"./DonutChart.stories-BoGemQHQ.js";import{D as w}from"./LineChart.stories-Cyn7TVTL.js";import{D as R}from"./PieChart.stories-I6k79wYf.js";import{D as I}from"./RadarChart.stories-Dmd9Gtsa.js";import{D as S}from"./RadialChart.stories-DR9yGR3Y.js";import{D as $}from"./ScatterChart.stories-p1Db7Bhf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D6meyH0P.js";import"./sys-enter-2-DFu1S1AE.js";import"./alert-Ble7Zr5g.js";import"./index-MTTfL1A6.js";import"./index-DfXM2ykx.js";import"./index-dzmgvIYj.js";import"./Link-DrqLISlX.js";import"./index-jYjWydQt.js";import"./index-4wRER8Ea.js";import"./index-cFxIHlDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOasFR1W.js";import"./addCustomCSSWithScoping-BYe08cUl.js";import"./index-Byqgf8K2.js";import"./Carousel-DQxe68ZU.js";import"./ScrollEnablement-B1RfGkn3.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DPURqsi1.js";import"./slim-arrow-left-CpYf_Nvy.js";import"./DemoProps-JkmJEkoJ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DAIsEV-f.js";import"./ChartContainer-DNPj-YwV.js";import"./index-B5ZwNjp_.js";import"./useCancelAnimationFallback-CFd6c1W4.js";import"./YAxisTicks-DhLOoIU0.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DhWv_YGe.js";import"./ChartDataLabel-DRiANJgk.js";import"./useOnClickInternal-D9ijcsWA.js";import"./react-content-loader.es-BZ7J1yId.js";import"./useIsRTL-H0EZaAzq.js";import"./useLongestYAxisLabel-DMxelbI0.js";import"./ComposedChart-CUaURUy9.js";import"./Line-D71v2m_M.js";import"./Scatter-Dpiwr7oC.js";import"./index-DKaGnmLa.js";import"./index-CxqQvMjK.js";import"./Placeholder-DaRhZ7_u.js";import"./index-D1NgdrhH.js";const E=`# @ui5/webcomponents-react-charts

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
