import{r as i,j as t,O as l}from"./iframe-kJfrPaD1.js";import{useMDXComponents as p}from"./index-BKWPRaiV.js";import{M as u,a as h,n as f}from"./blocks-5RdvzEbY.js";import"./Tag-Cq_rR_bf.js";import"./index-ZnQNPJfl.js";import{F as d}from"./CommandsAndQueries-D7WkRU72.js";import"./copy-yyYbNeMi.js";import{T as b}from"./TableOfContent-Cw-X9n05.js";import{C}from"./index-Caeyyhmi.js";import{D}from"./BarChart.stories-BHoP6Y3t.js";import{D as y}from"./BulletChart.stories-77lXRRnl.js";import{D as g}from"./ColumnChart.stories-DcnF5CwP.js";import{D as v}from"./ColumnChartWithTrend.stories-TKwLVSJw.js";import{D as x}from"./ComposedChart.stories-uyciJtz_.js";import{D as j}from"./DonutChart.stories-CR64PWjL.js";import{D as w}from"./LineChart.stories-CJUmhgOA.js";import{D as R}from"./PieChart.stories-DdgDAEma.js";import{D as I}from"./RadarChart.stories-00d0JJnw.js";import{D as S}from"./RadialChart.stories-C-rzLi_1.js";import{D as $}from"./ScatterChart.stories-CHDerYjJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CMkzOfg7.js";import"./sys-enter-2-0CjTM9eF.js";import"./alert-T81DFfqo.js";import"./index-CRo0yro_.js";import"./index-C-a_iLSi.js";import"./index-CDtmBsTj.js";import"./Link-DLuGgAei.js";import"./index-Ccpr0pFg.js";import"./index-DxXcjV97.js";import"./index-CdjQ1wSl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVMILbqZ.js";import"./addCustomCSSWithScoping-7vdeOKdl.js";import"./index-CmBVI-17.js";import"./Carousel-kLNBA0pw.js";import"./ScrollEnablement-DxFtCIlG.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BXcQGz3K.js";import"./slim-arrow-left-BkYGVyhg.js";import"./DemoProps-mFvs__Rx.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dx1ymzu8.js";import"./ChartContainer-CShIjwbH.js";import"./index-CewkkqmN.js";import"./useCancelAnimationFallback-DKzGrNqN.js";import"./YAxisTicks-B2SSdxGg.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cz80b9dK.js";import"./ChartDataLabel-DWzFbUdX.js";import"./useOnClickInternal-CB0cJzIH.js";import"./react-content-loader.es-kdicliSB.js";import"./useIsRTL-ClW0lnYp.js";import"./useLongestYAxisLabel-CQgC9H6c.js";import"./ComposedChart-CHRz7wwR.js";import"./Line-4aqS8MV_.js";import"./Scatter-BH3kZ-3m.js";import"./index-DA2KfYEH.js";import"./index-4Q1Kb_3m.js";import"./Placeholder-DFkizLCC.js";import"./index-CSbeRP6-.js";const E=`# @ui5/webcomponents-react-charts

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
