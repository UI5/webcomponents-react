import{r as i,j as t,O as l}from"./iframe-XvyKyqpc.js";import{useMDXComponents as p}from"./index-CE_ul58K.js";import{M as u,a as h,n as f}from"./blocks-hAblz1ET.js";import"./Tag-BEblEGCN.js";import"./index-CXUKZsMC.js";import{F as d}from"./CommandsAndQueries-D-JkQMzp.js";import"./copy-CAC71KE2.js";import{T as b}from"./TableOfContent-CaC-efIA.js";import{C}from"./index-DpDnj2sC.js";import{D}from"./BarChart.stories-jthMS2Kz.js";import{D as y}from"./BulletChart.stories-LQaHmfoM.js";import{D as g}from"./ColumnChart.stories-B0Lbwd6M.js";import{D as v}from"./ColumnChartWithTrend.stories-DD4nAcMi.js";import{D as x}from"./ComposedChart.stories-BdWmTVLe.js";import{D as j}from"./DonutChart.stories-4H3Hj_RU.js";import{D as w}from"./LineChart.stories-BH9ocIik.js";import{D as R}from"./PieChart.stories-BqzT9Lrf.js";import{D as I}from"./RadarChart.stories-WnjcsSr2.js";import{D as S}from"./RadialChart.stories-B-Oo6x8d.js";import{D as $}from"./ScatterChart.stories-BuGflxyE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CNwM68I2.js";import"./sys-enter-2-QkDyn9HM.js";import"./alert-DG7Yrkg6.js";import"./index--us6wF-5.js";import"./index-CP30tsdj.js";import"./index-BkdKA5kQ.js";import"./Link-DWmr0_tI.js";import"./index-DQ79lCi8.js";import"./index-BFysEZU1.js";import"./index-dfRDbF4B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-m1ntkPM9.js";import"./addCustomCSSWithScoping-B_TWNpIo.js";import"./index-Du72Y0zD.js";import"./Carousel-B3rzLPVb.js";import"./ScrollEnablement-DpQ29N-3.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D0PYM1qY.js";import"./slim-arrow-left-B-nsrsXs.js";import"./DemoProps-S-uvVIcn.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-utj87pld.js";import"./ChartContainer-Wksiuuw0.js";import"./index-DnbbOK4Z.js";import"./useCancelAnimationFallback-Cp2HBqoz.js";import"./YAxisTicks-Cj7S8F2X.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CvRJMpAP.js";import"./ChartDataLabel-uRn-1-ad.js";import"./useOnClickInternal-CG3SMrUx.js";import"./react-content-loader.es-BY6wOkhw.js";import"./useIsRTL-BeXIHH0L.js";import"./useLongestYAxisLabel-XmhcLjBc.js";import"./ComposedChart-DQLdZa6N.js";import"./Line-CTlMHJ8a.js";import"./Scatter-C5DGmhCt.js";import"./index-CFvz0qGt.js";import"./index-Dp_z8A_c.js";import"./Placeholder-BB34jBsN.js";import"./index-BXIRXLjC.js";const E=`# @ui5/webcomponents-react-charts

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
