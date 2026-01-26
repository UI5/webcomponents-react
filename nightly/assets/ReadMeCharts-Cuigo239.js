import{r as i,j as t,T as l}from"./iframe-BlUygxfZ.js";import{useMDXComponents as p}from"./index-CXAabkf3.js";import{M as u,a as h,n as f}from"./blocks-C4NQ4-im.js";import"./Tag-CUR2rrlg.js";import"./index-Dh-78LPx.js";import{F as d}from"./CommandsAndQueries-CeFRywr5.js";import"./copy-C0O91PIx.js";import{T as b}from"./TableOfContent-B2ODRa1t.js";import{C}from"./index-CNkmWVGQ.js";import{D}from"./BarChart.stories-DvU33CRf.js";import{D as y}from"./BulletChart.stories-Deu6XfUs.js";import{D as g}from"./ColumnChart.stories-DxMikdwq.js";import{D as v}from"./ColumnChartWithTrend.stories-D9AmtxRS.js";import{D as x}from"./ComposedChart.stories-CXxHpqMa.js";import{D as j}from"./DonutChart.stories-D_xeJBJ-.js";import{D as w}from"./LineChart.stories-DYE3lbLk.js";import{D as R}from"./PieChart.stories-Ce0l4FzU.js";import{D as I}from"./RadarChart.stories-D8GG5THx.js";import{D as S}from"./RadialChart.stories-DKikz7Gb.js";import{D as T}from"./ScatterChart.stories-Cza02UqU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zlNYGB6Q.js";import"./sys-enter-2-Ccj_DCkA.js";import"./alert-LdJbGRSH.js";import"./index-B0J408xz.js";import"./index-DFYqP0N6.js";import"./index-t0s0GVf0.js";import"./Link-Czimy6hK.js";import"./index-Dn8Ref-F.js";import"./index-C_DCdzmu.js";import"./index-nb0q6IbV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbJvTexr.js";import"./addCustomCSSWithScoping-DHyjDtb3.js";import"./index-B6coDb7Z.js";import"./Carousel-D5nDMV7m.js";import"./ScrollEnablement-DSwNOA6D.js";import"./animate-JylhYHXj.js";import"./AnimationMode-AWnBGCAu.js";import"./slim-arrow-left-CX4OWN5k.js";import"./DemoProps-BXtFzjxN.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D5gQtcSb.js";import"./ChartContainer-w1QOdjnq.js";import"./index-C5uNCv6R.js";import"./useCancelAnimationFallback-CRnXvi-t.js";import"./YAxisTicks-SnCv2kiV.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cc-etg2f.js";import"./ChartDataLabel-BtNifJrC.js";import"./useOnClickInternal-m9RKS1-V.js";import"./react-content-loader.es-DvUjYOLA.js";import"./useIsRTL-RZAVCFXP.js";import"./useLongestYAxisLabel-BYfeGEVL.js";import"./ComposedChart-k1GRYk30.js";import"./Line-Bk-PcCuq.js";import"./Scatter-0cTN4IYu.js";import"./index-BG-OH7c2.js";import"./index-wllmTSvJ.js";import"./Placeholder-CyHGMHkt.js";import"./index-DBNWWB2F.js";const $=`# @ui5/webcomponents-react-charts

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
