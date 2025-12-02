import{r as i,j as t,T as l}from"./iframe-Dy0Vcyg3.js";import{useMDXComponents as p}from"./index-D0O3WS9u.js";import{M as u,a as h,m as f}from"./blocks-DQpqsYLC.js";import"./Tag-DXMLJOuX.js";import"./index-nlWOetEC.js";import{F as d}from"./CommandsAndQueries-BbCratpG.js";import"./copy-BxlHwQsP.js";import{T as b}from"./TableOfContent-CImz-8VI.js";import{C}from"./index-DMpPEi6r.js";import{D}from"./BarChart.stories-VkHV2KG_.js";import{D as y}from"./BulletChart.stories-CkI5jI9e.js";import{D as g}from"./ColumnChart.stories-B8YVY4aM.js";import{D as v}from"./ColumnChartWithTrend.stories-dkEH15GX.js";import{D as x}from"./ComposedChart.stories-B4NdTAvI.js";import{D as j}from"./DonutChart.stories-D_CjtjBu.js";import{D as w}from"./LineChart.stories-Dt3iBgUA.js";import{D as R}from"./PieChart.stories-BlONmGqn.js";import{D as I}from"./RadarChart.stories-BIXNcC1y.js";import{D as S}from"./RadialChart.stories-Cho2OlG-.js";import{D as T}from"./ScatterChart.stories-AMg3rH4L.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWURtjFA.js";import"./sys-enter-2-D7LiZd3_.js";import"./alert-CoPtJvs8.js";import"./index-BMTL_1tu.js";import"./index-BRFe_2UD.js";import"./index-0ZDpj1Mu.js";import"./Link-DNkb161-.js";import"./index-DKPC3_SO.js";import"./index-D_r2NSA0.js";import"./index-C5s5hQAS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-01L-n9vL.js";import"./addCustomCSSWithScoping-nI6ifFmX.js";import"./index-DLHjFZTm.js";import"./Carousel-F88BW55D.js";import"./ScrollEnablement-Ba4Wf0S8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-zktkQLpA.js";import"./slim-arrow-left-HEzS1paN.js";import"./DemoProps-BkJX_xwc.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B1rA6YQ7.js";import"./ChartContainer-Ez2VDCDt.js";import"./index-zvcZ-4bx.js";import"./useCancelAnimationFallback-C29ukj5i.js";import"./YAxisTicks-THaVzNzY.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-dUx9ZDXs.js";import"./ChartDataLabel-DjvjnmqD.js";import"./useOnClickInternal-uRZDndDD.js";import"./react-content-loader.es-xlDeWDf9.js";import"./useIsRTL-GvvBhc-H.js";import"./useLongestYAxisLabel-DJJjyqSA.js";import"./ComposedChart-Cbum8WGv.js";import"./Line-C0Omw3W5.js";import"./Scatter-o0qj4FPS.js";import"./index-FhAPg1tv.js";import"./index-Dde77iMt.js";import"./Placeholder-DThj4oAk.js";import"./index-BRLdaZ65.js";const $=`# @ui5/webcomponents-react-charts

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
