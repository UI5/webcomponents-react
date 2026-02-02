import{r as i,j as t,O as l}from"./iframe-DxaU3ukP.js";import{useMDXComponents as p}from"./index-Bu64E7xz.js";import{M as u,a as h,n as f}from"./blocks-shsJXsJu.js";import"./Tag-HWB4mzIK.js";import"./index-BuSb9dlo.js";import{F as d}from"./CommandsAndQueries-CWzmGACf.js";import"./copy-iAtgzS7e.js";import{T as b}from"./TableOfContent-DRQ4kDdO.js";import{C}from"./index-BuyvyJ7k.js";import{D}from"./BarChart.stories-BlaCwzgO.js";import{D as y}from"./BulletChart.stories-CbnbT_uo.js";import{D as g}from"./ColumnChart.stories-D3w7biHX.js";import{D as v}from"./ColumnChartWithTrend.stories-CtPFT03v.js";import{D as x}from"./ComposedChart.stories-D_io9jlN.js";import{D as j}from"./DonutChart.stories-DYUppCV6.js";import{D as w}from"./LineChart.stories-Dj_amr8k.js";import{D as R}from"./PieChart.stories-bkfBeAw9.js";import{D as I}from"./RadarChart.stories-BjhW-ARX.js";import{D as S}from"./RadialChart.stories-C2VRP5fl.js";import{D as $}from"./ScatterChart.stories-K0Dnrjkb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Y-FlrSb9.js";import"./sys-enter-2-Cl_Hs57G.js";import"./alert-xbLWAWtw.js";import"./index-DCr6QTyS.js";import"./index-4KyKvZuP.js";import"./index-DJhOYGHM.js";import"./Link-B8iiEW6g.js";import"./index-wIV-Jx7Q.js";import"./index-B4KIHpYZ.js";import"./index-CCQGvtXt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-P9_4H6jZ.js";import"./addCustomCSSWithScoping-DcrmHllZ.js";import"./index-DBN874s0.js";import"./Carousel-CiRTcaRY.js";import"./ScrollEnablement-DfjnlUNY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-PC7ABTfj.js";import"./slim-arrow-left-CEtjdGQp.js";import"./DemoProps-Co5-9DWa.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ChIzHN0b.js";import"./ChartContainer-D9Onre7R.js";import"./index-C3UD1Hqj.js";import"./useCancelAnimationFallback-l7EMhbNw.js";import"./YAxisTicks-BpVS9agn.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dh8j8Zu4.js";import"./ChartDataLabel-DFeyHXq2.js";import"./useOnClickInternal-COx_jihf.js";import"./react-content-loader.es-wuzlBP3o.js";import"./useIsRTL-TKZ3-owy.js";import"./useLongestYAxisLabel-CDswbEZM.js";import"./ComposedChart-B6FqKdHG.js";import"./Line-Cm9gKnIq.js";import"./Scatter-DJVlagpx.js";import"./index-CElrya1v.js";import"./index-S4F5Dx4U.js";import"./Placeholder-B6249CNk.js";import"./index-LegxcRNo.js";const E=`# @ui5/webcomponents-react-charts

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
