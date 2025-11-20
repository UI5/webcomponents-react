import{r as i,j as t,T as l}from"./iframe-DXIHBwMx.js";import{useMDXComponents as p}from"./index-DxplZHhB.js";import{M as u,a as h,m as f}from"./blocks-q4g2VrtR.js";import"./Tag-tdzXLFPn.js";import"./index-CeX4wAvR.js";import{F as d}from"./CommandsAndQueries-Bq7v73lL.js";import"./copy-yrZW5TrM.js";import{T as b}from"./TableOfContent-8Km75nCb.js";import{C}from"./index-BQ5oPxJ9.js";import{D}from"./BarChart.stories-DLllzSGw.js";import{D as y}from"./BulletChart.stories-D-48j4Ba.js";import{D as g}from"./ColumnChart.stories-xJI4As7o.js";import{D as v}from"./ColumnChartWithTrend.stories-Ny17QtQ0.js";import{D as x}from"./ComposedChart.stories-J06r1Snu.js";import{D as j}from"./DonutChart.stories-CSoSwOM0.js";import{D as w}from"./LineChart.stories-C_m-PouA.js";import{D as R}from"./PieChart.stories-DjIQyi_a.js";import{D as I}from"./RadarChart.stories-BgMVWKe0.js";import{D as S}from"./RadialChart.stories-CSrwVshA.js";import{D as T}from"./ScatterChart.stories-vWaSdRFl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gul-J4WB.js";import"./sys-enter-2-6IAFnl06.js";import"./alert-B38L7NYF.js";import"./index-J54q0dgd.js";import"./index-8pDI1Lay.js";import"./index-DkkEQ9_P.js";import"./Link-BvSaBL9U.js";import"./index-Dl76_vfU.js";import"./index-DPgFjJws.js";import"./index-Bv3_HAKL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BcuYxUko.js";import"./addCustomCSSWithScoping-p2bq4BQn.js";import"./index-DVpq5CSs.js";import"./Carousel-B8Irvxdw.js";import"./ScrollEnablement-DI_Ik22R.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Do7AK09h.js";import"./slim-arrow-left-BYtJXUGB.js";import"./DemoProps-NEg84fEn.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CijBDaew.js";import"./ChartContainer-BUjHaGMs.js";import"./index-ztofxTu6.js";import"./useCancelAnimationFallback-3M-jV4en.js";import"./YAxisTicks-6iRUK5i6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CashiWTJ.js";import"./ChartDataLabel-DnDnmMEX.js";import"./useOnClickInternal-BRD5mPKR.js";import"./react-content-loader.es-C5kQw9Tr.js";import"./useIsRTL-B3qUjlQu.js";import"./useLongestYAxisLabel-Bnm1wiBB.js";import"./ComposedChart-OgtIxUcb.js";import"./Line-CxyFYjel.js";import"./Scatter-CnUQzKLD.js";import"./index-DdzWh6sb.js";import"./index-uIshJDbS.js";import"./Placeholder-DLZrj0mV.js";import"./index-C35Efcf4.js";const $=`# @ui5/webcomponents-react-charts

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
