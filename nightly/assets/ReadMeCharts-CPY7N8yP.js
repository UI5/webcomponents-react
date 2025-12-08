import{r as i,j as t,T as l}from"./iframe-C_rEo4ZD.js";import{useMDXComponents as p}from"./index-dLMhCWaI.js";import{M as u,a as h,m as f}from"./blocks-DvQXQjkC.js";import"./Tag-ZlMS2_of.js";import"./index-B4E4i8qV.js";import{F as d}from"./CommandsAndQueries-TFkH8H0n.js";import"./copy-BTrKUsxF.js";import{T as b}from"./TableOfContent-BwFAbyYU.js";import{C}from"./index-CgnnQe4T.js";import{D}from"./BarChart.stories-DOjPonYT.js";import{D as y}from"./BulletChart.stories-CMg4b8Bp.js";import{D as g}from"./ColumnChart.stories-BQ211Gu1.js";import{D as v}from"./ColumnChartWithTrend.stories-Bu2w9Yp4.js";import{D as x}from"./ComposedChart.stories-7t-ap1gU.js";import{D as j}from"./DonutChart.stories-CQg6I6DO.js";import{D as w}from"./LineChart.stories-Bx-4JOBx.js";import{D as R}from"./PieChart.stories-C1C8bY-L.js";import{D as I}from"./RadarChart.stories-DmiLZLJo.js";import{D as S}from"./RadialChart.stories-2nk7AXjk.js";import{D as T}from"./ScatterChart.stories-C_RgwXkY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CbbI_Sx9.js";import"./sys-enter-2-BBWU7--K.js";import"./alert-DYblDknT.js";import"./index-Bd-vG2gT.js";import"./index-DJ6GK8yt.js";import"./index-Dpn1WNSA.js";import"./Link-B0N3KZaJ.js";import"./index-DMq7DMka.js";import"./index-CG9w7Zbs.js";import"./index-DR-Y0J47.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7u1q_FrR.js";import"./addCustomCSSWithScoping-C6yaVxxt.js";import"./index-DYBTfsDC.js";import"./Carousel-Dh0ddTa0.js";import"./ScrollEnablement-DM95z1Eg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DhZd3g_3.js";import"./slim-arrow-left-B3FhJimp.js";import"./DemoProps-IDL7hpL5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C-2D4M3l.js";import"./ChartContainer-D267pUHW.js";import"./index-vnTdnDSz.js";import"./useCancelAnimationFallback-B8t5Vt1u.js";import"./YAxisTicks-Dhp8Mvuy.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DYE3hrFU.js";import"./ChartDataLabel-BQ10v9j2.js";import"./useOnClickInternal-BWHdtd73.js";import"./react-content-loader.es-MdFEpkaa.js";import"./useIsRTL-DPLZDSHh.js";import"./useLongestYAxisLabel-DXqj8nl1.js";import"./ComposedChart-XLFe257e.js";import"./Line-Bz4utBIz.js";import"./Scatter-B2Hbmq4K.js";import"./index-CbG0hg_u.js";import"./index-DG1WvQi6.js";import"./Placeholder-CvccrTe5.js";import"./index-D-xs-2Oj.js";const $=`# @ui5/webcomponents-react-charts

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
