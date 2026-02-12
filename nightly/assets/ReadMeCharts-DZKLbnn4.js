import{r as i,j as t,O as l}from"./iframe-5IjhfTrO.js";import{useMDXComponents as p}from"./index-DX6MuGUF.js";import{M as u,a as h,n as f}from"./blocks-CjIjNIVl.js";import"./Tag-DKhe7Llj.js";import"./index-7iKYLPe5.js";import{F as d}from"./CommandsAndQueries-Cp1HBFGN.js";import"./copy-BcUsFLyb.js";import{T as b}from"./TableOfContent-CkgcLNd4.js";import{C}from"./index-Nj5tR1fC.js";import{D}from"./BarChart.stories-Bvul9X7I.js";import{D as y}from"./BulletChart.stories-VuhkY3OX.js";import{D as g}from"./ColumnChart.stories-4H9wOJ53.js";import{D as v}from"./ColumnChartWithTrend.stories-RxCQc_VA.js";import{D as x}from"./ComposedChart.stories-CXxhwQdK.js";import{D as j}from"./DonutChart.stories-DQKq6W4g.js";import{D as w}from"./LineChart.stories-CwYgAI0C.js";import{D as R}from"./PieChart.stories-CvDdbVYB.js";import{D as I}from"./RadarChart.stories-ifr_PI51.js";import{D as S}from"./RadialChart.stories-CAgeWahp.js";import{D as $}from"./ScatterChart.stories-C54rkcsD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CE4MPASh.js";import"./sys-enter-2-B35dOLRE.js";import"./alert-DzX-q61q.js";import"./index-DsJOnmXi.js";import"./index-C0Y9mFvG.js";import"./index-gs9VdEEm.js";import"./Link-D3EHIZv0.js";import"./index-B1bhMGiO.js";import"./index-CZf_ilO1.js";import"./index-Dlo4vTaU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-FOiwvzqu.js";import"./addCustomCSSWithScoping-DinQav34.js";import"./index-DXwYC06A.js";import"./Carousel-KXOXXCp1.js";import"./ScrollEnablement-CWoktJAU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMXzb0G_.js";import"./slim-arrow-left-arZwp_-D.js";import"./DemoProps-bIZKOf_H.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ClnM3umu.js";import"./ChartContainer-CTPgfDF6.js";import"./index--WdbnVMu.js";import"./useCancelAnimationFallback-8Yhg_XHe.js";import"./YAxisTicks-BFNKS8-J.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cj1O3iyG.js";import"./ChartDataLabel-C8Tqdwj7.js";import"./useOnClickInternal-T1QVRVUU.js";import"./react-content-loader.es-Ce0oEgKG.js";import"./useIsRTL-zhcrMbzG.js";import"./useLongestYAxisLabel-DZmOpJnw.js";import"./ComposedChart-BJT5bdnx.js";import"./Line-BJbwRsn8.js";import"./Scatter-vfoSYH_K.js";import"./index-CZUfBq-A.js";import"./index-B9UlqmXn.js";import"./Placeholder-CObRtJFv.js";import"./index-DGue0PGi.js";const E=`# @ui5/webcomponents-react-charts

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
