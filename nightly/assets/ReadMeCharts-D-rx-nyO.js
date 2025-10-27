import{r as i,j as t,T as l}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as p}from"./index-BPvgxWCZ.js";import{M as u,a as h,m as f}from"./blocks-De_aBrmo.js";import"./Tag-BKx3QN9f.js";import"./index-D4cnUaLM.js";import{F as d}from"./CommandsAndQueries-Q6uRMqWv.js";import"./copy-C1tv-pSG.js";import{T as b}from"./TableOfContent-CnHAVL07.js";import{C}from"./index-dCWdrH-g.js";import{D}from"./BarChart.stories-znnhoTee.js";import{D as y}from"./BulletChart.stories-DKzZ5PTf.js";import{D as g}from"./ColumnChart.stories-G1TOQfF0.js";import{D as v}from"./ColumnChartWithTrend.stories-BoptEyEp.js";import{D as x}from"./ComposedChart.stories-C8sv4kG7.js";import{D as j}from"./DonutChart.stories-B2cHlyX5.js";import{D as w}from"./LineChart.stories-8YawmxUA.js";import{D as R}from"./PieChart.stories-pSEwO4bT.js";import{D as I}from"./RadarChart.stories-4nrfIssp.js";import{D as S}from"./RadialChart.stories-ludpNalq.js";import{D as T}from"./ScatterChart.stories-CON3fEVt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";import"./index-VZQHlfm7.js";import"./Carousel-SEwqV9Zz.js";import"./ScrollEnablement-De2yMTO7.js";import"./animate-JylhYHXj.js";import"./AnimationMode-COaenRBc.js";import"./slim-arrow-left-CenJwN5v.js";import"./DemoProps-DysCfbNI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BDoaD2TA.js";import"./ChartContainer-DKnZvrDj.js";import"./index-SAfhucJr.js";import"./useCancelAnimationFallback-BgI2cvwU.js";import"./YAxisTicks-Cm2gr7cD.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dpe-rFV8.js";import"./ChartDataLabel-B7VjepqF.js";import"./useOnClickInternal-C-ER8I2Q.js";import"./react-content-loader.es-BEL8-OPb.js";import"./useIsRTL-CRx_4vwg.js";import"./useLongestYAxisLabel-tPCBuHMm.js";import"./ComposedChart-Cu-HItY-.js";import"./Line-BkiUuyab.js";import"./Scatter-ytou2vnV.js";import"./index-Do5h_qsa.js";import"./index-DNwhvdio.js";import"./Placeholder-Dh0dS3vQ.js";import"./index-DsXp4hBE.js";const $=`# @ui5/webcomponents-react-charts

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
