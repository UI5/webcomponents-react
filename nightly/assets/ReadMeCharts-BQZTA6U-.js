import{r as i,j as t,T as l}from"./iframe-vf7s2VGb.js";import{useMDXComponents as p}from"./index-DKJSAVnl.js";import{M as u,a as h,n as f}from"./blocks-B4oFLz5c.js";import"./Tag-P1WqKFay.js";import"./index-DHeHce3N.js";import{F as d}from"./CommandsAndQueries-DWofsexW.js";import"./copy-CaZ5zeDJ.js";import{T as b}from"./TableOfContent-DB8nqPOD.js";import{C}from"./index-SZqAWxEo.js";import{D}from"./BarChart.stories-CQfTfvwQ.js";import{D as y}from"./BulletChart.stories-De6_2IZK.js";import{D as g}from"./ColumnChart.stories-R_wSNKj7.js";import{D as v}from"./ColumnChartWithTrend.stories-DH1_bdnk.js";import{D as x}from"./ComposedChart.stories-BD_iQHOo.js";import{D as j}from"./DonutChart.stories-CASr0iAS.js";import{D as w}from"./LineChart.stories-BMRoZrkH.js";import{D as R}from"./PieChart.stories-Cx9KEVOq.js";import{D as I}from"./RadarChart.stories-BZUboUVl.js";import{D as S}from"./RadialChart.stories-DvdTKqZq.js";import{D as T}from"./ScatterChart.stories-B4RqkuZl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-9NSJvKF7.js";import"./sys-enter-2-CiXorCdU.js";import"./alert-La4PIswz.js";import"./index-DxKE5xNM.js";import"./index-BPodtacB.js";import"./index-Edovokrc.js";import"./Link-CPCmvFzf.js";import"./index-Dj1d2O3_.js";import"./index-BuDcKrDV.js";import"./index-rjrZsjeS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLGPl5RO.js";import"./addCustomCSSWithScoping-B77_-I85.js";import"./index-Bt_xSHJX.js";import"./Carousel-CJSNyRYl.js";import"./ScrollEnablement-tuQmtrl2.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BXPIRpr9.js";import"./slim-arrow-left-DYW3LqCv.js";import"./DemoProps-D62LIdib.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C2TrvNX5.js";import"./ChartContainer-CIdvz1Mm.js";import"./index-DG420_LU.js";import"./useCancelAnimationFallback-ogJEKOnB.js";import"./YAxisTicks-Bf_FwjJV.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BB1TH26t.js";import"./ChartDataLabel-CxLFW1n-.js";import"./useOnClickInternal-DM9vXsNF.js";import"./react-content-loader.es-DlJd7crl.js";import"./useIsRTL-DNQTmpVY.js";import"./useLongestYAxisLabel-D3KTefkU.js";import"./ComposedChart-BS55utob.js";import"./Line-_j9XK-ds.js";import"./Scatter-d9Z0Q1QG.js";import"./index-wdHfbSO1.js";import"./index-B3UH-9_7.js";import"./Placeholder-DDDh58qh.js";import"./index-BQYz3FtK.js";const $=`# @ui5/webcomponents-react-charts

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
