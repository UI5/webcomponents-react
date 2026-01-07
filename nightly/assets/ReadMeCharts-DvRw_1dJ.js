import{r as i,j as t,T as l}from"./iframe-BMswfRdZ.js";import{useMDXComponents as p}from"./index-MaqCtoEe.js";import{M as u,a as h,n as f}from"./blocks-BZVeQw2D.js";import"./Tag-BVHvhlCz.js";import"./index-B-ZVjbqr.js";import{F as d}from"./CommandsAndQueries-B0EQ2-2W.js";import"./copy-Cy5PMYPR.js";import{T as b}from"./TableOfContent-C_ApkRdL.js";import{C}from"./index-C1aihZZg.js";import{D}from"./BarChart.stories-CG2kuIjL.js";import{D as y}from"./BulletChart.stories-BHXK1A9x.js";import{D as g}from"./ColumnChart.stories-DXVXCgNe.js";import{D as v}from"./ColumnChartWithTrend.stories-DwpQK5oT.js";import{D as x}from"./ComposedChart.stories-brRsL0Nq.js";import{D as j}from"./DonutChart.stories-DYw_S8Oe.js";import{D as w}from"./LineChart.stories-BLVSZ1M6.js";import{D as R}from"./PieChart.stories-C_dxdWD9.js";import{D as I}from"./RadarChart.stories-Bhvx3zvb.js";import{D as S}from"./RadialChart.stories-Ca5V7Huq.js";import{D as T}from"./ScatterChart.stories-BKkXWi52.js";import"./preload-helper-PPVm8Dsz.js";import"./information-1i220cDO.js";import"./sys-enter-2-CawaAm0L.js";import"./alert-uwYQHS-7.js";import"./index-Cf0lk0Qk.js";import"./index-B-CAKhwh.js";import"./index-FIeWjkuH.js";import"./Link-BGQljDJU.js";import"./index-B7ZM6Wte.js";import"./index-E1nxDY_p.js";import"./index-Dm33NnkB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzwX1HTL.js";import"./addCustomCSSWithScoping-DQLnc9QR.js";import"./index-mp2uLi6B.js";import"./Carousel-MVaVFxBb.js";import"./ScrollEnablement-BFkwZ-6k.js";import"./animate-JylhYHXj.js";import"./AnimationMode-nkr64hJf.js";import"./slim-arrow-left-DxevNbmT.js";import"./DemoProps-B8OIT9Nd.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dka9bXsf.js";import"./ChartContainer-DvI0wbGT.js";import"./index-Db9h7yxY.js";import"./useCancelAnimationFallback-BSBbtala.js";import"./YAxisTicks-fj_uLHxW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Db8eaoJx.js";import"./ChartDataLabel-4jYn-PG0.js";import"./useOnClickInternal-Bt6mL-r-.js";import"./react-content-loader.es-Cu3DL5xc.js";import"./useIsRTL-BTbpKmVn.js";import"./useLongestYAxisLabel-DzZU9RlF.js";import"./ComposedChart-FCganq69.js";import"./Line-0tA6l0Wb.js";import"./Scatter-3aZfIYIv.js";import"./index-B1tw8o-O.js";import"./index-B1JMr0q9.js";import"./Placeholder-CMIy2p-H.js";import"./index-JW2sTLZb.js";const $=`# @ui5/webcomponents-react-charts

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
