import{r as i,j as t,T as l}from"./iframe-Bg2SD6vy.js";import{useMDXComponents as p}from"./index-CdwjPgWO.js";import{M as u,a as h,m as f}from"./blocks-CZL3kIpQ.js";import"./Tag-BBAYHNzq.js";import"./index-HB0ucYrA.js";import{F as d}from"./CommandsAndQueries-D_Y2u3wJ.js";import"./copy-UVBI9dME.js";import{T as b}from"./TableOfContent-hAKLm6aF.js";import{C}from"./index-0LolXzO-.js";import{D}from"./BarChart.stories-CjNC2BOY.js";import{D as y}from"./BulletChart.stories-CUsShiaI.js";import{D as g}from"./ColumnChart.stories-D5lAe5dk.js";import{D as v}from"./ColumnChartWithTrend.stories-Dl4V-7fQ.js";import{D as x}from"./ComposedChart.stories-ygjulFTq.js";import{D as j}from"./DonutChart.stories-CptcogKc.js";import{D as w}from"./LineChart.stories-Dhf0NjPv.js";import{D as R}from"./PieChart.stories-DNzOrVAh.js";import{D as I}from"./RadarChart.stories-D92I8oYp.js";import{D as S}from"./RadialChart.stories-DsRTJr8y.js";import{D as T}from"./ScatterChart.stories-Co6aM7gh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRabbQHz.js";import"./sys-enter-2-DqOp1oIr.js";import"./alert-BvLfxsiS.js";import"./index-fylc8d1K.js";import"./index-BsOYAUed.js";import"./index-BpAxqFMX.js";import"./Link-B-zNx8Rm.js";import"./index-8T9qtuSw.js";import"./index-DO_6IPbq.js";import"./index-TtYx2H_8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9V3uoCq.js";import"./addCustomCSSWithScoping-CTL1rjLn.js";import"./index-DdlSV3iY.js";import"./Carousel-Bng0SR_X.js";import"./ScrollEnablement-BBWkbu9Y.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DvcjOb5m.js";import"./slim-arrow-left-BesNZjK0.js";import"./DemoProps-Bl8qNmzW.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-sw0C9GQG.js";import"./ChartContainer-BqOGIi5V.js";import"./index-CFjFYMef.js";import"./useCancelAnimationFallback-CoR8xsSP.js";import"./YAxisTicks-DtnRHb0G.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-unqn0hU0.js";import"./ChartDataLabel-CocTGYA3.js";import"./useOnClickInternal-BmEuIV9o.js";import"./react-content-loader.es-CPQ8NRa2.js";import"./useIsRTL-BPCZHmr9.js";import"./useLongestYAxisLabel-ClEcf91n.js";import"./ComposedChart-D_j3Q6Ec.js";import"./Line-C1PeTW3q.js";import"./Scatter-BiOg94hH.js";import"./index-BfFcVH_j.js";import"./index-DmK6_McW.js";import"./Placeholder-CY15NZRq.js";import"./index-CImSuRGZ.js";const $=`# @ui5/webcomponents-react-charts

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
