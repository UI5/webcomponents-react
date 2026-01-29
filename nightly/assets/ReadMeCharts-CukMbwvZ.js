import{r as i,j as t,O as l}from"./iframe-CaWUkniD.js";import{useMDXComponents as p}from"./index-DfLMUe36.js";import{M as u,a as h,n as f}from"./blocks-BMfWNTmT.js";import"./Tag-CqIFc9Gy.js";import"./index-B-q2cOJd.js";import{F as d}from"./CommandsAndQueries-Bkeh__iN.js";import"./copy-CqMAivUp.js";import{T as b}from"./TableOfContent-BiO-A2Go.js";import{C}from"./index-DtKyj5Pf.js";import{D}from"./BarChart.stories-FFSSFfIe.js";import{D as y}from"./BulletChart.stories-DHKLpwEC.js";import{D as g}from"./ColumnChart.stories-BCeA9ATA.js";import{D as v}from"./ColumnChartWithTrend.stories-BVz6NtsH.js";import{D as x}from"./ComposedChart.stories-CqJcAw-T.js";import{D as j}from"./DonutChart.stories-BqWNSXRu.js";import{D as w}from"./LineChart.stories-BXYhhxnt.js";import{D as R}from"./PieChart.stories-BM9-OxT9.js";import{D as I}from"./RadarChart.stories-BRG0C6BT.js";import{D as S}from"./RadialChart.stories-DxuUVANv.js";import{D as $}from"./ScatterChart.stories-BTtLN_mn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D2K3Dl_P.js";import"./sys-enter-2-CcH0mjP8.js";import"./alert-CyfuNqtR.js";import"./index-tK2knsWN.js";import"./index-WiTork8k.js";import"./index-dFuotq6J.js";import"./Link-D_-jRuCf.js";import"./index-ChWdN6oy.js";import"./index-Bw4kzKrM.js";import"./index-C4konRse.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2YWTQyV.js";import"./addCustomCSSWithScoping-DbaRAaG9.js";import"./index-DN8rN30Z.js";import"./Carousel-D6nauGyR.js";import"./ScrollEnablement-C2wBh3eU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Ba_mauJV.js";import"./slim-arrow-left-xPkdpXW2.js";import"./DemoProps-cyzRqTr5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-pfo_0WpE.js";import"./ChartContainer-CWtKGpGV.js";import"./index-NObIppjX.js";import"./useCancelAnimationFallback-BMUZWiRm.js";import"./YAxisTicks-BN5roHrs.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Wz-bpIHh.js";import"./ChartDataLabel-DQO6OpE1.js";import"./useOnClickInternal-DiAF0ZoK.js";import"./react-content-loader.es-Py681pXo.js";import"./useIsRTL-dBQdTW19.js";import"./useLongestYAxisLabel-OUYVaLx3.js";import"./ComposedChart-ylu9R5dE.js";import"./Line-umbV0na9.js";import"./Scatter-BP4CJCod.js";import"./index-D9ywAZ_l.js";import"./index-BGXHwlRv.js";import"./Placeholder-C19-CZ7D.js";import"./index-CBT05Qzi.js";const E=`# @ui5/webcomponents-react-charts

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
