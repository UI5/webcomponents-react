import{r as i,j as t,T as l}from"./iframe-bzWujj58.js";import{useMDXComponents as p}from"./index-BCWfYBG3.js";import{M as u,a as h,n as f}from"./blocks-X5VJ78n5.js";import"./Tag-CVKVqceK.js";import"./index-CSD4D-IO.js";import{F as d}from"./CommandsAndQueries-CSnnb9h_.js";import"./copy-GDuXt_K5.js";import{T as b}from"./TableOfContent-2Rlpvfej.js";import{C}from"./index-B2ucZeCt.js";import{D}from"./BarChart.stories-C1t6LJ_C.js";import{D as y}from"./BulletChart.stories-D-HLKx5b.js";import{D as g}from"./ColumnChart.stories-BSACb6lh.js";import{D as v}from"./ColumnChartWithTrend.stories-BVP1IgSE.js";import{D as x}from"./ComposedChart.stories-DRLUvUM_.js";import{D as j}from"./DonutChart.stories-B3YTAPg0.js";import{D as w}from"./LineChart.stories-owKDdubW.js";import{D as R}from"./PieChart.stories-B9HoiiFk.js";import{D as I}from"./RadarChart.stories-ChlBZsov.js";import{D as S}from"./RadialChart.stories-DqK49qwc.js";import{D as T}from"./ScatterChart.stories-CeKXjAN8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C9FM1h13.js";import"./sys-enter-2-BEIn8VDt.js";import"./alert-3fLrr5gT.js";import"./index-1tcJfS2t.js";import"./index-DVLKNd8I.js";import"./index-CBomhFI_.js";import"./Link-DZnymjml.js";import"./index-BfOrv2Q6.js";import"./index-CCshg6zD.js";import"./index-DD0jDMax.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BiRbi5N7.js";import"./addCustomCSSWithScoping-CWEhHtD-.js";import"./index-CUs-JjpA.js";import"./Carousel-DsWzRu9e.js";import"./ScrollEnablement-DfIaDKp3.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BS5mbvaZ.js";import"./slim-arrow-left-GTTk7QpL.js";import"./DemoProps-BGs8MagX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BVnbAb9j.js";import"./ChartContainer-BLMdroeA.js";import"./index-CF7Db4CN.js";import"./useCancelAnimationFallback-BLpGtKhD.js";import"./YAxisTicks-B4vYj66w.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cn1pkZAc.js";import"./ChartDataLabel-aZ6BtMX_.js";import"./useOnClickInternal-Bn5P5Jwj.js";import"./react-content-loader.es-CfTOwctZ.js";import"./useIsRTL-BsMnXzoo.js";import"./useLongestYAxisLabel-BPeMEBEj.js";import"./ComposedChart-4DTuwqRh.js";import"./Line-BqMjQiLI.js";import"./Scatter-BNv_AE7O.js";import"./index-vMwwTto8.js";import"./index-m6Vuu86B.js";import"./Placeholder-DdYxKnBt.js";import"./index-CkW1YKNi.js";const $=`# @ui5/webcomponents-react-charts

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
