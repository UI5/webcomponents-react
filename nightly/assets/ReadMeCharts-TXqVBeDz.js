import{r as i,j as t,O as l}from"./iframe-CBE50DlQ.js";import{useMDXComponents as p}from"./index-DIj01nj4.js";import{M as u,a as h,n as f}from"./blocks-BkRbeitU.js";import"./Tag-DnRfIk3Q.js";import"./index-CionDnrU.js";import{F as d}from"./CommandsAndQueries-DPkme0CW.js";import"./copy-C6dVkXZR.js";import{T as b}from"./TableOfContent-CnAnNSxW.js";import{C}from"./index-CasunzIo.js";import{D}from"./BarChart.stories-B5hU8kI9.js";import{D as y}from"./BulletChart.stories-DnGWIent.js";import{D as g}from"./ColumnChart.stories-DMRULrUO.js";import{D as v}from"./ColumnChartWithTrend.stories-H8JzrWfU.js";import{D as x}from"./ComposedChart.stories-CpqAle6V.js";import{D as j}from"./DonutChart.stories-BLn_3fSk.js";import{D as w}from"./LineChart.stories-BOsBZ_QZ.js";import{D as R}from"./PieChart.stories-CjXCbFP-.js";import{D as I}from"./RadarChart.stories-Bd-Ssk-N.js";import{D as S}from"./RadialChart.stories-BFz58ZLr.js";import{D as $}from"./ScatterChart.stories-BOcurTiY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C3Q_Sey8.js";import"./sys-enter-2-B4dHqFQY.js";import"./alert-CvpF86nf.js";import"./index-Cx0GhjWW.js";import"./index-DQcdvvTg.js";import"./index-Cl_RTgXn.js";import"./Link-Dh4rUjfX.js";import"./index-hRqo2aEC.js";import"./index-9M1Uc6lA.js";import"./index-DZWAayED.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-OxleBysO.js";import"./addCustomCSSWithScoping-DkZRGLQs.js";import"./index-DOpTxqMF.js";import"./Carousel-DOCp6lB-.js";import"./ScrollEnablement-UFzoiRFM.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DW3VbWea.js";import"./slim-arrow-left-DL9rsaAj.js";import"./DemoProps-C20vXrU8.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DAl4WOAX.js";import"./ChartContainer-BQ5VcApB.js";import"./index-BPTFgRZw.js";import"./useCancelAnimationFallback-BqoGhPSY.js";import"./YAxisTicks-Bkf1DW5z.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B98VikCC.js";import"./ChartDataLabel-CFt4fH0-.js";import"./useOnClickInternal-BW8sL5vU.js";import"./react-content-loader.es-jMEAwu3O.js";import"./useIsRTL-DcxS7luH.js";import"./useLongestYAxisLabel-B2e3uLHI.js";import"./ComposedChart-xDv2UtnA.js";import"./Line-DimxkoZW.js";import"./Scatter-DlIV7WeI.js";import"./index-B7G_U-j3.js";import"./index-Cq0snxi7.js";import"./Placeholder-D9BUwqPx.js";import"./index-CeTtVdsd.js";const E=`# @ui5/webcomponents-react-charts

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
