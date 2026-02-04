import{r as i,j as t,O as l}from"./iframe-CIYL-5q3.js";import{useMDXComponents as p}from"./index-CWXxkQxH.js";import{M as u,a as h,n as f}from"./blocks-BmH4wjlj.js";import"./Tag-Bj-YRcmn.js";import"./index-DpooF_Dp.js";import{F as d}from"./CommandsAndQueries-DjZZVJII.js";import"./copy-Cls5Qy9v.js";import{T as b}from"./TableOfContent-B3rsoWUf.js";import{C}from"./index-MHMVwL00.js";import{D}from"./BarChart.stories-DsxVwlGe.js";import{D as y}from"./BulletChart.stories-B8TmGFeJ.js";import{D as g}from"./ColumnChart.stories-B-zmnIPs.js";import{D as v}from"./ColumnChartWithTrend.stories-y82RdlQT.js";import{D as x}from"./ComposedChart.stories-D89NHEeV.js";import{D as j}from"./DonutChart.stories-BFCW1ipm.js";import{D as w}from"./LineChart.stories-Ce3wOx4w.js";import{D as R}from"./PieChart.stories-D2dUj60V.js";import{D as I}from"./RadarChart.stories-D8M9bayw.js";import{D as S}from"./RadialChart.stories-DBbZmPtt.js";import{D as $}from"./ScatterChart.stories-B3PgeJ_I.js";import"./preload-helper-PPVm8Dsz.js";import"./information-24sGxR45.js";import"./sys-enter-2-CbyVzbEB.js";import"./alert-BzxY5xRy.js";import"./index-BUhE9jhW.js";import"./index-ywBu0MNL.js";import"./index-fAH3q00h.js";import"./Link-C09fzDpl.js";import"./index-OosLgrWy.js";import"./index-CMG3T6cu.js";import"./index-DTrWp4X_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cia2o1gw.js";import"./addCustomCSSWithScoping-CnnSu9RY.js";import"./index-ExTvjT1c.js";import"./Carousel-DnAuXv5g.js";import"./ScrollEnablement-DOM2ZjBt.js";import"./animate-JylhYHXj.js";import"./AnimationMode-6DrF5_sh.js";import"./slim-arrow-left-CZHRQf-k.js";import"./DemoProps-DsjG0Q5Q.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CTqIkXWM.js";import"./ChartContainer-CQISSMXt.js";import"./index-pMJvwxr3.js";import"./useCancelAnimationFallback-DFa95Unx.js";import"./YAxisTicks-CVALQ1pj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-X9l1IGVT.js";import"./ChartDataLabel-DfWWmdRD.js";import"./useOnClickInternal-DzQ2tC15.js";import"./react-content-loader.es-DIBgYBlp.js";import"./useIsRTL-ybGgh7zN.js";import"./useLongestYAxisLabel-CUpGyXCs.js";import"./ComposedChart-BoBu8LXI.js";import"./Line-DLPGyz4X.js";import"./Scatter-B2f6e9fx.js";import"./index-DygVTTZO.js";import"./index-Cf8GAt_1.js";import"./Placeholder-BUtzC6XD.js";import"./index-C8uHPuAY.js";const E=`# @ui5/webcomponents-react-charts

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
