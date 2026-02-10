import{r as i,j as t,O as l}from"./iframe-DmoM9f-3.js";import{useMDXComponents as p}from"./index-B20arXE0.js";import{M as u,a as h,n as f}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import{F as d}from"./CommandsAndQueries-D46yw8vq.js";import"./copy-CLLjPrKq.js";import{T as b}from"./TableOfContent-DpBIb8tu.js";import{C}from"./index-CQrM1zF_.js";import{D}from"./BarChart.stories-CKNsodIg.js";import{D as y}from"./BulletChart.stories-C8r1HPM5.js";import{D as g}from"./ColumnChart.stories-BuhPyCdz.js";import{D as v}from"./ColumnChartWithTrend.stories-UWXGaVQl.js";import{D as x}from"./ComposedChart.stories-BhFVlEmL.js";import{D as j}from"./DonutChart.stories-DoWO4CxK.js";import{D as w}from"./LineChart.stories-FEhxSSSp.js";import{D as R}from"./PieChart.stories-Clw5IBJ5.js";import{D as I}from"./RadarChart.stories-DnbmwiC8.js";import{D as S}from"./RadialChart.stories-jBy8jiQ1.js";import{D as $}from"./ScatterChart.stories-Ck0GksOP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./index-D10NIdcs.js";import"./Carousel-bC0Q6h5L.js";import"./ScrollEnablement-C3qwFx38.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CUKO67fV.js";import"./slim-arrow-left-Bvhj6GcU.js";import"./DemoProps-CClZuY5R.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DdDXJBJR.js";import"./ChartContainer-IZQ-GP_z.js";import"./index-hwt2sM8N.js";import"./useCancelAnimationFallback-CwkXIuAj.js";import"./YAxisTicks-BAclVCTF.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CW94mBds.js";import"./ChartDataLabel-CO1P_pmB.js";import"./useOnClickInternal-BHnuqRC0.js";import"./react-content-loader.es-BdtQOzWB.js";import"./useIsRTL-Bl9d5JMP.js";import"./useLongestYAxisLabel-C4IlKFzX.js";import"./ComposedChart-rgEAMHAI.js";import"./Line-PZVoW3NK.js";import"./Scatter-Ds1laSI3.js";import"./index-AbHbdwM2.js";import"./index-CRu-noCS.js";import"./Placeholder-C2Qh74RK.js";import"./index-BI0RzrN_.js";const E=`# @ui5/webcomponents-react-charts

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
