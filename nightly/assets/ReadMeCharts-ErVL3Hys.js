import{r as i,j as t,T as l}from"./iframe-CSbQr9Kh.js";import{useMDXComponents as p}from"./index-Bm__WzDY.js";import{M as u,a as h,k as f}from"./blocks-TfJF1wSB.js";import"./Tag-A7CWsIQR.js";import"./index-cCDc2RK7.js";import{F as d}from"./CommandsAndQueries-BBfDJted.js";import"./copy-CIEB0M7W.js";import{T as b}from"./TableOfContent-Bh04lbeo.js";import{C}from"./index-CVhGIb5u.js";import{D}from"./BarChart.stories-Clr8VDAL.js";import{D as y}from"./BulletChart.stories-CTRk2nyk.js";import{D as g}from"./ColumnChart.stories-Dsf-Fw-e.js";import{D as v}from"./ColumnChartWithTrend.stories-Q1zyhkGF.js";import{D as x}from"./ComposedChart.stories-BJ66FgFe.js";import{D as j}from"./DonutChart.stories-C2yH_Fi-.js";import{D as w}from"./LineChart.stories-CUC7GFP3.js";import{D as R}from"./PieChart.stories-DXp3ozCx.js";import{D as I}from"./RadarChart.stories-DEe9jCFh.js";import{D as S}from"./RadialChart.stories-B1jJ0wi1.js";import{D as T}from"./ScatterChart.stories-CF-YktlZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqQUPKzo.js";import"./sys-enter-2-BXqUXr7U.js";import"./alert-CG5QiRAo.js";import"./index-CqhcpXS6.js";import"./index-HYYwxuYt.js";import"./index-DOzwAkgD.js";import"./Link-Cjj3vJ0R.js";import"./index-B6cEeVTY.js";import"./index-CnvIjGJy.js";import"./index-BC5Egg9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbQfKOeW.js";import"./addCustomCSSWithScoping-D9vmwUKM.js";import"./index-D2CGZc8Q.js";import"./Carousel-DWJRZcoO.js";import"./ScrollEnablement-DpkPz9em.js";import"./animate-JylhYHXj.js";import"./AnimationMode-fVmBo_VX.js";import"./slim-arrow-left-Co4OOMlq.js";import"./DemoProps-CszN9Asd.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bcz9fxTb.js";import"./ChartContainer-CQ0vjxYO.js";import"./index-CNy7gkcO.js";import"./useCancelAnimationFallback-DNJzf7rp.js";import"./YAxisTicks-BrkvuoSY.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BnA04er6.js";import"./ChartDataLabel-CDPYHBYD.js";import"./useOnClickInternal-B0S0zKcm.js";import"./react-content-loader.es-B8edy9sn.js";import"./useIsRTL-C53Cl9QB.js";import"./useLongestYAxisLabel-BlVhNQhQ.js";import"./ComposedChart-CZAqDB2d.js";import"./Line-DLv0RqT7.js";import"./Scatter-Bmz7K5DA.js";import"./index-C4Ljln_z.js";import"./index-BC-ZPFtE.js";import"./Placeholder-CW7NXI3P.js";import"./index-BwDz5zs0.js";const $=`# @ui5/webcomponents-react-charts

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
