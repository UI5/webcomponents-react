import{r as i,j as t,T as l}from"./iframe-CISvTVNI.js";import{useMDXComponents as p}from"./index-bSkbOjqc.js";import{M as u,a as h,m as f}from"./blocks-B14xai8l.js";import"./Tag-C1M5Bqsq.js";import"./index-DomH80TU.js";import{F as d}from"./CommandsAndQueries-CBtnfpxG.js";import"./copy-DUVHDUg7.js";import{T as b}from"./TableOfContent-DqGQszUP.js";import{C}from"./index-BlMnkCwM.js";import{D}from"./BarChart.stories-DoYTEPdO.js";import{D as y}from"./BulletChart.stories-B4zKr6y_.js";import{D as g}from"./ColumnChart.stories-Bw4zHIQH.js";import{D as v}from"./ColumnChartWithTrend.stories-CpFYUGcj.js";import{D as x}from"./ComposedChart.stories-BlP4VRFT.js";import{D as j}from"./DonutChart.stories-Dtyzyh3k.js";import{D as w}from"./LineChart.stories-BG8M7XRv.js";import{D as R}from"./PieChart.stories-ofyJWxnY.js";import{D as I}from"./RadarChart.stories-CeXX9viM.js";import{D as S}from"./RadialChart.stories-Dl09kUHV.js";import{D as T}from"./ScatterChart.stories-Cjh6ugy0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./index-CE7xV3os.js";import"./Carousel-DQZ40Iha.js";import"./ScrollEnablement-DgFk1_fj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Ct4RxRYr.js";import"./slim-arrow-left-DavniAhv.js";import"./DemoProps-BuODMN7Y.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CF2vwoZX.js";import"./ChartContainer-CVP8tM2c.js";import"./index-TfXtv-kl.js";import"./useCancelAnimationFallback-Ctg1lKRW.js";import"./YAxisTicks-BbNhXcBX.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ytylMZMp.js";import"./ChartDataLabel-2GB0lznw.js";import"./useOnClickInternal-BKY02MCT.js";import"./react-content-loader.es-CxS7UHJ-.js";import"./useIsRTL-CTE_y8fW.js";import"./useLongestYAxisLabel-BM-Vhk4L.js";import"./ComposedChart-DEHsZNQ7.js";import"./Line-nDH9fJOy.js";import"./Scatter-h0iDFimA.js";import"./index-DgrIa3-4.js";import"./index-CPAh62cw.js";import"./Placeholder-C0W7dS4N.js";import"./index-36jn_yt_.js";const $=`# @ui5/webcomponents-react-charts

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
