import{r as i,j as t,O as l}from"./iframe-CtC7gYmF.js";import{useMDXComponents as p}from"./index-Di_URU-1.js";import{M as u,a as h,n as f}from"./blocks-mn43RK2l.js";import"./Tag-DL1jc8MZ.js";import"./index-BQgIK84O.js";import{F as d}from"./CommandsAndQueries-DJ8rBoed.js";import"./copy-qYhvVcV8.js";import{T as b}from"./TableOfContent-FJaxAP6D.js";import{C}from"./index-1kIp1dSD.js";import{D}from"./BarChart.stories-D2ttNMdB.js";import{D as y}from"./BulletChart.stories-B4wQYJGY.js";import{D as g}from"./ColumnChart.stories-D1VK-0-q.js";import{D as v}from"./ColumnChartWithTrend.stories-CacXmZ8X.js";import{D as x}from"./ComposedChart.stories-B-ptZ15X.js";import{D as j}from"./DonutChart.stories-CalKiPFm.js";import{D as w}from"./LineChart.stories-h1QKGNKW.js";import{D as R}from"./PieChart.stories-D6XH5vkm.js";import{D as I}from"./RadarChart.stories-DUcbLbcR.js";import{D as S}from"./RadialChart.stories-bGSfwP35.js";import{D as $}from"./ScatterChart.stories-Dm_TdMyE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";import"./index-B89psySH.js";import"./Carousel-C9Of1rVA.js";import"./ScrollEnablement-2beWlGZ4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DG6pmiZR.js";import"./slim-arrow-left-BPYZvRbs.js";import"./DemoProps-bgmbOMp6.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Mk3hFg7y.js";import"./ChartContainer-DVN6eACa.js";import"./index-kkBKNTX1.js";import"./useCancelAnimationFallback-BGt5Pe1o.js";import"./YAxisTicks-DOIqVAUZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-l-ygwfmg.js";import"./ChartDataLabel-Bq5z-zfr.js";import"./useOnClickInternal-i5OAiqMh.js";import"./react-content-loader.es-CnfM84cI.js";import"./useIsRTL-oSnS9KDP.js";import"./useLongestYAxisLabel-DyXzhDKe.js";import"./ComposedChart-BkHVZfZ9.js";import"./Line-MIPP35QQ.js";import"./Scatter-P90U4pYO.js";import"./index-D8MXhOP_.js";import"./index-BFyj0Qlb.js";import"./Placeholder-CokpBrrN.js";import"./index-Ywh5Au0g.js";const E=`# @ui5/webcomponents-react-charts

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
