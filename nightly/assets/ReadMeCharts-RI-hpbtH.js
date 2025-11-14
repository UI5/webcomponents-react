import{r as i,j as t,T as l}from"./iframe-DytFdpZ5.js";import{useMDXComponents as p}from"./index-ClxT7adU.js";import{M as u,a as h,m as f}from"./blocks-CgPOjV91.js";import"./Tag-wRQS4rBi.js";import"./index-C-BQbcyx.js";import{F as d}from"./CommandsAndQueries-LDofsUzK.js";import"./copy-HK9b5mhG.js";import{T as b}from"./TableOfContent-oPJRBwfF.js";import{C}from"./index-BfR8R1Bh.js";import{D}from"./BarChart.stories-DKV82Wrb.js";import{D as y}from"./BulletChart.stories-DS1wX0sP.js";import{D as g}from"./ColumnChart.stories-DOr6F5tY.js";import{D as v}from"./ColumnChartWithTrend.stories-B5kVtmBv.js";import{D as x}from"./ComposedChart.stories-g1aW9W8S.js";import{D as j}from"./DonutChart.stories-BCdm9pGT.js";import{D as w}from"./LineChart.stories-CRr46J_k.js";import{D as R}from"./PieChart.stories-k0uJZU75.js";import{D as I}from"./RadarChart.stories-BaMXyDiz.js";import{D as S}from"./RadialChart.stories-DmgX9F4O.js";import{D as T}from"./ScatterChart.stories-C5-Rcztj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-QfKl2uvK.js";import"./sys-enter-2-Dtt133YD.js";import"./alert-C-riVNTC.js";import"./index-CrrPqcew.js";import"./index-BWneS7co.js";import"./index-DxeYPnJs.js";import"./Link-C5pcYLCj.js";import"./index-DcBMC71h.js";import"./index-BqVVjC2y.js";import"./index-BCsSmGRP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEqUMQtt.js";import"./addCustomCSSWithScoping-DZk4ZVKY.js";import"./index-BUF8RolX.js";import"./Carousel-CEo8XCwp.js";import"./ScrollEnablement-Co0kt5Hl.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Ct2PDpLh.js";import"./slim-arrow-left-BdXoPHFJ.js";import"./DemoProps-CiBZ5aAv.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-api5paAS.js";import"./ChartContainer-D8NxNxiJ.js";import"./index-BXQwEVRd.js";import"./useCancelAnimationFallback-IITSPB7n.js";import"./YAxisTicks-DgBpsZJL.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-sudst8o7.js";import"./ChartDataLabel-DHPyUuDR.js";import"./useOnClickInternal-DPHEhSbk.js";import"./react-content-loader.es-CUc4Z6Vx.js";import"./useIsRTL-CZGC8T2o.js";import"./useLongestYAxisLabel-DRE9mfwj.js";import"./ComposedChart-BLvem0qQ.js";import"./Line-4G-KTtrN.js";import"./Scatter-fGjNwwkh.js";import"./index-BAQDSl5T.js";import"./index-D7MZI-YC.js";import"./Placeholder-B1B_iWmL.js";import"./index-DjDvLssK.js";const $=`# @ui5/webcomponents-react-charts

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
