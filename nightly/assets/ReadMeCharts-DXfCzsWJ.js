import{r as i,j as t,T as l}from"./iframe-B_Wb0L56.js";import{useMDXComponents as p}from"./index-307InIrT.js";import{M as u,a as h,m as f}from"./blocks-BG9i3u3d.js";import"./Tag-BJqa-9S6.js";import"./index-IQMTO30I.js";import{F as d}from"./CommandsAndQueries-DZD1CEEu.js";import"./copy-B8s392ic.js";import{T as b}from"./TableOfContent-C8-rfcah.js";import{C}from"./index-DSg2rAbm.js";import{D}from"./BarChart.stories-DqTzF5c0.js";import{D as y}from"./BulletChart.stories-DKIZEyKR.js";import{D as g}from"./ColumnChart.stories-w_qlDjBQ.js";import{D as v}from"./ColumnChartWithTrend.stories-C4YVzZTw.js";import{D as x}from"./ComposedChart.stories-Bo8yr6Bd.js";import{D as j}from"./DonutChart.stories-BxI1vY3p.js";import{D as w}from"./LineChart.stories-DWsJU8Qz.js";import{D as R}from"./PieChart.stories-BapSL3Tt.js";import{D as I}from"./RadarChart.stories-BIMJ2DV1.js";import{D as S}from"./RadialChart.stories-B2UtgC7K.js";import{D as T}from"./ScatterChart.stories-D8bS0HwB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CNVdTL1g.js";import"./sys-enter-2-YeZbpBvt.js";import"./alert-BrJW2BAH.js";import"./index-C1-6BxML.js";import"./index-CTXSjodk.js";import"./index-6_sfbhaU.js";import"./Link-mQObbT4s.js";import"./index-B6cUzUVp.js";import"./index-DKVx4eTx.js";import"./index-BzKebhUC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNNLg8qF.js";import"./addCustomCSSWithScoping-CLC5si1k.js";import"./index-DOJ9CtkL.js";import"./Carousel-DI5rfkfR.js";import"./ScrollEnablement-CH2t3NPn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BCtmvgSV.js";import"./slim-arrow-left-B3CeYAOO.js";import"./DemoProps-KB78w-ay.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CSvCHozW.js";import"./ChartContainer-BxjeHd6L.js";import"./index-744O76gW.js";import"./useCancelAnimationFallback-Czj51zaN.js";import"./YAxisTicks-DWEIZ4d6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DfJtEcA3.js";import"./ChartDataLabel-BbskrOCP.js";import"./useOnClickInternal-BMB9JbHg.js";import"./react-content-loader.es-BaOxwS_c.js";import"./useIsRTL-7XnIEYeH.js";import"./useLongestYAxisLabel-BTkqLrME.js";import"./ComposedChart-CJQnSNMr.js";import"./Line-BHK7uYrW.js";import"./Scatter-jr6hpDRr.js";import"./index-Drvf9y9L.js";import"./index-DxdRPfqO.js";import"./Placeholder-CEh_Xyj9.js";import"./index-CeJE_oAN.js";const $=`# @ui5/webcomponents-react-charts

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
