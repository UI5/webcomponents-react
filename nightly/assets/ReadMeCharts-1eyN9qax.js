import{n as i,j as t,N as l}from"./iframe-CN9FvYjd.js";import{useMDXComponents as p}from"./index-CHfbFhXP.js";import{M as u,a as h,n as f}from"./blocks-BRVkHd00.js";import"./Tag-B_RTkJ1G.js";import"./index-CjC-3bum.js";import"./CommandsAndQueries-BOIWtnt6.js";import"./copy-CqLNgdQ9.js";import{T as d}from"./TableOfContent-DIcVYEHe.js";import{F as b}from"./Footer-Dl9losBY.js";import"./PageNotFound-YEpHz0H_.js";import{C}from"./index-D4CFNwDu.js";import{D}from"./BarChart.stories-7ZBvIUyW.js";import{D as y}from"./BulletChart.stories-CdpxBEg-.js";import{D as g}from"./ColumnChart.stories-CdTj71Em.js";import{D as v}from"./ColumnChartWithTrend.stories-Bgp6MBRd.js";import{D as x}from"./ComposedChart.stories-D0t816MQ.js";import{D as j}from"./DonutChart.stories-C0u9bqBY.js";import{D as w}from"./LineChart.stories-Dpz2vaAN.js";import{D as R}from"./PieChart.stories-CiyKOghA.js";import{D as I}from"./RadarChart.stories-p5rqenmA.js";import{D as S}from"./RadialChart.stories-BRH32bpC.js";import{D as $}from"./ScatterChart.stories-Rn14Cg-A.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DYxN2cHX.js";import"./sys-enter-2-Cmiit89U.js";import"./alert-DCHWGnHk.js";import"./Link-Wi8OmUZE.js";import"./index-LGty0-Ee.js";import"./index-qceCjzn0.js";import"./index-CdwqdKec.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tlJUacgC.js";import"./addCustomCSSWithScoping-DzgJsuLH.js";import"./index-BFwC892N.js";import"./index-BbQq-ZOq.js";import"./index-DHHIsfuO.js";import"./index-ZHKOt3Ry.js";import"./Illustrations-SwtMVqU-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-Mz22Ma4-.js";import"./ScrollEnablement-Be-lL4pM.js";import"./animate-JylhYHXj.js";import"./AnimationMode-AUchiaid.js";import"./slim-arrow-left-BQ7JOa5D.js";import"./DemoProps-DK1WveFu.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BgNh33Y5.js";import"./ChartContainer-BRVKP-tl.js";import"./index-C4sRNL_2.js";import"./useCancelAnimationFallback-BuQ1GMu9.js";import"./YAxisTicks-C5BDSoJ-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-QsBWnJ9O.js";import"./ChartDataLabel-BmTUhNR8.js";import"./useOnClickInternal-B-L5pDER.js";import"./react-content-loader.es-CJ4L32iS.js";import"./useIsRTL-BW8x1c9w.js";import"./useLongestYAxisLabel-80U1_Qg_.js";import"./ComposedChart-DYy95gTK.js";import"./Line-DxD5njMw.js";import"./Scatter-BUoGZriR.js";import"./index-DUylG5xV.js";import"./index-B-iuqxlf.js";import"./Placeholder-fj1L7esR.js";import"./index-BTmP6w1Z.js";const E=`# @ui5/webcomponents-react-charts

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
