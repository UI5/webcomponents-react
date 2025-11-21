import{r as i,j as t,T as l}from"./iframe-DM8isA9c.js";import{useMDXComponents as p}from"./index-Do0cpSGj.js";import{M as u,a as h,m as f}from"./blocks-Crph7jgT.js";import"./Tag-BtR3uqsq.js";import"./index-BgbeFss3.js";import{F as d}from"./CommandsAndQueries-DM-8oq2s.js";import"./copy-DYIgCYkz.js";import{T as b}from"./TableOfContent-Dm7xBpZm.js";import{C}from"./index-pcLUxxcT.js";import{D}from"./BarChart.stories-DuFNuUD0.js";import{D as y}from"./BulletChart.stories-BRBkabWV.js";import{D as g}from"./ColumnChart.stories-0Q1F8yi8.js";import{D as v}from"./ColumnChartWithTrend.stories-Ds5-Af0X.js";import{D as x}from"./ComposedChart.stories-BlCw-UCn.js";import{D as j}from"./DonutChart.stories-BDZ6rlsP.js";import{D as w}from"./LineChart.stories-uHo8b4-c.js";import{D as R}from"./PieChart.stories-B1REchnU.js";import{D as I}from"./RadarChart.stories-DvfKzDfN.js";import{D as S}from"./RadialChart.stories-BmJ4i0H4.js";import{D as T}from"./ScatterChart.stories-u2zrnGjM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CLqibrfC.js";import"./sys-enter-2-COJQOFoX.js";import"./alert-WVpRlSFd.js";import"./index-C6UNmCtN.js";import"./index-BS8NgEfP.js";import"./index-FrVWogAp.js";import"./Link-j0sjRyW5.js";import"./index-B6NdOyDM.js";import"./index-Cf1wRWYr.js";import"./index-ozpDTdfP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9ZULNfD.js";import"./addCustomCSSWithScoping-AinZnCKl.js";import"./index-CNSbSmbI.js";import"./Carousel-DyJ2ezfu.js";import"./ScrollEnablement-UWaMLi5d.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B2IQWJ60.js";import"./slim-arrow-left-BQmhVMCW.js";import"./DemoProps-VMyCy4Hm.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BGkcButx.js";import"./ChartContainer-ByVcGAmH.js";import"./index-DoaqSk9p.js";import"./useCancelAnimationFallback-DPt7Uyyj.js";import"./YAxisTicks-Dsau7kEb.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BwJZf9iv.js";import"./ChartDataLabel-BFH2vz08.js";import"./useOnClickInternal-bksPd6ZK.js";import"./react-content-loader.es-hWPQXnNU.js";import"./useIsRTL-CBtcGSGo.js";import"./useLongestYAxisLabel-BI72YMhr.js";import"./ComposedChart-D1eqMAeR.js";import"./Line-BLscBe5F.js";import"./Scatter-BIzNFSTm.js";import"./index-BEDF_FS-.js";import"./index-CHp-AmWm.js";import"./Placeholder-0w8tNOig.js";import"./index-BF7_i7ie.js";const $=`# @ui5/webcomponents-react-charts

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
