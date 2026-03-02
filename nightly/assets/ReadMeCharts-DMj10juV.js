import{r as i,j as t,O as l}from"./iframe-BYdzMGmT.js";import{useMDXComponents as p}from"./index-Cj6hKPa8.js";import{M as u,a as h,n as f}from"./blocks-Cj5RS3Jv.js";import"./Tag-DG55Z9om.js";import"./index-BhYrs86x.js";import{F as d}from"./CommandsAndQueries-B5lWQhG8.js";import"./copy-CWbk9K2V.js";import{T as b}from"./TableOfContent-BYp35ZjE.js";import{C}from"./index-BaEkt4CO.js";import{D}from"./BarChart.stories-73Qr38pd.js";import{D as y}from"./BulletChart.stories-B721zTTj.js";import{D as g}from"./ColumnChart.stories-DbF0BHqb.js";import{D as v}from"./ColumnChartWithTrend.stories-DdTiLpAy.js";import{D as x}from"./ComposedChart.stories-D_xL_d-m.js";import{D as j}from"./DonutChart.stories-CyFiAYGt.js";import{D as w}from"./LineChart.stories-Cn6XESP5.js";import{D as R}from"./PieChart.stories-ChIJeCo2.js";import{D as I}from"./RadarChart.stories-B8OuDrB4.js";import{D as S}from"./RadialChart.stories-Ag60gDO1.js";import{D as $}from"./ScatterChart.stories-CrAM8PPg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BG-owH3g.js";import"./sys-enter-2-CtufiL4W.js";import"./alert-C-RhncMU.js";import"./index-DnPstsP7.js";import"./index-DjVw4D0h.js";import"./index-DAUDNesr.js";import"./Link-BofMtgPA.js";import"./index-DA47VMXK.js";import"./index-fFMR_gyI.js";import"./index-CkYce0wJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_-sXQeTV.js";import"./addCustomCSSWithScoping-Cw5UObAf.js";import"./index-DonwXZ8V.js";import"./Carousel-CMlwVjfI.js";import"./ScrollEnablement-C12b1B5M.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CTYcT2ke.js";import"./slim-arrow-left-giNuxETz.js";import"./DemoProps-DzBIUIV1.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D8sh798V.js";import"./ChartContainer-C98L01fp.js";import"./index-Bd3_gVkF.js";import"./useCancelAnimationFallback-BhHaJl6Y.js";import"./YAxisTicks-ikY6Qkcc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B3SDu8Px.js";import"./ChartDataLabel-B3ypYwDU.js";import"./useOnClickInternal-fDV8SVof.js";import"./react-content-loader.es-BMntGL9E.js";import"./useIsRTL-BM3Vsr1m.js";import"./useLongestYAxisLabel-BbkRu9hd.js";import"./ComposedChart-CyxJ6tXe.js";import"./Line-DG23PgE-.js";import"./Scatter-26vdMXPA.js";import"./index-9dbgx6Z2.js";import"./index-DLjQ4T85.js";import"./Placeholder-BqXltyEo.js";import"./index-DEzZDQAD.js";const E=`# @ui5/webcomponents-react-charts

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
