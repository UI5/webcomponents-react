import{r as i,j as t,T as l}from"./iframe-C7iTiayp.js";import{useMDXComponents as p}from"./index-CMlBI8kK.js";import{M as u,a as h,n as f}from"./blocks-BjGmnX8N.js";import"./Tag-CFZhsv-K.js";import"./index-DWyaFLqZ.js";import{F as d}from"./CommandsAndQueries-Cwf0qDUZ.js";import"./copy-CkvBTa6Z.js";import{T as b}from"./TableOfContent-DJx8cUTO.js";import{C}from"./index-BrWyo1-u.js";import{D}from"./BarChart.stories-BXo3raK3.js";import{D as y}from"./BulletChart.stories-DOv26TIJ.js";import{D as g}from"./ColumnChart.stories-DMCHcccK.js";import{D as v}from"./ColumnChartWithTrend.stories-D3eM-WY4.js";import{D as x}from"./ComposedChart.stories-DCzt1h9p.js";import{D as j}from"./DonutChart.stories-CtZAqhMc.js";import{D as w}from"./LineChart.stories-ptPYrpho.js";import{D as R}from"./PieChart.stories-CilGWj9B.js";import{D as I}from"./RadarChart.stories-CW-DyII7.js";import{D as S}from"./RadialChart.stories-Cu_NwPqF.js";import{D as T}from"./ScatterChart.stories-BNz_g7LB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BMfuHNkn.js";import"./sys-enter-2-wp3WX8g7.js";import"./alert-D64S_sTf.js";import"./index-Bi4CD_jF.js";import"./index-CepcJiY6.js";import"./index-BmPAlSpi.js";import"./Link-D4JNNlPq.js";import"./index-fBsRTAa2.js";import"./index-3ZnD0cv6.js";import"./index-zxgrwg2w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-khcOq4rr.js";import"./addCustomCSSWithScoping-DLqaogwL.js";import"./index-BXtbzqKT.js";import"./Carousel-DS0mjJwB.js";import"./ScrollEnablement-m0sz45fi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DO6xWCJM.js";import"./slim-arrow-left-P9dKKw2L.js";import"./DemoProps-hAwYd30D.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bodb9Q9b.js";import"./ChartContainer-COAe4U5e.js";import"./index-DkOK-tBR.js";import"./useCancelAnimationFallback-CjHO13xU.js";import"./YAxisTicks-BPBWR634.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bi9fvTsA.js";import"./ChartDataLabel-Co-5jchC.js";import"./useOnClickInternal-BF1Av_NH.js";import"./react-content-loader.es-CcqS3WWQ.js";import"./useIsRTL-CUKUp41V.js";import"./useLongestYAxisLabel-DYsRC9fW.js";import"./ComposedChart-Bi8Dw_ui.js";import"./Line-BgTpL8B_.js";import"./Scatter-CYz-RwHD.js";import"./index-Bi8Ycrie.js";import"./index-DXAdmatn.js";import"./Placeholder-C_JP3UOB.js";import"./index-BoJmHWth.js";const $=`# @ui5/webcomponents-react-charts

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
