import{r as i,j as t,O as l}from"./iframe-DAxVciiO.js";import{useMDXComponents as p}from"./index-h_8BIj8E.js";import{M as u,a as h,n as f}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import{F as d}from"./CommandsAndQueries-DAf-gTsq.js";import"./copy-DS8F9wTV.js";import{T as b}from"./TableOfContent-CS4QbVvc.js";import{C}from"./index-C8awZo_0.js";import{D}from"./BarChart.stories-BKWRqfRa.js";import{D as y}from"./BulletChart.stories-C-Fw8UIc.js";import{D as g}from"./ColumnChart.stories-CwkqHSzY.js";import{D as v}from"./ColumnChartWithTrend.stories-DjTz0UcO.js";import{D as x}from"./ComposedChart.stories-Ck5xJf3x.js";import{D as j}from"./DonutChart.stories-CfezfYu3.js";import{D as w}from"./LineChart.stories-CBUEfpm6.js";import{D as R}from"./PieChart.stories-Bb-Fb_zb.js";import{D as I}from"./RadarChart.stories-BnNxDGLL.js";import{D as S}from"./RadialChart.stories-CUOJGdFZ.js";import{D as $}from"./ScatterChart.stories-DEYbHNLQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";import"./index-x-HMM4OA.js";import"./Carousel-C7XGYTMO.js";import"./ScrollEnablement-IaFlv5sG.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DQbFcvs7.js";import"./slim-arrow-left-73M4yTHK.js";import"./DemoProps-BqTJ_1WR.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-dZS8ivEO.js";import"./ChartContainer-CS9h8pHp.js";import"./index-Bm6hAg8x.js";import"./useCancelAnimationFallback-CJ7AoG7K.js";import"./YAxisTicks-BuuRIdEK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B5IMW9Xy.js";import"./ChartDataLabel-D8B_9Nm5.js";import"./useOnClickInternal-BnGAz-x1.js";import"./react-content-loader.es-Deqk05os.js";import"./useIsRTL-Ca2uhQ15.js";import"./useLongestYAxisLabel-ClzXikmW.js";import"./ComposedChart-DN6S14gC.js";import"./Line-BPQcVEwY.js";import"./Scatter-inVnTXeK.js";import"./index-DJ4ClrLz.js";import"./index-DX70ThQf.js";import"./Placeholder-CfYh7S2J.js";import"./index-Db_x9S48.js";const E=`# @ui5/webcomponents-react-charts

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
