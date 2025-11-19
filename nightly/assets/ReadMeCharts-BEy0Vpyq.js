import{r as i,j as t,T as l}from"./iframe-cBdQNv77.js";import{useMDXComponents as p}from"./index-cOSrw8iI.js";import{M as u,a as h,m as f}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import"./index-3Ka_JXyV.js";import{F as d}from"./CommandsAndQueries-DjEzsLYR.js";import"./copy-IvR5q6ZX.js";import{T as b}from"./TableOfContent-fkRerJpI.js";import{C}from"./index-CEyIYlds.js";import{D}from"./BarChart.stories-C4mfyy3z.js";import{D as y}from"./BulletChart.stories-Duj9sNCX.js";import{D as g}from"./ColumnChart.stories-D2ZCNwyv.js";import{D as v}from"./ColumnChartWithTrend.stories-BJpv1NNB.js";import{D as x}from"./ComposedChart.stories-B_kjvf6E.js";import{D as j}from"./DonutChart.stories-B2QwEF5s.js";import{D as w}from"./LineChart.stories-Dq7DD7xP.js";import{D as R}from"./PieChart.stories-DjLhqLQz.js";import{D as I}from"./RadarChart.stories-CLYmb8W0.js";import{D as S}from"./RadialChart.stories-V_ArLb3J.js";import{D as T}from"./ScatterChart.stories-BsSAJgfR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";import"./index-A4dU9HLI.js";import"./Carousel-D_9WyF5g.js";import"./ScrollEnablement-DK4N6mSn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BGX7Na0h.js";import"./slim-arrow-left-CaB1-Wxy.js";import"./DemoProps-BM0AcyVv.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BhTUKY1R.js";import"./ChartContainer-BuOjMUCX.js";import"./index-BY097R_L.js";import"./useCancelAnimationFallback-smKkB-Aa.js";import"./YAxisTicks-CKkG-hwN.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C5xVMvcH.js";import"./ChartDataLabel-CfXooh90.js";import"./useOnClickInternal-DHEeJbjs.js";import"./react-content-loader.es-CYzAE4oL.js";import"./useIsRTL-B47DQxdv.js";import"./useLongestYAxisLabel-Q0Q9HD6_.js";import"./ComposedChart-BCUaPZDd.js";import"./Line-DCjMSMJF.js";import"./Scatter-CdFIBjYK.js";import"./index-DOj6vvBj.js";import"./index-BQa0yzrf.js";import"./Placeholder-CgH-Odw_.js";import"./index-CZTbLTo6.js";const $=`# @ui5/webcomponents-react-charts

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
