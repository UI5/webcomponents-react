import{r as i,j as t,O as l}from"./iframe-DwhXZ5O1.js";import{useMDXComponents as p}from"./index-Dr45Q_rW.js";import{M as u,a as h,n as f}from"./blocks-EKNE_kOu.js";import"./Tag-CK1DTCaY.js";import"./index-C0PXwN3M.js";import{F as d}from"./CommandsAndQueries-CZ-0KT78.js";import"./copy-CMcdSlV7.js";import{T as b}from"./TableOfContent-VIGMqgxX.js";import{C}from"./index-DBwjm5oW.js";import{D}from"./BarChart.stories-Qgv4d0pK.js";import{D as y}from"./BulletChart.stories-vHR99or7.js";import{D as g}from"./ColumnChart.stories-COPBKqPQ.js";import{D as v}from"./ColumnChartWithTrend.stories-6BlGel8m.js";import{D as x}from"./ComposedChart.stories-DTK_2VZW.js";import{D as j}from"./DonutChart.stories-Bn4KRpj9.js";import{D as w}from"./LineChart.stories-Cu_47w7e.js";import{D as R}from"./PieChart.stories-DC_w5xmp.js";import{D as I}from"./RadarChart.stories-Cfk1ric8.js";import{D as S}from"./RadialChart.stories-Cz2J_c2V.js";import{D as $}from"./ScatterChart.stories-DAzjcOtF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BtytWan6.js";import"./sys-enter-2-PzhKRuDm.js";import"./alert-Ul17j7cb.js";import"./index-C5LjiSCx.js";import"./index-DsUvOdfw.js";import"./index-BwctDZ8k.js";import"./Link-jbv8jxOr.js";import"./index-D0dcM15D.js";import"./index-EBvmFTXF.js";import"./index-CczjdlqU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjLi0LGT.js";import"./addCustomCSSWithScoping-BuPMXfqj.js";import"./index-DzVbmGXs.js";import"./Carousel-CP_l3phH.js";import"./ScrollEnablement-DJUo6QFq.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BYHFFNE2.js";import"./slim-arrow-left-CQwgfFZ0.js";import"./DemoProps-dqtTH5u5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ChSdtsBl.js";import"./ChartContainer-MYsYOBRe.js";import"./index-DIEkdcjg.js";import"./useCancelAnimationFallback-HRjM3WWR.js";import"./YAxisTicks-CZ4B38Ot.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DxMEewud.js";import"./ChartDataLabel-DNCJjW9U.js";import"./useOnClickInternal-Ce4kDuzF.js";import"./react-content-loader.es-D5dRpVAD.js";import"./useIsRTL-961lF1Cj.js";import"./useLongestYAxisLabel-CYbgkbjR.js";import"./ComposedChart-B1tGbg-g.js";import"./Line-qJ1iYOys.js";import"./Scatter-DNCjd4Ol.js";import"./index-B5mma4Sh.js";import"./index-BaD85dvt.js";import"./Placeholder-0aeT85E3.js";import"./index-0NCxgj8I.js";const E=`# @ui5/webcomponents-react-charts

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
