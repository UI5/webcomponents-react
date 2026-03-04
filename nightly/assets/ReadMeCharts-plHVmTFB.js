import{r as i,j as t,O as l}from"./iframe-CLKwUGEX.js";import{useMDXComponents as p}from"./index-DCuwspND.js";import{M as u,a as h,n as f}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import{F as d}from"./CommandsAndQueries-dz6NHoyr.js";import"./copy-BrK10eH_.js";import{T as b}from"./TableOfContent-Dt1l8u5g.js";import{C}from"./index-VhwW1iCy.js";import{D}from"./BarChart.stories-3IlQRbeA.js";import{D as y}from"./BulletChart.stories-ChIBm2Vp.js";import{D as g}from"./ColumnChart.stories-CXVVT3Nb.js";import{D as v}from"./ColumnChartWithTrend.stories-Ds3T5Lc6.js";import{D as x}from"./ComposedChart.stories-Bv3SK12W.js";import{D as j}from"./DonutChart.stories-B0N6FNBy.js";import{D as w}from"./LineChart.stories-kFP4ER7Y.js";import{D as R}from"./PieChart.stories-DCY1lxXo.js";import{D as I}from"./RadarChart.stories-BgxT9bry.js";import{D as S}from"./RadialChart.stories-Dcv0B4ny.js";import{D as $}from"./ScatterChart.stories-BmlEYgNx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";import"./index-CuwqMzEM.js";import"./Carousel-CiPSA4ZM.js";import"./ScrollEnablement-DHvtGpUc.js";import"./animate-JylhYHXj.js";import"./AnimationMode-27-OTLde.js";import"./slim-arrow-left-CtMoQBMB.js";import"./DemoProps-B2xEWaqI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D-3vQJJN.js";import"./ChartContainer-CcMKwZIL.js";import"./index-FsTUQbBQ.js";import"./useCancelAnimationFallback-CSHsRP12.js";import"./YAxisTicks-D3R9_DNH.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-EZCFXVjw.js";import"./ChartDataLabel-vsGg9Qom.js";import"./useOnClickInternal-BQBEbiig.js";import"./react-content-loader.es-Cl_y3aGQ.js";import"./useIsRTL-YHsws3VW.js";import"./useLongestYAxisLabel-CUMA18g5.js";import"./ComposedChart-Mf6V_VQx.js";import"./Line-DD8VY82D.js";import"./Scatter-BtU4XaJF.js";import"./index-CT35ky6-.js";import"./index-Bb_jl46y.js";import"./Placeholder-CpFQiM7J.js";import"./index-CpZ6o78u.js";const E=`# @ui5/webcomponents-react-charts

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
