import{r as i,j as t,T as l}from"./iframe-BqzC-8C4.js";import{useMDXComponents as p}from"./index-YQ6GhEX5.js";import{M as u,a as h,m as f}from"./blocks-ayIIZ8Ez.js";import"./Tag-DMbvGyPZ.js";import"./index-DLI_KJ4q.js";import{F as d}from"./CommandsAndQueries-BJ93mlRM.js";import"./copy-BAa7Mkrf.js";import{T as b}from"./TableOfContent-C6Bz1cn1.js";import{C}from"./index-c9V1hWGH.js";import{D}from"./BarChart.stories-D31i69sT.js";import{D as y}from"./BulletChart.stories-BhGd3_RK.js";import{D as g}from"./ColumnChart.stories-BEjwArtQ.js";import{D as v}from"./ColumnChartWithTrend.stories-WUiiDyas.js";import{D as x}from"./ComposedChart.stories-DooMDvRW.js";import{D as j}from"./DonutChart.stories-v0z9CaTk.js";import{D as w}from"./LineChart.stories-gES-weWE.js";import{D as R}from"./PieChart.stories-quI4xUDe.js";import{D as I}from"./RadarChart.stories-CDr0ub8v.js";import{D as S}from"./RadialChart.stories-DdMoVd4O.js";import{D as T}from"./ScatterChart.stories-qowFFcFe.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CL-xPlFc.js";import"./sys-enter-2-mfMn16B5.js";import"./alert-DcIxt5mX.js";import"./index-CI7TE3Ph.js";import"./index-Bf-2mOJM.js";import"./index-CBL7x3cU.js";import"./Link-Cyx9O9I9.js";import"./index--RDSdd8J.js";import"./index-M-RJ-Kd6.js";import"./index-DFZxjAeq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjpHjoiw.js";import"./addCustomCSSWithScoping-BlPp9zh6.js";import"./index-yh1yAWiF.js";import"./Carousel-MGxQkRpv.js";import"./ScrollEnablement-gBya7LIS.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DZeM1zaS.js";import"./slim-arrow-left-CTEZ6G4-.js";import"./DemoProps-D5ShLvT4.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bi2Ez2xh.js";import"./ChartContainer-BlXrXV6n.js";import"./index-CnvRzieE.js";import"./useCancelAnimationFallback-CvUR3LZ9.js";import"./YAxisTicks-C1Caqhog.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-qllqQUy9.js";import"./ChartDataLabel-Bb0UADEn.js";import"./useOnClickInternal-YtSNDFe8.js";import"./react-content-loader.es-Cd-ulBG3.js";import"./useIsRTL-CG1Q2uL4.js";import"./useLongestYAxisLabel-B-ufswmB.js";import"./ComposedChart-BYsYUlVj.js";import"./Line-B8X_LjWB.js";import"./Scatter-CqKb5NTw.js";import"./index-CGyWJO8-.js";import"./index-DVg1ertP.js";import"./Placeholder-Bie2p2Ab.js";import"./index-BynfNaSx.js";const $=`# @ui5/webcomponents-react-charts

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
