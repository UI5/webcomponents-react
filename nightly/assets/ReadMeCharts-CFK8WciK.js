import{q as i,j as t,Q as l}from"./iframe-CFFJFWfd.js";import{useMDXComponents as p}from"./index-C3RjxUM6.js";import{M as u,a as h,n as f}from"./blocks-DNe1XYus.js";import"./Tag-Dq-_fpcq.js";import"./index-nJISZmsL.js";import"./CommandsAndQueries-F7dXP8Ck.js";import"./copy-BWzo1FZ0.js";import{T as d}from"./TableOfContent-Dk3B5lEt.js";import{F as b}from"./Footer-DnJjuNkf.js";import"./PageNotFound-fKWlSVqv.js";import{C}from"./index-D7rAcMR2.js";import{D}from"./BarChart.stories-CLtI0aXH.js";import{D as y}from"./BulletChart.stories-DGiCyNRN.js";import{D as g}from"./ColumnChart.stories-BFhBRVAi.js";import{D as v}from"./ColumnChartWithTrend.stories-YFWloAyc.js";import{D as x}from"./ComposedChart.stories-DRjTb3vT.js";import{D as j}from"./DonutChart.stories-Dwe0E9o5.js";import{D as w}from"./LineChart.stories-B7yRWIBK.js";import{D as R}from"./PieChart.stories-Cr9D7Jsj.js";import{D as I}from"./RadarChart.stories-lPnsAoFC.js";import{D as S}from"./RadialChart.stories-BRnD3O-I.js";import{D as $}from"./ScatterChart.stories-TKbENCoU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-WOvhwCn0.js";import"./sys-enter-2-CCYEhAsr.js";import"./alert-DdBL9zU_.js";import"./Link-DBWxZpb0.js";import"./index-BC7P3Gk3.js";import"./index-B7FuneXO.js";import"./index-CLuk8Jv1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-peyxdL93.js";import"./addCustomCSSWithScoping-VUX5a_xd.js";import"./index-CQKrmUSc.js";import"./index-IkzBWQiA.js";import"./index-Czxe8PfH.js";import"./index-ElIMq8Rj.js";import"./Illustrations-DDY2i5oH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BQrNFHCB.js";import"./ScrollEnablement-BLsPTkqE.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ujbnNYjh.js";import"./slim-arrow-left-BxdANi72.js";import"./DemoProps-C4O2Yt_q.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-vDEoy8ji.js";import"./ChartContainer-ClVp5Wtm.js";import"./index-BBFHvhOZ.js";import"./useCancelAnimationFallback-B6dpp_AH.js";import"./YAxisTicks-B6wkmBw6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dg3-iaMn.js";import"./ChartDataLabel-DbsSyC-5.js";import"./useOnClickInternal-Bikzk2lJ.js";import"./react-content-loader.es-D5BDIT-A.js";import"./useIsRTL-CR_KQBHD.js";import"./useLongestYAxisLabel-BwcSG0MA.js";import"./ComposedChart-riAJLrJ1.js";import"./Line-Bp00rcoc.js";import"./Scatter-Cl8Yjxu8.js";import"./index-Cnf5jnT0.js";import"./index-BRUx3Yfk.js";import"./Placeholder-yMKFdxa3.js";import"./index-WpBQ2EeH.js";const E=`# @ui5/webcomponents-react-charts

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
