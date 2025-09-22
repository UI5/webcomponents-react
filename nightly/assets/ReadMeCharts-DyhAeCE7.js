import{r as i,j as t,T as l}from"./iframe-DpsLP052.js";import{useMDXComponents as p}from"./index-_rtImS1W.js";import{M as u,a as h,k as f}from"./blocks-PRfqR2eX.js";import"./Tag-C7F6-79_.js";import"./index-BFgF6Hw1.js";import{F as d}from"./CommandsAndQueries-B3V0wcrs.js";import"./copy-LcJtQKoV.js";import{T as b}from"./TableOfContent-zs7QCM0s.js";import{C}from"./index-72Zi_IR2.js";import{D}from"./BarChart.stories-CbLZcUwx.js";import{D as y}from"./BulletChart.stories-C5fabyO_.js";import{D as g}from"./ColumnChart.stories-gQWhxuAZ.js";import{D as v}from"./ColumnChartWithTrend.stories-CihVAvWy.js";import{D as x}from"./ComposedChart.stories-7KX-Iaah.js";import{D as j}from"./DonutChart.stories-BMXZkvgm.js";import{D as w}from"./LineChart.stories-WXivMNf-.js";import{D as R}from"./PieChart.stories-eWU-Xeui.js";import{D as I}from"./RadarChart.stories-Bz6u7dKq.js";import{D as S}from"./RadialChart.stories-PdB1XIId.js";import{D as T}from"./ScatterChart.stories-1XsMLxth.js";import"./preload-helper-PPVm8Dsz.js";import"./information-NX8J3kcU.js";import"./sys-enter-2-DlH7FC2F.js";import"./alert-BDCJXtoD.js";import"./index-DfDXcGgq.js";import"./index-82Uo0cXy.js";import"./index-Cb94JCFH.js";import"./Link-lhnFzeWI.js";import"./addCustomCSSWithScoping-3Nlci0j7.js";import"./index-DCyO76rI.js";import"./index-BfX04KMA.js";import"./index-DZ1ovLuc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D03GatZl.js";import"./index-BB8Wt2y3.js";import"./Carousel-ZBe_Wa5z.js";import"./ScrollEnablement-CM-OLTq5.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BRe_LaQE.js";import"./slim-arrow-left-C0NQF6FC.js";import"./DemoProps-k3BCIe0v.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BRj_uJnA.js";import"./ChartContainer-CqHuAzG3.js";import"./index-DFVo37t3.js";import"./useCancelAnimationFallback-DOMCKVZg.js";import"./YAxisTicks-BRo9kBVy.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-COH1hk0w.js";import"./ChartDataLabel-BKVQuNcw.js";import"./useOnClickInternal-Bu7MuH9k.js";import"./react-content-loader.es-BcqJsEZQ.js";import"./useIsRTL-B3wzcp6-.js";import"./useLongestYAxisLabel-D4-b05Go.js";import"./ComposedChart-D3c7ffcR.js";import"./Line-DW5LQT8O.js";import"./Scatter-wd5_8q6p.js";import"./index-DAiM0lH9.js";import"./index-Drxl03Px.js";import"./Placeholder-D_cosbEw.js";import"./index-DKBrPFbB.js";const $=`# @ui5/webcomponents-react-charts

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
