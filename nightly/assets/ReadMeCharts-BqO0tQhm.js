import{r as i,j as t,T as l}from"./iframe-BLa6WP-Y.js";import{useMDXComponents as p}from"./index-DmyZ7oDn.js";import{M as u,a as h,k as f}from"./blocks-B3YWg1xO.js";import"./Tag-BvWs66nb.js";import"./index-BQvFUkOP.js";import{F as d}from"./CommandsAndQueries--XH3UvBD.js";import"./copy-DLqEfzA0.js";import{T as b}from"./TableOfContent-e5azbSS1.js";import{C}from"./index-B0PTb-vc.js";import{D}from"./BarChart.stories-BHqo59xV.js";import{D as y}from"./BulletChart.stories-CEiSIYx3.js";import{D as g}from"./ColumnChart.stories-BKlT3XFv.js";import{D as v}from"./ColumnChartWithTrend.stories-CQzrLlFS.js";import{D as x}from"./ComposedChart.stories-Dls1ymOt.js";import{D as j}from"./DonutChart.stories-CU1UvTEN.js";import{D as w}from"./LineChart.stories-D5aFJhkN.js";import{D as R}from"./PieChart.stories-Dfs84IV1.js";import{D as I}from"./RadarChart.stories-CYwu0DVO.js";import{D as S}from"./RadialChart.stories-D4OtlH5c.js";import{D as T}from"./ScatterChart.stories-BHttn48z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CXW8jYRn.js";import"./sys-enter-2-6G8ZBE6B.js";import"./alert-DchNyR7C.js";import"./index-BxQvAqCu.js";import"./index-Dw-Jiryq.js";import"./index-CMlbrigZ.js";import"./Link-DFlOAi3a.js";import"./addCustomCSSWithScoping-EByzACcK.js";import"./index-o1aXZ_iF.js";import"./index-9PttVNs-.js";import"./index-CD532uFx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtI0CwXV.js";import"./index-DuOzvotb.js";import"./Carousel-D2R6i-U8.js";import"./ScrollEnablement-8GN9BE9k.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DhRJdWnX.js";import"./slim-arrow-left-nWVXIxoB.js";import"./DemoProps-Dk8jvTs-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CZdekuJW.js";import"./ChartContainer-DPibpm4-.js";import"./index-CgaQ0ztb.js";import"./useCancelAnimationFallback-BMjg8Ush.js";import"./YAxisTicks-BKC1xGah.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-sLosx_-g.js";import"./ChartDataLabel-m2bTAgTT.js";import"./useOnClickInternal-BpYmOiH-.js";import"./react-content-loader.es-kgaUKVE8.js";import"./useIsRTL-TNKtGqcG.js";import"./useLongestYAxisLabel-DSUxPOGz.js";import"./ComposedChart-CIjgKMu0.js";import"./Line-CK1aL2Y5.js";import"./Scatter-CXEwDnX-.js";import"./index-CNf3k0Ye.js";import"./index-CfVlQnIK.js";import"./Placeholder-DuLWcH-b.js";import"./index-gRyejP86.js";const $=`# @ui5/webcomponents-react-charts

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
