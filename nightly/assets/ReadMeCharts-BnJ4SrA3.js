import{r as i,j as t,T as l}from"./iframe-C6G8Gpme.js";import{useMDXComponents as p}from"./index-C4rJv3Nd.js";import{M as u,a as h,m as f}from"./blocks-C6ISP02G.js";import"./Tag-wYYkZAW5.js";import"./index-CLl--vXw.js";import{F as d}from"./CommandsAndQueries-CX4_ppDX.js";import"./copy-DG7SwgZt.js";import{T as b}from"./TableOfContent-Bg_C24Fl.js";import{C}from"./index-DQeVuVq0.js";import{D}from"./BarChart.stories-CcTShi68.js";import{D as y}from"./BulletChart.stories-D0gjfuKZ.js";import{D as g}from"./ColumnChart.stories-CNfPfqHh.js";import{D as v}from"./ColumnChartWithTrend.stories-DVEpMEc4.js";import{D as x}from"./ComposedChart.stories-DbElOqSg.js";import{D as j}from"./DonutChart.stories-d_xMbAH8.js";import{D as w}from"./LineChart.stories-DcDO6uf4.js";import{D as R}from"./PieChart.stories-B_ZkKWKU.js";import{D as I}from"./RadarChart.stories-DN9GzrF5.js";import{D as S}from"./RadialChart.stories-B8KpijND.js";import{D as T}from"./ScatterChart.stories-BlXuXBqX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CAQjlf4h.js";import"./sys-enter-2-CseNsjRz.js";import"./alert-C6FTsI2C.js";import"./index-MA4O1_BO.js";import"./index-DtX1Aayg.js";import"./index--EZEVYBb.js";import"./Link-B1f9egnY.js";import"./index-CNpE9-6C.js";import"./index-CYD-IelD.js";import"./index-NHF_x4Su.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2tTP6jwo.js";import"./addCustomCSSWithScoping-DkcigAPx.js";import"./index-B7V2IaSq.js";import"./Carousel-DvNpflWb.js";import"./ScrollEnablement-DBsQ_VBd.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BZeprGvf.js";import"./slim-arrow-left-CXST1tKq.js";import"./DemoProps-uVWLBac9.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BDEHAj-s.js";import"./ChartContainer-Do9v6blI.js";import"./index-DT1QmIo9.js";import"./useCancelAnimationFallback-DqeDT7oZ.js";import"./YAxisTicks-CRkG3XnB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C-O-ZOL4.js";import"./ChartDataLabel-CQCCxLY9.js";import"./useOnClickInternal-lRGrH1UU.js";import"./react-content-loader.es-wQRt_q7-.js";import"./useIsRTL-Cf5So1HI.js";import"./useLongestYAxisLabel-D2Fadp1x.js";import"./ComposedChart-DpVt2Mmc.js";import"./Line-CGmNl-OT.js";import"./Scatter-COLkhGI9.js";import"./index-D49yBVMQ.js";import"./index-CdPL_6Wp.js";import"./Placeholder-QRArKaEQ.js";import"./index-DV6uCQlg.js";const $=`# @ui5/webcomponents-react-charts

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
