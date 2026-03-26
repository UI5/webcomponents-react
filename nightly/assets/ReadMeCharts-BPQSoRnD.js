import{n as i,j as t,N as l}from"./iframe-BKYtcRXv.js";import{useMDXComponents as p}from"./index-D1nSvVZo.js";import{M as u,a as h,n as f}from"./blocks-C1gp0dCe.js";import"./Tag-DHmTMk4C.js";import"./index-BHofxaIm.js";import"./CommandsAndQueries-CUyuiRf6.js";import"./copy-Dd5cryj7.js";import{T as d}from"./TableOfContent-DOsZXCWq.js";import{F as b}from"./Footer-CV4xu3yB.js";import"./PageNotFound-vT0hMOra.js";import{C}from"./index-CnIa6btc.js";import{D}from"./BarChart.stories-BLTRQkTE.js";import{D as y}from"./BulletChart.stories-D-R6C-SP.js";import{D as g}from"./ColumnChart.stories-DLUU0gUx.js";import{D as v}from"./ColumnChartWithTrend.stories-Dfvgh1sb.js";import{D as x}from"./ComposedChart.stories-C29O46I4.js";import{D as j}from"./DonutChart.stories-CUu8BjJj.js";import{D as w}from"./LineChart.stories-9I2klvsb.js";import{D as R}from"./PieChart.stories-CAIFD_SJ.js";import{D as I}from"./RadarChart.stories-BPUlusSW.js";import{D as S}from"./RadialChart.stories-CrAMrlBk.js";import{D as $}from"./ScatterChart.stories-CH0aH7OL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-xnBwopqv.js";import"./sys-enter-2-CNvKNMds.js";import"./alert-CToXuYXU.js";import"./Link-DoqDiayo.js";import"./index-C0tgyAAj.js";import"./index-BKTLLMG4.js";import"./index-Gx-AmRBv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cc6AlvW2.js";import"./addCustomCSSWithScoping-CxGG2dIU.js";import"./index-ewdSxNga.js";import"./index-CruiZV6T.js";import"./index-qZc2Xmmm.js";import"./index-BVN1tX5Y.js";import"./Illustrations-C92Wb11w.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-D7TJfvER.js";import"./ScrollEnablement-DIukE-Oq.js";import"./animate-JylhYHXj.js";import"./AnimationMode-wPXN94jD.js";import"./slim-arrow-left-CJFvguBD.js";import"./DemoProps-B0v1jIhG.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BGmKX5Vn.js";import"./ChartContainer-BqE4pJcu.js";import"./index-QLH2EeXs.js";import"./useCancelAnimationFallback-Du5xpRl9.js";import"./YAxisTicks-Cs3QdKAP.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BQ6tyQMw.js";import"./ChartDataLabel-CyDMDlfk.js";import"./useOnClickInternal-CFLfdVzL.js";import"./react-content-loader.es-tDphjWxn.js";import"./useIsRTL-DvpK_1n5.js";import"./useLongestYAxisLabel-BQNKrUGf.js";import"./ComposedChart-Dl-nvi-j.js";import"./Line-BUTEXgwk.js";import"./Scatter-CxnaYHJ-.js";import"./index-BmORMqQ3.js";import"./index-DgeUTZX4.js";import"./Placeholder-B6P0ElCk.js";import"./index-BqkbF1wJ.js";const E=`# @ui5/webcomponents-react-charts

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
