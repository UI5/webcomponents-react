import{r as i,j as t,O as l}from"./iframe-Cv4sgl-6.js";import{useMDXComponents as p}from"./index-CBIpMKi2.js";import{M as u,a as h,n as f}from"./blocks-DPiPd9tl.js";import"./Tag-BCHKI4FR.js";import"./index-DcbEzSTS.js";import{F as d}from"./CommandsAndQueries-DF8E8wiu.js";import"./copy-Bby_UTo9.js";import{T as b}from"./TableOfContent-Bh8N9yMW.js";import{C}from"./index-B2JmpltA.js";import{D}from"./BarChart.stories-6RH3EYiv.js";import{D as y}from"./BulletChart.stories-D7BX_gDK.js";import{D as g}from"./ColumnChart.stories-CBCRUsT-.js";import{D as v}from"./ColumnChartWithTrend.stories-CNlGy0Ni.js";import{D as x}from"./ComposedChart.stories-Doc3WeO0.js";import{D as j}from"./DonutChart.stories-Cnw4wESB.js";import{D as w}from"./LineChart.stories-DFU_yarT.js";import{D as R}from"./PieChart.stories-92HFpwe0.js";import{D as I}from"./RadarChart.stories-D0619Wvt.js";import{D as S}from"./RadialChart.stories-CZtNTHsS.js";import{D as $}from"./ScatterChart.stories-BDdw0nzx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D12ZJp7Z.js";import"./sys-enter-2-B0uzD6GZ.js";import"./alert-BQ9eRDhW.js";import"./index-BbeCayQT.js";import"./index-CtOMiTIA.js";import"./index-CeG26Jn9.js";import"./Link-BXe55YD0.js";import"./index-AkExkdLb.js";import"./index-CP4yHlqi.js";import"./index-C5UblPZZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CEw8P-vI.js";import"./addCustomCSSWithScoping-ChLo0vcI.js";import"./index-BdK0aYpg.js";import"./Carousel-BZhgsqec.js";import"./ScrollEnablement-v-_rsCFF.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B7n6PGak.js";import"./slim-arrow-left-oxrvIr7m.js";import"./DemoProps-DqN-Yct3.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-R-3qrsCg.js";import"./ChartContainer-DFL-k2CE.js";import"./index-C00ZbNBs.js";import"./useCancelAnimationFallback-DYAp_5oi.js";import"./YAxisTicks-sB62hY7A.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CIcSi6k1.js";import"./ChartDataLabel-zyoFqAVZ.js";import"./useOnClickInternal-9MnC6D6u.js";import"./react-content-loader.es-CkvrDj7b.js";import"./useIsRTL-mQ6_8rLF.js";import"./useLongestYAxisLabel-CbOs_vX5.js";import"./ComposedChart-CeAJgHMB.js";import"./Line-DHOIwsHO.js";import"./Scatter-B-NuxAfk.js";import"./index-30MzSNWx.js";import"./index-DDxHaymu.js";import"./Placeholder-DvnVg0yy.js";import"./index-BjVNXdKc.js";const E=`# @ui5/webcomponents-react-charts

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
