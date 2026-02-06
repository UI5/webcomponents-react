import{r as i,j as t,O as l}from"./iframe-CNlfMRh7.js";import{useMDXComponents as p}from"./index-HXyduBEt.js";import{M as u,a as h,n as f}from"./blocks-Dntxnfj7.js";import"./Tag-CSkrKRNp.js";import"./index-CE5EvvTL.js";import{F as d}from"./CommandsAndQueries-DPIrOVa1.js";import"./copy-NJiLz1Ae.js";import{T as b}from"./TableOfContent-Dze4y5yw.js";import{C}from"./index-D_0gD-Hs.js";import{D}from"./BarChart.stories-C1jHe3TB.js";import{D as y}from"./BulletChart.stories-CdO0NKKd.js";import{D as g}from"./ColumnChart.stories--5tqR_rN.js";import{D as v}from"./ColumnChartWithTrend.stories-BOmH3vap.js";import{D as x}from"./ComposedChart.stories-BGJc-_6v.js";import{D as j}from"./DonutChart.stories-CHi91nup.js";import{D as w}from"./LineChart.stories-B6d0-9hV.js";import{D as R}from"./PieChart.stories-D9r938Iu.js";import{D as I}from"./RadarChart.stories-B869s33L.js";import{D as S}from"./RadialChart.stories-CqkZrGyI.js";import{D as $}from"./ScatterChart.stories-CNInFr3C.js";import"./preload-helper-PPVm8Dsz.js";import"./information-A5dyTfTj.js";import"./sys-enter-2-Dq0W94t5.js";import"./alert-B1A4HH0Q.js";import"./index-Bfxe_3pA.js";import"./index-BsNAKev7.js";import"./index-HOJNtIkV.js";import"./Link-DJApgqFJ.js";import"./index-CMp48S8l.js";import"./index-BZFP7GSJ.js";import"./index-BUkOiAQJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-UJ6G4FQA.js";import"./addCustomCSSWithScoping-0QMDzhQB.js";import"./index-B1BCaeBo.js";import"./Carousel-D5PQiZHn.js";import"./ScrollEnablement-DGzJpPYl.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D-GvtuHK.js";import"./slim-arrow-left-dMD26J2j.js";import"./DemoProps-D8n1bH3E.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-wc6np-Ue.js";import"./ChartContainer-gXUD3vwG.js";import"./index-CtZU6wpy.js";import"./useCancelAnimationFallback-BFq6EeFU.js";import"./YAxisTicks-CnmF4G8j.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CCJI0Acw.js";import"./ChartDataLabel-AlNtR8VG.js";import"./useOnClickInternal-CQIfZLIk.js";import"./react-content-loader.es-BA56vQVW.js";import"./useIsRTL-9-bly-f7.js";import"./useLongestYAxisLabel-Dom4jn1G.js";import"./ComposedChart-CwEaA5b2.js";import"./Line-BtkAk9SH.js";import"./Scatter-OKn7Y8tW.js";import"./index-BXvEW2mh.js";import"./index-4jdCx79v.js";import"./Placeholder-VOul5yyb.js";import"./index-DJ4S4H73.js";const E=`# @ui5/webcomponents-react-charts

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
