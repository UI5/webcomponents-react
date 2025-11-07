import{r as i,j as t,T as l}from"./iframe-DGnDchDQ.js";import{useMDXComponents as p}from"./index-gqhlbnnP.js";import{M as u,a as h,m as f}from"./blocks-CpnEbXW7.js";import"./Tag-Bqlxcgw6.js";import"./index-ab40gpM3.js";import{F as d}from"./CommandsAndQueries-nFfK_W-O.js";import"./copy-DiOqbFXx.js";import{T as b}from"./TableOfContent-C4IZUZE2.js";import{C}from"./index-C27mUkYk.js";import{D}from"./BarChart.stories-BH0e-RIh.js";import{D as y}from"./BulletChart.stories-DohARlls.js";import{D as g}from"./ColumnChart.stories-CuWLGhnl.js";import{D as v}from"./ColumnChartWithTrend.stories-Cm0UG03l.js";import{D as x}from"./ComposedChart.stories-DMzNSLSq.js";import{D as j}from"./DonutChart.stories-DIAXJsDz.js";import{D as w}from"./LineChart.stories-BjJJDYzH.js";import{D as R}from"./PieChart.stories-DgHpdiCS.js";import{D as I}from"./RadarChart.stories-Becyw8x0.js";import{D as S}from"./RadialChart.stories-DosfDQpS.js";import{D as T}from"./ScatterChart.stories-CQlPduGh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_x76Wro.js";import"./sys-enter-2-C7D1DjDO.js";import"./alert-Bv5R7OxS.js";import"./index-D8BbDNnv.js";import"./index-C1Lkwl5k.js";import"./index-DBMKQPCi.js";import"./Link-DlCRMPDC.js";import"./index--LdK-cim.js";import"./index-DwBLo3Dd.js";import"./index-CHVAkMFk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKYdG7d4.js";import"./addCustomCSSWithScoping-loT15OrI.js";import"./index-BpzOuhJc.js";import"./Carousel-B3f2nPwZ.js";import"./ScrollEnablement-CKB2L65n.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B25a3ZSP.js";import"./slim-arrow-left-XOcPISto.js";import"./DemoProps-CAU0jWQ5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-OGWxgoq6.js";import"./ChartContainer-CQmHy3bU.js";import"./index-Bk6kEH1k.js";import"./useCancelAnimationFallback-4IfbN7ed.js";import"./YAxisTicks-DCrLhhaU.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BcgvNjD0.js";import"./ChartDataLabel-DpPkU17f.js";import"./useOnClickInternal-CFPUQF3v.js";import"./react-content-loader.es-jqXBxJjE.js";import"./useIsRTL-KjkI_mtd.js";import"./useLongestYAxisLabel-QLFSvjOO.js";import"./ComposedChart-DHxY3Yzo.js";import"./Line-BIxygb9o.js";import"./Scatter-CpdRqnds.js";import"./index-CFI7jFdM.js";import"./index-0gqX2oO0.js";import"./Placeholder-IUwJc9m9.js";import"./index-CtyGq7P2.js";const $=`# @ui5/webcomponents-react-charts

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
