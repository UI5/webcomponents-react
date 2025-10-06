import{r as i,j as t,T as l}from"./iframe-DFBm-DSq.js";import{useMDXComponents as p}from"./index-DN1lWEds.js";import{M as u,a as h,k as f}from"./blocks-B7zGvzyh.js";import"./Tag-CMC3yhYK.js";import"./index-i9Tuo-S4.js";import{F as d}from"./CommandsAndQueries-Dwesrog0.js";import"./copy-BOgwG0pC.js";import{T as b}from"./TableOfContent-BNkcj7N-.js";import{C}from"./index-D7LQlB8o.js";import{D}from"./BarChart.stories-BGKNBtPc.js";import{D as y}from"./BulletChart.stories-DwZS8npw.js";import{D as g}from"./ColumnChart.stories-jddwpRwj.js";import{D as v}from"./ColumnChartWithTrend.stories-0oOnuIB9.js";import{D as x}from"./ComposedChart.stories-CxEfdLOS.js";import{D as j}from"./DonutChart.stories-hFyMPcxF.js";import{D as w}from"./LineChart.stories-AP8yWtZS.js";import{D as R}from"./PieChart.stories-rnHucKZx.js";import{D as I}from"./RadarChart.stories-yzKaFMf4.js";import{D as S}from"./RadialChart.stories-BXQ_tyoq.js";import{D as T}from"./ScatterChart.stories-DxTDaf7W.js";import"./preload-helper-PPVm8Dsz.js";import"./information-z2AwmlNQ.js";import"./sys-enter-2-DSpMbDS0.js";import"./alert-BRFe_Sc9.js";import"./index-CDCsv2ep.js";import"./index-DRIF-U0p.js";import"./index-CEGh04ma.js";import"./Link-BlxVb8ea.js";import"./index-s9mPNrYF.js";import"./index-B0ajYEze.js";import"./index-D-vZdY3z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqvN-tZt.js";import"./addCustomCSSWithScoping-DzzI1i6g.js";import"./index-BYzkCeld.js";import"./Carousel-BNDD0qRj.js";import"./ScrollEnablement-BdJYzqT4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CnNqOqV2.js";import"./slim-arrow-left-DzHn2R-j.js";import"./DemoProps-Cnbpc2Xr.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CpgWz7hc.js";import"./ChartContainer-KHijV5C9.js";import"./index-CjzbCvai.js";import"./useCancelAnimationFallback-Clm7JP2y.js";import"./YAxisTicks-CLIj2dsf.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D7yvlFGO.js";import"./ChartDataLabel-CM0U96SP.js";import"./useOnClickInternal-D-ljlgKW.js";import"./react-content-loader.es-3SaOK9Pd.js";import"./useIsRTL-UMzUL51_.js";import"./useLongestYAxisLabel-BHfcUNGZ.js";import"./ComposedChart-BaPh3hEB.js";import"./Line-M_3OMCEN.js";import"./Scatter-CokWEKwt.js";import"./index-Bbgw-mYW.js";import"./index-BOml9h7E.js";import"./Placeholder-Bsr5RVB7.js";import"./index-t0j8hLDm.js";const $=`# @ui5/webcomponents-react-charts

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
