import{r as i,j as t,T as l}from"./iframe-BELPVtw8.js";import{useMDXComponents as p}from"./index-Ccx4gwdG.js";import{M as u,a as h,k as f}from"./blocks-B3lwtuZn.js";import"./Tag-jS7irC1t.js";import"./index-BkR2pL75.js";import{F as d}from"./CommandsAndQueries-B86vB0yc.js";import"./copy-BGZyCQeI.js";import{T as b}from"./TableOfContent-CSElOUdH.js";import{C}from"./index-bNMCQmHA.js";import{D}from"./BarChart.stories-OFAOhPGr.js";import{D as y}from"./BulletChart.stories-DEtl4RCg.js";import{D as g}from"./ColumnChart.stories-BdvFKHsR.js";import{D as v}from"./ColumnChartWithTrend.stories-DR7itoXP.js";import{D as x}from"./ComposedChart.stories-Dskiat_m.js";import{D as j}from"./DonutChart.stories-BcHKnrtG.js";import{D as w}from"./LineChart.stories-CjpkltAF.js";import{D as R}from"./PieChart.stories-CjhDUCFr.js";import{D as I}from"./RadarChart.stories-SDSM-MzY.js";import{D as S}from"./RadialChart.stories-BHe3AJ4j.js";import{D as T}from"./ScatterChart.stories-DW47t7BO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Q0D1EyOn.js";import"./sys-enter-2-CB1NZnv4.js";import"./alert-e0Pm7FCS.js";import"./index-CQYUcCHI.js";import"./index-DslTuBZD.js";import"./index-Dy8TXCJ0.js";import"./Link-BLMqdfPm.js";import"./index-nk7PQCW4.js";import"./index-D2dH4dam.js";import"./index-D2H4sMz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-GIAd7WMY.js";import"./addCustomCSSWithScoping-vktTBWHy.js";import"./index-C1fkktKB.js";import"./Carousel-BL6Ute9Y.js";import"./ScrollEnablement-7itX-dGY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cv0gCYuy.js";import"./slim-arrow-left-D3_KjXGx.js";import"./DemoProps-bo7S3jEW.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CdjyKzkw.js";import"./ChartContainer-BkqCXmqL.js";import"./index-Dj10-OWx.js";import"./useCancelAnimationFallback-Cs1k84od.js";import"./YAxisTicks-Dgp3PwRd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-VrX3UyOM.js";import"./ChartDataLabel-xyrBJXGP.js";import"./useOnClickInternal-Cv_qNia_.js";import"./react-content-loader.es-DUxcJRfz.js";import"./useIsRTL-kNFhRDgm.js";import"./useLongestYAxisLabel-ByFSG3_s.js";import"./ComposedChart-DCArgO9g.js";import"./Line-ujbe6kLH.js";import"./Scatter-D4EbmE4U.js";import"./index-DkoHo6w2.js";import"./index-BS0fOgOk.js";import"./Placeholder-CXfMzPt6.js";import"./index-RL4c3y2U.js";const $=`# @ui5/webcomponents-react-charts

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
