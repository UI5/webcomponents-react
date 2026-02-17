import{r as i,j as t,O as l}from"./iframe-Cs-5LFqP.js";import{useMDXComponents as p}from"./index-4_wYEVSM.js";import{M as u,a as h,n as f}from"./blocks-Ml05RtQw.js";import"./Tag-ChHbpWGO.js";import"./index-Bj7p5WqA.js";import{F as d}from"./CommandsAndQueries-pWQonQL4.js";import"./copy-DN4ABQ_i.js";import{T as b}from"./TableOfContent-ebLhGbNZ.js";import{C}from"./index-DKrl6Vs1.js";import{D}from"./BarChart.stories-DODzuyHn.js";import{D as y}from"./BulletChart.stories-DxJOs0Ls.js";import{D as g}from"./ColumnChart.stories-BVlLdX9R.js";import{D as v}from"./ColumnChartWithTrend.stories-CiAyc2Yl.js";import{D as x}from"./ComposedChart.stories-BLpUpm5n.js";import{D as j}from"./DonutChart.stories-BnC1xJmo.js";import{D as w}from"./LineChart.stories-CPKDK_5-.js";import{D as R}from"./PieChart.stories-BG4ghY6s.js";import{D as I}from"./RadarChart.stories-uUun8Jyv.js";import{D as S}from"./RadialChart.stories-D0Okoqgu.js";import{D as $}from"./ScatterChart.stories-CHw1vKHC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CG8AIpkm.js";import"./sys-enter-2-DunLLOB1.js";import"./alert-IqDG9ylo.js";import"./index-tt3zNDS3.js";import"./index-DkXjtxgK.js";import"./index-B7_af3sB.js";import"./Link-DZfJcWGy.js";import"./index-k6loN7up.js";import"./index-CHkORph3.js";import"./index-CmIMKxCO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Oma2N1kf.js";import"./addCustomCSSWithScoping-BCQiyr6x.js";import"./index-BUJAXr9p.js";import"./Carousel-BsnJEIdK.js";import"./ScrollEnablement-GTlRH6tE.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DqbnqFDl.js";import"./slim-arrow-left-DVi4Tgvv.js";import"./DemoProps-CgPUYAcf.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dy3sZJes.js";import"./ChartContainer-qDadgmTb.js";import"./index-h8anB-3B.js";import"./useCancelAnimationFallback-BHfaVbNI.js";import"./YAxisTicks-Ce-SK6OS.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BBPXSHwY.js";import"./ChartDataLabel-D7iv77XQ.js";import"./useOnClickInternal-DvCUUbl8.js";import"./react-content-loader.es-CNVRl1z8.js";import"./useIsRTL-DzZietn_.js";import"./useLongestYAxisLabel-CjIOXA5I.js";import"./ComposedChart-Mua6Mod8.js";import"./Line-CYEWVtVn.js";import"./Scatter-BAaPBmr5.js";import"./index-CCHefDOx.js";import"./index-_Y5pFR5M.js";import"./Placeholder-CdCPwPBB.js";import"./index-BN7Zyf5B.js";const E=`# @ui5/webcomponents-react-charts

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
