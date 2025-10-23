import{r as i,j as t,T as l}from"./iframe-BS9g_hR0.js";import{useMDXComponents as p}from"./index-D6Sv7Jl_.js";import{M as u,a as h,k as f}from"./blocks-BlXgdtWM.js";import"./Tag-p_IIbz5w.js";import"./index-C8AvT1H6.js";import{F as d}from"./CommandsAndQueries-BG9-iBHT.js";import"./copy-DO4k2zsN.js";import{T as b}from"./TableOfContent-Bfz3jV7i.js";import{C}from"./index-BiKI4GR6.js";import{D}from"./BarChart.stories-Bu3Wtdx4.js";import{D as y}from"./BulletChart.stories-CsC_sdyN.js";import{D as g}from"./ColumnChart.stories-JfFh-mqG.js";import{D as v}from"./ColumnChartWithTrend.stories-Bdi-XecZ.js";import{D as x}from"./ComposedChart.stories-Aa0THNMS.js";import{D as j}from"./DonutChart.stories-BSw7ZKVD.js";import{D as w}from"./LineChart.stories-BDfmNZOS.js";import{D as R}from"./PieChart.stories-3oLPsdWa.js";import{D as I}from"./RadarChart.stories-BsY8d0TA.js";import{D as S}from"./RadialChart.stories-D-siMuAP.js";import{D as T}from"./ScatterChart.stories-DXCrEC1z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DIMKZmlM.js";import"./sys-enter-2-cjAPqaPu.js";import"./alert-CWeu-Gd2.js";import"./index-BywMJtOG.js";import"./index-wzaot1RG.js";import"./index-CAEXs-Gc.js";import"./Link-CiETGZ39.js";import"./index-BKoMru_w.js";import"./index-DU08Tlv3.js";import"./index-blu4KXFK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DwUfsbfY.js";import"./addCustomCSSWithScoping-D_7dkpV9.js";import"./index-D7iHEYTy.js";import"./Carousel-ChcDvR91.js";import"./ScrollEnablement-CI0Tb0Ll.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DithYMkD.js";import"./slim-arrow-left-QmSqqFRq.js";import"./DemoProps-CeSVcgD4.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CLFIxpFm.js";import"./ChartContainer-CFc7WB1o.js";import"./index-BCrnZa0s.js";import"./useCancelAnimationFallback-CEja17Rb.js";import"./YAxisTicks-DyJsR1Dl.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BwOkCVOY.js";import"./ChartDataLabel-CEzBF-tD.js";import"./useOnClickInternal-Rlw3tajm.js";import"./react-content-loader.es-SIdwwhu9.js";import"./useIsRTL-DS89XhU_.js";import"./useLongestYAxisLabel-6aJW3Pdc.js";import"./ComposedChart-CfjAC9H8.js";import"./Line-CCTT5J2h.js";import"./Scatter-DAEDflYc.js";import"./index-y8NtCqyK.js";import"./index-CXB4rgpw.js";import"./Placeholder-Bv4svCLN.js";import"./index-uzksqIe8.js";const $=`# @ui5/webcomponents-react-charts

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
