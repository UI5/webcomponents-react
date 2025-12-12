import{r as i,j as t,T as l}from"./iframe-CA3Ho9Q5.js";import{useMDXComponents as p}from"./index-BSP_ypsD.js";import{M as u,a as h,n as f}from"./blocks-duj_cvae.js";import"./Tag-C7EDP0wF.js";import"./index-B2KbXcP2.js";import{F as d}from"./CommandsAndQueries-CpnGQ0tY.js";import"./copy-Cirx0xPf.js";import{T as b}from"./TableOfContent-Bhgz5xwr.js";import{C}from"./index-BWTsy-iV.js";import{D}from"./BarChart.stories-BXZ5k_wN.js";import{D as y}from"./BulletChart.stories-Bo6AX12y.js";import{D as g}from"./ColumnChart.stories-Byj2Lqfv.js";import{D as v}from"./ColumnChartWithTrend.stories-Dup_TP8f.js";import{D as x}from"./ComposedChart.stories-C4jrob9a.js";import{D as j}from"./DonutChart.stories-BHy7MV1a.js";import{D as w}from"./LineChart.stories-1e8uAI60.js";import{D as R}from"./PieChart.stories-CwSr29TV.js";import{D as I}from"./RadarChart.stories-C_zObgKZ.js";import{D as S}from"./RadialChart.stories-cJvMaX-Y.js";import{D as T}from"./ScatterChart.stories-WcxhwNZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0PKU0zc.js";import"./sys-enter-2-BzmXGgFI.js";import"./alert-DOfQq82s.js";import"./index-CS7zB70b.js";import"./index-B1DuQcex.js";import"./index-Cj36scYa.js";import"./Link-B9lvI_mX.js";import"./index-Vj9BxWeO.js";import"./index-DJDcB98R.js";import"./index-CnX6lHZc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CziqpW1M.js";import"./addCustomCSSWithScoping-CmwUGghA.js";import"./index-QQ_2tXfB.js";import"./Carousel-BVWfCrpf.js";import"./ScrollEnablement-Dip40C-m.js";import"./animate-JylhYHXj.js";import"./AnimationMode-mOTrw9UR.js";import"./slim-arrow-left-BfkjrkRp.js";import"./DemoProps-D4BCzncE.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D6J_qBYF.js";import"./ChartContainer-GCEUwn2D.js";import"./index-BLZkVtTr.js";import"./useCancelAnimationFallback-BawRlaSm.js";import"./YAxisTicks-DY2fKrl3.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-WbAJo8m_.js";import"./ChartDataLabel-ej_veCrB.js";import"./useOnClickInternal-eQ69LsZM.js";import"./react-content-loader.es-ByFXDPlI.js";import"./useIsRTL-D8Jpu7PP.js";import"./useLongestYAxisLabel-ApudhiPZ.js";import"./ComposedChart-BDpzvKt9.js";import"./Line-CPQhfxuj.js";import"./Scatter-zpM-efY6.js";import"./index-DSfy1NjO.js";import"./index-67MmuyKJ.js";import"./Placeholder-DMi0dz9L.js";import"./index-lHYoFFpg.js";const $=`# @ui5/webcomponents-react-charts

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
