import{r as i,j as t,O as l}from"./iframe-jDeV-G8S.js";import{useMDXComponents as p}from"./index-Da3DrjVc.js";import{M as u,a as h,n as f}from"./blocks-BVLmp_0m.js";import"./Tag-CoiXaVSg.js";import"./index-DNzR_fzc.js";import{F as d}from"./CommandsAndQueries-S46eotFY.js";import"./copy-DEHDDsgd.js";import{T as b}from"./TableOfContent-CtJkDOHV.js";import{C}from"./index-CZ94u0DU.js";import{D}from"./BarChart.stories-BSO6yaZg.js";import{D as y}from"./BulletChart.stories-BXdLPToW.js";import{D as g}from"./ColumnChart.stories-ClR3b68a.js";import{D as v}from"./ColumnChartWithTrend.stories-Bx0H9jEi.js";import{D as x}from"./ComposedChart.stories-BEI_iaMc.js";import{D as j}from"./DonutChart.stories-Czz0hO_j.js";import{D as w}from"./LineChart.stories-CZz3QC_T.js";import{D as R}from"./PieChart.stories-KVHuVDuT.js";import{D as I}from"./RadarChart.stories-B3jl9AI0.js";import{D as S}from"./RadialChart.stories-Z7y7-s56.js";import{D as $}from"./ScatterChart.stories-9Fik6Wy8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CBKKlcN3.js";import"./sys-enter-2-D5f8NC37.js";import"./alert-Dk2Mtfik.js";import"./index-DYm7h2BG.js";import"./index-DJMOMMru.js";import"./index-BZOVbKF_.js";import"./Link-C8Q8wVMF.js";import"./index-DhmB-gDR.js";import"./index-GOQBvCdy.js";import"./index--p5n_M0a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeVQuTnR.js";import"./addCustomCSSWithScoping-DNXKFIA9.js";import"./index-C8jlh6dJ.js";import"./Carousel-CpK7jM8X.js";import"./ScrollEnablement-BysKsuQY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-eoXOhCuZ.js";import"./slim-arrow-left-qRz6aS-I.js";import"./DemoProps-TgnT7g7w.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cep0Ijyd.js";import"./ChartContainer-DGIQJkXg.js";import"./index-B7d4NHtR.js";import"./useCancelAnimationFallback-CAlMPnr0.js";import"./YAxisTicks-BSmN7Fu7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BXe0H2fG.js";import"./ChartDataLabel-BJuOXUDH.js";import"./useOnClickInternal-CpUbhChD.js";import"./react-content-loader.es-Ftfk6v8f.js";import"./useIsRTL-DsxwMa2U.js";import"./useLongestYAxisLabel-DzsjkYey.js";import"./ComposedChart-UeULYQIu.js";import"./Line-3GS_FljL.js";import"./Scatter-CqDJmlIr.js";import"./index-DEP_enIm.js";import"./index--6tK3s8J.js";import"./Placeholder-DNjNYzcg.js";import"./index-Zxlk58jw.js";const E=`# @ui5/webcomponents-react-charts

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
