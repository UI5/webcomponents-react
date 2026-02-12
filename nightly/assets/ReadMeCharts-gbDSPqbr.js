import{r as i,j as t,O as l}from"./iframe-9L5DfdAL.js";import{useMDXComponents as p}from"./index-BFOQlGJl.js";import{M as u,a as h,n as f}from"./blocks-BhviKO8q.js";import"./Tag-Bc-yWu1Y.js";import"./index-BfSNMryQ.js";import{F as d}from"./CommandsAndQueries-BK-K5RhD.js";import"./copy-B4o5kCyp.js";import{T as b}from"./TableOfContent-CROg96VJ.js";import{C}from"./index-BENNj1Y_.js";import{D}from"./BarChart.stories-kKCKRVVH.js";import{D as y}from"./BulletChart.stories-D7tYH6xI.js";import{D as g}from"./ColumnChart.stories-fTKCW6tx.js";import{D as v}from"./ColumnChartWithTrend.stories-Ch8gIQnb.js";import{D as x}from"./ComposedChart.stories-B43mxZO9.js";import{D as j}from"./DonutChart.stories-DL2wwH3A.js";import{D as w}from"./LineChart.stories-Bu1rpTdw.js";import{D as R}from"./PieChart.stories--bCN6Kl_.js";import{D as I}from"./RadarChart.stories-DkXYUubN.js";import{D as S}from"./RadialChart.stories-DRCO91cU.js";import{D as $}from"./ScatterChart.stories-BKgKYZlr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-E0dtjqMz.js";import"./sys-enter-2-CWAnp9j1.js";import"./alert-krPLRZgR.js";import"./index-C4W78R8l.js";import"./index-DCrnunZ9.js";import"./index-Dt7xhFDV.js";import"./Link-o-RCe_HP.js";import"./index-CCxjFqbl.js";import"./index-CFjv4LxR.js";import"./index-DNulmfCG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-d02CNbEj.js";import"./addCustomCSSWithScoping-BavaT7N2.js";import"./index-BKv2oNTW.js";import"./Carousel-ljlWFx8p.js";import"./ScrollEnablement-D6SL2uwM.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CYbQ2Jpf.js";import"./slim-arrow-left-RTyPjsyB.js";import"./DemoProps-D6MZIAvU.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dji3wkXn.js";import"./ChartContainer-BPanY5k4.js";import"./index-DFno4m6x.js";import"./useCancelAnimationFallback-DTLC8rC4.js";import"./YAxisTicks-C-Lwbp3e.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BdikT4A3.js";import"./ChartDataLabel-BYzuzg5_.js";import"./useOnClickInternal-C7T7hi4V.js";import"./react-content-loader.es-CQ2bB85Z.js";import"./useIsRTL-BZKijWM3.js";import"./useLongestYAxisLabel-ve90pgAY.js";import"./ComposedChart-5B1Cw4VL.js";import"./Line-D-caGrS8.js";import"./Scatter-Cbuoam-c.js";import"./index-D7as_49J.js";import"./index-RxI6jOv_.js";import"./Placeholder-CIwstKUs.js";import"./index-6KRhZVn8.js";const E=`# @ui5/webcomponents-react-charts

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
