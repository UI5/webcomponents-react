import{r as i,j as t,T as l}from"./iframe-HnZ_h-uU.js";import{useMDXComponents as p}from"./index-BURirfl-.js";import{M as u,a as h,m as f}from"./blocks-84IuUUPT.js";import"./Tag-Dnn5BILw.js";import"./index-C_zCHPn3.js";import{F as d}from"./CommandsAndQueries-TIuZdWtI.js";import"./copy-CvLuzzlZ.js";import{T as b}from"./TableOfContent-BmnBt7yn.js";import{C}from"./index-Bd-rXZbB.js";import{D}from"./BarChart.stories-cwfnyG33.js";import{D as y}from"./BulletChart.stories-CJ17ztw4.js";import{D as g}from"./ColumnChart.stories-t061T-CS.js";import{D as v}from"./ColumnChartWithTrend.stories-BG9EYwLT.js";import{D as x}from"./ComposedChart.stories-DZIDjZHa.js";import{D as j}from"./DonutChart.stories-rCPyDxTz.js";import{D as w}from"./LineChart.stories-F5jI_Lh7.js";import{D as R}from"./PieChart.stories-COHeH-jZ.js";import{D as I}from"./RadarChart.stories-dUepWGVw.js";import{D as S}from"./RadialChart.stories-K2uGF8OI.js";import{D as T}from"./ScatterChart.stories-co13A42i.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DhzyP3Ow.js";import"./sys-enter-2-CmThXCww.js";import"./alert-DNZ33ksz.js";import"./index-A-RKt-jh.js";import"./index-iyAoRrYN.js";import"./index-ChCH3Q4v.js";import"./Link-fOI_Un9H.js";import"./index-Cx7Ty6ev.js";import"./index-DT74FBWM.js";import"./index-D2dUbzgM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5FHIatV.js";import"./addCustomCSSWithScoping-R6q4RVyA.js";import"./index-Dnf0ia5k.js";import"./Carousel-7zFrwRgX.js";import"./ScrollEnablement-DbCEb8PT.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bpbmmt_5.js";import"./slim-arrow-left-DbEjCgZo.js";import"./DemoProps-DrHSyHGR.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BbvNVkQY.js";import"./ChartContainer-BA-1UUWT.js";import"./index-ob9pHg1a.js";import"./useCancelAnimationFallback-DCbdM_NP.js";import"./YAxisTicks-CvdIwhI6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C4qWgwr_.js";import"./ChartDataLabel-Bi_KvTVy.js";import"./useOnClickInternal-Bnj8yumS.js";import"./react-content-loader.es-9iyc70I3.js";import"./useIsRTL-Sw05o_Vs.js";import"./useLongestYAxisLabel-CmrdFt3s.js";import"./ComposedChart-D-MFh_k3.js";import"./Line-CqRqW6Lc.js";import"./Scatter-DI_CAvkb.js";import"./index-DxyFbxoe.js";import"./index-Br7ygzl2.js";import"./Placeholder-3ZeiVCU1.js";import"./index-C9uOOtlS.js";const $=`# @ui5/webcomponents-react-charts

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
