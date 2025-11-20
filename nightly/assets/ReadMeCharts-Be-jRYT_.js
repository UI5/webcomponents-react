import{r as i,j as t,T as l}from"./iframe-CwFVqG2B.js";import{useMDXComponents as p}from"./index-DLCucreN.js";import{M as u,a as h,m as f}from"./blocks-BPmtq9pk.js";import"./Tag-BAaIxfbN.js";import"./index-Dun977o4.js";import{F as d}from"./CommandsAndQueries-CPEglOxS.js";import"./copy-BGYvKTCJ.js";import{T as b}from"./TableOfContent-890WGvsJ.js";import{C}from"./index-DMf716ok.js";import{D}from"./BarChart.stories-_FNG9a7m.js";import{D as y}from"./BulletChart.stories-BnTrYR9A.js";import{D as g}from"./ColumnChart.stories-dcCGjHO7.js";import{D as v}from"./ColumnChartWithTrend.stories-ARn4e-Qa.js";import{D as x}from"./ComposedChart.stories-BzZzwwpk.js";import{D as j}from"./DonutChart.stories-Bq0aQHh7.js";import{D as w}from"./LineChart.stories-CFF35HWt.js";import{D as R}from"./PieChart.stories-Ln7MAZTV.js";import{D as I}from"./RadarChart.stories-L0vO4s7B.js";import{D as S}from"./RadialChart.stories-C_B5PnVa.js";import{D as T}from"./ScatterChart.stories-CoAGY2L1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBSRrLZV.js";import"./sys-enter-2-D4JTR3Iq.js";import"./alert-vk5CGtWZ.js";import"./index-graRZSxK.js";import"./index-B1OrttLk.js";import"./index-BdiKbL49.js";import"./Link-LJw1ucv9.js";import"./index-CMU9Wk5L.js";import"./index-Cs50Favg.js";import"./index-DS4oeWmb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BQrnNeIO.js";import"./addCustomCSSWithScoping-C4aLMSRb.js";import"./index-CCtj0faG.js";import"./Carousel-BIETHx14.js";import"./ScrollEnablement-BCwkkkko.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ed8TTSOz.js";import"./slim-arrow-left-FOzM5xl_.js";import"./DemoProps-CMYvNmy6.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dk91p0Jn.js";import"./ChartContainer-4Q9xGYOh.js";import"./index-C0EOMgqx.js";import"./useCancelAnimationFallback-DTZgW2CO.js";import"./YAxisTicks-6sGe85yl.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BG7fkJcy.js";import"./ChartDataLabel-zZgiYftM.js";import"./useOnClickInternal-CbcFx1Xc.js";import"./react-content-loader.es-BQ0eDJgS.js";import"./useIsRTL-Kk-MVMWt.js";import"./useLongestYAxisLabel-CCrNYr-y.js";import"./ComposedChart-D5IGr6DV.js";import"./Line-BuGL_7hE.js";import"./Scatter-o_F3BKPR.js";import"./index-DPDxFpFn.js";import"./index-CFFZnU28.js";import"./Placeholder-DL3K-yX5.js";import"./index-CwN0xRL3.js";const $=`# @ui5/webcomponents-react-charts

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
