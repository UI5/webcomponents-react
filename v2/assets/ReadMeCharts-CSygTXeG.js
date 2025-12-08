import{r as i,j as t,T as l}from"./iframe-CLqwDYWN.js";import{useMDXComponents as p}from"./index-cmVK5yXJ.js";import{M as u,a as h,m as f}from"./blocks-Ua2ef061.js";import"./Tag-D4gpwYXq.js";import"./index-BLABW-V6.js";import{F as d}from"./CommandsAndQueries-DltB0UQf.js";import"./copy-BFTyEUOW.js";import{T as b}from"./TableOfContent-DbOdkbJI.js";import{C}from"./index-k1pGolsH.js";import{D}from"./BarChart.stories-qYPMQyj3.js";import{D as y}from"./BulletChart.stories-9L5ZIVPM.js";import{D as g}from"./ColumnChart.stories-DFlcjdUW.js";import{D as v}from"./ColumnChartWithTrend.stories-uyBh4T0U.js";import{D as x}from"./ComposedChart.stories-BJBatnEZ.js";import{D as j}from"./DonutChart.stories-Bsl36N97.js";import{D as w}from"./LineChart.stories-C5IXdNMu.js";import{D as R}from"./PieChart.stories-BGxmMrzM.js";import{D as I}from"./RadarChart.stories-DI87wWWI.js";import{D as S}from"./RadialChart.stories-DV2s_CNd.js";import{D as T}from"./ScatterChart.stories-BtCwu2t8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-yMtkqf_-.js";import"./sys-enter-2-DLul5qw8.js";import"./alert-BH_ko6Mf.js";import"./index-BAe0MMci.js";import"./index-dDRjuikd.js";import"./index-DbDqFPhM.js";import"./Link-CWlOLLsT.js";import"./index-Em70_hTG.js";import"./index-CZj6k55a.js";import"./index-Ddq0Vtwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Clukjtst.js";import"./addCustomCSSWithScoping-CDaW4Lcf.js";import"./index-BkxNRgLP.js";import"./Carousel-DhXZIQ_k.js";import"./ScrollEnablement-BX1GdvuZ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-i56EuqEz.js";import"./slim-arrow-left-DDjHlfpa.js";import"./DemoProps-DtBoCaOO.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Csl1j55W.js";import"./ChartContainer-qzyOeXMR.js";import"./index-DiK104TW.js";import"./useCancelAnimationFallback-YRBqdZHW.js";import"./YAxisTicks-BuGDKPNj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D_lcWpt5.js";import"./ChartDataLabel-CkPXFuVn.js";import"./useOnClickInternal-D9ArM87z.js";import"./react-content-loader.es-Bc_ZQ_T5.js";import"./useIsRTL-BnOr2gHb.js";import"./useLongestYAxisLabel-CtR3BKsI.js";import"./ComposedChart-B-xa5liS.js";import"./Line-BS9Wz2nU.js";import"./Scatter-D-9waOPK.js";import"./index-rwgFCR9j.js";import"./index-rlA9aoJn.js";import"./Placeholder-h9yWXlH6.js";import"./index-t9ayVMz0.js";const $=`# @ui5/webcomponents-react-charts

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
