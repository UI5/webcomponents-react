import{r as i,j as t,T as l}from"./iframe-D3k-2Qmx.js";import{useMDXComponents as p}from"./index-BSBCExsS.js";import{M as u,a as h,k as f}from"./blocks-bv8Dsnai.js";import"./Tag-9PM7-eum.js";import"./index-By3VOOwb.js";import{F as d}from"./CommandsAndQueries-DsxWaHqI.js";import"./copy-Ba7LzWJS.js";import{T as b}from"./TableOfContent-HbhTBcUN.js";import{C}from"./index-CnqpZG5W.js";import{D}from"./BarChart.stories-CcuhWLQJ.js";import{D as y}from"./BulletChart.stories-Oy6KHD7D.js";import{D as g}from"./ColumnChart.stories-Cy3uPZv-.js";import{D as v}from"./ColumnChartWithTrend.stories-C41Px1mQ.js";import{D as x}from"./ComposedChart.stories-CciN-X-V.js";import{D as j}from"./DonutChart.stories-BC99mV8E.js";import{D as w}from"./LineChart.stories-DIpmP_Bw.js";import{D as R}from"./PieChart.stories-DQQVPFdP.js";import{D as I}from"./RadarChart.stories-DHhBVIkF.js";import{D as S}from"./RadialChart.stories-CUTtm4Kl.js";import{D as T}from"./ScatterChart.stories-DlY8hxa_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bs4ke0_q.js";import"./sys-enter-2-C1RuQ14F.js";import"./alert-CgXiLrEU.js";import"./index-B4561E-8.js";import"./index-7likbAae.js";import"./index-CU7B0Jzs.js";import"./Link-CTDi8zx_.js";import"./index-CcT0HfRf.js";import"./index-ne93MLaG.js";import"./index-DsyKOjMu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVKdFd1t.js";import"./addCustomCSSWithScoping-BuaXJWbP.js";import"./index-aLtq1xU9.js";import"./Carousel-BGwwaPRo.js";import"./ScrollEnablement-BHiM0fB_.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cb5YCroa.js";import"./slim-arrow-left-DDSMsSGj.js";import"./DemoProps-CEsNXFo5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ArIDd3y-.js";import"./ChartContainer-Drg-2tna.js";import"./index-D-6NCyp_.js";import"./useCancelAnimationFallback-yuW0xgYg.js";import"./YAxisTicks-784TBOqA.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DeVeO7oZ.js";import"./ChartDataLabel-9uGgYkuP.js";import"./useOnClickInternal-zV4R6-UK.js";import"./react-content-loader.es-DxvYQdcF.js";import"./useIsRTL-BCYIk2li.js";import"./useLongestYAxisLabel-CEP8LPpG.js";import"./ComposedChart-Dw_8m5L3.js";import"./Line-D5qxiqcn.js";import"./Scatter-BRexZDb3.js";import"./index-DGKY5ohR.js";import"./index-BIgk3hkz.js";import"./Placeholder-CK_GM9a-.js";import"./index-6h7QQEfQ.js";const $=`# @ui5/webcomponents-react-charts

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
