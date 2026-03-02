import{r as i,j as t,O as l}from"./iframe-Dp_LXyNr.js";import{useMDXComponents as p}from"./index-Du5TrOvB.js";import{M as u,a as h,n as f}from"./blocks-9I7fLsXi.js";import"./Tag-CUzUjb7h.js";import"./index-CMhb9NSF.js";import{F as d}from"./CommandsAndQueries-DJ070Qmg.js";import"./copy-Cwbx5yBu.js";import{T as b}from"./TableOfContent-C3UcDeLl.js";import{C}from"./index-fV7SjVF0.js";import{D}from"./BarChart.stories-CYJkDBQu.js";import{D as y}from"./BulletChart.stories-zhHhoIaq.js";import{D as g}from"./ColumnChart.stories-DX3xtJMn.js";import{D as v}from"./ColumnChartWithTrend.stories-3cnO-cOB.js";import{D as x}from"./ComposedChart.stories-BROwm1qe.js";import{D as j}from"./DonutChart.stories-BXztW1sC.js";import{D as w}from"./LineChart.stories-CurFD096.js";import{D as R}from"./PieChart.stories-qamgG3Xe.js";import{D as I}from"./RadarChart.stories-BwEjSS1x.js";import{D as S}from"./RadialChart.stories-DALdemcp.js";import{D as $}from"./ScatterChart.stories-CZG7v7Wu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-KVIVt9bg.js";import"./sys-enter-2-C4zsDLSU.js";import"./alert-DWxcSCEU.js";import"./index-DlyZB9up.js";import"./index-CKcCy47r.js";import"./index-C2FHI_h3.js";import"./Link-KTjqK9wl.js";import"./index-DY9HWv06.js";import"./index-DIjOLpD2.js";import"./index-CTco0M7M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDmVKCiw.js";import"./addCustomCSSWithScoping-7CEi5oRz.js";import"./index-Bd_n1-5X.js";import"./Carousel-D-zR0DZV.js";import"./ScrollEnablement-B4xK1oWi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DGYpok_2.js";import"./slim-arrow-left-BAIQrpku.js";import"./DemoProps-B0jCtxsA.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D-e_XYgg.js";import"./ChartContainer-B-diAXWO.js";import"./index--SxJFkMv.js";import"./useCancelAnimationFallback-B6BO1yDl.js";import"./YAxisTicks-BTbMhsR8.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CrRiIz2X.js";import"./ChartDataLabel-Df6pXitx.js";import"./useOnClickInternal-BBK2Cgeb.js";import"./react-content-loader.es-C8dMzA79.js";import"./useIsRTL-B6qg-InN.js";import"./useLongestYAxisLabel-D7ZLgbYB.js";import"./ComposedChart-0_VNodl2.js";import"./Line-BANOAA17.js";import"./Scatter-Cz-s51wk.js";import"./index-tOLPcZXr.js";import"./index-DijaWFhO.js";import"./Placeholder-CG5ueXz3.js";import"./index-JoEC595d.js";const E=`# @ui5/webcomponents-react-charts

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
