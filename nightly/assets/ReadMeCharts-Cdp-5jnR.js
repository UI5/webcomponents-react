import{r as i,j as t,T as l}from"./iframe-C-IdMOTF.js";import{useMDXComponents as p}from"./index-8Reouw5a.js";import{M as u,a as h,n as f}from"./blocks-D6xfaR3T.js";import"./Tag-BJpDTkrR.js";import"./index-MVeIUVva.js";import{F as d}from"./CommandsAndQueries-BrMhh7sy.js";import"./copy-F55MzcCW.js";import{T as b}from"./TableOfContent-Dx5PRGec.js";import{C}from"./index-BeG0C0Nt.js";import{D}from"./BarChart.stories-ZJriTMne.js";import{D as y}from"./BulletChart.stories-BDfuT0gL.js";import{D as g}from"./ColumnChart.stories-wkuFOcz1.js";import{D as v}from"./ColumnChartWithTrend.stories-D7bcvcnT.js";import{D as x}from"./ComposedChart.stories-BsJeBX1M.js";import{D as j}from"./DonutChart.stories-BIbpaae5.js";import{D as w}from"./LineChart.stories-Bw0IeaNm.js";import{D as R}from"./PieChart.stories-u6OpIywz.js";import{D as I}from"./RadarChart.stories-CbnACq77.js";import{D as S}from"./RadialChart.stories-u0aEkGFJ.js";import{D as T}from"./ScatterChart.stories-a3evoR70.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEN_uXq9.js";import"./sys-enter-2-Bq6u4lfD.js";import"./alert-6-dTv6Ft.js";import"./index-hTsIN61t.js";import"./index-D23QN9vi.js";import"./index-CZVRMt16.js";import"./Link-pmU5zsTc.js";import"./index-gC0QYgWs.js";import"./index-DtAqbdZo.js";import"./index-C0vIcEg8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKAG68DO.js";import"./addCustomCSSWithScoping-D9pslfxW.js";import"./index-D6nYdynl.js";import"./Carousel-DqFyherB.js";import"./ScrollEnablement-CkJPJ5oY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CfJ6o9ak.js";import"./slim-arrow-left-BH4g-zE3.js";import"./DemoProps-BeYw6cbu.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bti4BQPk.js";import"./ChartContainer-HRO_0uoA.js";import"./index-DqEr8g6K.js";import"./useCancelAnimationFallback-BAqeUOsF.js";import"./YAxisTicks-BT0GG6yQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-6Klrf1B_.js";import"./ChartDataLabel-A46FpxID.js";import"./useOnClickInternal-X9xxm496.js";import"./react-content-loader.es-D46DL5ZJ.js";import"./useIsRTL-CFrls0z0.js";import"./useLongestYAxisLabel-DmESPXkE.js";import"./ComposedChart-BbZLJTMD.js";import"./Line-CBgohXu4.js";import"./Scatter-7Qr5033e.js";import"./index-CHho7iyy.js";import"./index-l8s30fwm.js";import"./Placeholder-BYl96NVw.js";import"./index-DfxTppUE.js";const $=`# @ui5/webcomponents-react-charts

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
