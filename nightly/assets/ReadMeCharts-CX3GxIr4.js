import{r as i,j as t,O as l}from"./iframe-CptD6jcI.js";import{useMDXComponents as p}from"./index-fCXI9bYA.js";import{M as u,a as h,n as f}from"./blocks-BIcH59f6.js";import"./Tag-BGUo9GB2.js";import"./index-iKMFJQaw.js";import{F as d}from"./CommandsAndQueries-DdKyoCdZ.js";import"./copy-B9_rc4hl.js";import{T as b}from"./TableOfContent-BtRD7nAW.js";import{C}from"./index-DPYXrQDM.js";import{D}from"./BarChart.stories-3yXrMdgU.js";import{D as y}from"./BulletChart.stories-BLihVDI6.js";import{D as g}from"./ColumnChart.stories-KDT5lFLa.js";import{D as v}from"./ColumnChartWithTrend.stories-Dhe8e-bm.js";import{D as x}from"./ComposedChart.stories-BaunTQEP.js";import{D as j}from"./DonutChart.stories-CiejbSfZ.js";import{D as w}from"./LineChart.stories-BT2b5Ytt.js";import{D as R}from"./PieChart.stories-Brq6m8T4.js";import{D as I}from"./RadarChart.stories-DLTIQiNK.js";import{D as S}from"./RadialChart.stories-BV-8qI2u.js";import{D as $}from"./ScatterChart.stories-CA_TDbSL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-_8TOion-.js";import"./sys-enter-2-etHRmL56.js";import"./alert-DCc-ugqC.js";import"./index-CEYNy4qZ.js";import"./index-CBzPckl1.js";import"./index-Bhv4kUG7.js";import"./Link-BtaWbEJj.js";import"./index-CDMlRbU-.js";import"./index-B4fjS4Ci.js";import"./index-DUbGwyGv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqdlCgb.js";import"./addCustomCSSWithScoping-CNZcQBPm.js";import"./index-DF7XtlGw.js";import"./Carousel-BNlB9d9B.js";import"./ScrollEnablement-DsrN78gg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-FmJHlzYi.js";import"./slim-arrow-left-Di6rFrIU.js";import"./DemoProps-ZuMnJcrG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-0BuVKZPt.js";import"./ChartContainer-DwvdbH6N.js";import"./index-BEEcV9zs.js";import"./useCancelAnimationFallback-Bu0jZcU8.js";import"./YAxisTicks-CAtzK1GM.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BdwgKCYb.js";import"./ChartDataLabel-LWDBsbyb.js";import"./useOnClickInternal-x60JWS6J.js";import"./react-content-loader.es-_wONCLVL.js";import"./useIsRTL-TxWHwyVI.js";import"./useLongestYAxisLabel-Bnb_qdK4.js";import"./ComposedChart-OHrvlGkO.js";import"./Line-DuMFxIgG.js";import"./Scatter-DAK8HISv.js";import"./index-BjfG81fF.js";import"./index-CrZcC3Vz.js";import"./Placeholder-DnTOYZMy.js";import"./index-BI2TZpWQ.js";const E=`# @ui5/webcomponents-react-charts

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
