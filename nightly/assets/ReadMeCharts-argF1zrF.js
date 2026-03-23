import{q as i,j as t,Q as l}from"./iframe-DcVQn4h7.js";import{useMDXComponents as p}from"./index-DjjpMNLx.js";import{M as u,a as h,n as f}from"./blocks-DpuwUxz9.js";import"./Tag-DIkCdjNz.js";import"./index-DQQWkI0N.js";import"./CommandsAndQueries-BQOFWNIa.js";import"./copy-Bc0coMMf.js";import{T as d}from"./TableOfContent-CNL8YZr2.js";import{F as b}from"./Footer-NfYngWNA.js";import"./PageNotFound-CVfCATZz.js";import{C}from"./index-CySP4tzB.js";import{D}from"./BarChart.stories-BPRqy3MU.js";import{D as y}from"./BulletChart.stories-AFlafANj.js";import{D as g}from"./ColumnChart.stories-BN1efV24.js";import{D as v}from"./ColumnChartWithTrend.stories-Cv7h8Ous.js";import{D as x}from"./ComposedChart.stories-CcyYTjd7.js";import{D as j}from"./DonutChart.stories-CgZUvHkP.js";import{D as w}from"./LineChart.stories-60O0w1AN.js";import{D as R}from"./PieChart.stories-D_Y4MnSJ.js";import{D as I}from"./RadarChart.stories-BNYaFt8C.js";import{D as S}from"./RadialChart.stories-o5Z0M1Yx.js";import{D as $}from"./ScatterChart.stories-BPVfWW5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cy8WRBMY.js";import"./sys-enter-2-BclYTqTi.js";import"./alert-YdCtzqbp.js";import"./Link-CVy3lCMm.js";import"./index-fZCQALbq.js";import"./index-CEU1rAw4.js";import"./index-CwCoovk9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BldFJeaD.js";import"./addCustomCSSWithScoping-BZ_vF02V.js";import"./index-DdVtCCP3.js";import"./index-C5tsWYzj.js";import"./index-CqxmVbMG.js";import"./index-DAQytdMa.js";import"./Illustrations-Bw1pJyGV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CfNTGNYR.js";import"./ScrollEnablement-CZLbZt8M.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CeCzmmn5.js";import"./slim-arrow-left-729Mle92.js";import"./DemoProps-B4YezX9l.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-x_s2xJIx.js";import"./ChartContainer-BgTHST9o.js";import"./index-BD8zH4rA.js";import"./useCancelAnimationFallback-DWYj-Znp.js";import"./YAxisTicks-C7Gn2016.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Ltb3YTFo.js";import"./ChartDataLabel-CJNBPG_g.js";import"./useOnClickInternal-2E-62XfV.js";import"./react-content-loader.es-DwTprCZj.js";import"./useIsRTL-CkS_OTKg.js";import"./useLongestYAxisLabel-C7ruQHPq.js";import"./ComposedChart-re-BoyBL.js";import"./Line-D189y-j3.js";import"./Scatter-C3hLsNQT.js";import"./index-GoRnmv3j.js";import"./index-DM_vc9mV.js";import"./Placeholder-DTt77TSz.js";import"./index-JthdVXg-.js";const E=`# @ui5/webcomponents-react-charts

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
