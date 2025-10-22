import{r as i,j as t,T as l}from"./iframe-BFGaT_FV.js";import{useMDXComponents as p}from"./index-CnhfjtvF.js";import{M as u,a as h,k as f}from"./blocks-Dayk-WJV.js";import"./Tag-B8YEukqj.js";import"./index-DAwrSR1M.js";import{F as d}from"./CommandsAndQueries-B8JKM3km.js";import"./copy-AGelM_Ll.js";import{T as b}from"./TableOfContent-CqJuG8DQ.js";import{C}from"./index-DWH0Zr3Q.js";import{D}from"./BarChart.stories-B9VCJvGu.js";import{D as y}from"./BulletChart.stories-D_I7GpHH.js";import{D as g}from"./ColumnChart.stories-R81wcS_a.js";import{D as v}from"./ColumnChartWithTrend.stories-LlIQHygG.js";import{D as x}from"./ComposedChart.stories-CTAadqa4.js";import{D as j}from"./DonutChart.stories-JrU_frT-.js";import{D as w}from"./LineChart.stories-C9t73h72.js";import{D as R}from"./PieChart.stories-VqJV3uib.js";import{D as I}from"./RadarChart.stories-B5MoMtEb.js";import{D as S}from"./RadialChart.stories-aEifPxds.js";import{D as T}from"./ScatterChart.stories-SkZ6YsAi.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bz11YhFZ.js";import"./sys-enter-2-BSVZTuif.js";import"./alert-BaGtUWxL.js";import"./index-BvUgbQCZ.js";import"./index-BlQFkuHY.js";import"./index-BZnNWwSk.js";import"./Link-BBvAtJ6F.js";import"./index-B9hLr1Bv.js";import"./index-Bf-TRwAv.js";import"./index-CaRZdhen.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYVZjLb4.js";import"./addCustomCSSWithScoping-B8FWovV5.js";import"./index-1UQ-4lhS.js";import"./Carousel-D3KaXJuz.js";import"./ScrollEnablement-cAwpl98b.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D5SBF09h.js";import"./slim-arrow-left-DMGLBuXY.js";import"./DemoProps-BQVhP_hM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CQilwFQL.js";import"./ChartContainer-C5aEPlEg.js";import"./index-Bs16yVYB.js";import"./useCancelAnimationFallback-B4jNj30I.js";import"./YAxisTicks-BsGB1WWY.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DxnigEby.js";import"./ChartDataLabel-Bg0Ek6aR.js";import"./useOnClickInternal-C6TmsMCW.js";import"./react-content-loader.es-Bq_IGvQx.js";import"./useIsRTL-hb1ZDPhU.js";import"./useLongestYAxisLabel-Cjm2y7CO.js";import"./ComposedChart-Df8NMe1O.js";import"./Line-BjV8Ff6i.js";import"./Scatter-BsquHat9.js";import"./index-DvgzI3Hw.js";import"./index-BGSWykSU.js";import"./Placeholder-BQ2bgwIX.js";import"./index-f1RFGtll.js";const $=`# @ui5/webcomponents-react-charts

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
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
