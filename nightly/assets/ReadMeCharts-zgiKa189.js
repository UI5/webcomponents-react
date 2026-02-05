import{r as i,j as t,O as l}from"./iframe-DCGZQC_C.js";import{useMDXComponents as p}from"./index-B27pjG1H.js";import{M as u,a as h,n as f}from"./blocks-ByOpH4Vo.js";import"./Tag-DHXPjUHZ.js";import"./index-CslrJvFJ.js";import{F as d}from"./CommandsAndQueries-uRcRdUvd.js";import"./copy-Dgi6mZSs.js";import{T as b}from"./TableOfContent-CfH2EYR2.js";import{C}from"./index-6JVKM0uW.js";import{D}from"./BarChart.stories-Ckbo0Aah.js";import{D as y}from"./BulletChart.stories-B4crtCD1.js";import{D as g}from"./ColumnChart.stories-nvcrdfbV.js";import{D as v}from"./ColumnChartWithTrend.stories-6Lac9NYK.js";import{D as x}from"./ComposedChart.stories-CRzivIND.js";import{D as j}from"./DonutChart.stories-9HXGjhZ_.js";import{D as w}from"./LineChart.stories-Cmjkcsdb.js";import{D as R}from"./PieChart.stories-D8x4u2C7.js";import{D as I}from"./RadarChart.stories-CHbCPLBP.js";import{D as S}from"./RadialChart.stories-DY04CDkL.js";import{D as $}from"./ScatterChart.stories-BQc9B3CA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8TQYWMC.js";import"./sys-enter-2-CUVdfxRu.js";import"./alert-Crt2Z2f-.js";import"./index-LnQjqAbL.js";import"./index-CRLztu5A.js";import"./index-BSyI90IW.js";import"./Link-C5I3pPvS.js";import"./index-C7wZhEOz.js";import"./index-DsknM379.js";import"./index-BrLag0KZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClYCQmx8.js";import"./addCustomCSSWithScoping-BW6FwlJC.js";import"./index-CEF4Eds-.js";import"./Carousel-CNX9jGxx.js";import"./ScrollEnablement-CyCwp6Jo.js";import"./animate-JylhYHXj.js";import"./AnimationMode-XM1x_V6r.js";import"./slim-arrow-left-DvBXsNE7.js";import"./DemoProps-D8DIEOCG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-n22N279H.js";import"./ChartContainer-BMafigzj.js";import"./index-DxcbSsdx.js";import"./useCancelAnimationFallback-P85FJQ22.js";import"./YAxisTicks-Q23Vyekz.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DOJ3U1WU.js";import"./ChartDataLabel-BMrv3Vm7.js";import"./useOnClickInternal-BfdNJTGd.js";import"./react-content-loader.es-D8WS2rwj.js";import"./useIsRTL-8FzRNE_C.js";import"./useLongestYAxisLabel-DrBrc-aG.js";import"./ComposedChart-4cCsBZUX.js";import"./Line-BdnzlQxH.js";import"./Scatter-NUg8AOkT.js";import"./index-_hItsghS.js";import"./index-C4vX2_HN.js";import"./Placeholder-bJ6vuPXu.js";import"./index-tKsiOaoS.js";const E=`# @ui5/webcomponents-react-charts

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
