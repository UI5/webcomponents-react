import{r as i,j as t,T as l}from"./iframe-C7GsLKpM.js";import{useMDXComponents as p}from"./index-fgJud-zp.js";import{M as u,a as h,m as f}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import{F as d}from"./CommandsAndQueries-zRxhXSXv.js";import"./copy-DEZSjQMA.js";import{T as b}from"./TableOfContent-CFUfa1cA.js";import{C}from"./index-CzDYOqe1.js";import{D}from"./BarChart.stories-tZXYeCC5.js";import{D as y}from"./BulletChart.stories-CbSI0W_g.js";import{D as g}from"./ColumnChart.stories-89oE0HNG.js";import{D as v}from"./ColumnChartWithTrend.stories-D8r7koHx.js";import{D as x}from"./ComposedChart.stories-7Ic8QMnr.js";import{D as j}from"./DonutChart.stories-CMuXu8-N.js";import{D as w}from"./LineChart.stories-B5ixTed3.js";import{D as R}from"./PieChart.stories-C5u0ipLh.js";import{D as I}from"./RadarChart.stories-DAvM4jQ0.js";import{D as S}from"./RadialChart.stories-DKuvQS4w.js";import{D as T}from"./ScatterChart.stories-Dz0ACPEF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";import"./index-Bitbggm1.js";import"./Carousel-B-VVifER.js";import"./ScrollEnablement-CT_L3ouW.js";import"./animate-JylhYHXj.js";import"./AnimationMode-F-S6gPp3.js";import"./slim-arrow-left-D2TB7V-c.js";import"./DemoProps-OdPDYOUE.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CfkxBGOz.js";import"./ChartContainer-SDJTvwwk.js";import"./index-Carv-kxu.js";import"./useCancelAnimationFallback-BC11m9n_.js";import"./YAxisTicks-DsLxT-b0.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-7dAuP1-V.js";import"./ChartDataLabel-CLAvHqcJ.js";import"./useOnClickInternal-E_nQs-FW.js";import"./react-content-loader.es-75cwEs9v.js";import"./useIsRTL-xGcqCfh3.js";import"./useLongestYAxisLabel-4ztsYE2d.js";import"./ComposedChart-o9GMAv4O.js";import"./Line-BdKbpWRR.js";import"./Scatter-B_s3wJcK.js";import"./index-B2KET6nR.js";import"./index-Bkd-SCwF.js";import"./Placeholder-CppgwJFL.js";import"./index-iaL1w42h.js";const $=`# @ui5/webcomponents-react-charts

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
