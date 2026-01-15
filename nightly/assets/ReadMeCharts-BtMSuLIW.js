import{r as i,j as t,T as l}from"./iframe-DzsY3-MS.js";import{useMDXComponents as p}from"./index-DFSYB4hO.js";import{M as u,a as h,n as f}from"./blocks-DS0Y1BZg.js";import"./Tag-L2pUIWpP.js";import"./index-DdAKftEE.js";import{F as d}from"./CommandsAndQueries-DBuYeihv.js";import"./copy-BminF4Iy.js";import{T as b}from"./TableOfContent-D6dPMkmb.js";import{C}from"./index-CdnUWe87.js";import{D}from"./BarChart.stories-ByXWDQb0.js";import{D as y}from"./BulletChart.stories-BgGlI7gk.js";import{D as g}from"./ColumnChart.stories-6GFRHfsI.js";import{D as v}from"./ColumnChartWithTrend.stories-BFK-04jN.js";import{D as x}from"./ComposedChart.stories-dggeSvhz.js";import{D as j}from"./DonutChart.stories-C8MVFZrx.js";import{D as w}from"./LineChart.stories-COzcvU-Z.js";import{D as R}from"./PieChart.stories-XTjiMJi8.js";import{D as I}from"./RadarChart.stories-DbixzX6o.js";import{D as S}from"./RadialChart.stories-CVQFoKQB.js";import{D as T}from"./ScatterChart.stories-C4KU8VLu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-a2aTFncM.js";import"./sys-enter-2-7qDJkwn8.js";import"./alert-BRYQ7SuA.js";import"./index-DKfHbnjd.js";import"./index-DkJZCu2R.js";import"./index-BfsMxbQ9.js";import"./Link-3hYic3jw.js";import"./index-BndW4ILr.js";import"./index-DQ0Bmg4X.js";import"./index-DTlY8Kzq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7IVEmPi.js";import"./addCustomCSSWithScoping-0WSQwudS.js";import"./index-C5c1rTpg.js";import"./Carousel-Di8ITK5w.js";import"./ScrollEnablement-CkDB7Jzl.js";import"./animate-JylhYHXj.js";import"./AnimationMode-4wi_tMZI.js";import"./slim-arrow-left-BXpLnHYf.js";import"./DemoProps-Cre0DkFF.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-g9hUAMW7.js";import"./ChartContainer-C2LN1i2i.js";import"./index-lb1RbLlp.js";import"./useCancelAnimationFallback-CzatGt-l.js";import"./YAxisTicks-BWMJxHoj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CtGKuYM-.js";import"./ChartDataLabel-BOtFfjyw.js";import"./useOnClickInternal-DF41XW-D.js";import"./react-content-loader.es-CEAOMKHz.js";import"./useIsRTL-DGi63fh0.js";import"./useLongestYAxisLabel-DEVvBw0Y.js";import"./ComposedChart-lMjZF-mv.js";import"./Line-4Qc79ptK.js";import"./Scatter-8N-7SR0p.js";import"./index-ksFRz9qu.js";import"./index-DiMaK5rr.js";import"./Placeholder-CwrYfPaS.js";import"./index-BBkyvFAS.js";const $=`# @ui5/webcomponents-react-charts

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
