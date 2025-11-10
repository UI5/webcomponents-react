import{r as i,j as t,T as l}from"./iframe-DQwRYUbX.js";import{useMDXComponents as p}from"./index-vjXmNDkF.js";import{M as u,a as h,m as f}from"./blocks-1vj7sSP-.js";import"./Tag-Bdxh15UZ.js";import"./index-BpYg0Kr8.js";import{F as d}from"./CommandsAndQueries-R5zgQe7_.js";import"./copy-f1OrbY2r.js";import{T as b}from"./TableOfContent-B_-p14at.js";import{C}from"./index-BjlCS5en.js";import{D}from"./BarChart.stories-CzLOC8XF.js";import{D as y}from"./BulletChart.stories-tCLydylh.js";import{D as g}from"./ColumnChart.stories-pfcuhjuN.js";import{D as v}from"./ColumnChartWithTrend.stories-bGuxeWve.js";import{D as x}from"./ComposedChart.stories-DTvaBDRP.js";import{D as j}from"./DonutChart.stories-CbHrstSA.js";import{D as w}from"./LineChart.stories-DBiWaoKQ.js";import{D as R}from"./PieChart.stories-B8HfpfUG.js";import{D as I}from"./RadarChart.stories-OWksIYyj.js";import{D as S}from"./RadialChart.stories-BDs9mVs1.js";import{D as T}from"./ScatterChart.stories-Ctc2CdRI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CU2Cyzgy.js";import"./sys-enter-2-BkaREG8L.js";import"./alert-BlLCWEro.js";import"./index-DKyjFioH.js";import"./index-BFkPs8ZC.js";import"./index-CKWavmbi.js";import"./Link-CbfnLrLH.js";import"./index-PC8Kunji.js";import"./index-DPLN1GXU.js";import"./index-CcZnr9i8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bm5JhsBg.js";import"./addCustomCSSWithScoping-B4GQYg_M.js";import"./index-Brhb0SYT.js";import"./Carousel-KlDXzfSI.js";import"./ScrollEnablement-DpgIweVK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CgraNId4.js";import"./slim-arrow-left-3rIUsAuq.js";import"./DemoProps-CsYvz5H8.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CQtZ5XF6.js";import"./ChartContainer-D2Qw0ef8.js";import"./index-Ct1qWrRW.js";import"./useCancelAnimationFallback-B2WA6Kxj.js";import"./YAxisTicks-DFKYiAh9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DekybXZz.js";import"./ChartDataLabel-HMvkYBaE.js";import"./useOnClickInternal-BIO5blDu.js";import"./react-content-loader.es-Bfni20nv.js";import"./useIsRTL-19H7psJ7.js";import"./useLongestYAxisLabel-BHnsYZn6.js";import"./ComposedChart-Dte95ijI.js";import"./Line-DITEcvXS.js";import"./Scatter-BaXDYZeH.js";import"./index-DTgQAy_x.js";import"./index-GJlqIJBv.js";import"./Placeholder-imevw3ae.js";import"./index-0vwHJ3Ji.js";const $=`# @ui5/webcomponents-react-charts

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
